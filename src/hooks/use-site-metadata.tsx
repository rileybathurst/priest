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
          email
          enquiriesEmail
          logo
          areaServed
          location {
            address {
              streetAddress
              addressLocality
              addressRegion
              postalCode
              addressCountry
            }
          }
          mapGoogle
        }
      }
    }
  `)

  return data.site.siteMetadata
}