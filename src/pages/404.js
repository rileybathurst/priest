import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main className="page-width">
        <SEO title="404: Not found - Priest Sheet Metal &amp; Plate Christchurch" />
        <h1>NOT FOUND</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist... the sadness.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
