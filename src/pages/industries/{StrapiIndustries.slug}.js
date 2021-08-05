import * as React from "react"
import { graphql } from "gatsby"
import IndustryView from "../../views/industry-view"

export const query = graphql`
  query IndustryQuery($slug: String!) {
    strapiIndustries(slug: { eq: $slug }) {
      id
      title
      slug
      byline
      content
      excerpt

      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      industry_aspects {
        id
        title
        content
        images {
          localFile {
            childImageSharp {
              gatsbyImageData
              id
            }
          }
        }
      }
    }

    allStrapiIndustries(filter: {title: {nin: [$slug] }}) {
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
  const industry = data.strapiIndustries;
  const other = data.allStrapiIndustries;
  return (
    <IndustryView
      industry={industry}
      other={other}
    />
  );
};

export default IndustryPage;
