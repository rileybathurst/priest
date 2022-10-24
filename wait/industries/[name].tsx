import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../src/components/layout";
import HeaderContact from "../../src/components/header-contact";
import Seo from "../../src/components/seo";

function IndustriesCatchAll({ params }) {
  return (
    <Layout>
      <Seo title="Industries" />
      <HeaderContact />
      <main className="page-width">
        <h1>Couldn't find Industry</h1>
        <p>We couldn't locate the industry "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
    </Layout>
  )
}

export default IndustriesCatchAll
