"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function SeriesList({ filenames }: { filenames: string[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFilenames, setFilteredFilenames] = useState<string[]>([]);
  const [movieData, setMovieData] = useState<{ [key: string]: { title: string; overview: string; poster: string; release: string; genre: string } }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopUpHovered, setPopUpHovered] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [seasons, setSeasons] = useState<{ season: string; episodes: string[] }[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);
  //const [forbiddenGenres, setforbiddenGenres] = useState<boolean[]>([]);
  //setforbiddenGenres([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]);
                    // Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, Thriller, TV Movie, War, Western
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
        const fileID = name.split("+").slice(1).join("+");
        const filePath = `/jsons/series/${fileID}.json`;

        const fileExistsResponse = await fetch(filePath, { method: 'HEAD' });
        if (fileExistsResponse.ok) {
          const response = await fetch(filePath);
          const existingMovieData = await response.json();
          setMovieData(prevData => ({
            ...prevData,
            [name]: existingMovieData,
          }));
        } else {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${encodeURIComponent(fileID)}?language=de-DE&api_key=2e42a5a77d2dc620a46cd7276da47403`
          );
          const data = await response.json();

          if (data) {
            const genres = data.genres ? data.genres.map((genre: { name: string }) => genre.name).join(' - ') : 'Unknown';

            const movieInfo = {
              title: data.name,
              overview: data.overview,
              poster: data.poster_path,
              release: data.release_date,
              genre: genres,
            };

            setMovieData(prevData => ({
              ...prevData,
              [name]: movieInfo,
            }));

            await fetch('/api/saveSeriesData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: fileID, movieData: movieInfo }),
            });
          }
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



  const handleSeriesClick = async (seriesName: string) => {
    setSelectedSeries(seriesName);
    setIsPopupOpen(true);

    //try {
    //  const response = await fetch(`/api/getSeasonEpisodes?series=${encodeURIComponent(seriesName)}`);
    //  const data = await response.json();
    //  setSeasons(data.fullSeries || []);
    //} catch (error) {
    //  setError('Error fetching seasons and episodes.');
    //}
  };

  const handleEpisodeClick = (episodeUrl: string) => {
    setSelectedEpisode(episodeUrl);
    setIsPlayback(true);
  };

  return (
    <main className="flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      
      <aside
      className={`fixed top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md h-full ${
        isHovered ? 'w-64' : 'w-16 '
      } transition-all duration-300 ease-in-out z-30`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Icon visible when sidebar is collapsed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isHovered ? 'text-transparent' : 'text-gray-500'} transition-colors duration-300`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        {/* Content visible when sidebar is hovered */}
        <div className={`flex-col items-center ${isHovered ? 'flex' : 'hidden'} transition-all duration-300`}>
          <ul className="space-y-4 mt-4 w-full px-2 ">
            <h1>Genre</h1>
            <li>
              Input: Genre 1
            </li> 
          </ul>
        </div>
      </div>
    </aside>
      <div className={` ${isHovered ? 'pl-64' : 'pl-16'} flex-1 w-full transition-all duration-300`}>
        <div className="p-4">
          <input
            type="text"
            placeholder="Suche nach Videotitel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 w-full border border-gray-300 rounded"
          />

          {filteredFilenames.length === 0 ? (
            <p className="text-gray-500">Keine Serie gefunden.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {loading && <p className="text-blue-500 text-center col-span-full">Loading...</p>}
              {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
              {filteredFilenames.map(name => (
                movieData[name] &&  (
                  <div
                    key={name}
                    className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                    onClick={() => handleSeriesClick(name)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movieData[name].poster}`}
                      alt={movieData[name].title}
                      className="w-full h-64 object-cover"
                      width={50}
                      height={50}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                      <h2 className="text-xl font-semibold">{movieData[name].title}</h2>
                      <p className="text-sm">{movieData[name].release}</p>
                      <p className="text-sm">{movieData[name].genre}</p>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm">{movieData[name].overview}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popup for seasons and episodes */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="relative flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl h-full"
            
          >
            {/* Sidebar within the popup */}
            <aside
              className={`bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md h-full ${
                isPopUpHovered ? 'w-64' : 'w-16'
              } transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setPopUpHovered(true)}
              onMouseLeave={() => setPopUpHovered(false)}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${isPopUpHovered ? 'text-transparent' : 'text-gray-500'} transition-colors duration-300 `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
  
                <div className={`flex-col items-center ${isPopUpHovered ? 'flex' : 'hidden'} transition-all duration-300`}>
                  {seasons.length > 0 ? (
                    seasons.map(season => (
                      <a key={season.season} 
                       className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4">
                      
                        {season.season}
                      </a>
                    ))
                  ) : (
                    <p className="text-gray-500">No seasons available.</p>
                  )}
                </div>
              </div>
            </aside>

            {/* Main content area */}
            <div className="flex-1 ml-4">
            <Image
                      alt="Poster of Movie"
                      src={`https://image.tmdb.org/t/p/w500/${movieData[selectedSeries ||  235598].poster}`}
                      className="w-full h-64 object-cover"
                      width={50}
                      height={50}
                    />
              <h2 className="text-xl font-semibold mb-4">{selectedSeries?.split("+")[0]}</h2>
              {/* Content to display series overview or other details */}
              {seasons.length > 0 ? (
  seasons.map((season) => (
    <div key={season.season} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold">{season.season}</h3>
      <ul className="pl-4 mt-2">
        {season.episodes.length > 0 ? (
          season.episodes.map((episode, index) => (
            <li key={index}>
              <a
                href="#"
                className="block py-2 px-4 rounded-lg bg-blue-600 text-white dark:bg-blue-400 transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-blue-300"
                onClick={() => handleEpisodeClick(`series/${selectedSeries}/${season.season}/${episode}`)}
              >
                Folge {episode.slice(0, -4)}
              </a>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No episodes available.</p>
        )}
      </ul>
    </div>
  ))
) : (
  <p className="text-gray-500">No seasons available.</p>
)}

                  
            </div>

            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Playback video */}
      {selectedEpisode && (
        <div className={`${isPlayback ? "block" : "hidden"} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
          <div className="relative max-w-full max-h-full">
            <video
              controls
              src={selectedEpisode}
              className="w-full max-w-4xl max-h-[80vh] mx-auto"
              onEnded={() => setIsPlayback(false)}
            />
            <button
              onClick={() => setIsPlayback(false)}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
  }

