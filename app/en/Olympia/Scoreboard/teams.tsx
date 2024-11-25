"use client";

import React, { useState, useEffect } from 'react';

type TeamData = {
  name: string;
  punkte: number;
  timestamp: string;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  games: {
    game1: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game2: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game3: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game4: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game5: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game6: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game7: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game8: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game9: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game10: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game11: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game12: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game13: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game14: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game15: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game16: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game17: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game18: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game19: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game20: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game21: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game22: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game23: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
    game24: { p1: number; p2: number; p3: number; p4: number; pT: number; stamp: string }[];
  };
};

export default function TeamList({ filenames }: { filenames: string[] }) {
  const [teamData, setTeamData] = useState<{ [key: string]: TeamData }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);



  useEffect(() => {
    if (filenames.length === 0) return;

    const fetchAndSaveTeamData = async (name: string) => {
      try {
        const filePath = `/christmas/teams/${name}`;
        const fileExistsResponse = await fetch(filePath, { method: 'HEAD' });
        if (fileExistsResponse.ok) {
          const response = await fetch(filePath);
          const data: TeamData = await response.json();
          setTeamData(prevData => ({ ...prevData, [name]: data }));
        }
      } catch (error) {
        setError('Error fetching Team data.');
        console.error(error);
      }
    };

    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      await Promise.all(filenames.map(name => fetchAndSaveTeamData(name)));
      setLoading(false);
    };

    fetchAllData();
  }, [filenames]);

  const toggleRow = (name: string) => {
    setExpandedRow(prev => (prev === name ? null : name));
  };

  const sortByPoints = (a: TeamData, b: TeamData) => {
    const pointsA = parseInt(String(a.punkte)) || 0;
    const pointsB = parseInt(String(b.punkte)) || 0;
    return pointsB - pointsA; // Sort in descending order
  };

  const sortedTeamData = Object.values(teamData).sort(sortByPoints);

  return (
    <main className="flex min-h-screen flex-col p-0 sm:p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      
      <div className="flex-1 w-full transition-all duration-300">
      
        <div className="pt-8">
        <nav className="mb-6 flex gap-4 mt-8">
        <a
          href="./Olympa/"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Games
        </a>
        <a
          href="./Olympa/Map"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Map
        </a>
        <a
          href="./Olympa//Scoreboard/team"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Team Editor
        </a>
      </nav>
      </div>
          {loading && <p className="text-blue-500 text-center col-span-full">Loading...</p>}
          {error && <p className="text-red-500 text-center col-span-full">{error}</p>}
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-pink-100 dark:bg-gray-700">
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Rank</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Team</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Points</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Last Update</th>
              </tr>
            </thead> 
            <tbody>
              {sortedTeamData.map((team, index) => team.name!="" && team.punkte>0 && (
                <React.Fragment key={team.name}>
                  <tr
                    className="bg-pink-50 dark:bg-gray-900 cursor-pointer text-center"
                    onClick={() => toggleRow(team.name)}
                  >
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">#{(index+1)}</td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">{team.name}</td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">{team.punkte}</td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">{team.timestamp}</td>
                  </tr>
                  {expandedRow === team.name && (
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <td colSpan={3} className="py-3 px-4 border-b border-gray-300 dark:border-gray-600">
                        <div className="mt-4">
                          <div className="text-center mb-4 font-semibold">
                            {team.player1} - {team.player2} - {team.player3} - {team.player4}
                          </div>
                          {Object.keys(team.games).map((gameKey, index) => {
                            const scores = team.games[gameKey as keyof typeof team.games];
                            if (!Array.isArray(scores) || scores.length === 0 || !scores.some(score => score.pT > 0)) {
                              return null;
                            } else if ([1, 2, 4, 8, 10, 13, 21].includes(index + 1)){ // wenn Spiel aus Lösungen besteht, bspw Spiel 2 = index 1
                              return (
                                <div key={gameKey} className="mb-4">
                                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow mb-2">
                                    <h3 className="font-semibold text-lg">{gameKey}</h3>
                                    <div className="ml-2 mb-2">
                                      <p>
                                        This Game contains secret content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            } else
                            return (
                              <div key={gameKey} className="mb-4">
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow mb-2">
                                  <h3 className="font-semibold text-lg">{gameKey}</h3>
                                  {scores.map((score, scoreIndex) => (
                                    <div key={scoreIndex} className="ml-2 mb-2">
                                      <p>
                                        Points: {" "}
                                        {score.p1 != 0 && <span>P1: <strong>{score.p1}</strong></span>}{" "}
                                        {score.p2 != 0 && <span>P2: <strong>{score.p2}</strong></span>}{" "}
                                        {score.p3 != 0 && <span>P3: <strong>{score.p3}</strong></span>}{" "}
                                        {score.p4 != 0 && <span>P4: <strong>{score.p4}</strong></span>}{" "}
                                        <br/>
                                        <span>Partial Points: <strong>{score.pT}</strong></span>
                                      </p>
                                      <p>
                                        <span>Timestamp: {score.stamp}</span>
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
    </main>
  );
}
