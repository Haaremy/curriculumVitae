import path from 'path';
import fs from 'fs';
import Games from './games'; // Import the Client Component

export default function Page() {
    // Server-side code to read filenames from the movies directory
    const gamesDirectory = path.join(process.cwd(), 'public/christmas/de/games');
    const filenames = fs.readdirSync(gamesDirectory);

    return (
        <div>
            <Games filenames={filenames} /> {/* Pass filenames to the Client Component */}
        </div>
    );
}
