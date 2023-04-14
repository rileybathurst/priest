import { graphql, useStaticQuery } from "gatsby"

export const useStrapiWelding = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "welding"}) {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return strapiImageGrab
}