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
  }
`

const IndustryPage = ({ data }) => {
  const industry = data.strapiIndustries;
  return (
    <IndustryView industry={industry} />
  );
};

export default IndustryPage;
