import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const GalleryPage = ({ data }) => {
  return (
    <ul>
        {data.allStrapiGalleries.edges.map((document) => (
          <li>
            <Link to={document.node.id}>
              {document.node.alt}
            </Link>
            <GatsbyImage image={document.node.galleryImage.childImageSharp.gatsbyImageData} />
            </li>
        ))}
      </ul>
  );
};

export const query = graphql`
  query GalleryQuery {
    allStrapiGalleries {
      edges {
        node {
          id
          alt

          galleryImage {
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

export default GalleryPage;