import * as React from "react";
import MaterialList from "../../content/material.yaml";

function Materials() {

  console.log(MaterialList.material);

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
