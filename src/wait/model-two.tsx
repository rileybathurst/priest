import React from "react";
// import "./styles.css";
import { Helmet } from "react-helmet";
import Astronaut from "https://priest.s3.ap-southeast-2.amazonaws.com/models/simple_metal_fence/scene.gltf";

export default function App() {
  React.useEffect(() => {
    document
      .getElementById("my-model-viewer")
      .addEventListener("error", e =>
        console.log(`Error: ${JSON.stringify(e)}`)
      );
    document
      .getElementById("my-model-viewer")
      .addEventListener("load", e => console.log(`Load: ${JSON.stringify(e)}`));
    document
      .getElementById("my-model-viewer")
      .addEventListener("ar-status", e =>
        console.log(`AR-Status: ${JSON.stringify(e)}`)
      );
  });

  return (
    <div className="App">
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        />
      </Helmet>
      <h1>Hello model-viewer</h1>
      <model-viewer
        id="my-model-viewer"
        alt="astronaut"
        src={Astronaut}
        auto-rotate
        camera-controls
      />
    </div>
  );
}
