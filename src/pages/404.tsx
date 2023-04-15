import * as React from "react"
import { Link } from "gatsby"
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      {/* // TODO title is wrong */}
      <Seo title="404: Not found - Priest Sheetmetal &amp; Plate Christchurch" />
      <HeaderContact />
      <main className="page-width">
        <p><Link to="/">Home</Link>  &gt; 404</p>
        <h1>NOT FOUND</h1>
        <p>Sorry, You just hit a route that doesn&#39;t exist....<br />
          Let's try take this back to the <Link to="/">home page</Link> and start again.</p>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
