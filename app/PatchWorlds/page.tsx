"use client";

import { useState } from 'react';

export default function Page() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* This is the always-visible sidebar */}
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
        <h1>PatchWorld</h1>
          <ul className="space-y-4 mt-4 w-full px-2 ">
            <li>
              <a
                href="#kapitel1"
                className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
              >
                <h2>Kapitel 1 - Titel</h2>
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </aside>


      <div className={` ${isHovered ? 'pl-64' : 'pl-16'} flex-1 w-full transition-all duration-300`}>
      <h1>PatchWorlds</h1>
      <br/>
      <h2>Beschreibung</h2>
      <br/>
      <section>
      Aleos wohnt im Haus seiner Großeltern in Kori. Einem kleinen Dorf in einer Bucht am Meer.
      Sein Großvater ist Uhrenmacher in eigener Werkstatt, spezialisiert für alte Taschenuhren und eigentlich alles was tickt.  
      Zum 12. Geburtstag vor ein paar Monaten erhielt Aleos eine dieser alten Taschenuhren. 
      Seine Großmutter war zu Lebzeiten Schneiderin mit dem wertvollsten Garn aus aller Welt. 
      Leider verstarb sie bereits zeitig während Aleos Leben. 
      Kori bietet nicht viel, bis auf einen Bahnhof, dem Steg mit kleinen Geschäften von Bauern und Fischern sowie einer Kirche. 
      Hinter dem Dorf liegt nichts außer Wald, den Aleos oft mit seiner Großmutter bewandert hatte. 
      Das Leben hier ist sehr ruhig. 
      Zumindest bevor Rioko die Rätsel seiner Großmutter fand, entschlüsselte und sein Leben hinterfragen musste. 
      Wieso lebt er hier mit seinen Großeltern, was ist mit seinen Eltern passiert und was ist mit dieser Uhr?
      </section>
      <br/>
      <h2 id="kapitel1">Kapitel 1 - Alltag</h2>
      <br/>
      <section>
      Durch die beiden Fensterläden vom Zimmer scheinen Sonnestrahlen herein. Das Zimmer ist nicht sonderlich groß,
      weshalb es schnell von Licht aufgehellt wird. Der Strahlen durch die Fensterläden liegen über den Möbeln.
      Ein kleines Bett, ein hölzener, aber aufgeräumter Schreibtisch mit dazu passendem einfachen Stuhl, ein Doppelseitiger Kleiderschrank
      sowie Kisten mit Kleinkrams. Das Zimmer ist in der Ecke vom Haus, im zweiten Stockwerk und hat Ausblick auf ein Bucht, welche von den beiden Fenstern aus zu sehen ist.
      Ein Fenster an der Linken Seite des Zimmers, über dem Bett und das andere geradeaus, an der schmalen Seite, wo die Wand nur etws breiter als als das Fenster ist.
      Im Bett liegt und schläft Aleos, ein zwölfjähriger Junge mit kurzen dunklen Haaren und beigen Leinenklamotten. 
      Alles scheint mehr als friedlich, bis eine Marderhund hineinstürmte, mit seinem vollen Körpergewicht auf Aleos sprang und sein Gesicht ableckte.
      Vollkommen unter erschrocken und aus dem Schlaf gerissen, sprang Aleos aus dem Bett.
      <br/>
      <br/>
      <p className='ml-10'>
        A: Rux!? Wie kannst du mir nur so einen Schrecken einjagen??
      </p>
      <br/>
      <br/>
      Rux, wie der Marderhund benannt wurde, ist etwa sieben Kilogramm schwer und knapp über einem halben Meter lang.
      Es ist unbekannt wie alt er ist, aber er lebt schon seit einigen Jahren im Keller des Hauses. Sein grau-braunes Fell
      ist glänzend und weicher als alle Stoffe der Welt.
      <br/>
      <br/>
      <p className='ml-10'>
        A: Du hast bestimmt Hunger? Es ist ja uch schon fast Mittag. Ich könnte für Opa und mich Fischsuppe machen und da
        fällt ganz sicher auch was für dich ab.
      </p>
      <br/>
      <br/>
      Aufgestanden und mit lockeren Schuhen auf dem Weg zum Steg. Hier gibt es einige Einkaufsläden, wo insbesondere Fischer
      und Händler ihre Ware anbieten. Der Steg liegt am untersten Teil des Dorfs, direkt am Wasser. Erst vor knappen hundert Jahren soll
      das Dorf für Händler interessant geworden sein, als der See zur Bucht wurde. Die Steilküste ist an 100 Metern weggebrochen und hat den Weg
      zum offenen Meer freigelegt. Dieser Durchbruch ist nun Die Pforte von Kori. Kori, das Dorf, liegt seither an dieser Bucht
      in Mitten eines Tals.
      </section>
      <br/> <br/>
      <section className='ml-10'>
        A: Guten Tag Herr Kapitänsleuntnant. Ich habe ein wichtiges Anliegen für den besten Fisch den Sie haben. Ich koche wieder die
        Fischspezialsuppe meines Opas.
      </section>
      <br/> <br/>
      <section className='ml-10'>
        K: Natürlich Aleos. Fangfrischer Gadus Morhua. Eigenhändig gepackt und hätte mich fast mein Leben gekostet. Macht dann vier Gulden
        für einen ganzen Fisch.
      </section>
      <br/> <br/>
      <section className='ml-10'>
        A: Nur vier Gulden für die Gefahren des Meeres? Ich nehme zwei Fische. Hier haben Sie zehn und bitte behalten Sie den Rest.
      </section>
      <br/> <br/>

      Der Kapitänsleuntnant ist der beste Fischer im Dorf und auch der größte Betrüger. Er lebt alleine in der Wohnung über seinem Fischladen,
      wobei er eher auf dem Schiff vor seinem Laden zu finden ist. Abends sitzt er oft einsam auf dem Boot und schaut Richtung Pforte. Selten
      hat er Gäste bei sich. In der Nacht verschwindet er in der regel aus dem Dorf und geht vermutlich auf Angeltour für den nächsten Tag.
      </div>
    </main>
  );
}
