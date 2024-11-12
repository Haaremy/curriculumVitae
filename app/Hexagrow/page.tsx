"use client"; // Make sure this is at the top of the file

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
    const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
        loaderUrl: "/unity/build.loader.js",
        dataUrl: "/unity/build.data",
        frameworkUrl: "/unity/build.framework.js",
        codeUrl: "/unity/build.wasm",
        companyName: "Haaremy Productions",
    });

    const loadingPercentage = Math.round(loadingProgression * 100);

    function handleClickEnterFullscreen() {
        requestFullscreen(true);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mb-12">
                <div>
                    <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Hexagrow ver. 1.0</h1>
                    <br/>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    &#34Hexagrow&#34 ist ein Gruppenprojekt aus dem Modul &#34Spieleentwicklung&#34 an der Hochschule Anhalt.
                        Wir, Jamila Gränzer, Ashly Fonseka und ich, haben im Zeitraum April bis September 2023 das Spiel
                        erschaffen. Es handelt sich lediglich um einen studentischen Prototypen und uns sind diverse Bugs bekannt.
                        Alle Inhalte von Design, Graphiken, Musik und Code wurden von uns drei ohne Drittanbieter erstellt.
                        Credits: Jamila - Musik, Ashly - Code, Jeremy - Code, Design & Graphik.
                    </p>
                    <br/>
                    <div className="unity-container">
                        <Unity 
                            unityProvider={unityProvider} 
                            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }} // responsive design
                            className={`${isLoaded ? 'block' : 'hidden'} my-unity-app`}
                        />
                        <button
                            onClick={handleClickEnterFullscreen}
                            aria-label="Enter fullscreen mode"
                            tabIndex={0}
                            role="button"
                            className="btn-fullscreen mt-4"
                        >
                            {"> Fullscreen"}
                        </button>
                        {isLoaded === false && (
                            <div className="loading-overlay">
                                <p>Loading... ({loadingPercentage}%)</p>
                            </div>
                        )}
                    </div>
                    <br/>
                    <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Anleitung</h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        Steuerung: <br/>
                        - Linke Maus / 1 Finger : Drag and Drop<br/>
                        - Rechte Maus / 2 Finger : Map bewegen<br/>
                        - Mausrad : Zoom<br/>
                        <br/>
                        Main-Menü: <br/>
                        - Links Oben (Pflanze) : Play<br/>
                        - Links Unten (Joker) : Einstellungen<br/>
                        - Rechts Oben (Exit) : Spiel beenden <br/>
                        - Rechts Unten (Wagen) : Shop<br/>
                        - Mitte (Wasser) : Auslösepunkt für Drag and Drop<br/>
                        <br/>
                        Spielstart: <br/>
                        - die Pflanze ins Wasser ziehen<br/>
                        - ziehe das gewünsche Level (1 - 7) in das leere Feld<br/>
                        <br/>
                        Regeln:<br/>
                        - ziehe eines der Tiles von den drei Tile-Türmen in ein leere Feld<br/>
                        - Ziel ist es einen Pfad von Pflanze zum Wasser zu schaffen<br/>
                        - du darfst von der Pflanze sowie vom Wasser aus starten<br/>
                        - Barrieren können nur durch Joker (bspw Schaufel) entfernt werden<br/>
                        <br/>
                        Bug-basierte-Regeln (BBS):<br/>
                        - Pfade dürfen nicht in Barrieren (bspw. Knochen) enden : Niederlage trotz Sieg<br/>
                        - Pfade dürfen nicht ohne Anschluss-Pfad gelegt werden : Niederlage trotz Sieg<br/>
                    </p>
                </div>
            </section>
        </main>
    );
}
