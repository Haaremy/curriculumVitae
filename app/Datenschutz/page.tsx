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
          <h2 className="text-2xl font-bold mb-4">Datenschutz</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold">Info</h3>
              <p>Hier folgt irgenwann Inhalt.</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
