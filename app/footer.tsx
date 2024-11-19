"use client"; // Mark this file as a Client Component

import { useState, useEffect, useRef } from 'react';

export default function Footer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [isDropdown3Open, setIsDropdown3Open] = useState(false);
    const dropdownRef = useRef(null);
    const dropdown2Ref = useRef(null);
    const dropdown3Ref = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleDropdown2 = () => setIsDropdown2Open(!isDropdown2Open);
    const toggleDropdown3 = () => setIsDropdown3Open(!isDropdown3Open);

    const closeDropdowns = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
        if (dropdown2Ref.current && !dropdown2Ref.current.contains(e.target)) {
            setIsDropdown2Open(false);
        }
        if (dropdown3Ref.current && !dropdown2Ref.current.contains(e.target)) {
            setIsDropdown3Open(false);
        }
    };

    useEffect(() => {
        // Close dropdowns when clicking outside
        document.addEventListener('mousedown', closeDropdowns);
        return () => {
            document.removeEventListener('mousedown', closeDropdowns);
        };
    }, []);
 
    return (
        <main className="bg-gray-100 dark:bg-gray-900 z-50 relative">
            {/* Footer Section */}
            <footer className="bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md z-50">
                <div className="container mx-auto flex items-center justify-between px-4 py-3  max-w-screen-xl">
                    <a href='/' className='inline-flex items-center'>
                        <img src="/images/Logo24.png" className="h-6 w-auto"  width={24} height={24} />
                        <p className="hidden sm:inline text-lg font-semibold text-gray-800 dark:text-gray-200 ml-2">
                            Haaremy
                            <span>&nbsp;
                                <code className="font-mono font-bold text-pink-600 dark:text-pink-400">CodeWiese</code>
                            </span>
                        </p>
                    </a>
                    
                    <div className="relative" ref={dropdown3Ref} onMouseLeave={toggleDropdown3}>
                        {/* Trigger button */}
                        <button
                            onClick={toggleDropdown3}
                            onMouseEnter={toggleDropdown3}
                            aria-expanded={isDropdown3Open}
                            className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-white"
                        >
                            Kontakt
                        </button>

                        {/* Dropdown menu */}
                        {isDropdown3Open && (
                            <div className="absolute right-50 bottom-full mt-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg z-10">
                                <a
                                    id="tel"
                                    href="tel:+4915730062682"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +49 1573 0062682
                                </a>
                                <a
                                    id="mail"
                                    href="mailto:haaremy@gmail.com"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    haaremy@gmail.com
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="relative" ref={dropdownRef} onMouseLeave={toggleDropdown}>
                        {/* Trigger button */}
                        <button
                            onClick={toggleDropdown}
                            onMouseEnter={toggleDropdown}
                            aria-expanded={isDropdownOpen}
                            className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-white"
                        >
                            Netzwerke
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 bottom-full mt-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg z-10">
                                <a
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
                    <div className="relative" ref={dropdown2Ref} onMouseLeave={toggleDropdown2}>
                        {/* Trigger button */}
                        <button
                            onMouseEnter={toggleDropdown2}
                            aria-expanded={isDropdown2Open}
                            className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-white"
                        >
                            Rechtliches
                        </button>

                        {/* Dropdown menu */}
                        {isDropdown2Open && (
                            <div className="absolute right-0 bottom-full mt-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg z-10">
                                <a
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
