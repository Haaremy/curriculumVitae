"use client";

import { useState } from 'react';

export default function Page() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Always-visible Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-md h-full ${
          isSidebarExpanded ? 'w-64' : 'w-16'
        } transition-all duration-300 ease-in-out z-30`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Icon visible when sidebar is collapsed */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isSidebarExpanded ? 'text-transparent' : 'text-gray-500'} transition-colors duration-300`}
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

          {/* Sidebar Content visible when expanded */}
          <div className={`flex-col items-center ${isSidebarExpanded ? 'flex' : 'hidden'} transition-all duration-300`}>
            <ul className="space-y-4 mt-4 w-full px-2">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-6 rounded-lg text-center bg-pink-600 text-white dark:bg-pink-400 transition-colors duration-300 hover:bg-pink-700 dark:hover:bg-pink-300"
                >
                  ContentObjects
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarExpanded ? 'pl-64' : 'pl-16'} flex-1 w-full transition-all duration-300`}>
        <div className="imprint p-4">
          <h2 className="text-2xl font-bold mb-4">Impressum</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold">Betreiber</h3>
              <p>Jeremy Becker</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Postanschrift</h3>
              <p>Friedrich-Ebert-Str. 3, 06366 Köthen</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Kontakt</h3>
              <p>Telefon: +49157 / 30062682</p>
              <p>E-Mail: info@haaremy.de, haaremy@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Rechtsform</h3>
              <p>Privatperson</p>
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-600" />

            <div>
              <h3 className="text-lg font-semibold">Rechtliche Hinweise zur Webseite</h3>

              <h4 className="mt-4 font-semibold">Haftungsausschluss / Haftung für Inhalte</h4>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h4 className="mt-4 font-semibold">Haftung für Links</h4>
              <p>
                Meine Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h4 className="mt-4 font-semibold">Urheberrecht</h4>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>

              <h4 className="mt-4 font-semibold">Datenschutz</h4>
              <p>
                Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
