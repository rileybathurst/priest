import { graphql, useStaticQuery } from "gatsby"

export const useStrapiCut = () => {
  const { strapiImageGrab } = useStaticQuery(graphql`
    query {
      strapiImageGrab(title: {eq: "cut"}) {
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