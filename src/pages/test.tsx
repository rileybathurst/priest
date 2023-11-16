import * as React from "react"
import TestList from "../../content/test.yaml"

const TestPage = () => {

  return (
    <>
      {TestList.test.map((item, key) => {
        const nested = Object.entries(item).map(([key, value]) => {
          const second = Object.entries(value).map(([key, value]) => {
            const third = Object.entries(value).map(([key, value]) => {
              let reference = ['1.6', '2', '3', '4', '5', '6', '10', '12', '16', '20', '25', '32', '60', '80', '100', '120']
              const keysArray = Object.keys(value);

              const listItems = reference.map((key) => {
                if (keysArray.includes(key)) {
                  return (
                    <li key={key} className="y">
                      ✓
                    </li>
                  );
                } else {
                  return (
                    <li key={key} className="n">
                      ✗
                    </li>
                  );
                }
              });

              return (
                <li key={key}>
                  {key}
                  <ul className="thickness">
                    {listItems}
                  </ul>
                </li>
              )
            });

            return (
              <ul key={key}>
                {third}
              </ul>
            )
          });


          return (
            <ul key={key}>
              <li key={key}>
                {key}
                {second}
              </li>
            </ul>
          )
        });

        return (
          <div key={key} className="table">
            {nested}
          </div>
        )
      })}
    </>
  )
}

export default TestPage

