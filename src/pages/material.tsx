// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import MaterialList from "../../content/material.yaml"
import Header from "../components/header";
import Footer from "../components/footer";

const MaterialPage = () => {

  // TODO: create a set from all possible options
  // let reference = ['1.6', '2', '3', '4', '5', '6', '10', '12', '16', '20', '25', '32', '60', '80', '100', '120']


  const reference = Array.from(new Set(Object.values(MaterialList.material).flatMap(Object.values).flatMap(Object.values).flatMap(Object.values).flatMap(Object.keys)));
  // reference.sort();
  // console.log(reference);

  let numberArray = reference.map(Number);
  numberArray.sort((a, b) => a - b);
  let stringArray = numberArray.map(String);
  console.log(stringArray);

  return (
    <>
      <Header />
      <h1 className="text-center">Material List</h1>
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
      <Footer />
    </>
  )
}

export default MaterialPage

