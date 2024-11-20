import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Extract the 'dir' query parameter from the URL
    //const { searchParams } = new URL(request.url);
    const directoryPath = request.url.split("dir")[1]; // Get the 'dir' parameter
    console.log(directoryPath);
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
