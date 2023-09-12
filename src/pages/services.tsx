import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import SEO from "../components/seo";
import Card from "../components/card";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const ServicesPage = () => {

  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          id
          shortname
          byline
          excerpt
          slug

          cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1)
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
          {data.allStrapiService.nodes.map((service: {
            id: string;
            slug: string;
            shortname: string;
            byline: string;
            cover: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData; }; }; alternativeText: string; };
            excerpt: string;
          }) => (
            <div key={service.id}>
              <Card
                content={service}
                breadcrumb="services"
              />
            </div>
          ))}
          <div>{/* stay gold */}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

export const Head = () => (
  <SEO
    title={`Services | ${useSiteMetadata().title}`}
  />
)
