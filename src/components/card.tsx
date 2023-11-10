import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { CardTypes } from "../types/card-types";

type TitleTypes = {
  shortname: string;
  byline: string;
  slug: string;
  breadcrumb: string;
}

function Title({ shortname, byline, slug, breadcrumb }: TitleTypes) {

  if (byline) {
    return (
      <hgroup>
        <h2
          className="eyebrow"
        >
          <Link to={`/${breadcrumb}/${slug}`}>
            {shortname}
          </Link>
        </h2>
        <p
          className="supra"
        >
          {byline}
        </p>
      </hgroup >
    )
  } else {
    return (
      <h2>
        <Link to={`/${breadcrumb}/${slug}`}>
          {shortname}
        </Link>
      </h2>
    )
  }
}

function Card({ content, breadcrumb }: CardTypes) {

  return (
    <div key={content.id} className="card">
      <div className="card__overlay">{/* stay gold */}</div>
      <Link
        to={`${breadcrumb}/${content.slug}`}
        className="card__image shadow"
      >
        <GatsbyImage
          image={content.cover.localFile.childImageSharp.gatsbyImageData}
          alt={content.cover.alternativeText}
        />
      </Link>
      <div className="card__backer">{/* stay gold */}</div>
      <Title
        shortname={content.shortname}
        byline={content.byline}
        slug={content.slug}
        breadcrumb={breadcrumb}
      />
      <div className="card__excerpt">
        <p>{content.excerpt}</p>
      </div>
      <Link
        to={`${breadcrumb}/${content.slug}`}
        className="card__more"
      >
        More info on {content.title}
      </Link>
    </div >
  );
};

export default Card;
