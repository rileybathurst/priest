// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/

import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({
  title,
  description,
  image,
  ogImage,
  pathname,
  children
}) => {

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    openingHours,
    telephone,
    faxNumber,
    logo,
    areaServed
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    // image: image || defaultImage,
    ogImage: ogImage || ogImage,
    openingHours: openingHours,
    telephone: telephone,
    faxNumber: faxNumber,
    logo: logo,
    areaServed: areaServed
  };

  return (
    <>
      <html lang="en" />

      <title>{seo.title}</title>
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

      <meta name="openingHours" content={seo.openingHours} />
      <meta name="telephone" content={seo.telephone} />
      <meta name="faxNumber" content={seo.faxNumber} />
      <meta name="logo" content={seo.logo} />
      <meta name="areaServed" content={seo.areaServed} />

      <meta name="theme-color" content="#1e93bd" />
      {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"></meta> */}

      {children}
    </>
  );
};

export default SEO;
