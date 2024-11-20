import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dir  = searchParams.get('dir');

    if (!dir) {
        return NextResponse.json(
          { error: 'Directory path is required' },
          { status: 400 }
        );
      }

    const files = fs.readdirSync(dir );

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json({ error: 'Unable to read directory' }, { status: 500 });
  }
}
