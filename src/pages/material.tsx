// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
// import MaterialList from "../../content/material.yaml"
import Header from "../components/header";
import Footer from "../components/footer";
import Material from "../components/material";

const MaterialPage = () => {

  /*   const reference = Array.from(new Set(Object.values(MaterialList.material).flatMap(Object.values).flatMap(Object.values).flatMap(Object.values).flatMap(Object.keys)));
  
    let numberArray = reference.map(Number);
    numberArray.sort((a, b) => a - b);
    let stringArray = numberArray.map(String);
    console.log(stringArray); */

  return (
    <>
      <Header />
      <h1 className="text-center">Material List</h1>
      <Material />
      <Footer />
    </>
  )
}

export default MaterialPage

