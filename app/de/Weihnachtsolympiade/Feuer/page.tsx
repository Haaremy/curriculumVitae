"use client";

import React, { useState } from "react";
import Fire from "./Fire";
import "./page.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [fireStarted, setFireStarted] = useState(false);
  const router = useRouter();

  const handleStartFire = () => {
    if (fireStarted) {
      // Redirect user based on locale
      const currentLocale = navigator.language.startsWith("de") ? "de" : "en";
      const path =
        currentLocale === "de"
          ? "/de/Weihnachtsolympiade"
          : "/en/Olympia";
      router.push(path);
      return;
    }

    setFireStarted(true);
  };

  return (
    <main className="justify-center">
      {/* Christmas Message */}
      

      {/* Page Container */}
      <div
        className={`page-container ${fireStarted ? "fire-on" : "fire-off"}`}
        onClick={handleStartFire}
      >
        {/* Fire Animation */}
        <div className="fire-placeholder">
          {fireStarted && <Fire />}
        </div>
        <div className="christmas-text">
        {!fireStarted ? (
          <p className="click-text">Click zum Start</p>
        ) : (
          <>
            <p>Frohe Weihnachten und faire Wettkämpfe wünscht der FSR-INS!</p>
            <p>Teamwork und Spaß sollen mit euch sein.</p>
          </>
        )}
      </div>

        {/* Firepit Image */}
        <div className="firepit-container">
          <Image
            alt="Firepit"
            width={300}
            height={200}
            src="/images/map_og.jpg"
            className="firepit-image"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
