import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
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
      <HeaderContact />

      <main className="page-width">
        <h1>{strapiCraftsmanship.title}</h1>
        <ReactMarkdown children={strapiCraftsmanship.body.data.body} />
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
