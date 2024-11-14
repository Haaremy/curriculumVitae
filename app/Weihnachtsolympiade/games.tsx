"use client";

import { useState, useEffect } from 'react';
import InfoBox from './info';

export default function GamesList({ filenames }: { filenames: string[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFilenames, setFilteredFilenames] = useState<string[]>([]);
  const [gameData, setGameData] = useState<{ [key: string]: { title: string; shortstory: string; story: string; user: string; content: string; points: string; location: string; url: string;} }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedGame, setSelectedGame] = useState<{ title: string; user: string; story: string; content: string; points: string; location: string; url: string;} | null>(null);

  const handleInfoOpen = (name: string) => {
    setSelectedGame(gameData[name]);
    setShowInfo(true);
  };

  const handleInfoClose = () => {
    setShowInfo(false);
    setSelectedGame(null);
  };

  useEffect(() => {
    const results = filenames.filter(name =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFilenames(results);
  }, [searchQuery, filenames]);

  useEffect(() => {
    if (filteredFilenames.length === 0) return;

    const fetchAndSaveSeriesData = async (name: string) => {
      setLoading(true);
      setError(null);

      try {
        const filePath = `/christmas/games/${name}`;

        const fileExistsResponse = await fetch(filePath, { method: 'HEAD' });
        if (fileExistsResponse.ok) {
          const response = await fetch(filePath);
          const existingGameData = await response.json();
          setGameData(prevData => ({
            ...prevData,
            [name]: existingGameData,
          }));
        }
      } catch (error) {
        setError('Error fetching or saving series data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    filteredFilenames.forEach(name => {
      fetchAndSaveSeriesData(name);
    });
  }, [filteredFilenames]);

  return (
    <main className="flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      <div className="mb-6">
        <a
          href="./Scoreboard"
          className="bg-pink-500 text-white px-4 py-2 m-2 rounded hover:bg-pink-600 transition"
        >
          Scoreboard
        </a>
        <a
          href="./Scoreboard/team"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
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
            {filteredFilenames.map((name, index) => (
              gameData[name] && (
                <div
                  key={name}
                  className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleInfoOpen(name)}
                >
                  <img
                    src={`/images/christmas_calender${Math.floor(Math.random() * 1)}.jpg`}
                    alt={"Image " + (index + 1)}
                    className="w-full h-64 object-cover bg-gray-300"
                  />
                  {/* Centered Index Number */}
                  <div className="absolute inset-0 flex items-center justify-center text-black text-5xl font-bold">
                    {index + 1}
                  </div>
                  {/* Game Title */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h2 className="text-xl font-semibold">{gameData[name].title}</h2>
                  </div>
                  {/* Hover Overlay with Short Story */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{gameData[name].shortstory}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      {showInfo && selectedGame && (
        <InfoBox message={selectedGame} onClose={handleInfoClose} />
      )}
    </main>
  );
}
