import * as React from "react"
import { graphql } from "gatsby";

// markup
const FoldingPage = ({ data }) => {
  return (
    <main className="page-width">
      <h1>{data.strapiService.id}</h1>
      <p>hey there.</p>
    </main>
  )
}

export default FoldingPage

export const query = graphql`
  query FoldingQuery {
    strapiService(slug: {eq: "profile-cutting"}) {
      id
    }
  }
`