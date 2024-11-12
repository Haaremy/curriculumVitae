"use client";

import { useState, useEffect } from 'react';

export default function SeriesList({ filenames }: { filenames: string[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFilenames, setFilteredFilenames] = useState<string[]>([]);
  const [gameData, setgameData] = useState<{ [key: string]: { name: string; overview: string; video: string; } }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopUpHovered, setPopUpHovered] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [seasons, setSeasons] = useState<{ season: string; episodes: string[] }[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);
  const [isPlayback, setIsPlayback] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        const fileID = name;
        const filePath = `/christmas/games/${fileID}`;

        const fileExistsResponse = await fetch(filePath, { method: 'HEAD' });
        if (fileExistsResponse.ok) {
          const response = await fetch(filePath);
          const existinggameData = await response.json();
          setgameData(prevData => ({
            ...prevData,
            [name]: existinggameData,
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
      <div><a href="./Scoreboard">Scoreboard</a></div>
      <div className={` ${isHovered ? 'pl-64' : 'pl-16'} flex-1 w-full transition-all duration-300`}>
        <div className="p-4">
          <input
            type="text"
            placeholder="Suche nach Spiel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {loading && <p className="text-blue-500 text-center col-span-full">Loading...</p>}
              {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
              {filenames.map(name => (
                gameData[name] &&  (
                  <div
                    key={name}
                    className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer"

                  >
                    <img
                      src={``}
                      alt={gameData[name].name}
                      className="w-full h-64 object-cover"

                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                      <h2 className="text-xl font-semibold">{gameData[name].name}</h2>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm">{gameData[name].overview}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          
        </div>
      </div>      
    </main>
  );
}

