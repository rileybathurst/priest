import React from 'react';

import MuxPlayer from '@mux/mux-player-react';

export default function MuxVideo(props) {

  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={props.mux}
    // TODO: needs a poster image
    />
  )
}