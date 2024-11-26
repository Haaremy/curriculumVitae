import https from 'https';
import fs from 'fs';
import path from 'path';
import Movielist from './movieList'; // Import the Client Component

// Define a type for the data returned by the API
interface MovieItem {
    name: string;
}

// Load the self-signed certificate from the file system
const agent = new https.Agent({
    rejectUnauthorized: false, // Bypass certificate validation, safer in development
    ca: fs.readFileSync(path.resolve('./app/api/server.crt')), // Path to your self-signed certificate
});

// Page Component
export default async function Page() {
    let filenames: string[] = [];

    try {
        const dir = '/mnt/10TB/Media/Movies'; // Replace with your desired directory
        
        // Construct the URL properly with a '?' for query parameters
        const response = await fetch(`https://haaremy.de/api/read-files?dir=${encodeURIComponent(dir)}`);
    
        if (!response.ok) {
            throw new Error(`Error fetching files: ${response.statusText}`);
        }
    
        const data = await response.json();

        filenames = data.files.filter((file: string) => !file.endsWith('.php') && !file.startsWith('.'));
    
        console.log(filenames); // Use the filtered filenames as needed
    } catch (error) {
        console.error('Fetch error:', error);
    }
    


    // Return the page component with the MovieList component
    return (
        <div>
            <Movielist filenames={filenames} /> {/* Pass filenames to the Client Component */}
        </div>
    );
}
