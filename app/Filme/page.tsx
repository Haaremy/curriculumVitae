import https from 'https';
import fs from 'fs';
import path from 'path';
import axios from 'axios'; // Use axios instead of fetch
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
        // Fetch filenames from the external API using axios
        //const res = await axios.get('https://stream.haaremy.de:2053/Media/Movies/', {
        const res = await axios.get('https://haaremy.de/api/read-files/dir=/mnt/10TB/Media/Movies/', {
            httpsAgent: agent, // Pass the custom agent to bypass the certificate issue
        });

        const data: MovieItem[] = res.data; // Specify the type of data returned by the API
        filenames = data.map((item: MovieItem) => item.name);
    } catch (error) {
        console.error('Fetch error:', error);
    }

    // Return the page component with the MovieList component
    return (
        <div>
            <h1>Video Collection</h1>
            <Movielist filenames={filenames} /> {/* Pass filenames to the Client Component */}
        </div>
    );
}
