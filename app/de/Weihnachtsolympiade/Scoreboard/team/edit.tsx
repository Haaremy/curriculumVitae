"use client"
import { useState, useEffect } from 'react';
import Saved from './saved';
import { pointSettings } from '../../../../common/editPointSettings';

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
    game01: GameData;
    game02: GameData;
    game03: GameData;
    game04: GameData;
    game05: GameData;
    game06: GameData;
    game07: GameData;
    game08: GameData;
    game09: GameData;
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

export default function EditTeam({ teams }: { teams: TeamRefs}) {
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<TeamData>({
    name: '',
    punkte: 0,
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    played: 0,
    games: {
      game01: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game02: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game03: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game04: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game05: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game06: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game07: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game08: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game09: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
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
            game01: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game02: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game03: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game04: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game05: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game06: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game07: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game08: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
            game09: [{ p1: -1, p2: -1, p3: -1, p4: -1, pT: 0, stamp: '' }],
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

  //const allNew = () => {
   // teams.ids.forEach(element => {
  //    createTeamFile(element);
 // });
 // }

  const fetchAndSaveTeamData = async (name: string) => {
    setError(null);
    //allNew();
    try {
      //const filePath = `/christmas/teams/${name}.json`;
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
      sessionStorage.setItem("id",teamName);
      sessionStorage.setItem("pin",pinQuery);
      setshowEditor(true);
      
      // We wait for teamData to update using useEffect
    } else {
      setError('ID oder Pin inkorrekt.');
    }
  };

  
  
  useEffect(() => {
    setPinQuery(sessionStorage.getItem("pin"));
    setTeamQuery(sessionStorage.getItem("id"));

    const gameQuery = new URLSearchParams(window.location.search).get('gameQuery');
    if (gameQuery) {
      setSearchQuery(gameQuery); // Setting the search query from URL
    }
    
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

  const gameResults = (g: number, m:number, cap:number) => { // Standard Numbers with multiplier || points or hits*pointscala || max points reachable
    const capExceededPoints = 9.5;
    
    if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<cap){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1*m; 
    } else selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += capExceededPoints;
    if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2<cap){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2*m; 
    } else selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += capExceededPoints;
    if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3<cap){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3*m; 
    } else selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += capExceededPoints;
    if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4<cap){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4*m; 
    } else selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += capExceededPoints; 
  }

  const gameResultAnswer = (g: number, a:number[]) => { // Lösungszahl i=gameId a[]=answers
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1==a[0] ? 10 : 0; 
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2==a[1] ? 10 : 0;
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3==a[2] ? 10 : 0;
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4==a[3] ? 10 : 0;   
  }

 

const gameResultTime = (g:number, limits:number[]) => { //Spiel mit Zeitlimit
  for(let i=1; i<=4; i++){
    if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<limits[0]){ // < Zeitlimit
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 10;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[1])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 9;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[2])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 8;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[3])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 7;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[4])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 6;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[5])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 5;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[6])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 4;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[7])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 3;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[8])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 2;
    } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[9])){
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 1;
    } 
    
  }
}

