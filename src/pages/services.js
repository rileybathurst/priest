import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from '../components/layout'
import HeaderContact from "../components/header-contact"
import Seo from "../components/seo"


function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>
  } else {
    return null
  }
}

const ServicesPage = ({ data }) => {
  return (
  <Layout>
    <Seo title ="Services - Priest Sheet Metal &amp; Plate Christchurch" />

    <HeaderContact />

    <main className="container">

    <div className="tasks__wrapper">
      {data.allStrapiService.edges.map(document => (
        <section className="tasks">
            <h4 className="tasks__title">
                <Link to={`/services/${document.node.slug}`}>
                    {document.node.title}
                </Link>
            </h4>
            
            <div className="tasks__background--upper shadow">{/* stay gold */}</div>

            <Link to={`/services/${document.node.slug}`} className="tasks__image shadow">
              <GatsbyImage image={document.node.Cover.childImageSharp.gatsbyImageData} className="shadow" />
                {/* alt={document.node.title} */}
            </Link>

            <div className="tasks__background--lower shadow">{/* stay gold */}</div>

            <div className="tasks__info">
                <Byline byline={document.node.byline} />
                <p>{document.node.Content}</p>
                <Link to={`/services/${document.node.slug}`} className="tasks__more">
                    <span className="button hollow">More about {document.node.title}</span>
                </Link>
            </div>

            <hr className="tasks__divider" />
            <div className="tasks__divider--cross">{/* stay gold */}</div>

        </section>
      ))}
      </div>{/* tasks__wrapper */}

    </main>

  </Layout>

/* 
    <ul>
      {data.allStrapiService.edges.map((document) => (
        <li>
          <Link to={document.node.slug}>
            {document.node.title}
            <GatsbyImage image={document.node.Cover.childImageSharp.gatsbyImageData} />
          </Link>
        </li>
      ))}
    </ul> */
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
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }

        }
      }
    }
  }
`;

export default ServicesPage;
