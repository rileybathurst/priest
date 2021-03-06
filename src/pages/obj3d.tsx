import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import Layout from "../components/layout"
import HeaderContact from "../components/header-contact";

const style = {
  height: 500 // we can control scene size by setting container dimensions
};

class App extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addLights();
    this.loadTheModel();
    this.startAnimationLoop();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
  // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.z = 10; // is used here to set some distance from a cube that is located at z = 0
    // OrbitControls allow a camera to orbit around the object
    // https://threejs.org/docs/#examples/controls/OrbitControls
    this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref

    this.renderer.setClearColor(0xf5f5f5); // white background - replace ffffff with any hex color

  };

  // Code below is taken from Three.js OBJ Loader example
  // https://threejs.org/docs/#examples/en/loaders/OBJLoader
  loadTheModel = () => {
    // instantiate a loader
    const loader = new OBJLoader();

    // load a resource
    loader.load(
      // resource URL relative to the /public/index.html of the app
      // 'eleph.obj', // this wont work as it wont build
      'https://priest.s3.ap-southeast-2.amazonaws.com/models/Car.obj',
      // called when resource is loaded
      (object) => {
        this.scene.add(object);

        // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
        // you can always set console.log(this.scene) and check its children to know the name of a model
        // const el = this.scene.getObjectByName("Elephant_4");

        // change some custom props of the element: placement, color, rotation, anything that should be
        // done once the model was loaded and ready for display
        el.position.set(0, 150, 0);
        el.material.color.set(0x50C878);
        el.rotation.x = 23.5;

        // make this element available inside of the whole component to do any animation later
        this.model = el;
      },
      // called when loading is in progresses
      (xhr) => {

        const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
        console.log((loadingPercentage) + '% loaded');

        // update parent react component to display loading percentage
        this.props.onProgress(loadingPercentage);
      },
      // called when loading has errors
      (error) => {

        console.log('An error happened:' + error);

      }
    );
  };

  // adding some lights to the scene
  addLights = () => {
    const lights = [];

    // set color and intensity of lights
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    // place some lights around the scene for best looks and feel
    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(- 1000, - 2000, - 1000);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  startAnimationLoop = () => {
    // slowly rotate an object
    if (this.model) this.model.rotation.z += 0.005;

    this.renderer.render(this.scene, this.camera);

    // The window.requestAnimationFrame() method tells the browser that you wish to perform
    // an animation and requests that the browser call a specified function
    // to update an animation before the next repaint
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div className='model' style={style} ref={ref => (this.mount = ref)} />;
  }
}

class Container extends React.Component {
  state = { isMounted: true };

  render() {
    const { isMounted = true, loadingPercentage = 0 } = this.state;
    return (
      <Layout>
        <HeaderContact />
        <button onClick={() => this.setState(state => ({ isMounted: !state.isMounted }))}>
          {isMounted ? "Unmount" : "Mount"}
        </button>
        {isMounted && <App onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
        {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
        {isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>}
      </Layout>
    )
  }
}

const objPage = () => {
  return (
    <Container />
  );
};

export default objPage