const gameResultGuess = (g:number, numAns:number[]) => { // Spiel zum Schätzen mit Abweichung

    
    for(let i=1; i<=4; i++){
      if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1==numAns[i]){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 10;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]==(numAns[i]+(numAns[i]*0.1))){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 8;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.2))){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 6;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.3))){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 4;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(numAns[i]+(numAns[i]*0.4))){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 2;
      } 
    }
  }

  const gameResultTimeAnswer = (g:number, limits:number[], a:number[]) => { //Spiel mit Zeitlimit und Lösungszahlen

      if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=limits[0]){ // < Zeitlimit
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 10;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[1])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 9;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[2])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 8;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[3])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 7;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[4])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 6;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[5])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 5;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[6])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 4;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[7])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 3;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[8])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 2;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<=(limits[9])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 1;
      }
      
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2==a[1] ? 10 : 0;
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3==a[2] ? 10 : 0;
      selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4==a[3] ? 10 : 0;
      
    
  }


  const game20 = (g:number, limits:number[]) => { //Spiel mit Zeitlimit
    for(let i=1; i<=4; i++){
      if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<limits[0]){ // < Zeitlimit
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 40;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[1])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 39;
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[2])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 38;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[3])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 37;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[4])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 36;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[5])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 35;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[6])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 34;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[7])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 33;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[8])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 32;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[9])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 31;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[10])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 30;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[11])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 29;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[12])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 28;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[13])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 27;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[14])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 26;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[15])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 25;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[16])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 24;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[17])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 23;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[18])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 22;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[19])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 21;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[20])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 20;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[21])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 19;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[22])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 18;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[23])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 17;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[24])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 16;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[25])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 15;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[26])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 14;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[27])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 13;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[28])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 12;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[29])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 11;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[30])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 10;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[31])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 9;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[32])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 8;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[33])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 7;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[34])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 6;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[35])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 5;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[36])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 4;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[37])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 3;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[38])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 2;
      }else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0][`p${i}`]<(limits[39])){
        selectedTeam.games[`game${g<10? "0"+g : g}`][0].pT += 1;
      }
      
    }
  }


  const switchPoints = (g: number) => {
    switch(g){
          
            
      case 1: gameResultAnswer(g,pointSettings[0]); break; //Bäckerei [Zimt #12, kardamom #3, Muskat #6, Nelke #9]
      case 2: gameResultAnswer(g,pointSettings[1]); break; //Kreuzwort
      case 3: gameResults(g,pointSettings[2][0],pointSettings[2][1]); break; //DO Re Mi
      case 4: gameResultAnswer(g,pointSettings[3]); break; // SChnitzeljagd
      case 5: gameResultAnswer(g,pointSettings[4]); break; // Schleife hält = 10P
      case 6: gameResults(g,pointSettings[5][0],pointSettings[5][1]); break; // Mini-Curling mit Punkte eintragen
      case 7: gameResultTime(g, pointSettings[6]); break; //
      case 8: gameResultGuess(g, pointSettings[7]); break; // Menge der Süßigkeiten [Werters, Kaffe, Brezeln, Würfel]
      case 9: gameResults(g,pointSettings[8][0],pointSettings[8][1]); break; // Dosenwerfen Punkte=2*Dose, max 5 Treffer
      case 10: gameResultAnswer(g,pointSettings[9]); break; //Logikrätsel mit Lösungen
      case 11: gameResults(g,pointSettings[10][0],pointSettings[10][1]); break; // Schneeball Boccia
      case 12: gameResults(g,pointSettings[11][0],pointSettings[11][1]); break; // Bowling mit Punkte eintragen
      case 13: gameResultGuess(g, pointSettings[12]); break; //Suchbild mit Streuwert zur korrekten Antwort
      case 14: gameResults(g,pointSettings[13][0],pointSettings[13][1]); break; // Schneeflocken basteln max 25 Flocken
      case 15: gameResults(g,pointSettings[14][0],pointSettings[14][1]); break; // Zuckerstangen angeln max 25 Stangen
      case 16: gameResults(g,pointSettings[15][0],pointSettings[15][1]); break; // Marschmallow Turm, max 25 Mallows
      case 17: gameResults(g,pointSettings[16][0],pointSettings[16][1]); break; // Hockeytor 5x schießen a 2P, max 5 Treffer
      case 18: gameResultTime(g,  pointSettings[17]); break; //Mario Kart mit Platzierung absteigend
      case 19: gameResults(g,pointSettings[18][0],pointSettings[18][1]); break; //Glühwein Pong mit Becher = P4, max 10 Treffer
      case 20: game20(g,pointSettings[19]); break; // SChlitten ziehen auf Zeit
      case 21: gameResultAnswer(g,pointSettings[20]); break; //Geschenke raten
      case 22: gameResults(g,pointSettings[21][0],pointSettings[21][1]); break; // Rentier Ringe jeder Treffer 2P, max 5 Treffer
      case 23: gameResults(g,pointSettings[22][0],pointSettings[22][1]); break; // Begriffe Zeichen je 1P
      case 24: gameResultTimeAnswer(g,pointSettings[23],pointSettings[24]); break;
      default: console.log(`game${g<10? "0"+g : g} Results not possible.`); break;
    }
  }

  const getPoints = () => {
    let points: number;
    points = 0;
    for(let g=1; g<=24; g++){
      if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1<0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2<0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3<0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4<0){
      // Spielvorraussetzung nicht erfüllt -> -1
      } else if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].p1>=0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p2>=0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p3>=0 && selectedTeam.games[`game${g<10? "0"+g : g}`][0].p4>=0){
        if(selectedTeam.games[`game${g<10? "0"+g : g}`][0].stamp==""){
          selectedTeam.played++;
          selectedTeam.games[`game${g<10? "0"+g : g}`][0].stamp=humanReadableTimestamp; 
          switchPoints(g);
      }
      } else { // Inhalte unvollständig
        setErrorMessage(`Fehler: Eingabe ist leer oder enthält Zeichen außer Zahlen. (game${g<10? "0"+g : g})`)
        handleNotSavedOpen();
        return; // punkte null -> kein Speichern
      }

    }
    

    for (let c = 1; c <= 24; c++) {
      const gameKey = `game${c<10? "0"+c : c}` as keyof TeamData['games'];
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
      const newValue = value!="" ? Number(value) : -1 ;  // default -1 if not a number
  
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
      <nav className="mb-6 flex gap-4 sm:mt-8">
        <a
          href="../"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Spiele
        </a>
        <a
          href="../Karte"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Karte
        </a>
        <a
          href="./"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Scoreboard
        </a>
        <a
              href="../FAQ"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              FAQ
            </a>
      </nav>
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
      Laden
      </button>

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {selectedTeam && (
        <div className={`${showEditor ? "visible" : "hidden"} mt-8 p-6 bg-white shadow-lg rounded-md space-y-4`}>          <h2 className="text-2xl font-semibold text-gray-900">Einträge</h2>

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
            className={`${!showEditor ? "hidden" : ""} sticky py-2 px-4 top-20  bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200 focus:outline-none`}
          >
            Speichern
          </button>
          <input
          type="number"
          placeholder="Suche nach Spielnummer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-black mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
          {/* Edit game data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(selectedTeam.games) as Array<keyof TeamData['games']>).filter((games) =>
    (games ).includes(searchQuery)
  ).map((gameKey) => (
    
  <div
    key={gameKey}
    className={`${
      selectedTeam.games[gameKey][0]?.stamp !== ""
        ? "bg-gray-100"
        : "bg-pink-100"
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
