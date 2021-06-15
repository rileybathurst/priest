// this was but now I kinda want to build each individually
// {StrapiService.slug}.js

import * as React from "react"
import { graphql } from "gatsby"
import ServiceView from "../../views/service-view"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiService(slug: { eq: $slug }) {
      id
      title
      slug
      byline
      Content
      coverMedium
      coverVideo

      Cover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      hasGallery
      gallery {
        name
        alternativeText
        hash
        localFile {
          childImageSharp {
            gatsbyImageData
          }
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

const Service = ({ data }) => {
  const service = data.strapiService;
  return (
    <ServiceView service={service} />
  );
};

export default Service;
