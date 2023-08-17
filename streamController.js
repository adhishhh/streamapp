const Stream = require('node-rtsp-stream');

let stream;

function startStream(cameraIP) {
  if (!stream) {
    stream = new Stream({
      name: 'streamName',
      streamUrl: cameraIP, // RTSP URL of the camera
      wsPort: 9999,
    });
  }
}

function stopStream() {
  if (stream) {
    stream.stop();
    stream = null;
  }
}

module.exports = { startStream, stopStream };
