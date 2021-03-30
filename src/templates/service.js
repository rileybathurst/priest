import * as React from "react";
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import HeaderContact from "../components/header-contact"

const ArticleTemplate = ({ data }) => (
  <>
    <SEO
      title={
        data.strapiService.title + " - Priest Sheet Metal & Plate Christchurch"
      }
      description={data.strapiService.Content}
      pathname={"services/" + data.strapiService.title}
    />
    <Header />
    <HeaderContact />

    <article
      style={{
        maxWidth: "75rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
      }}
    >
      <hr className="swiss" />

      {/* title and content area open */}
      <div
        style={{
          display: "flex",
          marginBottom: "28px",
          justifyContent: "space-between",
        }}
        className="service-info"
      >
        <h2 className="wp-block-colum">{data.strapiService.title}</h2>
        <div className="wp-block-colum">
          <h3>{data.strapiService.byline}</h3>
          <p>{data.strapiService.Content}</p>
        </div>
      </div>
    </article>
    <Footer />
  </>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiService(id: { eq: $id }) {
      title
      Content
      byline
    }
  }
`
