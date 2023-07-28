// TODO: turn the menu items into variables

import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import ProfileIcon from "./profile-icon";
import SmallMenuToggle from "./small-menu";
import ServicesNav from "./services-nav";
import IndustryNav from "./industry-nav";

function ServicesMenu() {

  function open() {
    setWindow("open");
  }

  function close() {
    setWindow("close");
  }

  const [window, setWindow] = useState("close");

  return (
    <>
      <Link to="/services" className={`menu__over ${window}`}>Services</Link>
      {/* this might solve the A11y problem <Link onMouseEnter={open} onMouseLeave={close}> */}
      <ul
        className="menu__hover menu__hover--multiline"
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <ServicesNav />
      </ul>
    </>
  );
}

function Id() {

  function open() {
    setWindow("open");
  }

  function close() {
    setWindow("close");
  }

  const [window, setWindow] = useState("close");

  return (
    <>
      <Link to="/industries" className={`menu__over ${window}`}>Industry Suppliers</Link>
      <ul
        className="menu__hover"
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <IndustryNav />
      </ul>
    </>
  );
}

const Header = () => (
  <header className="hero">
    <div className="hero__logo">
      <Logo />
    </div>

    {/* this wants to be after so its over or do that with the z? */}
    <div id="menu_toggle" className="shadow-darker">
      <SmallMenuToggle />
    </div>

    {/* more of this could be done in reactive ways */}
    <nav id="menu_small" className="firstload">
      <ul className="text-center">
        <li key="folding">
          <Link to="/services/press-brake-folding/">Folding</Link>
        </li>
        <li key="profile">
          <Link to="/services/laser-profile-cutting/">
            Cutting
          </Link>
        </li>
        <li key="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <div className="menu__wrapper">
      <nav id="menu__big">
        <ul className="menu align-center">
          {/* // TODO: these would be nicer with a query to featured services */}
          <li key="folding">
            <Link to="/services/press-brake-folding/">Folding</Link>
          </li>
          <li key="profile">
            <Link to="/services/laser-profile-cutting/">
              Cutting
            </Link>
          </li>
          <li key="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
