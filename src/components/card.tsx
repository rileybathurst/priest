import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

function Title(props) {

  // console.log(props.slug);
  // console.log(props.breadcrumb);

  if (props.byline) {
    return (
      <hgroup>
        <h2 className="eyebrow">
          {props.shortname}
        </h2>
        <p className="supra">
          <Link to={`/${props.breadcrumb}/${props.slug}`}>
            {props.byline}
          </Link>
        </p>
      </hgroup>
    )
  } else {
    return (
      <h2>
        <Link to={`/${props.breadcrumb}/${props.slug}`}>
          {props.shortname}
        </Link>
      </h2>
    )
  }
}

const Card = (content, breadcrumb) => {

  // console.log(content.breadcrumb);

  return (
    <div className="card">
      <div className="card__overlay">{/* stay gold */}</div>
      <Link to={`${content.breadcrumb}/${content.content.slug}`}
        className="card__image shadow"
      >
        <GatsbyImage
          image={content.content.cover.localFile.childImageSharp.gatsbyImageData}
          alt={content.content.cover.alternativeText}
        />
      </Link>
      <div className="card__backer">{/* stay gold */}</div>
      <Title
        shortname={content.content.shortname}
        byline={content.content.byline}
        slug={content.content.slug}
        breadcrumb={content.breadcrumb}
      />
    </div >
  );
};

export default Card;
