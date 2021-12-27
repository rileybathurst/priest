import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// import GLTFLoader from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function Box(props) {
  const objLoader = new OBJLoader();
  // objLoader.load('../images/Car.obj', (root) => {
  // load a resource
  objLoader.load(
    // resource URL
    '../images/Car.obj',
    // called when resource is loaded
    function (object) {

      scene.add(object);

    },
    // called when loading is in progresses
    function (xhr) {

      console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function (error) {

      console.log('An error happened');

    }
  );
}

const LoaderPage = () => {
  return (
    <main>
      <h1>Model</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <Box />
      </Canvas>
      <Box />

    </main>
  )
}

export default LoaderPage
