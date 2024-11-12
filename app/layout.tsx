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

  const mainDirectory = path.join(process.cwd(), 'app');
  const filenames = fs.readdirSync(mainDirectory);
  return (
    <html lang="de" className="dark">
      
      <body className={inter.className}>
        <nav>      
          <Navigation filenames={filenames} />
        </nav>
        {children}
        <nav>
        <Footer/>
      </nav>
      </body>
    </html>
  );
}
