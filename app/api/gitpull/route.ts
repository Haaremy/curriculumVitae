const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const PORT = 3000; // or any port you'd like to use

app.use(bodyParser.json());

app.post('/deploy', (req, res) => {
  // Verify the webhook payload (optional, you can use a secret)
  const payload = req.body;
  console.log('Received webhook:', payload);

  // Check if the push event contains the branch you want to deploy
  if (payload.ref === 'refs/heads/main') { // Adjust the branch if necessary
    console.log('Deploying latest changes...');

    // Pull the latest changes and restart the app
    exec('cd /var/www/haaremy.de && git pull origin main && npm install && pm2 restart haaremy-app', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        return res.status(500).send('Deployment failed');
      }

      console.log(stdout);
      res.status(200).send('Deployment successful');
    });
  } else {
    res.status(400).send('Not a push to the main branch');
  }
});

app.listen(PORT, () => {
  console.log(`Listening for GitHub webhooks on http://localhost:${PORT}`);
});
