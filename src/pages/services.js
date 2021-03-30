// this is the category page

import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
// import Img from 'gatsby-image'

function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>;
  } else {
    return null;
  }
}

const ServicesPage = ({ data }) => (
  <Layout>
    <Seo title="Services - Priest Sheet Metal &amp; Plate Christchurch" />

    <HeaderContact />

    <main className="container">
      <div className="tasks__wrapper">
        {data.allStrapiService.edges.map((document) => (
          <section className="tasks">
            <h4 className="tasks__title">
              <Link to={`/services/${document.node.slug}`}>
                {document.node.title}
              </Link>
            </h4>

            <div className="tasks__background--upper shadow">
              {/* stay gold */}
            </div>

            <div className="tasks__background--lower shadow">
              {/* stay gold */}
            </div>

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

            <hr className="tasks__divider" />
            <div className="tasks__divider--cross">{/* stay gold */}</div>
          </section>
        ))}
      </div>
      {/* tasks__wrapper */}
    </main>
  </Layout>
);

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesQuery {
    allStrapiService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          Content
          byline
          slug
        }
      }
    }
  }
`;
