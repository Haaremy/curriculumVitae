"use client"; // Mark this file as a Client Component

import { useState, useEffect } from 'react';


export default function Navigation({ filenames }: { filenames: string[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

    // Filter filenames
    const filteredFilenames = filenames
        .filter(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(name => !name.endsWith('.tsx'))
        .filter(name => !name.endsWith('.css'))
        .filter(name => !name.startsWith('api'))
        .filter(name => !name.startsWith('blank'));

   

    // Toggle theme
    const toggleDarkMode = () => {
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(!isDarkMode);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <main className="bg-gray-100 dark:bg-gray-900 z-50 relative">
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md z-50"
        onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-screen-xl">
                <a href="/" className="inline-flex items-center">
                    <img src="/images/Logo24.png" alt="Haaremy Logo" className="h-6 w-auto" width={24} height={24} />
                    <p className="hidden sm:inline text-lg font-semibold text-gray-800 dark:text-gray-200 ml-2">
                        Haaremy
                        <span className="">&nbsp;
                            <code className="font-mono font-bold text-pink-600 dark:text-pink-400">CodeWiese</code>
                        </span>
                    </p>
                </a>

                <input
                    type="text"
                    placeholder="Navigation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ml-4 p-2 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-pink-400"
                />

                <div className="relative">
                    <button onClick={toggleDropdown} className="p-2 rounded-full bg-gray-800 text-white dark:bg-pink-500">
                        <span className="sr-only">Open Menu</span>
                        {/* Tool wheel icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 50 50" stroke="currentColor">
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>    
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <button onClick={() => { /* Handle login */ }} className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Login
                            </button>
                            <button onClick={toggleDarkMode} className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                {isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                            <div className="border-t border-gray-200 dark:border-gray-700"></div>
                            <div className="px-4 py-2">
                                <label className="block text-gray-800 dark:text-gray-200 mb-1">Language</label>
                                <select className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                                    <option value="de">Deutsch</option>
                                    {/* Add more languages here */}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
        <div
                className={`${isHovered ? "opacity-100 pt-20 px-4 py-4 visible" : "opacity-0 invisible"} transition-opacity duration-500 fixed bg-gray-100 dark:bg-gray-900 w-full`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={filteredFilenames.length === 0 ? "grid gap-4 grid-cols-1" : "grid gap-4 grid-cols-5"}>
                    {filteredFilenames.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">Keinen Eintrag gefunden.</p>
                    ) : filteredFilenames.length > 5 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">Tippe...</p>
                    ) : (
                        filteredFilenames.map(name => (
                            <a
                                key={name}
                                href={`/${name}`}
                                className="block p-3 bg-white border border-gray-200 rounded-lg shadow-sm transition-colors hover:bg-gray-100 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {name}
                                    <span className="block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                        &rarr;
                                    </span>
                                </h2>
                            </a>
                        ))
                    )}
                </div>
            </div>
        </main>

    );
}
