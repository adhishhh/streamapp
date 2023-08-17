const express = require('express');
const { startStream, stopStream } = require('./streamController'); // You'll need to implement these functions
const app = express();
const port = 3000;

app.use(express.json());

// Start streaming
app.post('/start-stream', (req, res) => {
  const cameraIP = req.body.cameraIP;
  startStream(cameraIP);
  res.json({ message: 'Streaming started' });
});

// Stop streaming
app.post('/stop-stream', (req, res) => {
  stopStream();
  res.json({ message: 'Streaming stopped' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
