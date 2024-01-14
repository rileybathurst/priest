// disallowed on robots.txt
// waiting on content from client

import * as React from "react"
import SummitContact from "../components/summit-contact";
import SEO from "../components/seo";

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "../components/header";
import Footer from "../components/footer";

const TeamPage = () => {
  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>
      <main className="albatross">
        <h1>Team</h1>
        <p>Coming Soon</p>
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
