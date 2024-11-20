import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Parse the URL and extract the 'dir' query parameter
    const { searchParams } = new URL(request.url);
    const directoryPath = searchParams.get('dir'); // Get the 'dir' parameter

    // Validate the directoryPath
    if (!directoryPath) {
      return NextResponse.json(
        { error: 'Directory path is required' },
        { status: 400 }
      );
    }

    // Read the directory contents
    const files = fs.readdirSync(directoryPath);

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json(
      { error: 'Unable to read directory', details: error.message },
      { status: 500 }
    );
  }
}
