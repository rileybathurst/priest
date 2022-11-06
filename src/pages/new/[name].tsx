import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout";
import HeaderContact from "../../components/header-contact";
import Seo from "../../components/seo";

function NewsCatchAll({ params }) {
  return (
    <Layout>
      <Seo title="News" />
      <HeaderContact />
      <main className="page-width">
        <h1>Couldn't find news</h1>
        <p>We couldn't locate the news "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
    </Layout>
  )
}

export default NewsCatchAll
