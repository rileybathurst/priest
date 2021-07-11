import * as React from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import ProfileIcon from "./profile-icon";
import SmallMenu from "./small-menu";
// import ServicesNav from "./services-nav";

const Header = () => (
  <>
    <header className="hero">
      <div className="hero__logo">
        <Logo />
      </div>

      {/* this wants to be after so its over or do that with the z? */}
      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <nav id="menu_small" className="firstload inactive">
        <ul className="text-center">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="services">
            <Link to="/services">Services</Link>
          </li>
          <li key="industries">
            <Link to="/industries">Industries</Link>
          </li>
          <li key="contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li key="profile">
            <a href="https://priestprofile.co.nz/">
              <ProfileIcon />
              Profile Cutting and Laser
            </a>
          </li>
        </ul>
      </nav>

        {/* medium up navigation */}
        <nav id="menu__big">
          <div className="menu-primary-container">
            <ul className="menu align-center">
              <li key="home">
                <Link to="/">Home</Link>
              </li>
              <li key="services">
                <Link to="/services">Services</Link>
              </li>
              <li key="industries">
                <Link to="/industries">Industry Suppliers</Link>
              </li>
              {/* <li key="gallery">
                <Link to="/gallery">Gallery</Link>
              </li> */}
              <li key="contact">
                <Link to="/contact">Contact</Link>
              </li>
              <li key="profile" id="menu-primary-container__showcase">
                <a href="https://priestprofile.co.nz/">
                  <ProfileIcon />
                  Profile Cutting and Laser
                </a>
              </li>
            </ul>
{/*             <ul className="ser">
              <ServicesNav />
            </ul> */}
          </div>
        </nav>
      {/* medium up nav */}
    </header>
  </>
);

export default Header;
