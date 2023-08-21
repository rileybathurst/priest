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

const Footer = (props: { current?: any; }) => (
  <footer>


    <nav>
      <ServicesNav />
    </nav>

    <Cross />


    <nav>
      <ul>
        <li key="about">
          <Link to="/about">
            About
          </Link>
        </li>
        <li key="team">
          <Link to="/team">
            Team
          </Link>
        </li>
        <li key="terms">
          <Link to="/terms">
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </nav>

    <Cross />

    <div className="footer__contacts">
      <a href={`tel: ${useSiteMetadata().telephone}`}>
        <Phone />
        <p>
          Phone us<br />
          {useSiteMetadata().telephone}
        </p>
      </a>

      <a href={`mailto:${useSiteMetadata().email}`}>
        <Email />
        <p>
          Email us<br />
          {useSiteMetadata().email}
        </p>
      </a>


      <div className="no-link">
        <Fax />
        <p>
          Fax us<br />
          {useSiteMetadata().faxNumber}
        </p>
      </div>
      {/* .footer__contact--method  */}

      <a href={useSiteMetadata().mapGoogle}>
        <Map />
        <p>
          Find us<br />
          {useSiteMetadata().location.address.streetAddress}
        </p>
      </a>

    </div>



    <Cross />

    <div className="footer__copyright">
      <Wordmark />
      <p>&copy; {new Date().getFullYear()}</p>
    </div>

  </footer >
);

export default Footer;
