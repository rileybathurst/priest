import * as React from "react"
import { Link } from "gatsby" // I should add this back in as a simple link home
import Layout from "../components/layout"
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

// import { StaticImage } from "gatsby-plugin-image"

// import '@google/model-viewer';
import '@google/model-viewer/dist/model-viewer';

const ModelPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found - Priest Sheetmetal &amp; Plate Christchurch" />
      <HeaderContact />
      <main className="page-width">
        <p><Link to="/">Home</Link>  &gt; Model</p>
        <h1>Model</h1>
        <p>Testing</p>
{/*         <model-viewer
          src="https://priest.s3.ap-southeast-2.amazonaws.com/models/schlossbruecke_-_28/scene.gltf"
          camera-controls
        /> */}

        <model-viewer
        alt="simple metal fence"
        src="https://priest.s3.ap-southeast-2.amazonaws.com/models/simple_metal_fence/scene.gltf"
        ar ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls />

{/* // environment-image="shared-assets/environments/moon_1k.hdr"
        // poster="assets/NeilArmstrong.webp" */}

        {/* this could be a problem */}
        {/* <img src="../images/priest-og-image.jpg" />

        <StaticImage
          src="../images/priest-og-image.jpg"
        /> */}

      </main>
    </Layout>
  )
}

export default ModelPage
