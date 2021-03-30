import * as React from "react";
import { Helmet } from "react-helmet" // I think this might change
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, pathname, article, image }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          image,
          openingHours,
          telephone,
          faxNumber,
          logo,
          areaServed,
        },
      },

    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`,
        image: image,
        openingHours: openingHours,
        telephone: telephone,
        faxNumber: faxNumber,
        logo: logo,
        areaServed: areaServed,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>

            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}

            <meta property="og:image" content={seo.image} />
            <meta name="openingHours" content={seo.openingHours} />
            <meta name="telephone" content={seo.telephone} />
            <meta name="faxNumber" content={seo.faxNumber} />
            <meta name="logo" content={seo.logo} />
            <meta name="areaServed" content={seo.areaServed} />

            <html lang="en" />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  image: PropTypes.string,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  faxNumber: PropTypes.string,
  logo: PropTypes.string,
  areaServed: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false,
  image: null,
  openingHours: null,
  telephone: null,
  faxNumber: null,
  logo: null,
  areaServed: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title

        defaultDescription: description
        siteUrl: url
        image: image
        openingHours: openingHours
        telephone: telephone
        faxNumber: faxNumber
        logo: logo
        areaServed: areaServed
      }
    }
  }
`

// titleTemplate // I pulled this out as it was breaking things but I should rebuild it