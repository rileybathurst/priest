// TODO: bring in more variables from gatsby-config

import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "../components/header";
import Footer from "../components/footer";
import Cross from "../components/cross";
import SEO from "../components/seo";
import Map from '../components/map';
import SeoShowcase from "../components/seo-showcase";

const ContactPage = () => (
  <>
    <Header />
    <main className="albatross">
      <h1>Contact Us</h1>

      <div className="chain">
        <div className='button_eyebrow'>
          <p className="supra">Call us</p>
          <a
            href={`tel: ${useSiteMetadata().telephone}`}
            className='button'
          >
            <span className='background'>
              {/* stay gold */}
            </span>
            <span className="foreground">
              {useSiteMetadata().telephone}
            </span>
          </a>
        </div>

        <div className='button_eyebrow'>
          <p className="supra">Email us</p>
          <a
            href={`mailto:${useSiteMetadata().email}`}
            className='button'
          >
            <span className='background'>
              {/* stay gold */}
            </span>
            <span className="foreground">
              {useSiteMetadata().email}
            </span>
          </a>
        </div>

        <div className='button_eyebrow'>
          <p className="supra">Find us</p>
          <a
            href={`tel: ${useSiteMetadata().mapGoogle}`}
            className='button'
          >
            <span className='background'>
              {/* stay gold */}
            </span>
            <span className="foreground">
              {useSiteMetadata().location.address.streetAddress},&nbsp;
              {/* <br /> */}
              {useSiteMetadata().location.address.addressLocality},&nbsp;
              {/* <br /> */}
              {useSiteMetadata().location.address.addressRegion}, {useSiteMetadata().location.address.postalCode},&nbsp;
              {/* <br /> */}
              {useSiteMetadata().location.address.addressCountry}
            </span>
          </a>
        </div>

        <div className='button_eyebrow'>
          <p>Fax us - {useSiteMetadata().faxNumber}</p>
        </div>
      </div>

      <Cross />

    </main>

    <section id="map">
      <Map />
    </section>
    <Footer />
    <SeoShowcase
      title={`Contact | ${useSiteMetadata().title}`}
      description={`Get in touch with ${useSiteMetadata().title}`}
    />
  </>
);

export default ContactPage;

export const Head = () => (
  <SEO
    title={`Contact | ${useSiteMetadata().title}`}
    description={`Get in touch with ${useSiteMetadata().title}`}
  />
);