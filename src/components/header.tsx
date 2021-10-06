import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import ProfileIcon from "./profile-icon";
import SmallMenuToggle from "./small-menu";
import ServicesNav from "./services-nav";
import IndustryNav from "./industry-nav";
import MenuMore from "./menu-more";

// is this enough to go to a new file?
function Moused() {

  function cheese() {
    setMouse("cheese");
  }

  function cat() {
    setMouse("cat");
  }

  const [mouse, setMouse] = useState("cat");

  return (
    <>
      <Link to="/services" className={`menu__over ${mouse}`}>Services</Link> {/* state of the mouse */}
      {/* this might solve the A11y problem <Link onMouseEnter={cheese} onMouseLeave={cat}> */}
      <ul
        className="menu__hover menu__hover--multiline"
        onMouseEnter={cheese}
        onMouseLeave={cat}
      >
        <ServicesNav />
      </ul>
    </>
  );
}

function Id() {

  function cheese() {
    setMouse("cheese");
  }

  function cat() {
    setMouse("cat");
  }

  const [mouse, setMouse] = useState("cat");

  return (
    <>
      <Link to="/industries" className={`menu__over ${mouse}`}>Industry Suppliers</Link>
      <ul
        className="menu__hover"
        onMouseEnter={cheese}
        onMouseLeave={cat}
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
        <li key="small-home">
          <Link to="/">Home</Link>
        </li>
        <li key="small-services">
          <Link to="/services">Services</Link>
        </li>
        <li key="small-industries">
          <Link to="/industries">Industries</Link>
        </li>
        <li key="small-contact">
          <Link to="/contact">Contact</Link>
        </li>
        <li key="small-profile">
          <a href="https://priestprofile.co.nz/">
            <ProfileIcon />
            Profile Cutting and Laser
          </a>
        </li>
      </ul>
    </nav>

    {/* medium up navigation */}
    <nav id="menu__big">
      <div className="menu-primary-container">{/* this should be removable */}
        <ul className="menu align-center">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="services" className="menu__big--services">
            <Moused />
          </li>
          <li key="industries" className="menu__big--industries">
            <Id />
          </li>
          <li key="contact" className="menu__big--contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li key="profile" id="menu-primary-container__showcase" className="menu__big--profile">
            <a href="https://priestprofile.co.nz/">
              <ProfileIcon />
              Profile Cutting and Laser
            </a>
          </li>
          <li key="more" className="menu__big--more">

            <MenuMore />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
