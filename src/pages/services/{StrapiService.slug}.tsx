import * as React from "react"
import { graphql } from "gatsby"
import ServiceView from "../../views/service-view"
import SEO from "../../components/seo"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const query = graphql`
  query ServicesQuery($slug: String!) {
    strapiService(slug: { eq: $slug }) {
      id
      title
      byline
      slug

      excerpt
      content {
        data {
          content
        }
      }

      coverMedium
      coverVideo


      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      gallery {
        name
        alternativeText
        hash
        localFile {
          childImageSharp {
            gatsbyImageData(height: 500)
          }
        }
      }

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

const Service = ({ data }) => {
  const service = data.strapiService;
  // test
  // const next = data.allStrapiService;
  const other = data.allStrapiService;
  return (
    <ServiceView
      service={service}
      other={other}
    />
  );
};

export default Service;

export const Head = ({ data }) => (
  // export const Head = (service) => (
  <SEO
    title={`${data.strapiService.title} | ${useSiteMetadata().title}`}
    description={data.strapiService.excerpt}
    ogImage={data.strapiService.og_image}
  />
);
