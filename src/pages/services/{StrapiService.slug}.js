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
      markdown
      coverMedium
      coverVideo
      excerpt

      Cover {
        alternativeText
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
        id
        title
        content
        vimeo
      }
    }

    allStrapiService(filter: {title: {nin: [$slug] }}) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`

// the $slug isnt working on the allStrapiService query

/* 
Trying to do some pagination but currently I have to take all
allStrapiService {
  edges {
    node {
      title
    }
    next {
      title
    }
  }
} */

const Service = ({ data }) => {
  const service = data.strapiService;
  // const next = data.allStrapiService;
  const other = data.allStrapiService;
  return (
    <ServiceView
      service={service}
      // next={next}
      other={other}
    />
  );
};

export default Service;
