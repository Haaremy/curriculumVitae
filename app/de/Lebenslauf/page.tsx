"use client";

import { useState } from 'react';

export default function Page() {
  const [toggleType, setToggleType] = useState([true, true, true]); // Updated types
  const [isHovered, setIsHovered] = useState(false);
  const [isFilter, setFilter] = useState(false);
  const [timeAsc, setTimeAsc] = useState(true);

  // Data for the table
  const data = [
    { type: 'Engagement', date: 'Jul 2024', description: 'Beginn der dritten Website zu Weiterbildungszwecken. Nutzung von KI zur Code-Korrektur.' },
    { type: 'Engagement', date: 'Sep 2024', description: 'Organisation, Koordination und Finanzierung der Erstitage 2024. Planung der drei Event-Tage mit sämtlichen Veranstaltungen für den Standort Köthen.' },
    { type: 'Arbeit', date: 'Apr 2023', description: 'Anstellung bei der Hochschule Anhalt im Bereich Marketing als "Campusbotschafter". Besuch von Bildungsmessen und Schulen für Beratungen, Vorträge und Fragen.' },
    { type: 'Engagement', date: 'Feb 2022', description: 'Beitritt im "Eis- und Sportverein Halle e.V" in der Abteilung Eiskunstlauf.' },
    { type: 'Engagement', date: 'Mär 2022', description: 'Renovierung des studentischen Pausenraums als Planer im Fachbreich. Fortführender Rechteinhaber des Raums.' },
    { type: 'Engagement', date: 'Okt 2021', description: 'Amtszeit als Fachschaftsratvorsitz, Studierendenratsmitglied und Fachbereichsratmitglied für ein Jahr. Wiederwahl für den Fachschaftsrat für die folgenden drei Jahre.' },
    { type: 'Engagement', date: 'Apr 2021', description: 'Betreuung von internationalen Studierenden im Buddy- und Sprachlotsenprogramm.' },
    { type: 'Ausbildung', date: 'Okt 2020', description: 'Beginn des Bachelorstudiums an der Hochschule Anhalt für Informatik, Medien und Spieleentwicklung.' },
    { type: 'Arbeit', date: 'Aug 2020', description: 'Minijob bei PoolBecker Köthen als studentische Hilfskraft für Webshop und Montageleistungen.' },  
    { type: 'Ausbildung', date: 'Jul 2020', description: 'Erreichen des allgemeinen Abiturs.' },
    { type: 'Engagement', date: 'Apr 2019', description: 'Teilnahme und Viertplatzierung im Wettbewerb "Junge Kunst Anhalt.' },
    { type: 'Arbeit', date: 'Mai 2018', description: 'Pflichtpraktikum bei Computer e.K. Bereiche: Kunden und Software' },  
    { type: 'Ausbildung', date: 'Mär 2016', description: 'Sprachenaustausch Frankreich. Wiederholung in den folgenden zwei Jahren.' },
    { type: 'Engagement', date: 'Nov 2012', description: 'Erhalt des Spitznamens "Haaremy" durch Mitschüler. Genaue Ursache dafür ist mir selber unklar. Nutzung des Namens wird Teil meiner Onlineaktivität sowie meiner Projekte unter "Haaremy Productions". Darauf basierend wurden auch mein Logo entworfen. Die neueste Version von 2024, welches mit J+b ein H bildet.' },
    { type: 'Ausbildung', date: 'Sep 2012', description: 'Übergang zum weiterführenden Ludwigsgymnasium Köthen.' },
    { type: 'Ausbildung', date: 'Sep 2008', description: 'Einschulung in die Kastanienschule Köthen.' },
    { type: 'Engagement', date: 'Feb 2002', description: 'Geboren im Kreisklinikum Köthen (heute Heliosklinik).' },

  ];

  const workSkills = [
    { name: "Project Management", val: 4, des: "Man" },
    { name: "Team Leadership", val: 5, des: "Team" },
  ];

  const languageSkills = [
    { name: "Deutsch", val: 5, des: "Muttersprache" },
    { name: "Englisch", val: 4, des: "Unterricht von Klasse 2 bis 12 sowie Modul im Studium" },
  ];

  const SkillGroup = ({ title, skills }: { title: string; skills: { name: string; val: number; des: string }[] }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return (
      <div>
        <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">{title}</h2>
        <div className="relative">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center mb-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex-1">
                <label className="block">{skill.name}</label>
                  {hoveredIndex !== null && (
                    <div className="absolute top-0 left-0 mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-10">
                      <p>{skills[hoveredIndex].des}</p>
                    </div>
                  )}
              </div>
  
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="inline-flex items-center ml-2">
                  <input
                    type="radio"
                    name={skill.name}
                    value={value}
                    disabled={skill.val !== value}
                    checked={skill.val === value}
                    className="ml-1 text-pink-400 dark:text-pink-600"
                    readOnly
                  />
                </div>
              ))}
            </div>
          ))}
          
        </div>
      </div>
    );
  };

  const refs = [
    {name: "Hexagrow", des: "Eine Gruppenarbeit aus dem Modul Spieleentwicklung.", link: "https://haaremy.de/Hexagrow"},
    {name: (<>Zertifikat:<br/> Praktikum 2018</>), des: "Pflichtpraktikum bei Computer e.K. Bereiche: Kunden und Software.", link: "https://stream.haaremy.de/docs/pRKC.pdf"},
    {name: (<>Zertifikat:<br/> Sprachenaustausch</>), des: "Sprachenaustausch Frankreich. Wiederholung in den folgenden zwei Jahren.", link: "https://stream.haaremy.de/docs/austausch.pdf"},
    {name: "Eislaufen für Anfänger", des: ( <> <iframe width="100%" height="auto" src="https://www.youtube.com/embed/GrbLsjwcS2A?si=nfczhFwNKG63tkjr"title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerPolicy="strict-origin-when-cross-origin"allowFullScreen></iframe></>),link: "https://youtu.be/GrbLsjwcS2A?si=sFPINSf28BQCFev9"},
    {name: "Modul Präsentation MSV", des: ( <> <iframe width="100%" height="auto" src="https://www.youtube.com/embed/kgvFVA__XBo?si=KFxETdKIrwOAdp74"title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"referrerPolicy="strict-origin-when-cross-origin"allowFullScreen></iframe></>),link: "https://youtu.be/GrbLsjwcS2A?si=sFPINSf28BQCFev9"},

  ]

  // Convert date strings to Date objects for sorting
  const parseDate = (dateStr: string): Date => {
    const germanMonths = {
      Jan: 'January',
      Feb: 'February',
      Mär: 'March',
      Apr: 'April',
      Mai: 'May',
      Jun: 'June',
      Jul: 'July',
      Aug: 'August',
      Sep: 'September',
      Okt: 'October',
      Nov: 'November',
      Dez: 'December'
    };
  
    const [month, year] = dateStr.split(' ');
    const monthName = germanMonths[month as keyof typeof germanMonths] || month;
    const monthIndex = new Date(Date.parse(monthName + " 1, 2000")).getMonth();
    
    return new Date(Number(year), monthIndex);
  };
  
  // Sort data based on timeAsc state
  const sortedData = [...data].sort((b, a) => {
    const dateA = parseDate(a.date).getTime();
    const dateB = parseDate(b.date).getTime();
    return timeAsc ? dateA - dateB : dateB - dateA;
  });

  // Filter data based on toggleType
  const filteredData = sortedData.filter(item => {
    if (item.type === 'Arbeit') return toggleType[0];
    if (item.type === 'Engagement') return toggleType[1];
    if (item.type === 'Ausbildung') return toggleType[2];
    return false;
  });

  return (
    <main className="w-full flex min-h-screen min-w-screen flex-col items-center justify-between sm:p-2 p-0 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed visible top-20 rounded-lg sm:top-0 right-0 sm:left-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md  ${
          isHovered ? 'w-48 h-full ' : 'w-10 h-10 sm:h-full'
        } transition-all duration-300 ease-in-out z-30`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center justify-center h-full max-w-screen-xl">
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
          <div className={`flex flex-col items-center ${isHovered ? 'sm:flex' : 'hidden'} transition-all duration-300`}>
            <ul className="space-y-4 mt-4 w-full px-2 ">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  Abriss
                </a>
              </li>
              <li>
                <a
                  href="#cv"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  Lebenslauf
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  Fähigkeiten
                </a>
              </li>
              <li>
                <a
                  href="#refs"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  Referenzen
                </a>
              </li>
              <li>
                <a
                  href="#foot"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className={` sm:pl-10  flex-1 w-full transition-all duration-300`}>
        <div id="about" className="mb-12 sm:mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Abriss</h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-300">Jeremy Becker</h2>
            <h2 className="text-xl text-gray-700 dark:text-gray-300">Student der HS Anhalt für Informatik</h2>
          </div>
          <hr className="my-12 border-gray-300 dark:border-gray-700" />
        </div>

        <div id="cv" className="mb-12">
          <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Lebenslauf</h1>
          <div
            onMouseEnter={() => setFilter(true)}
            onMouseLeave={() => setFilter(false)}
            className="relative inline-block"
          >
            <button className="text-pink-600 dark:text-pink-400">
              Filter
            </button>
            <div className={`flex flex-col ${isFilter ? 'block' : 'hidden'} transition-all duration-300 absolute top-full left-0 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 shadow-lg`}>
              <label className="p-2 text-pink-600 dark:text-pink-400">
                <input
                  type="checkbox"
                  checked={toggleType[0]}
                  onChange={() => setToggleType([!toggleType[0],toggleType[1],toggleType[2]])}
                /> Arbeit
              </label>
              <label className="p-2 text-pink-600 dark:text-pink-400" >
                <input
                  type="checkbox"
                  checked={toggleType[1]}
                  onChange={() => setToggleType([toggleType[0],!toggleType[1],toggleType[2]])}
                /> Engagement
              </label>
              <label className="p-2 text-pink-600 dark:text-pink-400">
                <input
                  type="checkbox"
                  checked={toggleType[2]}
                  onChange={() => setToggleType([toggleType[0],toggleType[1],!toggleType[2]])}
                /> Ausbildung
              </label>
              <div className="p-2 m-2 text-pink-600 dark:text-pink-400">
                Zeitlinie:
                <button
                  onClick={() => setTimeAsc(prev => !prev)}
                  className=" px-2 py-1 border border-gray-300 dark:border-gray-600 rounded"
                >
                  {timeAsc ? 'Absteigend' : 'Aufsteigend'}
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto mt-4 overflow-auto">
            <table className=" table-auto w-full min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-pink-100 dark:bg-gray-700">
                  <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Typ</th>
                  <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Zeit</th>
                  <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-pink-600 dark:text-pink-400">Beschreibung</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="bg-pink-50 dark:bg-gray-900">
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base">{item.type}</td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base">{item.date}</td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="my-12 border-gray-300 dark:border-gray-700" />
        </div>

        <div id="skills" className="mb-12">
          <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Fähigkeiten</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <SkillGroup title="Arbeiten" skills={workSkills} />
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <SkillGroup title="Sprachen" skills={languageSkills} />
            </div>
          </div>
        </div>
        <div id="refs" className="mb-12">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Referenzen &#128279;</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {refs.map((ref, index) => (
            
            <div  key={index}  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-3">
              <a href = {ref.link}>
              <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">{ref.name}</h2>
              <p>
                {ref.des}
              </p>
              <br/>
              <p>
                {ref.link}
              </p>
              </a>
              </div>
            
            ))}
          </div>
        </div>
      </div>
      <div id="foot" />
    </main>
  );
}
