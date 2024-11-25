"use client";

import { useState, useEffect, useMemo } from "react";
import InfoBox from "./info";
import Image from "next/image";

type GameData = {
  title: string;
  shortstory: string;
  story: string;
  user: string;
  content: string;
  points: string;
  location: string;
  url: string;
  gameref: string;
};

export default function GamesList({ filenames }: { filenames: string[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameData, setGameData] = useState<Record<string, GameData>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);


  const handleInfoOpen = (name: string, gameref: string) => {
    const game = { ...gameData[name], gameref };
    setSelectedGame(game);
    setShowInfo(true);
  };

  const handleInfoClose = () => {
    setShowInfo(false);
    setSelectedGame(null);
  };

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const validFiles = filenames.filter((file) => /^game\d+\.json$/i.test(file));
        const fetchedData: Record<string, GameData> = {};

        await Promise.all(
          validFiles.map(async (file) => {
            if (!gameData[file]) {
              try {
                const response = await fetch(`/christmas/en/games/${file}`);
                if (!response.ok) throw new Error(`Failed to fetch ${file}`);
                const data = await response.json();
                fetchedData[file] = data;
              } catch (err) {
                console.error(`Error fetching ${file}:`, err);
              }
            }
          })
        );

        setGameData((prev) => ({ ...prev, ...fetchedData }));
      } catch (err) {
        setError("Error fetching games. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [filenames]);

  const filteredGames = useMemo(() => {
    return Object.keys(gameData).filter((key) =>
      key.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [gameData, searchQuery]);

  return (
    <main className="flex min-h-screen flex-col p-1 sm:p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      <div className="flex-1 w-full transition-all duration-300">
        <div className="pt-8">
          <nav className="mb-6 flex gap-4 mt-8">
            <a
              href="./Olympia/Map"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Map
            </a>
            <a
              href="./Olympia/Scoreboard"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Scoreboard
            </a>
            <a
              href="./Olympia/Scoreboard/team"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Team Editor
            </a>
          </nav>
        </div>
        <input
          type="text"
          placeholder="Suche nach Spielnummer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <h1 className="text-xl mb-4 mt-4 text-gray-700 dark:text-gray-300">FSR-INS: Ad-Games-calender</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {loading && <p className="text-blue-500 text-center col-span-full">Loading...</p>}
          {error && <p className="text-red-500 text-center col-span-full">{error}</p>}

          {filteredGames.map((name, index) => {
            const game = gameData[name];
            const gameref = name.charAt(4) !== "0" ? name.substring(4, 6) : name.substring(5, 6);

            return (
              game && (
                <div
                  key={name}
                  className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleInfoOpen(name, gameref)}
                >
                  <Image
                    src={`/images/christmas_calender${index % 5}.jpg`}
                    alt={"Türchen Cover"}
                    className="w-full h-64 object-cover bg-gray-300"
                    width={50}
                    height={50}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
                    {gameref}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h2 className="text-xl font-semibold">{game.title}</h2>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{game.shortstory}</p>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      {showInfo && selectedGame && <InfoBox message={selectedGame} onClose={handleInfoClose} />}
    </main>
  );
}
