"use client"; // Mark this file as a Client Component

import { useState, useEffect } from 'react';
import React from 'react';


export default function Entrylist({ filenames }: { filenames: string[] }) {
    const [randomizedFilenames, setRandomizedFilenames] = useState<string[]>([]);

    // Function to filter and shuffle the filenames
    const filterAndShuffleFilenames = (filenames: string[]) => {
        const filtered = filenames
            .filter(name => !name.endsWith('.tsx'))
            .filter(name => !name.endsWith('.css'))
            .filter(name => !name.startsWith('api'))
            .filter(name => !name.startsWith('blank'));
        
        return filtered.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        // Only shuffle and set filenames when `filenames` prop changes
        setRandomizedFilenames(filterAndShuffleFilenames(filenames));
    }, [filenames]); // Dependency array only includes `filenames`

    return (
    
        <div className="flex flex-col justify-center items-center mb-32 w-full  sm:px-2 mb:px-4 lg:px-16 xl:px-32 2xl:px-64">
                
                <section className="bg-white dark:bg-gray-800 px-32 pt-2 sm:px-64 rounded-lg shadow-lg max-w-4xl text-center mb-6">
        <h1 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-4">Discover</h1>
      </section><br/><br/>


            <div className="items-center justify-center grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 w-full col-span-2">
                {randomizedFilenames.map((name, index) => (
                    <a
                        key={name}
                        href={`/en/${name}`}
                        className={`group flex flex-col justify-center items-center min-w-[150px] relative block rounded-lg border border-gray-800 dark:border-white p-5 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:border-pink-400 hover:bg-gray-100 dark:hover:border-pink-400 dark:hover:bg-gray-800/30 text-center ${
                            index % 3 === 0 ? 
                            name.length<=10 ? "sm:col-span-1 col-span-2" : "col-span-2" 
                            : "col-span-2"
                        }`}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <h2 className="text-xl px-2 font-semibold text-gray-800 dark:text-gray-200">{name}</h2>
                    </a>
                ))}
            </div>
        </div>
    );
}
