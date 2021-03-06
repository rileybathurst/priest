import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Cross from "../components/cross";

const ContactPage = () => (
  <Layout>
    <Seo
      title="Contact - Priest Sheetmetal &amp; Plate Christchurch"
      description="Get in touch with Priest Sheetmetal"
    />
    <p className="breadcrumbs breadcrumbs__contact"><Link to="/">Home</Link>  &gt; <span>Contact</span></p>
    <main className="page-width">


      <h1>Contact</h1>

      <p>
        Phone: <a href="tel:(03) 366 9818">(03) 366 9818</a>
        <br />
        Fax: <a href="tel:(03) 366 9819">(03) 366 9819</a>
        <br />
        Email:{" "}
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
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797"
        width="1200"
        height="450"
        frameBorder="0"
        allowFullScreen
        className="lozad vimeo"
      />
    </section>
  </Layout>
);

export default ContactPage;
