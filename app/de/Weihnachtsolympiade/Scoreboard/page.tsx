import path from 'path';
import fs from 'fs';
import Teams from './teams'; // Import the Client Component

export default function Page() {
    // Server-side code to read filenames from the movies directory
    const gamesDirectory = path.join(process.cwd(), 'public/christmas/teams');
    const filenames = fs.readdirSync(gamesDirectory);

    return (
        <div>
            <Teams filenames={filenames} /> {/* Pass filenames to the Client Component */}
        </div>
    );
}
