import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServicesPage = ({ data }) => {
  // const cover = getImage(document.node.Cover); // this isnt it
  // so I'm not sure If I can do it this or it pulls in from anoter file?

  // const cover = getImage(document.node.Cover);

  // You may also consider refactoring code to make use of the getImage helper function.
  // this would imply it's not that needed?
  return (
    <ul>
      {data.allStrapiService.edges.map((document) => (
        <li>
          <Link to={document.node.slug}>
            {document.node.title}
            <GatsbyImage image={document.node.Cover.childImageSharp.gatsbyImageData} />
          </Link>
        </li>
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
