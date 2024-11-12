import path from 'path';
import fs from 'fs';
import Serieslist from './seriesList'; // Import the Client Component

export default function Page() {
    // Server-side code to read filenames from the movies directory
    const seriesDirectory = path.join(process.cwd(), 'public/series');
    const filenames = fs.readdirSync(seriesDirectory);

    return (
        <div>
            <h1>Video Collection</h1>
            <Serieslist filenames={filenames} /> {/* Pass filenames to the Client Component */}
        </div>
    );
}
