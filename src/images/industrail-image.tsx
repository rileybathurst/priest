import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiIndustrial } from "../hooks/industrial-hook";

const IndustrialImage = () => {

  const { title, image } = useStrapiIndustrial()

  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default IndustrialImage;