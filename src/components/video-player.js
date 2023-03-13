import React from "react"

import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer() {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="F2Ph1IJOqPZZdZWI7Xqca2eZ7A5ZMNJGcj2HfCVdBPU"
    />
  );
}