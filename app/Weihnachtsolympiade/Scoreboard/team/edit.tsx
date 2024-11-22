"use client"
import { useState, useEffect } from 'react';
import Saved from './saved';

type GameData = {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  pT: number;
  stamp: string;
}[];

interface TeamData {
  name: string;
  punkte: number;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  played: number;
  games: {
    game1: GameData;
    game2: GameData;
    game3: GameData;
    game4: GameData;
    game5: GameData;
    game6: GameData;
    game7: GameData;
    game8: GameData;
    game9: GameData;
    game10: GameData;
    game11: GameData;
    game12: GameData;
    game13: GameData;
    game14: GameData;
    game15: GameData;
    game16: GameData;
    game17: GameData;
    game18: GameData;
    game19: GameData;
    game20: GameData;
    game21: GameData;
    game22: GameData;
    game23: GameData;
    game24: GameData;
  };
}

type TeamRefs = {
  ids: string[];
  pins: string[];
};

export default function EditTeam({ teams }: { teams: TeamRefs }) {
  const { ids, pins } = teams;
  const [teamQuery, setTeamQuery] = useState('');
  const [pinQuery, setPinQuery] = useState('');
  const [teamData, setTeamData] = useState<{ [key: string]: TeamData }>({});
  const [showEditor, setshowEditor] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedID, setSelectedID] = useState(""); // zum speichern der Datei
  const [showSaved, setShowSaved] = useState(false); // Speicherbestätigung Popup
  const [showNotSaved, setShowNotSaved] = useState(false); // Speicher fehler Popup
  const [errorMessage, setErrorMessage] = useState("");
  const handleNotSavedOpen = () => setShowNotSaved(true);
  const handleNotSavedlClose = () => setShowNotSaved(false);
  const handleSavedOpen = () => setShowSaved(true);
  const handleSavedlClose = () => setShowSaved(false);
  const [selectedTeam, setSelectedTeam] = useState<TeamData>({
    name: '',
    punkte: 0,
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    played: 0,
    games: {
      game1: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game2: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game3: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game4: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game5: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game6: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game7: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game8: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game9: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game10: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game11: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game12: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game13: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game14: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game15: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game16: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game17: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game18: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game19: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game20: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game21: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game22: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game23: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game24: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
    },
  });

  const humanReadableTimestamp = new Date(Date.now()).toLocaleString('de-DE', {
    day: 'numeric',
    month: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const createTeamFile = async (name: string) => {
    const newTeam: TeamData = {
          name: "",
          punkte: 0,
          player1: "",
          player2: "",
          player3: "",
          player4: "",
          played: 0,
          games: {
            game1: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game2: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game3: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game4: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game5: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game6: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game7: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game8: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game9: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game10: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game11: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game12: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game13: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game14: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game15: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game16: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game17: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game18: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game19: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game20: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game21: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game22: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game23: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game24: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
          },
        };
        setTeamData((prevData) => ({
          ...prevData,
          [name]: newTeam,
        }));
        
        await fetch('/api/saveTeamData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name, teamData: newTeam }),
        });
  }

  const fetchAndSaveTeamData = async (name: string) => {
    setError(null);
  
    try {
      const filePath = `/christmas/teams/${name}.json`;
      setSelectedID(name);
  
      // Try to fetch the team data directly, if the file doesn't exist, it will throw an error
      const response = await fetch(filePath);
      
      if (response.ok) {
        // File exists, parse the JSON and update state
        const existingTeamData = await response.json();
  
        // Update the state with the fetched team data
        setTeamData((prevData) => ({
          ...prevData,
          [name]: existingTeamData as TeamData,
        }));
      } else {
        // If the file does not exist, create a new team file
        await createTeamFile(name);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };
  

  
  const handleTeamSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamQuery(event.target.value);
  };

  const handlePinSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPinQuery(event.target.value);
  };

  const handleSubmit = async () => {
    const teamIndex = ids.findIndex((id) => id.toLowerCase() === teamQuery.toLowerCase());
    
    if (teamIndex !== -1 && pins[teamIndex].toLowerCase() === pinQuery.toLowerCase()) {
      const teamName = ids[teamIndex];
      await fetchAndSaveTeamData(teamName);  // Fetch and save team data
  
      setTeamQuery("");  // Reset input fields
      setPinQuery("");
      setshowEditor(true);
      
      // We wait for teamData to update using useEffect
    } else {
      setError('No matching ID found or PIN is incorrect');
    }
  };
  
  useEffect(() => {
    // Only set the selectedTeam after the team data has been updated
    if (teamData[selectedID]) {
      setSelectedTeam(teamData[selectedID]);
    }
  }, [teamData, selectedID]); // This will run when teamData or selectedID changes
  
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof TeamData) => {
    const { value } = event.target;
  
    setSelectedTeam((prevTeam) => ({
      ...prevTeam,
      [field]: value,
    }));
  };

  const gameResults = (i: number, m:number) => { // Standard Numbers with multiplier || points or hits*pointscala
    selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p1*m; 
    selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p2*m;
    selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p3*m;
    selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p4*m;  
  }

  const gameResultAnswer = (i:number, a:number[]) => { // Lösungszahl i=gameId a[]=answers
      selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p1==a[0] ? 10 : 0; 
      selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p2==a[1] ? 10 : 0;
      selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p3==a[2] ? 10 : 0;
      selectedTeam.games[`game${i}`][0].pT += selectedTeam.games[`game${i}`][0].p4==a[3] ? 10 : 0;   
  }

 

