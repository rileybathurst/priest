import * as React from "react";
import MaterialList from "../../content/material.yaml";

function Materials() {

  // console.log(MaterialList.material);

  MaterialList.material.map((material, index) => {
    console.log(material);

    /*     material.map((item, index) => {
          console.log(item);
        });
     */
    // console.log(index);
  });

  return (
    <div className="material">
      <h2>Materials</h2>
      {/*       {MaterialList.material.map((material, index) => {
        return (
          <div key={index} className="material__item">
          </div>
        );
      })} */}
    </div >
  );
};

export default Materials;
