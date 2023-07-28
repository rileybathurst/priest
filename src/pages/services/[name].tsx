import * as React from "react"
import { Link } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderContact from "../../components/header-contact";
import SEO from "../../components/seo";
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function ServicesCatchAll({ params }) {
  return (
    <>
      <Header />
      <HeaderContact />
      <main className="page-width">
        <h1>Couldn't find the service</h1>
        <p>We couldn't locate the service "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
      <Footer />
    </>
  )
}

export default ServicesCatchAll

export const Head = ({ params }) => (
  <SEO
    title={`404 ${params.name} | ${useSiteMetadata().title}`}
  />
)