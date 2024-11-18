"use client";

import { useState, useEffect } from "react";
import InfoBox from "./info";

export default function GamesList({ filenames }: { filenames: string[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameData, setGameData] = useState<
    { [key: string]: { title: string; shortstory: string; story: string; user: string; content: string; points: string; location: string; url: string } }
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGame, setSelectedGame] = useState<
    { title: string; user: string; story: string; content: string; points: string; location: string; url: string } | null
  >(null);

  const handleInfoOpen = (name: string) => {
    setSelectedGame(gameData[name]);
    setShowInfo(true);
  };

  const handleInfoClose = () => {
    setShowInfo(false);
    setSelectedGame(null);
  };

  useEffect(() => {
    const fetchAllGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const validFiles = filenames.filter((file) => /^game\d+\.json$/i.test(file)); // Match "game<number>.json"

        const fetchPromises = validFiles.map(async (file) => {
          try {
            const response = await fetch(`/christmas/games/${file}`);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const data = await response.json();
            return { [file]: data };
          } catch {
            return null; // Ignore errors for individual files
          }
        });

        const results = await Promise.all(fetchPromises);
        const allGameData = results.reduce((acc, result) => {
          if (result) return { ...acc, ...result };
          return acc;
        }, {});

        setGameData(allGameData);
      } catch (err) {
        setError("Error fetching game data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllGames();
  }, [filenames]);

  const filteredGames = Object.entries(gameData).filter(([key, game]) =>
    searchQuery === "" || key.toLowerCase().includes(searchQuery.toLowerCase()) || game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      <div className="mb-6">
        <a href="./Scoreboard" className="bg-pink-500 text-white px-4 py-2 m-2 rounded hover:bg-pink-600 transition">
          Scoreboard
        </a>
        <a href="./Scoreboard/team" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          Team Editor
        </a>
      </div>

      <div className="flex-1 w-full transition-all duration-300">
        <div className="p-4">
          <input
            type="text"
            placeholder="Suche nach Spielnummer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading && <p className="text-blue-500 text-center col-span-full">Loading...</p>}
            {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
            {filteredGames.map(([key, game], index) => (
              <div
                key={key}
                className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleInfoOpen(key)}
              >
                <img
                  src={`/images/christmas_calender${Math.floor(Math.random() * 4)}.jpg`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover bg-gray-300"
                />
                {/* Centered Index Number */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                  {key.substring(4,6)}
                </div>
                {/* Game Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h2 className="text-xl font-semibold">{game.title}</h2>
                </div>
                {/* Hover Overlay with Short Story */}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm">{game.shortstory}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showInfo && selectedGame && <InfoBox message={selectedGame} onClose={handleInfoClose} />}
    </main>
  );
}
