import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const directoryPath = '/'; // Change to your desired directory
    const files = fs.readdirSync(directoryPath);
    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({ error: 'Unable to read directory' }, { status: 500 });
  }
}
