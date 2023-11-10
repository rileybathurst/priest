import React, { useRef, useEffect } from 'react';

const CarouselPage2 = () => {

  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const xCatRef = useRef(null);

  // this doesnot work with or without useEffect
  /* useEffect(() => {
    const 1CatRef = useRef(null);
    const 2CatRef = useRef(null);
    const 3CatRef = useRef(null);
    const 4CatRef = useRef(null);
    const 5CatRef = useRef(null);
  }, []); */

  // maybe i do it kinda backwards?
  useEffect(() => {

  }, []);

  const numberCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToXCat() {
    xCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  let numbers = [1, 2, 3, 4, 5];

  // this breaks the things
  // numbers.forEach((number) => {
  /*     function handleScrollToNumberCat() {
        numberCatRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      } */
  // });


  let later = [6, 7, 8];

  const lateCatRef = useRef(null);


  // scrolls to last
  function handleScrollToLateCat() {
    lateCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <div className='car-check'>
      <nav>
        {/*         <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
        <button onClick={handleScrollToXCat}>
          X
        </button>
        {numbers.map((number) => (
          <button key={number} onClick={handleScrollToNumberCat}>
            {number}
          </button>
        ))} */}
        {later.map((late) => (
          <button key={late} onClick={handleScrollToLateCat}>
            {late}
          </button>
        ))}
      </nav>
      <div>
        <ul>
          {/*           <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={xCatRef}
            />
          </li>
          {numbers.map((number) => (
            <li key={number}>
              <img
                src="https://placekitten.com/g/200/200"
                alt={`${number}CatRef`}
              // ref={`${number}CatRef`}
              />
            </li>
          ))} */}
          {later.map((late) => (
            <li key={late}>
              <h2>{late}</h2>
              <img
                src="https://placekitten.com/g/200/200"
                alt={`${late}CatRef`}
                // ref={`lateCatRef`} // nope
                // ref={late} // nopre
                // ref={lateCatRef} // * yes
                ref={late} // nopre
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default CarouselPage2;
