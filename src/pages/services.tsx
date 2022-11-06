import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
import Cross from "../components/cross";

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Services - Priest Sheetmetal &amp; Plate Christchurch"
        description="Specialist laser cutting &amp; steel suppliers, fabricatiors and welders in Chrirstchurch. With over 67 years running experience, Priest Sheetmetal is an established name as a manufacturer and supplier of profile cut and fabricated steelwork to Christchurch businesses."
      />

      <HeaderContact />

      <main className="container">
        <p className="breadcrumbs"><Link to="/">Home</Link>  &gt; Services</p>

        <div className="tasks__wrapper">
          {data.allStrapiService.edges.map(document => (
            <div key={document.node.id} >
              <section className="tasks">
                <h4 className="tasks__title">
                  <Link to={`/services/${document.node.slug}`}>
                    {document.node.title}
                  </Link>
                </h4>

                <div className="tasks__background--upper shadow">
                  {/* stay gold */}
                </div>

                <Link
                  to={`/services/${document.node.slug}`}
                  className="tasks__image shadow"
                >
                  <GatsbyImage
                    image={
                      document.node.cover?.localFile?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={document.node.cover?.alternativeText}
                    className="shadow"
                  />
                </Link>

                {/*               <div className="tasks__background--lower shadow">
                stay gold
              </div> */}

                <div className="tasks__info">
                  {/* <Byline byline={document.node.byline} /> */}
                  <p>{document.node.excerpt}</p>
                  <Link
                    to={`/services/${document.node.slug}`}
                    className="tasks__more"
                  >
                    <span>
                      More about {document.node.title}
                    </span>
                  </Link>
                </div>
              </section>
              <Cross />
            </div>
          ))}
        </div>
        {/* tasks__wrapper */}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ServiceQuery {
    allStrapiService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
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
  }
`;

export default ServicesPage;

/* 

byline

          content
          
 */