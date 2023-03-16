// this has document so it doesnt work which is why I was doing the whole useeffect thing

import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout";

import MuxPlayer from '@mux/mux-player-react';

function MuxHome() {
  // const [isVisible, setIsVisible] = useState(document.hidden)
  const ref = useRef();

  useEffect(() => {

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible") {
        let vid = ref.current;
        vid.removeAttribute('loop');
        vid.classList.remove("noco");
      }
    })


    createObserver();
    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: 1.0
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(ref.current);
    }

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio);
          console.log(entry.intersectionRatio);
        } else {
          setRatio(entry.intersectionRatio);
          console.log(entry.intersectionRatio);
        }

        prevRatio = entry.intersectionRatio;
      });
    }


    // console.log(ref.current);
    // console.log(document);
    // console.log(window);

  }, [])

  const [ratio, setRatio] = useState(0);

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
