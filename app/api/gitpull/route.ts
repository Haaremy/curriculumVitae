// app/api/gitpull/route.ts

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const verifyGitHubSignature = async (req: NextRequest, secret: string): Promise<boolean> => {
  const signature = req.headers.get('x-hub-signature') || req.headers.get('x-hub-signature-256');
  if (!signature) return false;

  // Read the body stream as a buffer
  const body = await req.arrayBuffer();
  const hmac = crypto.createHmac('sha1', secret);
  hmac.update(Buffer.from(body)); // Convert arrayBuffer to Buffer
  const calculatedSignature = 'sha1=' + hmac.digest('hex');
  
  return signature === calculatedSignature;
};

export async function POST(req: NextRequest) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  //if (!secret) {
 //   return NextResponse.json({ message: 'Webhook secret is missing' }, { status: 400 });
  //}

  // Verify signature for security
  const isValidSignature = await verifyGitHubSignature(req, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  try {
    const payload = await req.json();
    console.log('Received GitHub webhook:', payload);

    // Here you can handle the webhook data (e.g., trigger a git pull)
    return NextResponse.json({ message: 'Webhook received and processed' }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
