import * as React from "react"
import { Link } from "gatsby"
import HeaderContact from "../components/header-contact";
import SEO from "../components/seo";
import SeoShowcase from "../components/seo-showcase";
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <HeaderContact />
      <main className="page-width">
        <h1>NOT FOUND</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist....<br />
          Let's try take this back to the <Link to="/">home page</Link> and start again.</p>
      </main>
      <Footer />
      <SeoShowcase
        title={`404 | ${useSiteMetadata().title}`}
      />
    </>
  )
}

export default NotFoundPage

export const Head = () => (
  <SEO
    title={`404 | ${useSiteMetadata().title}`}
  />
);
