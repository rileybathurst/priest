import React from "react"

import Layout from "../components/layout";

import MuxPlayer from '@mux/mux-player-react';

const MuxPage = () => {

  return (
    <Layout>
      <h1>Mux One</h1>
      <MuxPlayer
        streamType="on-demand"
        playbackId="KX8WTyujaU9laFVeyL020000y8jDcyXgdLCXJc1G01mYXac"
        autoPlay="muted"
        loop
        noHotKeys
      // TODO: needs a poster image
      />
      Test
    </Layout>
  )
}

export default MuxPage
