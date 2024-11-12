"use client"; // Mark this file as a Client Component

import { useState } from 'react';


export default function Footer() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
        setIsDropdown2Open(!isDropdown2Open);
    };
    
    return (
        <main className="bg-gray-100 dark:bg-gray-900 z-50 relative">
            {/* Footer Section */}
            <footer className="bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 shadow-md z-40">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    <a href='/' className='inline-flex items-center'>
                        <img src="/images/Logo24.png" className="h-6 w-auto" />
                        <p className="hidden sm:inline text-lg font-semibold text-gray-800 dark:text-gray-200 ml-2">
                        Haaremy
                        <span className="">&nbsp;
                            <code className="font-mono font-bold text-pink-600 dark:text-pink-400">CodeWiese</code>
                        </span>
                    </p>
                    </a>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <a href="tel:+4915730062682">Telefon</a>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <a href="mailto:webmaster@haaremy.de">Mail</a>
                    </p>
                    <div className="relative">
                        {/* Trigger button */}
                        <button
                        onClick={toggleDropdown}
                        onMouseEnter={toggleDropdown}
                        
                        className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-white"
                        >
                            {"Netzwerke"}
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 bottom-full mt-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg z-10">                                <a
                                id="Instagram"
                                href="https://instagram.com/haaremy"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                                <a
                                id="Youtube"
                                href="https://www.youtube.com/@haaremy"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    YouTube
                                </a>
                                <a
                                id="Github"
                                href="https://github.com/Haaremy"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        {/* Trigger button */}
                        <button
                        onClick={toggleDropdown2}
                        onMouseEnter={toggleDropdown2}
                        
                        className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-white"
                        >
                            {"Rechtliches"}
                        </button>

                        {/* Dropdown menu */}
                        {isDropdown2Open && (
                            <div className="absolute right-0 bottom-full mt-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg z-10">                                <a
                                id="Impressum"
                                href="https://haaremy.de/Impressum"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Impressum
                                </a>
                                <a
                                id="Datenschutz"
                                href="https://haaremy.de/Datenschutz"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Datenschutz
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </footer> 
        </main>
    );
}
