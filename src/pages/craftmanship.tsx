// disallowed on robots.txt
// waiting on content from client

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import SummitContact from "../components/summit-contact";
import SEO from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import ReactMarkdown from 'react-markdown'

const CraftsmanshipPage = () => {

  const { strapiCraftsmanship } = useStaticQuery(graphql`
    query CraftsmanshipQuery {
      strapiCraftsmanship {
        title
        body {
          data {
            body
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>

      <main className="stork">
        <h1>{strapiCraftsmanship.title}</h1>
        <ReactMarkdown children={strapiCraftsmanship.body.data.body} />
        {/* Porche style why the old was good and where the future is going */}
      </main>
      <Footer />
    </>
  );
};

export default CraftsmanshipPage;

export const Head = () => (
  <SEO
    title={`Craftmanship | ${useSiteMetadata().title}`}
  />
)
