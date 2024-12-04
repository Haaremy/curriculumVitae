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
        

        {/* Firepit Image */}
        <div className="absolute bottom-0 max-w-[500px]">
  <Image
    alt="Firepit"
    width={500} // Adjusted to fit within the max-width
    height={240} // Maintained aspect ratio (1250/600 ~ 500/240)
    src="/images/pit.png"
    className="firepit-image object-cover"
  />
</div>

      </div>
    </main>
  );
};

export default Page;
