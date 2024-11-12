'use client'
import { useState, useEffect } from 'react';

export default function Navigation({ filenames }: { filenames: string[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // Toggle theme
    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md z-50">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 12.6a7.5 7.5 0 00-.2-1.8l2.1-1.7a.9.9 0 00.2-1.1l-2-3.4a.9.9 0 00-1-.4l-2.5 1a7.7 7.7 0 00-2.2-1.2l-.4-2.6A.9.9 0 0012 2h-4a.9.9 0 00-.9 1l-.4 2.6a7.7 7.7 0 00-2.2 1.2l-2.5-1a.9.9 0 00-1 .4l-2 3.4a.9.9 0 00.2 1.1l2.1 1.7a7.5 7.5 0 000 3.6l-2.1 1.7a.9.9 0 00-.2 1.1l2 3.4a.9.9 0 001 .4l2.5-1a7.7 7.7 0 002.2 1.2l.4 2.6a.9.9 0 00.9 1h4a.9.9 0 00.9-1l.4-2.6a7.7 7.7 0 002.2-1.2l2.5 1a.9.9 0 001-.4l2-3.4a.9.9 0 00-.2-1.1l-2.1-1.7a7.5 7.5 0 00.2-1.8zM12 15a3 3 0 110-6 3 3 0 010 6z" />
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
                                    <option value="en">English</option>
                                    <option value="de">Deutsch</option>
                                    {/* Add more languages here */}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
