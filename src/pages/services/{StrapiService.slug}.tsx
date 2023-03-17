import * as React from "react"
import { graphql } from "gatsby"
import ServiceView from "../../views/service-view"

// TODO ArticleQuery is a bad name

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiService(slug: { eq: $slug }) {
      id
      title
      slug

      excerpt
      content {
        data {
          content
        }
      }

      coverMedium
      coverVideo
      muxCover

      cover {
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
        mux
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

const Service = ({ data }) => {
  const service = data.strapiService;
  // test
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
