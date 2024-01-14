// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import SummitContact from "../components/summit-contact";
import SEO from "../components/seo";

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const FAQPage = () => {
  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>
      <main className="stork">
        <h1>Frequently Asked Questions</h1>
      </main>
      <Footer />
    </>
  )
}

export default FAQPage

export const Head = () => (
  <SEO
    title={`FAQ | ${useSiteMetadata().title}`}
  />
);
