import { graphql, useStaticQuery } from "gatsby"

export const useStrapiIndustrial = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "industrial"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(transformOptions: {grayscale: true})
            }
          }
        }
      }
    }
  `)

  return strapiImageGrab
}