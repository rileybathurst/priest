import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout";
import HeaderContact from "../../components/header-contact";

function ServicesCatchAll({ params }) {
  return (
    <Layout>
      <HeaderContact />
      <main className="page-width">
        <h1>Couldn't find the service</h1>
        <p>We couldn't locate the service "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
    </Layout>
  )
}

export default ServicesCatchAll
