import * as React from "react"
import { Link } from "gatsby"

import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderContact from "../../components/header-contact";
import Seo from "../../components/seo";

function IndustriesCatchAll({ params }) {
  return (
    <>
      <Header />
      <Seo title="Industries" />
      <HeaderContact />
      <main className="page-width">
        <h1>Couldn't find Industry</h1>
        <p>We couldn't locate the industry "{params.name}"</p>
        <p><Link to="/">Go back to "Home"</Link></p>
      </main>
      <Footer />
    </>
  )
}

export default IndustriesCatchAll
