import React from "react"

import Layout from "../components/layout";

import VideoPlayer from "../components/video-player";

const MuxPage = () => {

  console.log("MuxPage");
  // console.log(VideoPlayer());

  return (
    <Layout>
      <h1>Mux</h1>
      <VideoPlayer />
    </Layout>
  )
}

export default MuxPage
