import React from 'react';
import ReactAudioPlayer from 'react-audio-player';




export default function audioTrack() {
  return (
    <ReactAudioPlayer
    src="/audio/TTtsnB.mp3"
    autoPlay
    controls
  />
  )
}

