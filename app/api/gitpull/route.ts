import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { exec } from 'child_process';

const verifyGitHubSignature = async (req: NextRequest, secret: string, body: ArrayBuffer): Promise<boolean> => {
  const signature = req.headers.get('x-hub-signature') || req.headers.get('x-hub-signature-256');
  if (!signature) return false;

  const hmac = crypto.createHmac('sha1', secret);
  hmac.update(Buffer.from(body)); // Convert arrayBuffer to Buffer
  const calculatedSignature = 'sha1=' + hmac.digest('hex');
  
  return signature === calculatedSignature;
};



export async function POST(req: NextRequest) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  try {
    const body = await req.arrayBuffer();

    // Validate the webhook signature
    if (!secret) {
      return NextResponse.json({ message: 'Webhook secret is missing' }, { status: 400 });
    }

    const isValidSignature = await verifyGitHubSignature(req, secret, body);
    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
    }
    

    const payload = JSON.parse(Buffer.from(body).toString());
    console.log('Received GitHub webhook:', payload);

    // Execute deployment and wait for it to finish
    const stdout = await new Promise<string>((resolve, reject) => {
        exec(
          'cd /var/www/haaremy.de && git stash && git pull origin master && npm run build && pm2 restart haaremy-app',
          (err, stdout, stderr) => {
            if (err) {
              reject(`Deployment failed: ${stderr}`);
            } else {
              resolve(stdout);
            }
          }
        );
      });

    // Return a success response only after deployment finishes
    return NextResponse.json({ message: 'Deployment successful', output: stdout }, { status: 200 });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
