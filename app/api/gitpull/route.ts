import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import https from 'https';
import fs from 'fs';
import { NextResponse } from 'next/server';

// SSL Certificates
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/haaremy.de/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/haaremy.de/fullchain.pem')
};


const app = express();
const PORT = 6000; // Port to listen on

export const GET = async () => {
    return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 });
  };

// Middleware to parse JSON body
app.use(bodyParser.json());

app.post('/api/gitpull/', (req: Request, res: Response) => {
    // Deploy code when webhook is received
    exec('cd /var/www/haaremy.de && git pull origin master && npm install && pm2 restart haaremy-app', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        return res.status(500).send('Deployment failed');
      }
  
      console.log(stdout);
      res.status(200).send('Deployment successful');
    });
  });

// Create the HTTPS server with SSL
https.createServer(options, app).listen(PORT, () => {
  console.log(`Listening for GitHub webhooks on https://localhost:${PORT}`);
});
