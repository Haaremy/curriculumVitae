"use client"; // Mark this file as a Client Component

import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


interface DirectoryInfo {
    name: string;
    path: string;
}

export default function Navigation({ directories = [] }: { directories?: DirectoryInfo[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
    const [dynamicHref, setDynamicHref] = useState("/");
    const languages = ["Deutsch"];


    // Filter filenames
    const filteredDirectories = directories
    .filter(dir => dir.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(dir => !dir.name.endsWith('.tsx'))
    .filter(dir => !dir.name.endsWith('.css'))
    .filter(dir => !dir.name.startsWith('api'))
    .filter(dir => !dir.name.startsWith('blank'));
   

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

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith("/Weihnachtsolympiade")) {
            setDynamicHref("/Weihnachtsolympiade");
        } else {
            setDynamicHref("/");
        }
    }, []);
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        console.log("Theme: "+savedTheme);
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);
    

    return (
        <main className="bg-gray-100 dark:bg-gray-900 z-50 ">
            <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {setIsHovered(searchQuery!="")}}
            >
                <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-screen-xl">
                    <a href={dynamicHref} className="inline-flex items-center">
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
                        onChange={(e) => {setSearchQuery(e.target.value); setIsHovered(e.target.value!="");}}
                        className="ml-4 p-2 w-1/3  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-pink-400"
                    />

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleDropdown()}
                        tabIndex={0}
                        className="p-2 rounded-full bg-gray-800 text-white dark:bg-pink-500"
                        >                        <span className="sr-only">Open Menu</span>
                            {/* Tool wheel icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 50 50" stroke="currentColor">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>    
                        </button>
                        {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <button onClick={() => { /* Handle login */ }} className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                ?Login
                            </button>
                            <button onClick={toggleDarkMode} className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                {isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                            <div className="border-t border-gray-200 dark:border-gray-700"></div>
                            <div className="px-4 py-2">
                                <label className="block text-gray-800 dark:text-gray-200 mb-1">Language</label>
                                <select className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200">
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang.toLowerCase()}>
                                            {lang}
                                        </option>
                                    ))}
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
                onMouseLeave={() => setIsHovered(searchQuery!="")}
            >
                <div className={filteredDirectories.length === 0 ? "grid gap-4 grid-cols-1" : "grid gap-4 grid-cols-5"}>
                    {filteredDirectories.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">Keinen Eintrag gefunden.</p>
                    ) : filteredDirectories.length > 5 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">Zu viele Einträge.</p>
                    ) : (
                        filteredDirectories.map(({name, path}) => (
                            <a
                                key={name}
                                href={`https://haaremy.de/${path}`}
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
