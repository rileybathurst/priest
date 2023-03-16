import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/layout";
/* 
function UsePageVisibility() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);

    let vid = ref.current;

    console.log(document);

    /*     vid.addEventListener("visibilitychange", () => {
          if (vid.visibilityState === "visible") {
            console.log("🍔");
          } else {
            console.log("🍟");
          }
        });
    
      }, []);

    return (
      <h1
        ref={ref}
      >
        Hey
      </h1>
    );

  } */

const VisiblTwoPage = () => {
  return (
    <Layout>
      <h1>Visible</h1>
      Test
      {/* <GetBrowserVisibilityProp /> */}
      {/* <UsePageVisibility /> */}
    </Layout >
  )
}

export default VisiblTwoPage
