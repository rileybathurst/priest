// TODO: bring in more variables from gatsby-config

import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import Cross from "../components/cross";
import Map from '../components/map';

const AboutPage = () => (
  <>
    <Header />
    <main className="page-width">
      <div className="split">
        <section>
          <h1>About Us</h1>

          <p>
            Phone us <a href={`tel: ${useSiteMetadata().telephone}`}>{useSiteMetadata().telephone}</a>
          </p>

          <p>
            Fax us {useSiteMetadata().faxNumber}<br />
          </p>

          <p>
            Email us <a href={`mailto:${useSiteMetadata().email}`}>
              {useSiteMetadata().email}
            </a>
          </p>

          <p>Find us

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
          </p>
        </section>

        <section id="map">
          <Map />
        </section>
      </div>

      <Cross />

      <h2>Terms and Conditions</h2>
      <p><Link to="/terms">Read our terms and conditions of purchase.</Link></p>

      <Cross />
    </main>

    <Footer />
  </>
);

export default AboutPage;

export const Head = () => (
  <SEO
    title={`About Us | ${useSiteMetadata().title}`}
    description={`Learn about us ${useSiteMetadata().title}`}
  />
);