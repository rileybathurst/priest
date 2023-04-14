import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStrapiCut } from "../hooks/cut-hook";

const CutImage = () => {

  const { title, image } = useStrapiCut()


  return (
    <GatsbyImage
      image={image?.localFile?.childImageSharp?.gatsbyImageData}
      alt={title}
    />
  );
};

export default CutImage;