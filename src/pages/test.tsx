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
              // console.log(value); // this is an object with keys are the numbers
              // console.log(value[0]); // this is null because I need the key not the value
              // console log the key of each value in the object
              // console.log(Object.keys(value)); // this is an array of the keys

              let reference = ['1.6', '2', '3', '4', '5', '6', '10', '12', '16', '20', '25', '32', '60', '80', '100', '120']
              console.log(reference);

              if (reference.includes(Object.keys(value))) {
                // console.log('🦄');
              } else {
                // console.log('🦖');
              }

              // console.log(value); // this is an object with keys are the numbers
              // create an array from the keys of object value
              const keysArray = Object.keys(value);
              console.log(keysArray); // ['key1', 'key2', 'key3']

              const listItems = keysArray.map((key) => {
                if (reference.includes(key)) {
                  return (
                    <li key={key} className="y">
                      ✓ {key}
                    </li>
                  );
                } else {
                  return (
                    <li key={key} className="n">
                      ✗ {key}
                    </li>
                  );
                }
              });

              /*               if (reference.includes(Object.keys(value))) {
                              // console.log('🦄');
                              return (
                                <li key={value} className="yes">
                                  {value}
                                </li>
                              )
                            } else {
                              // console.log('🦖');
                              return (
                                <li key={value} className="no">
                                  &nbsp;
                                </li>
                              )
                            } */

              let fourth = Object.entries(value).map(([key, value]) => {
                // console.log(key);
                // console.log(value);

                // console.log(typeof key);

                // what if i build this array here and then pass it up to the third level
                // ? why do some of these not work?
                let reference = [1.6, 2, 3, 4, 5, 6, 10, 12, 16, 20, 25, 32, 60, 80, 100, 120]
                // console.log(reference);

                // ! this is checking against key not value
                // if (key in reference) {
                /* if (reference.includes(key)) {
                  return (
                    <li key={key} className="yes">
                      {key}
                    </li>
                  )
                } else {
 
                  // console.log('🦖 no ' + key + ' is not in the array')
 
                  return (
                    <li key={key} className="no">
                      {key}
                    </li>
                  )
                } */
              });

              // this is close but I might have to do it backwards to get spaces
              let fourV2 = Object.entries(value).map((value) => {
                // console.log(value);
                // console.log(value[0]);

                // make them strings not numbers as thats what im getting from the yaml
                let reference = ['1.6', '2', '3', '4', '5', '6', '10', '12', '16', '20', '25', '32', '60', '80', '100', '120']
                // console.log(reference);

                /* if (reference.includes(value[0])) {
                  return (
                    <li key={value[0]} className="yes">
                      {value[0]}
                    </li>
                  )
                } else {
                  return (
                    <li key={value[0]} className="no">
                      {value[0]}
                    </li>
                  )
                } */



              });

              return (
                <>
                  {key}{/* // * GR250 this seems like its nested a layer deeper than it should be */}
                  <ul className="thickness">
                    {/* {fourth} */}
                    {fourV2}
                    {listItems}
                  </ul>
                </>
              )
            });

            return (
              <ul>
                {/* <li key={key}> */}
                {third}
                {/* </li> */}
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

