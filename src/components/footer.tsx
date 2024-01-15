// TODO: move the svg out to clean up the file

import * as React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

import Wordmark from "./wordmark";
import Cross from "./cross";
import ServicesNav from "./services-nav";
import Phone from "../icons/phone";
import Fax from "../icons/fax";
import Email from "../icons/email";
import Map from "../icons/map";

const Footer = () => (
  <footer className="page-footer">

    <nav>
      <ServicesNav />
    </nav>

    <Cross />

    <nav>
      <ul>
        <li key="about">
          <Link to="/contact">
            About
          </Link>
        </li>
        <li key="team">
          <Link to="/team"
            activeClassName="active"
          >
            Team
          </Link>
        </li>
        <li key="terms">
          <Link to="/terms"
            activeClassName="active"
          >
            Terms &amp; Conditions
          </Link>
        </li>
        <li key="portal">
          <a href="http://portal.greatstuff.co.nz/" target='_blank' rel='noopener noreferrer' >
            Client Portal
          </a>
        </li>
      </ul>
    </nav>

    <Cross />

    <ul className="footer__contacts">
      <li key="phone">
        <a href={`tel: ${useSiteMetadata().telephone}`}>
          <Phone />
          <p>
            Phone us<br />
            {useSiteMetadata().telephone}
          </p>
        </a>
      </li>

      <li key="email">
        <a href={`mailto:${useSiteMetadata().email}`}>
          <Email />
          <p>
            Email us<br />
            {useSiteMetadata().email}
          </p>
        </a>
      </li>

      <li key="map">
        <a href={useSiteMetadata().mapGoogle}>
          <Map />
          <p>
            Find us<br />
            {useSiteMetadata().location.address.streetAddress}
          </p>
        </a>
      </li>

      {/* this should be last as its the only not linked */}
      <li key="fax">
        <div className="no-link">
          <Fax />
          <p>
            Fax us<br />
            {useSiteMetadata().faxNumber}
          </p>
        </div>
      </li>

    </ul>



    <Cross />

    <div className="footer__copyright">
      <Wordmark />
      <p>&copy; {new Date().getFullYear()}</p>
    </div>

  </footer >
);

export default Footer;
