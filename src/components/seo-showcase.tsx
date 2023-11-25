// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/

import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SeoShowcase = ({
  title,
  description
}) => {

  return (
    <>
      {process.env.NODE_ENV === "development" ? (
        <div className="seo-showcase">
          <h1>title: {title}</h1>
          <h2>description: {description}</h2>
        </div>
      ) : null}
    </>
  );
};

export default SeoShowcase;
