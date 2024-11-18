import path from 'path';
import fs from 'fs';
import Entrylist from './entrylist';

export default function Home() { 
  const mainDirectory = path.join(process.cwd(), 'app');
  const filenames = fs.readdirSync(mainDirectory);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Willkommen Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Willkommen auf Haaremy.de</h1>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
          Fühl dich frei, alle Seiten zu erkunden. Diese Website dient meiner persönlichen Weiterentwicklung. Es kann passieren, dass die Website nicht erreichbar ist, da der entsprechende Server zwar dauerhaft läuft, aber keinen kommerziellen Zweck erfüllt.
        </p> 
      </section>
      {/* Willkommen Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Service Info</h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
          Die Website wurde mit NextJs erstellt. Alle Inhalte wurden von mir und mit Unterstützung von ChatGPT selber geschrieben und werden auf GitHub verwaltet.
          Die involvierten Apache2-Debian-Server stehen bei mir zuhause und werden per CloudFlare erreicht. Die Website ist ein Node.js Service per Reverse Proxy. Der Betrieb kann nicht garantiert werden.
        </p>
      </section>

      {/* Entrylist Section */}
        <div className="w-full items-center justify-between font-mono text-sm lg:flex mr-25 ml-25">
          <Entrylist filenames={filenames} />
        </div>
    </main>
  );
}
