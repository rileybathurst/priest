// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import { Link } from "gatsby"
import SummitContact from "../components/summit-contact";
import SEO from "../components/seo";

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const PortalPage = () => {
  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>
      <main className="albatross">
        <h1>COMING SOON</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist....<br />
          Let's try take this back to the <Link to="/">home page</Link> and start again.</p>
      </main>
      <Footer />
    </>
  )
}

export default PortalPage

export const Head = () => (
  <SEO
    title={`Portal | ${useSiteMetadata().title}`}
  />
);
