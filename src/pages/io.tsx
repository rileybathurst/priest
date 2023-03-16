import React, { useState, useEffect, useRef } from "react"

const IO = () => {

  const ref = useRef();
  // console.log(ref);

  useEffect(() => {
    const spine = ref.current;
    createObserver();
    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: 1.0
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(spine);
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

  });

  const [ratio, setRatio] = useState(0);

  return (
    <h1
      ref={ref}
    >
      {ratio}
    </h1>
  )
}

const IOPage = () => {
  return (
    <>
      <h1>IO</h1>
      <IO />
    </>
  )
}

export default IOPage
