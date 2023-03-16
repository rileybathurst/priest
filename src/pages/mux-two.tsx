// this has document so it doesnt work which is why I was doing the whole useeffect thing

import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout";

import MuxPlayer from '@mux/mux-player-react';

function MuxHome() {
  // const [isVisible, setIsVisible] = useState(document.hidden)
  const ref = useRef();

  /*   document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible") {
        let vid = ref.current;
        vid.removeAttribute('loop');
        vid.classList.remove("noco");
      }
    }) */

  useEffect(() => {

    console.log(ref.current);
    console.log(document.hidden);

  }, [])


  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId="KX8WTyujaU9laFVeyL020000y8jDcyXgdLCXJc1G01mYXac"
      autoPlay="muted"
      loop
      noHotKeys
      ref={ref}
      className="noco"
    // TODO: needs a poster image
    />
  )
}

const MuxPage = () => {

  return (
    <Layout>
      <h1>Mux One</h1>
      <MuxHome />
      Test
    </Layout>
  )
}

export default MuxPage