const gameResultTime = (g:number, limits:number[]) => { //Spiel mit Zeitlimit
  for(let i=1; i<=4; i++){
    if(selectedTeam.games[`game${g}`][0].p1<limits[0]){ // < Zeitlimit
      selectedTeam.games[`game${g}`][0].pT += 10;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[1])){
      selectedTeam.games[`game${g}`][0].pT += 9;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[2])){
      selectedTeam.games[`game${g}`][0].pT += 8;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[3])){
      selectedTeam.games[`game${g}`][0].pT += 7;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[4])){
      selectedTeam.games[`game${g}`][0].pT += 6;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[5])){
      selectedTeam.games[`game${g}`][0].pT += 5;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[6])){
      selectedTeam.games[`game${g}`][0].pT += 4;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[7])){
      selectedTeam.games[`game${g}`][0].pT += 3;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[8])){
      selectedTeam.games[`game${g}`][0].pT += 2;
    } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(limits[9])){
      selectedTeam.games[`game${g}`][0].pT += 1;
    } 
    
  }
}

const gameResultGuess = (g:number, numAns:number[]) => { // Spiel zum Schätzen mit Abweichung

    for(let i=1; i<=4; i++){
      if(selectedTeam.games[`game${g}`][0].p1==numAns[i]){
        selectedTeam.games[`game${g}`][0].pT += 10;
      } else if(selectedTeam.games[`game${g}`][0][`p${i}`]==(numAns[i]+(numAns[i]*0.1))){
        selectedTeam.games[`game${g}`][0].pT += 8;
      } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.2))){
        selectedTeam.games[`game${g}`][0].pT += 6;
      } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.3))){
        selectedTeam.games[`game${g}`][0].pT += 4;
      } else if(selectedTeam.games[`game${g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.4))){
        selectedTeam.games[`game${g}`][0].pT += 2;
      } 
    }
  }

  const gameResultTimeAnswer = (g:number, limits:number[], a:number[]) => { //Spiel mit Zeitlimit

      if(selectedTeam.games[`game${g}`][0].p1<=limits[0]){ // < Zeitlimit
        selectedTeam.games[`game${g}`][0].pT += 10;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[1])){
        selectedTeam.games[`game${g}`][0].pT += 9;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[2])){
        selectedTeam.games[`game${g}`][0].pT += 8;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[3])){
        selectedTeam.games[`game${g}`][0].pT += 7;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[4])){
        selectedTeam.games[`game${g}`][0].pT += 6;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[5])){
        selectedTeam.games[`game${g}`][0].pT += 5;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[6])){
        selectedTeam.games[`game${g}`][0].pT += 4;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[7])){
        selectedTeam.games[`game${g}`][0].pT += 3;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[8])){
        selectedTeam.games[`game${g}`][0].pT += 2;
      } else if(selectedTeam.games[`game${g}`][0].p1<=(limits[9])){
        selectedTeam.games[`game${g}`][0].pT += 1;
      }
      
      selectedTeam.games[`game${g}`][0].pT += selectedTeam.games[`game${g}`][0].p2==a[1] ? 10 : 0;
      selectedTeam.games[`game${g}`][0].pT += selectedTeam.games[`game${g}`][0].p3==a[2] ? 10 : 0;
      selectedTeam.games[`game${g}`][0].pT += selectedTeam.games[`game${g}`][0].p4==a[3] ? 10 : 0;
      
    
  }


  

  const getPoints = () => {
    let points: number;
    points = 0;
    for(let i=1; i<=24; i++){
      if(selectedTeam.games[`game${i}`][0].p1<0 && selectedTeam.games[`game${i}`][0].p2<0 && selectedTeam.games[`game${i}`][0].p3<0 && selectedTeam.games[`game${i}`][0].p4<0){
      // Spielvorraussetzung nicht erfüllt -> -1
      } else if(selectedTeam.games[`game${i}`][0].p1>=0 && selectedTeam.games[`game${i}`][0].p2>=0 && selectedTeam.games[`game${i}`][0].p3>=0 && selectedTeam.games[`game${i}`][0].p4>=0){
        if(selectedTeam.games[`game${i}`][0].stamp==""){
          selectedTeam.played++;
          selectedTeam.games[`game${i}`][0].stamp=humanReadableTimestamp; 
        switch(i){ // 10 fehlt
          
            
          case 1: gameResultAnswer(i,[0,0,0,0]); break; //Bäckerei [Zimt #12, kardamom #3, Muskat #6, Nelke #9]
          case 2: gameResultAnswer(i,[0,0,0,0]); break; //Kreuzwort
          case 3: gameResults(i,1); break; //DO Re Mi
          case 4: gameResultAnswer(i,[0,0,0,0]); break; // SChnitzeljagd
          case 5: gameResults(i,1); break; // Schleife hält = 10P
          case 6: gameResults(i,1); break; // Mini-Curling mit Punkte eintragen
          case 7: gameResultTime(i, [0,0,0,0,0,0,0,0,0,0]); break; //
          case 8: gameResultGuess(i, [0,0,0,0]); break; // Menge der Süßigkeiten [Werters, Kaffe, Brezeln, Würfel]
          case 9: gameResults(i,2); break; // Dosenwerfen Punkte=2*Dose
          case 10:  break;
          case 11: gameResults(i,1); break; // Schneeball Boccia
          case 12: gameResults(i,1); break; // Bowling mit Punkte eintragen
          case 13: gameResultGuess(i, [0,0,0,0]); break; //Suchbild mit Streuwert zur korrekten Antwort
          case 14: gameResults(i,1); break; // Schneeflocken basteln
          case 15: gameResults(i,1); break; // Zuckerstangen angeln
          case 16: gameResults(i,1); break; // Marschmallow Turm
          case 17: gameResults(i,2); break; // Hockeytor 5x schießen a 2P
          case 18: gameResultTime(i, [1,2,3,4,5,6,7,8,9,10]); break; //Mario Kart mit Platzierung absteigend
          case 19: gameResults(i,4); break; //Glühwein Pong mit Becher = P4
          case 20: gameResultTimeAnswer(i,[0,0,0,0,0,0,0,0,0,0],[0,0,0]); break; // SChlitten ziehen auf Zeit
          case 21: gameResultAnswer(i,[0,0,0,0]); break; //Geschenke raten
          case 22: gameResults(i,2); break; // Rentier Ringe jeder Treffer 2P
          case 23: gameResults(i,1); break; // Begriffe Zeichen je 1P
          case 24: gameResultTimeAnswer(i,[0,0,0,0,0,0,0,0,0,0],[0,0,0]); break;
          default: console.log(`Game${i} Results not possible.`); break;
        }
      }
      } else { // Inhalte unvollständig
        setErrorMessage(`Fehler: Eingabe ist leer oder enthält Zeichen außer Zahlen. (GAME${i})`)
        handleNotSavedOpen();
        return; // punkte null -> kein Speichern
      }

    }
    

    for (let c = 1; c <= 24; c++) {
      const gameKey = `game${c}` as keyof TeamData['games'];
      points += selectedTeam.games[gameKey][0].pT || 0; // Add pT, default to 0 if undefined
      if(selectedTeam.played==24)points+=40;
    }
    return points;
  }

  const handleSave = async () => {
    if (selectedTeam) {
      selectedTeam.punkte=getPoints();
      if(selectedTeam.punkte!=null){

        const updatedTeam = {
          ...selectedTeam,
          timestamp: humanReadableTimestamp,
        };
    
        
        try {
          const response = await fetch('/api/saveTeamData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: selectedID, teamData: updatedTeam }),
          });
      
          // Check if the response is successful
          if (response.ok) {
            // Open the modal after the data is saved successfully
            handleSavedOpen();
      
            // Update the team data in the state
            setTeamData((prevData) => ({
              ...prevData,
              [selectedID]: updatedTeam, // update the state with new data
            }));
          } else {
            // Handle errors if the response is not successful
            console.error('Failed to save team data:', response.statusText);
            setErrorMessage("Fehler: Es gabe ein Serverproblem! (POST)")
            handleNotSavedOpen();
          }
        } catch (error) {
          // Handle any network or unexpected errors
          console.error('Error saving team data:', error);
        }

      }
      
    
      
    }
  };

  const handleGameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    gameKey: keyof TeamData['games'],
    playerIndex: number,
    field: keyof GameData[0]
  ) => {
    const { value } = event.target;
  
    setSelectedTeam((prevTeam) => {
      const updatedGames = { ...prevTeam.games };
  
      // Update the specific field of the player in the game
      const newValue = isNaN(Number(value)) ? 0 : Number(value);  // default to 0 if not a number
  
      updatedGames[gameKey][playerIndex] = {
        ...updatedGames[gameKey][playerIndex], // Keep the previous values
        [field]: newValue, // Update the specific field (e.g., p1, p2, p3, p4, etc.)
      };
  
      return {
        ...prevTeam,
        games: updatedGames,
      };
    });
  };

  

  return (
    <main className="flex min-h-screen flex-col p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      <div className="mb-6">
      <a
          href="/Weihnachtsolympiade"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Games
        </a>
        <a
          href="/Weihnachtsolympiade/Scoreboard"
          className="bg-pink-500 text-white px-4 py-2 m-2 rounded hover:bg-pink-600 transition"
        >
          Scoreboard
        </a>
      </div>
      <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Teams</h1>

      <div className="mt-6 flex justify-center space-x-4">
      <input
  type="text"
  placeholder="TEAM ID"
  value={teamQuery}
  onChange={handleTeamSearchChange}
  className={`${showEditor ? "hidden" : ""} text-gray-900 w-full sm:w-72 max-w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200`}
  id="team"
/>

<input
  type="password"
  placeholder="PIN"
  value={pinQuery}
  onChange={handlePinSearchChange}
  className={`${showEditor ? "hidden" : ""} text-gray-900 w-full sm:w-72 max-w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200`}
/>
{showSaved && (
                <Saved message="Erfolgreich gespeichert!" onClose={handleSavedlClose} />
            )}
{showNotSaved && (
                <Saved message={errorMessage} onClose={handleNotSavedlClose} />
            )}
      </div>

      <button
        onClick={handleSubmit}
        className={`${showEditor ? "hidden" : ""} mt-6 py-2 px-6 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200 focus:outline-none`}
        id="loader"

      >
      Load Team
      </button>

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {selectedTeam && (
        <div className={`${showEditor ? "visible" : "hidden"} mt-8 p-6 bg-white shadow-lg rounded-md space-y-4`}>          <h2 className="text-2xl font-semibold text-gray-900">Edit Team</h2>

          {/* Edit team name */}
          <input
            type="text"
            placeholder="Team Name"
            value={selectedTeam.name}
            onChange={(e) => handleInputChange(e, 'name')}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
          />

          {/* Edit players */}
          {[1, 2, 3, 4].map((i) => (
            <input
              key={`player${i}`}
              type="text"
              placeholder={`Player ${i}`}
              value={selectedTeam[`player${i}` as keyof TeamData] as string}
              onChange={(e) => handleInputChange(e, `player${i}` as keyof TeamData)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
            />
          ))}
          <button
            onClick={handleSave}
            className="mt-4 py-2 px-6 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200 focus:outline-none"
          >
            Save Changes
          </button>
          {/* Edit game data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(selectedTeam.games) as Array<keyof TeamData['games']>).map((gameKey) => (
  <div
    key={gameKey}
    className={`${
      selectedTeam.games[gameKey][0]?.stamp !== ""
        ? "bg-gray-100"
        : "bg-blue-100"
    } p-4 rounded-md shadow-md space-y-2`}
  >
    <h3 className="text-lg font-semibold text-gray-800">
      Eintrag {gameKey.toUpperCase()}
    </h3>

    {/* Map through each playerData for the current game */}
    {selectedTeam.games[gameKey].map((playerData, playerIndex) => (
      <div key={`${gameKey}-player-${playerIndex}`} className="space-y-2">
        {(['p1', 'p2', 'p3', 'p4'] as Array<keyof GameData[0]>).map((playerField, i) => (
          <input
            key={`${gameKey}-${playerIndex}-${playerField}`}
            type="number"
            placeholder={`# ${i + 1}`}
            disabled={playerData.stamp !== ""}
            value={
              playerData[playerField] != -1 ? playerData[playerField] : ''
            } // empty when Entry is -1
            onChange={(e) =>
              handleGameInputChange(
                e,
                gameKey,
                playerIndex,
                playerField
              )
            }
            className={`${
              selectedTeam.games[gameKey][0]?.stamp !== "" ? "bg-grey-100 text-gray-400" : "bg-white text-gray-900"
            } w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200`}
          />
        ))}
      </div>
    ))}


  </div>
))}
            
          </div>

          
        </div>
      )}
    </main>
  );
}
