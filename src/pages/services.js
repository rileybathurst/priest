import * as React from "react";
import { Link, graphql } from "gatsby";
// import Layout from "../components/layout";
// import HeaderContact from "../components/header-contact";
// import Seo from "../components/seo";
// import Img from 'gatsby-image'

/* function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>;
  } else {
    return null;
  }
} */

const ServicesPage = ({ data }) => {
  return (
    <ul>
        {data.allStrapiService.edges.map((document) => (
          <li><Link to={document.node.slug}>{document.node.title}</Link></li>
        ))}
      </ul>
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
        }
      }
    }
  }
`;

export default ServicesPage;