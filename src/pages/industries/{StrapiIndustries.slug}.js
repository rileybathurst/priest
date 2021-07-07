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

      cover {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
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
