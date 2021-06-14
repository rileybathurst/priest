import * as React from "react"
import { graphql } from "gatsby";

// markup
const CopyPage = ({ data }) => {
  return (
    <main className="page-width">
      <h1>{data.strapiService.id}</h1>
      <p>hey there.</p>
    </main>
  )
}

export default CopyPage

export const query = graphql`
  query CopyQuery {
    strapiService(slug: {eq: "profile-cutting"}) {
      id
    }
  }
`

// this works as its not a service name