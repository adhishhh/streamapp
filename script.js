document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const cameraIPInput = document.getElementById('cameraIP');
    const liveStream = document.getElementById('liveStream');
  
    let streamActive = false;
  
    startButton.addEventListener('click', async () => {
      const cameraIP = cameraIPInput.value;
      if (cameraIP && !streamActive) {
        await fetch('/start-stream', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cameraIP }),
        });
        liveStream.src = 'http://localhost:9999/streamName'; // Replace with your actual stream URL
        streamActive = true;
      }
    });
  
    stopButton.addEventListener('click', async () => {
      if (streamActive) {
        await fetch('/stop-stream', { method: 'POST' });
        liveStream.src = ''; // Clear the video source
        streamActive = false;
      }
    });
  });
  