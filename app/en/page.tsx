import path from 'path';
import fs from 'fs';
import Entrylist from './entrylist';

export default function Home() { 
  const mainDirectory = path.join(process.cwd(), 'app/en');
  const filenames = fs.readdirSync(mainDirectory);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 pt-20 bg-pink-50 dark:bg-gray-900">
      {/* Willkommen Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Welcome to Haaremy.de</h1>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
        Feel free to explore all pages and subpages. This website is for my personal experiments and other temporary purposes. It may happen that the website is not accessible because the corresponding server is running permanently but does not serve any commercial purpose.        </p> 
      </section>
      {/* Willkommen Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl text-center mb-12">
        <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">Service Info</h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
        The website was built with NextJs. All content was written by me with the support of ChatGPT and is managed semi-automatically on GitHub.
        The Apache2 servers involved on Debain systems are located at my home and are accessed via CloudFlare. The website is a Node.js service via reverse proxy. Operation cannot be guaranteed.</p>
      </section>

      {/* Entrylist Section */}
        <div className="w-full items-center justify-between font-mono text-sm lg:flex mr-25 ml-25">
          <Entrylist filenames={filenames} />
        </div>
    </main>
  );
}
