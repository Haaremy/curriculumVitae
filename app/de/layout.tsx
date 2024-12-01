import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { getDirectoryInfo, DirectoryInfo } from "../lib/getDirectoryInfo";
import Navigation from "../de/navigation";
import Footer from "./footer";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haaremy.de",
  description: "Meine CodingWiese.",
};

// Use the `getDirectoryInfo` function on the server
const directories: DirectoryInfo[] = getDirectoryInfo(
  path.join(process.cwd(), "app")
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <nav>
          <Navigation directories={directories} />
        </nav>
        {children}
        <nav>
          <Footer />
        </nav>
      </body>
    </html>
  );
}
