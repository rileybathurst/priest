import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout";
import HeaderContact from "../../components/header-contact";

function IndustriesCatchAll({ params }) {
  return (
    <Layout>
      <HeaderContact />
      <header>
      </header>
      <main className="page">
        <h1>Couldn't find Industry</h1>
        <p>We couldn't locate the industry "{params.name}"</p>
        <Link to="/">Go back to "Home"</Link>
      </main>
    </Layout>
  )
}

export default IndustriesCatchAll
