import * as React from "react"
import TestList from "../../content/test.yaml"

const TestPage = () => {

  // TODO: create a set from all possible options
  let reference = ['1.6', '2', '3', '4', '5', '6', '10', '12', '16', '20', '25', '32', '60', '80', '100', '120']

  return (
    <>

      {TestList.test.map((item, key) => {
        const nested = Object.entries(item).map(([key, value]) => {
          const second = Object.entries(value).map(([key, value]) => {
            const third = Object.entries(value).map(([key, value]) => {
              const keysArray = Object.keys(value);

              const listItems = reference.map((key) => {
                if (keysArray.includes(key)) {
                  return (
                    <li key={key} className="yes">
                      ✓
                    </li>
                  );
                } else {
                  return (
                    <li key={key} className="no">
                      ✗
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
              <div key={key}>
                <ul className="third">
                  <li key='space'>&nbsp;</li>
                  {reference.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                      </li>
                    )
                  })}
                </ul>
                {third}
              </div>
            )
          });


          return (
            <ul key={key} className="second">
              <li key={key}> {/* this flex isnt in the right place */}
                {key}
                {second}
              </li>
            </ul>
          )
        });

        return (
          <div key={key} className="table one">
            {nested}
          </div>
        )
      })}
    </ >
  )
}

export default TestPage

