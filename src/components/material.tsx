import * as React from "react";
import MaterialList from "../../content/material.yaml"

const Material = () => {

  const reference = Array.from(new Set(Object.values(MaterialList.material).flatMap(Object.values).flatMap(Object.values).flatMap(Object.values).flatMap(Object.keys)));

  let numberArray = reference.map(Number);
  numberArray.sort((a, b) => a - b);
  let stringArray = numberArray.map(String);
  console.log(stringArray);

  return (
    <div className="material-list">

      {MaterialList.material.map((item, key) => {
        const nested = Object.entries(item).map(([key, value]) => {
          const data = Object.entries(value).map(([key, value]) => {
            const third = Object.entries(value).map(([key, value]) => {
              const keysArray = Object.keys(value);

              const listItems = stringArray.map((key) => {
                if (keysArray.includes(key)) {
                  return (
                    <li key={key} className="spinner">
                      <div>
                        <span className="tick">✓</span>
                        <span className="key">{key}</span>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={key} className="no">
                      {/* ✗ */}
                      &nbsp;
                    </li>
                  );
                }
              });

              return (
                <ul key={key} className="third">
                  <li>
                    {key}
                  </li>

                  {listItems}
                </ul>

              )
            });

            return (
              <li key={key}>
                {third}
              </li>
            )
          });


          return (
            <ul key={key} className="data">
              <li key={key}> {/* this flex isnt in the right place */}
                {key}
              </li>
              {data}
            </ul>
          )
        });

        return (
          <div key={key} className="table">
            <ul className="reference">
              {stringArray.map((item, key) => {
                return (
                  <li key={key}>
                    {item}
                  </li>
                )
              })}
            </ul>
            {nested}
          </div>
        )
      })}
    </div>
  );
};

export default Material;
