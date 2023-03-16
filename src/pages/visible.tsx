import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout";

function UsePageVisibility() {
  const [isVisible, setIsVisible] = useState(document.hidden)

  console.log(isVisible);

  const ref = useRef();
  // console.log(ref);

/*   document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      console.log("🍔");
      // setIsVisible(document.hidden);
    } else {
      console.log("🍟");
      // setIsVisible(document.hidden);
      // vid.removeAttribute(loop);

      let vid = ref.current;
      // console.log(vid);
      // console.log(vid.attributes);
      vid.removeAttribute('loop');


    }
  } */);

  return (
    <video
      loop
      ref={ref}
    />
  );

}

const VisiblePage = () => {
  return (
    <Layout>
      <h1>Visible</h1>
      Test
      {/* <GetBrowserVisibilityProp /> */}
      <UsePageVisibility />
    </Layout >
  )
}

export default VisiblePage
