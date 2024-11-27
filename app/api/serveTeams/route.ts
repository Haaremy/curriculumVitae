// pages/api/files/[filename].js
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';

export default function handler(req, res) {
    const { filename } = req.query;
    const filePath = join(process.cwd(), 'generated', filename);

    if (existsSync(filePath)) {
        const fileContent = readFileSync(filePath);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.status(200).send(fileContent);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
}
