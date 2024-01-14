import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import SummitContact from "../components/summit-contact";
import SEO from "../components/seo";
import Card from "../components/card";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { CardTypes } from "../types/card-types";
import SeoShowcase from "../components/seo-showcase";
import Cross from "../components/cross";

const ServicesPage = () => {

  const data = useStaticQuery(graphql`
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

      strapiCraftsmanship {
        title
      }
    }
  `)

  let allStrapiService = data.allStrapiService;
  let craftsmanship = data.strapiCraftsmanship;

  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>

      <main className="container">

        <div className='eyebrow albatross'>
          <h1 className='supra'>Services</h1>
          <h2 className='title'>{craftsmanship.title}</h2>
        </div>

        <Cross />

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
      {/*       <SeoShowcase
        title={`Services | ${useSiteMetadata().title}`}
      /> */}
    </>
  );
};

export default ServicesPage;

export const Head = () => (
  <SEO
    title={`Services | ${useSiteMetadata().title}`}
  />
)
