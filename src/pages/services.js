import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>;
  } else {
    return null;
  }
}

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Services - Priest Sheetmetal &amp; Plate Christchurch"
        description="Specialist laser cutting &amp; steel suppliers, fabricatiors and welders in Chrirstchurch. With over 67 years running experience, Priest Sheetmetal is an established name as a manufacturer and supplier of profile cut and fabricated steelwork to Christchurch businesses."
      />

      <HeaderContact />

      <main className="container">
      <div className="tasks__wrapper">
        {data.allStrapiService.edges.map(document => (
          <>
            <section key={document.node.id} className="tasks">
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
                    document.node.Cover?.localFile?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={document.node.Cover?.alternativeText}
                  className="shadow"
                />
              </Link>

{/*               <div className="tasks__background--lower shadow">
                stay gold
              </div> */}

              <div className="tasks__info">
                <Byline byline={document.node.byline} />
                <p>{document.node.Content}</p>
                <Link
                  to={`/services/${document.node.slug}`}
                  className="tasks__more"
                >
                  <span className="button hollow">
                    More about {document.node.title}
                  </span>
                </Link>
              </div>
            </section>
            <div className="tasks__cross cross__wrapper">
              <hr className="cross__hr" />
              <div className="cross__divider">{/* stay gold */}</div>
            </div>
          </>
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
          Content
          byline
          slug

          Cover {
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
