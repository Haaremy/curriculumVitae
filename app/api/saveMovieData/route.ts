// src/app/api/saveMovieData/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON request body
    const { name, movieData } = await request.json();

    // Define the path to save the JSON file
    const filePathJsons = path.join(process.cwd(), './public/jsons/movie', `${name}.json`);
    
    // Create 'jsons' directory if it does not exist
    if (!fs.existsSync(path.dirname(filePathJsons))) {
      fs.mkdirSync(path.dirname(filePathJsons), { recursive: true });
    }



    // Save the movie data to a local JSON file
    fs.writeFileSync(filePathJsons, JSON.stringify(movieData, null, 2));


    // Return a successful response
    return NextResponse.json({ message: 'Series data saved successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save series data' }, { status: 500 });
  }
}
