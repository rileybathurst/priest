import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          siteUrl
          image
          openingHours
          telephone
          faxNumber
          logo
          areaServed
        }
      }
    }
  `)

  return data.site.siteMetadata
}