import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' }) // Only allow POST requests
  }

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // Attempt sign-in
    await signIn('credentials', { email, password });

    res.status(200).json({ success: true });
  } catch (error: any) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' });
    } else {
      console.error('Unexpected error:', error); // Log unexpected errors
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
}
