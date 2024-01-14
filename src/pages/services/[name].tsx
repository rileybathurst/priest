import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";
import SummitContact from "../../components/summit-contact";
import Card from "../../components/card";
import SEO from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { CardTypes } from "../../types/card-types";

function ServicesCatchAll({ params }) {

  const { allStrapiService } = useStaticQuery(graphql`
    query ServiceCatchQuery {
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
      <div className="albatross summit__info">
        <SummitContact />
      </div>
      <main className="stork">
        <h1>We couldn't find the service "{params.name}"</h1>
        <p>Explore our other services</p>
      </main>

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
      <Footer />
    </>
  )
}

export default ServicesCatchAll

export const Head = ({ params }) => (
  <SEO
    title={`404 ${params.name} | ${useSiteMetadata().title}`}
  />
)