import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Gallery - Priest Sheet Metal &amp; Plate Christchurch" />
      <HeaderContact />
      <main className="gallery-width">
        <h1 className="text-center">Gallery</h1>

        <ul className="blocks-gallery-grid">
          {data.allStrapiGalleries.edges.map((document) => (
            <li key="document.node.alt" className="gallerygallery">
              <GatsbyImage
                image={
                  document.node.galleryImage?.localFile?.childImageSharp?.gatsbyImageData
                }
                alt={
                  document.node.id}
              />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GalleryQuery {
    allStrapiGalleries(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          alt

          galleryImage {
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

export default GalleryPage;
