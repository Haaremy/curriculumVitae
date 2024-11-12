import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { name, teamData } = await request.json();

    // Check that process is running in a non-serverless environment
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      throw new Error('File system access is not available in production on Vercel.');
    }

    // Path to save the JSON file
    const filePathJsons = path.join(process.cwd(), './public/christmas/teams', `${name}.json`);

    // Create 'teams' directory if it doesn't exist
    if (!fs.existsSync(path.dirname(filePathJsons))) {
      fs.mkdirSync(path.dirname(filePathJsons), { recursive: true });
    }

    // Save JSON data to file
    fs.writeFileSync(filePathJsons, JSON.stringify(teamData, null, 2));

    return NextResponse.json({ message: 'Team data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save team data' }, { status: 500 });
  }
}
