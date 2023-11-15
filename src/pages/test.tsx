import * as React from "react"
import TestList from "../../content/test.yaml"

const TestPage = () => {

  return (
    <>
      {TestList.test.map((item) => {
        // console.log(item)

        const nested = Object.entries(item).map(([key, value]) => {
          // console.log(key);
          // console.log(value);

          const second = Object.entries(value).map(([key, value]) => {
            // console.log(key);
            // console.log(value); // this is still an object
            // console.log(value);

            const third = Object.entries(value).map(([key, value]) => {
              // console.log(key);

              // refeence for the table
              if (key === "thickness") {
                // console.log('🔑');
                // i think this is too early
                // let reference = []
                // reference.push(value)
                // console.log(reference);
              }
              // console.log(value);

              let fourth = Object.entries(value).map(([key, value]) => {
                console.log(key);
                console.log(value);

                console.log(typeof key);

                // what if i build this array here and then pass it up to the third level
                // ? why do some of these not work?
                let reference = [1.6, 2, 3, 4, 5, 6, 10, 12, 16, 20, 25, 32, 60, 80, 100, 120]
                console.log(reference);

                // ! this is checking against key not value
                if (key in reference) {
                  return (
                    <li key={key} className="yes">
                      {key}
                    </li>
                  )
                } else {

                  console.log('🦖 no ' + key + ' is not in the array')

                  return (
                    <li key={key} className="no">
                      {key}
                    </li>
                  )
                }
              });

              return (
                <>
                  {key}{/* // * GR250 this seems like its nested a layer deeper than it should be */}
                  <ul className="thickness">
                    {fourth}
                  </ul>
                </>
              )
            });

            return (
              <ul>
                <li key={key}>
                  {third}
                </li>
              </ul>
            )
          });


          return (
            <div key={key}>
              {key}{/* // * carbon */}
              {second}
            </div>
          )
        });

        return (
          <div className="table">
            {nested}
          </div>
        )
      })
      }
    </>
  )
}

export default TestPage

