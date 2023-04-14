import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiWelding } from "../hooks/welding-hook";

const WeldingImage = () => {

  const { title, image } = useStrapiWelding()


  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default WeldingImage;