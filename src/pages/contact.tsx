// TODO: bring in more variables from gatsby-config

import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Map from '../components/map';

const ContactPage = () => (
  <>
    <Header />
    <main className="page-width">
      <h1>Contact Us</h1>

      <h2 className="dampier">
        {/* // TODO: check if these need a better syntax */}
        Phone us<br />
        <a href={`tel: ${useSiteMetadata().telephone}`}>
          {useSiteMetadata().telephone}
        </a>
      </h2>

      <h2 className="dampier">
        Fax us<br />
        {useSiteMetadata().faxNumber}
      </h2>

      <h2 className="dampier">
        Email us<br />
        <a href={`mailto:${useSiteMetadata().email}`}>
          {useSiteMetadata().email}
        </a>
      </h2>

      <h2 className="dampier">
        Find Us<br />
        {/* // TODO: this needs address html tags */}
        <address>
          <a href={useSiteMetadata().mapGoogle}>
            {useSiteMetadata().location.address.streetAddress},
            <br />
            {useSiteMetadata().location.address.addressLocality},
            <br />
            {useSiteMetadata().location.address.addressRegion}, {useSiteMetadata().location.address.postalCode}
            <br />
            {useSiteMetadata().location.address.addressCountry}
          </a>
        </address>
      </h2>

    </main>

    <section id="map">
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