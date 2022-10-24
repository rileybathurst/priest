import * as React from "react"
import { Link } from "gatsby" // I should add this back in as a simple link home
import Layout from "../components/layout"
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      {/* // TODO title is wrong */}
      <Seo title="404: Not found - Priest Sheetmetal &amp; Plate Christchurch" />
      <HeaderContact />
      <main className="page-width">
        <p><Link to="/">Home</Link>  &gt; 404</p>
        <h1>NOT FOUND</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist....<br />
          Let's try take this back to the <Link to="/">home page</Link> and start again.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
