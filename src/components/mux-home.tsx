import React, { useState, useEffect, useRef } from 'react';

import MuxPlayer from '@mux/mux-player-react';

export default function MuxHome() {
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