import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

function Title(props) {

  // console.log(props.slug);
  // console.log(props.breadcrumb);

  if (props.byline) {
    return (
      <hgroup>
        <h2
          className="eyebrow"
        >
          <Link to={`/${props.breadcrumb}/${props.slug}`}>
            {props.shortname}
          </Link>
        </h2>
        <p
          className="supra"
        >
          {props.byline}
        </p>
      </hgroup >
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

function Excerpt(props) {

  // let short = props.excerpt.slice(0, 60);

  return (
    <div className="card__excerpt">
      <p>{props.excerpt}</p>
    </div>
  )
}

const Card = (content, breadcrumb) => {

  console.log(content);
  console.log(content.excerpt);

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
      <Excerpt excerpt={content.content.excerpt} />
      <Link to={`${content.breadcrumb}/${content.content.slug}`}
        className="card__more"
      >
        More info on {content.content.title}
      </Link>
    </div >
  );
};

export default Card;
