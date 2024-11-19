import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import path from 'path';
import fs from 'fs';
import Navigation from './navigation';
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haaremy.de",
  description: "Meine CodingWiese.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  interface DirectoryInfo {
    name: string;
    path: string;
  }
  
  // Recursive function to get directory names and paths
  const getDirectoryInfo = (directory: string): DirectoryInfo[] => {
    const directories: DirectoryInfo[] = [];
  
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        directories.push({ name: file, path: fullPath.split(`${path.sep}app`)[1] }); // Add directory info
        // Recursively get subdirectory info
        directories.push(...getDirectoryInfo(fullPath));
      }
    }
  
    return directories;
  };
  
  // Main directory
  const mainDirectory = path.join(process.cwd(), 'app');
  const directories = getDirectoryInfo(mainDirectory);
  
  return (
    <html lang="de" className="dark">
      <body className={inter.className}>
        <nav>      
          <Navigation directories={directories} />
        </nav>
        {children}
        <nav>
          <Footer/>
        </nav>
      </body>
    </html>
  );
}
