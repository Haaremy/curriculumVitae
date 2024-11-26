"use client";
import React, { useState } from "react";
import Fire from "./Fire";
import "./Page.css";
import Image from "next/image";

const Page: React.FC = () => {
  const [fireStarted, setFireStarted] = useState(false);

  const handleStartFire = () => {
    setFireStarted(true);
  };

  return (
    <div
      className={`page-container ${fireStarted ? "fire-on" : "fire-off"}`}
      onClick={handleStartFire}
    >
      {/* Fire placeholder to prevent layout shift */}
      <div className="fire-placeholder">
        {fireStarted && <Fire />}
      </div>

      {/* Centered Image */}
      <div className="firepit-container">
        <Image
          alt="Firepit"
          width={250}
          height={200}
          src="/images/map_og.jpg"
          className="firepit-image"
        />
      </div>
    </div>
  );
};

export default Page;
