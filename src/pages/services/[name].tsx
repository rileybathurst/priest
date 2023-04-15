import * as React from "react"
import { Link } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderContact from "../../components/header-contact";
import Seo from "../../components/seo";

function ServicesCatchAll({ params }) {
  return (
    <>
      <Header />
      <Seo title="404" />
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
