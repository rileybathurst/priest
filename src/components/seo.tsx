// https://www.gatsbyjs.com/docs/add-seo-component/
// https://github.com/gatsbyjs/gatsby/blob/master/starters/default/src/components/seo.js

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"; // I think this might change
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, ogImage }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    twitterImage,
    siteUrl,
    openingHours,
    telephone,
    faxNumber,
    logo,
    areaServed
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    image: image || defaultImage,
    ogImage: ogImage || ogImage,
    twitterImage: twitterImage,
    openingHours: openingHours,
    telephone: telephone,
    faxNumber: faxNumber,
    logo: logo,
    areaServed: areaServed
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang="en" />

      {/* <title>{seo.title}</title> */}
      <meta name="description" content={seo.description} />
      
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.ogImage} />}
      {seo.image && <meta property="og:image" content={seo.title} />}

      <meta name="twitter:card" content="summary_large_image" />
      {seo.image && <meta name="twitter:image" content={seo.twitterImage} />}

      <meta name="openingHours" content={seo.openingHours} />
      <meta name="telephone" content={seo.telephone} />
      <meta name="faxNumber" content={seo.faxNumber} />
      <meta name="logo" content={seo.logo} />
      <meta name="areaServed" content={seo.areaServed} />

      <meta name="theme-color" content="#1e93bd" />
      {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"></meta> */}

    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  faxNumber: PropTypes.string,
  logo: PropTypes.string,
  areaServed: PropTypes.string
};

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false,
  image: null,
  ogImage: null,
  twitterImage: null,
  openingHours: null,
  telephone: null,
  faxNumber: null,
  logo: null,
  areaServed: null
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        ogImage: image
        twitterImage: image
        openingHours: openingHours
        telephone: telephone
        faxNumber: faxNumber
        logo: logo
        areaServed: areaServed
      }
    }
  }
`;
