import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    // Extract series name from query parameters
    const { searchParams } = new URL(request.url);
    const seriesName = searchParams.get('series');

    if (!seriesName) {
      return NextResponse.json({ error: 'Series name is required' }, { status: 400 });
    }

    // Replace the last space in the series name with a plus sign
    //const lastSpaceIndex = seriesName.lastIndexOf(" ");
    //const modifiedSeriesName = lastSpaceIndex !== -1
     // ? seriesName.substring(0, lastSpaceIndex) + "+" + seriesName.substring(lastSpaceIndex + 1)
     // : seriesName;


    // Construct the path to the series directory
    const seriesDirectory = path.join(process.cwd(), `public/series/${seriesName}`);
    //console.log(seriesDirectory)

    // Check if the directory exists
    if (!fs.existsSync(seriesDirectory)) {
      return NextResponse.json({ error: 'Series not found' }, { status: 404 });
    }

     // Read the directory contents to get the list of seasons
     const seasons = fs.readdirSync(seriesDirectory); 
     const fullSeries: { season: string; episodes: string[] }[] = [];
 
     // Loop through each season directory and get the list of episodes
     seasons.forEach((season) => {
       const seasonDirectory = path.join(seriesDirectory, season);
       const episodes = fs.readdirSync(seasonDirectory);
 
       fullSeries.push({ season, episodes });
     });

 
     // Return the list of seasons with their episodes as a JSON response
     return NextResponse.json({ fullSeries });
   } catch (error) {
     // Handle any errors that occur
     console.error('Error fetching seasons and episodes:', error);
     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
   }
}
