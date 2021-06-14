import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";

const ProfileCuttingServiceView = ({ data }) => {
  return (
    <>
      <Header />
      <HeaderContact />

      <article
        style={{
          maxWidth: "75rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
        }}
      >

        <div className="splitter">
          <hr />
          <div className="cross">{/* stay gold */}</div>
        </div>

        {/* title and content area open */}
        <div
          style={{
            display: "flex",
            marginBottom: "28px",
            justifyContent: "space-between",
          }}
          className="service-info"
        >
          <h2 className="wp-block-colum">{data.title}</h2>
          <div className="wp-block-colum">
            <h3>{data.byline}</h3>
            <p>{data.Content}</p>
          </div>
        </div>

        
      </article>
      <Footer />
    </>
  );
};

export default ProfileCuttingServiceView;

export const query = graphql`
  query ProfileCuttingQuery {
    strapiService(slug: {eq: "profile-cutting"}) {
      id
      title
      slug
      byline
      Content
      coverMedium
      coverVideo

      Cover {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }

      hasVideo
      videos {
        title
        content
        vimeo
      }
    }
  }
`