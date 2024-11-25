'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// MapSection Component
function MapSection({
  title,
  imageSrc,
  games,
  searchQuery,
}: {
  title: string;
  imageSrc: string;
  games: { id: number; top: number; left: number; color: string }[];
  searchQuery: string;
}) {
  // Filter games based on searchQuery
  const filteredGames = games.filter((game) =>
    game.id.toString().includes(searchQuery)
  );

  return (
    filteredGames.length > 0 && (
      <section className="bg-white dark:bg-gray-800 p-1 sm:p-6 rounded-lg shadow-lg w-full text-center mb-10">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">{title}</h1>

        <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform">
          {/* Base Image */}
          <Image
            src={imageSrc}
            alt={`Map of ${title}`}
            className="w-full h-auto object-cover bg-gray-300"
            width={1600}
            height={1131}
          />

          {/* Map Numbers */}
          {filteredGames.map((num) => (
            <span
              key={num.id}
              className={`absolute text-white font-bold text-sm ${num.color} rounded-full w-6 h-6 flex items-center justify-center`}
              style={{
                top: `${num.top}%`,
                left: `${num.left}%`,
              }}
            >
              {num.id}
            </span>
          ))}
        </div>
      </section>
    )
  );
}

// Main Component
export default function Home({ gameQuery }: { gameQuery?: string }) {
  const [searchQuery, setSearchQuery] = useState("");

  const gamesEG = [
    { id: 1, top: 20, left: 30, color: 'bg-pink-600' },
    { id: 2, top: 40, left: 50, color: 'bg-pink-600' },
    { id: 3, top: 60, left: 20, color: 'bg-pink-600' },
    { id: 4, top: 10, left: 70, color: 'bg-pink-600' },
  ];

  const gamesOG = [
    { id: 5, top: 20, left: 30, color: 'bg-pink-600' },
    { id: 6, top: 40, left: 50, color: 'bg-blue-600' },
    { id: 7, top: 60, left: 20, color: 'bg-pink-600' },
    { id: 8, top: 10, left: 70, color: 'bg-pink-600' },
  ];

  // Set initial search query if `gameQuery` is provided
  useEffect(() => {
    if (gameQuery) {
      setSearchQuery(gameQuery);
      //console.log(gameQuery)
    }
  }, [gameQuery]);

  return (
    <main className="sm:mt-12 flex min-h-screen flex-col p-1 sm:p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="mb-6 flex gap-4">
        <a
          href="/Weihnachtsolympiade"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Games
        </a>
        <a
          href="/Weihnachtsolympiade/Scoreboard"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Scoreboard
        </a>
        <a
          href="/Weihnachtsolympiade/Scoreboard/team"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Team Editor
        </a>
      </nav>

      {/* Search Input */}
      <div className="flex flex-col items-center justify-between">
        <input
          type="number"
          placeholder="Suche nach Spielnummer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-black mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />

        {/* Map Sections */}
        <MapSection
          title="Erdgeschoss"
          imageSrc="/images/map_eg.jpg"
          games={gamesEG}
          searchQuery={searchQuery}
        />

        <MapSection
          title="Obergeschoss"
          imageSrc="/images/map_og.jpg"
          games={gamesOG}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
}
