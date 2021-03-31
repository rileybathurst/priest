import * as React from "react"
import { graphql } from "gatsby"
import ServiceView from "../../views/service-view"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiService(slug: { eq: $slug }) {
      id
      title
      slug
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
