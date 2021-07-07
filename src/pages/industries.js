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

const IndustriesPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Industries - Priest Sheetmetal &amp; Plate Christchurch" />

      <HeaderContact />

      <main className="container">
        <div className="tasks__wrapper">
        {data.allStrapiIndustries.edges.map(document => (
          <>
          <section key="industries" className="tasks">
            <h4 className="tasks__title">
              <Link to={`/industries/${document.node.slug}`}>{document.node.title}</Link>
            </h4>

            <div className="tasks__background--upper shadow">
              {/* stay gold */}
            </div>

            <Link to={`/industries/civil`} className="tasks__image shadow">
            <GatsbyImage
              image={
                document.node.cover?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
              alt={document.node.cover?.alternativeText}
            />
            </Link>

            <div className="tasks__info">
            <Byline />
            {document.node.content}
              <Link to={`/industries/civil`} className="tasks__more">
                <span className="button hollow">More about Civil</span>
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
  query IndustriesQuery {
    allStrapiIndustries(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          content
          byline
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

export default IndustriesPage;
