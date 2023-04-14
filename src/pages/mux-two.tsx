// this has document so it doesnt work which is why I was doing the whole useeffect thing

import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout";

import MuxPlayer from '@mux/mux-player-react';

function MuxHome() {
  // const [isVisible, setIsVisible] = useState(document.hidden)
  const ref = useRef();

  useEffect(() => {
    let vid = ref.current;

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible") {
        vid.removeAttribute('loop');
        vid.classList.remove("noco");
      }
    })

    createObserver();

    function createObserver() {
      let observer;

      let options = {
        threshold: 0.1
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(vid);
    }

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          // console.log("🐱");
          // console.log(entry.intersectionRatio);
          vid.setAttribute('loop', '');
          vid.classList.add("noco");
        } else {
          // console.log("🐶");
          // console.log(entry.intersectionRatio);
          vid.removeAttribute('loop');
          vid.classList.remove("noco");
        }
      });
    }
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