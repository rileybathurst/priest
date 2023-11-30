// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import HeaderContact from "../components/header-contact";
import SEO from "../components/seo";

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const TeamPage = () => {
  return (
    <>
      <Header />
      <HeaderContact />
      <main className="albatross">
        <h1>Team</h1>
      </main>
      <Footer />
    </>
  )
}

export default TeamPage

export const Head = () => (
  <SEO
    title={`Team | ${useSiteMetadata().title}`}
  />
);
