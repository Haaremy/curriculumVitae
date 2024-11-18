// pages/api/github-webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const payload = req.body; // The webhook payload (GitHub sends it as JSON)
    
    // You can check the headers or payload for additional information,
    // for example, to verify the signature for security:
    const githubSignature = req.headers['x-hub-signature'] || req.headers['x-hub-signature-256'];
    const secret = process.env.GITHUB_WEBHOOK_SECRET;

    if (!githubSignature || !secret) {
      return res.status(400).json({ message: 'Signature or secret is missing' });
    }

    // Optional: Verify GitHub webhook signature here
    // This is where you would normally verify the webhook signature using a secret key.
    // You can use libraries like 'crypto' to compare the payload signature.

    try {
      // Process the payload as needed. Example:
      console.log('Received GitHub webhook:', payload);
      
      // Do something based on the webhook data, like deploying a new version
      // or triggering other actions.

      return res.status(200).json({ message: 'Webhook received and processed' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
