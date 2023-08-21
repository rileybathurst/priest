// TODO: bring in more variables from gatsby-config

import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Cross from "../components/cross";
import Map from '../components/map';

const ContactPage = () => (
  <>
    <Header />
    <main className="page-width">
      <h1>Contact Us</h1>

      <p>
        {/* // TODO: check if these need a better syntax */}
        Phone Us: <a href={`tel: ${useSiteMetadata().telephone}`}>{useSiteMetadata().telephone}</a>
        <br />
        Fax:&nbsp;{useSiteMetadata().faxNumber}
        <br />
        Email:&nbsp;
        <a href="mailto:enquiries@priestsheetmetal.co.nz">
          enquiries@priestsheetmetal.co.nz
        </a>
      </p>

      <Cross />

      <h2>Or Come In And See Us At The Factory</h2>

      <address>
        <a href="https://goo.gl/maps/oAXRnNknMU3vNg2r5">
          10 Barbour Street,
          <br />
          Waltham,
          <br />
          Christchurch, 8011
          <br />
          New Zealand
        </a>
      </address>

      <Cross />

      <h2>Terms and Conditions</h2>
      <p><Link to="/terms">Read our terms and conditions of purchase.</Link></p>

      <Cross />
    </main>

    <section id="map" className="map__back">
      <Map />
    </section>
    <Footer />
  </>
);

export default ContactPage;

export const Head = () => (
  <SEO
    title={`Contact | ${useSiteMetadata().title}`}
    description={`Get in touch with ${useSiteMetadata().title}`}
  />
);