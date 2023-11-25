// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import HeaderContact from "../components/header-contact";
import SEO from "../components/seo";

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const FAQPage = () => {
  return (
    <>
      <Header />
      <HeaderContact />
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
