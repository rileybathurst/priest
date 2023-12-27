// TODO: turn the menu items into variables

import React from "react";
import { Link } from "gatsby";
import Wordmark from "./wordmark";
import SmallMenuToggle from "./small-menu";
import Banner from "./banner";

const MenuList = () => (
  <>
    <li key="folding">
      <Link
        to="/services/press-brake-folding/"
        activeClassName="active"
      >
        Folding
      </Link>
    </li>
    <li key="profile">
      <Link
        to="/services/laser-profile-cutting/"
        activeClassName="active"
      >
        Cutting
      </Link>
    </li>
    <li key="contact">
      <Link
        to="/contact"
        activeClassName="active"
      >Contact
      </Link>
    </li>
  </>
)

const Header = () => (
  <>
    <div className="top-bar">
      <Banner />
    </div>

    <header className="hero">
      <div className="hero__logo">
        <Wordmark />
      </div>

      {/* // ? this wants to be after so its over or do that with the z? */}
      <SmallMenuToggle />

      {/* more of this could be done in reactive ways */}
      <nav id="menu_small" className="firstload">
        <ul className="text-center">
          <MenuList />
        </ul>
      </nav>

      <div className="menu__wrapper">
        <nav id="menu__big">
          <ul className="menu align-center">
            {/* // TODO: these would be nicer with a query to featured services */}
            <MenuList />
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
