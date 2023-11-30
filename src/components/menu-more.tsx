import React, { useState, useEffect, useRef } from 'react';
import { Link } from "gatsby";
import ProfileIcon from './profile-icon';

function MenuMore() {
  const refMore = useRef();

  const [moreStyle, setMore] = useState('0px');
  const [moreHeight, setMoreHeight] = useState('0');
  // console.log("🍔 " + moreStyle);

  const moreMargin = {
    marginTop: moreStyle,
    // display: 'none',
    // opacity: moreOpacity,
  };

  function moreToggle() {
    if (refMore.current) { // tsx likes this
      // console.log(refMore.current['clientHeight']); // tsx likes this
      const ch = refMore.current['clientHeight'];
      // - 62 additional pixels? guess and check this probably depends on number of rows
      const plus = ch + 80;
      // check the syntax
      const togethter = `-${plus}px`;
      // console.log("🍔 " + togethter);

      if (moreStyle === '0px') {
        setMore(togethter);
      } else {
        setMore('0px');
      }

    } // else throw error?
  }

  useEffect(() => {
    moreToggle();
  }, []);

  function moreRise() {
    moreToggle();
  }

  function moreDrop() {
    setMore('0px');
    // console.log("🦖 " + moreStyle);
  }

  return (
    <>
      <button
        className="more-button"
        onClick={moreToggle}
        onMouseOver={moreToggle}
        onMouseLeave={moreRise}
      >
        More
      </button>
      {/* onMouseOver={moreDrop} onMouseLeave={moreRise} */}
      <ul className="menu__more" ref={refMore} style={moreMargin} onMouseOver={moreDrop} >
        <li key="more-services" className="more__service">
          <Link to="/services">Services</Link>
        </li>
        <li key="more-industries" className="more__industry">
          <Link to="/industries">Industries</Link>
        </li>
        <li key="more-contact" className="more__contact">
          <Link to="/contact">Contact</Link>
        </li>
        <li key="more-profile" className="more__profile">
          <a href="https://priestprofile.co.nz/">
            <ProfileIcon />
            Profile Cutting and Laser
          </a>
        </li>
      </ul>
    </>
  );
}

export default MenuMore;