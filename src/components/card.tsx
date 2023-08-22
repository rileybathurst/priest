import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={`${props.breadcrumb}/${props.content.slug}`}
        className="card__image shadow"
      >
        <GatsbyImage
          image={props.content.cover.localFile.childImageSharp.gatsbyImageData}
          alt={props.content.cover.alternativeText}
        />
      </Link>
      <div className="card__backer">{/* stay gold */}</div>
      <h2>
        <Link to={`${props.breadcrumb}/${props.content.slug}`}>
          {props.content.title}
        </Link>
      </h2>
    </div >
  );
};

export default Card;
