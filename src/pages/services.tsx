import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import SEO from "../components/seo";
import Card from "../components/card";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { CardTypes } from "../types/card-types";
import SeoShowcase from "../components/seo-showcase";
const ServicesPage = () => {

  const { allStrapiService } = useStaticQuery(graphql`
    query ServiceQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          id
          title
          shortname
          byline
          excerpt
          slug

          cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <HeaderContact />

      <main className="container">

        <h1 className='page-width'>
          Services
        </h1>

        <div className="deck">
          {allStrapiService.nodes.map((service: CardTypes, index: number) => (
            <Card
              content={service}
              breadcrumb="services"
              key={index}
            />
          ))}
          <div>{/* stay gold */}</div>
        </div>
      </main>
      <Footer />
      <SeoShowcase
        title={`Services | ${useSiteMetadata().title}`}
      />
    </>
  );
};

export default ServicesPage;

export const Head = () => (
  <SEO
    title={`Services | ${useSiteMetadata().title}`}
  />
)
