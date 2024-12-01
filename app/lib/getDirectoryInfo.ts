import path from "path";
import fs from "fs";

export interface DirectoryInfo {
  name: string;
  path: string;
}

export const getDirectoryInfo = (directory: string): DirectoryInfo[] => {
  const directories: DirectoryInfo[] = [];

  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      directories.push({
        name: file,
        path: fullPath.split(`${path.sep}app`)[1], // Normalize path
      });
      directories.push(...getDirectoryInfo(fullPath)); // Recursive call
    }
  }

  return directories;
};
