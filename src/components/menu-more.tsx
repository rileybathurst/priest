import React, { useState, useEffect, useRef } from 'react';
import { Link } from "gatsby";
import ProfileIcon from './profile-icon';

// this is kinda confusing putting it behind the if means it cant be defined
// not putting it behind typescript doesnt like it

function MenuMore() {
  const ref = useRef();

  console.log("🦖 " + ref);
  console.log("🍔 " + ref.current);

  // if (ref.current) { // tsx likes this
    console.log("🦄 " + ref.current);
    console.log(ref.current['clientHeight']); // tsx likes this

    const ch: number = ref.current['clientHeight'];

    // const [more, setMore] = useState(6);
    const [more, setMore] = useState(ch);

    const moreMargin = {
      marginTop: more,
    }

    return (
      <ul className="menu__more" ref={ref} style={moreMargin}>
        <li key="more-services" className="more__service">
          <Link to="/services">🦄 Services</Link>
        </li>
        <li key="more-industries" className="more__industry">
          <Link to="/industries">🦄 Industries</Link>
        </li>
        <li key="more-contact" className="more__contact">
          <Link to="/contact">🦄 Contact</Link>
        </li>
        <li key="more-profile" className="more__profile">
          <a href="https://priestprofile.co.nz/">
            <ProfileIcon />
            🦄 Profile Cutting and Laser
          </a>
        </li>
      </ul>
    );
  /* } else {
    return null;
  } */
}

/* this defintley doesnt work with where the ref and style are
function MenuMore2() {
  return (
    <ul className="menu__more" ref={ref} style={moreMargin}>

    </ul>
  );
} */

export default MenuMore;