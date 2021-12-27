import * as React from "react"
// import { Link } from "gatsby" // I should add this back in as a simple link home

// import { StaticImage } from "gatsby-plugin-image"

// import '@google/model-viewer';
import '@google/model-viewer/dist/model-viewer';

const ModelPage = () => {
  return (
    <main>
      <h1>Model</h1>
      <p>Testing</p>
      <model-viewer
        alt="simple metal fence"
        src="../images/cheeseburger.glb"
        ar ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls />
    </main>
  )
}

export default ModelPage

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}
