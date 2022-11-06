import * as React from "react"
import { graphql } from "gatsby"
import IndustryView from "../../views/industry-view"

export const query = graphql`
  query IndustryQuery($slug: String!) {
    strapiIndustry(slug: { eq: $slug }) {
      id
      title
      slug
      byline
      excerpt
      og_image

      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      industry_aspect {
        id
        title

        gallery {
          localFile {
            childImageSharp {
              gatsbyImageData
              id
            }
          }
        }
      }
    }

    allStrapiIndustry(filter: {title: {nin: [$slug] }}) {
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

const IndustryPage = ({ data }) => {
  const industry = data.strapiIndustry;
  const other = data.allStrapiIndustry;
  return (
    <IndustryView
      industry={industry}
      other={other}
    />
  );
};

export default IndustryPage;



/* 








*/