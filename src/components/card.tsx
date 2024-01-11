import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { CardTypes } from "../types/card-types";

type TitleTypes = {
  title: string;
  shortname: string;
  byline: string;
  slug: string;
  breadcrumb: string;
}

function Spanner({ title, shortname }: { title: string, shortname: string }) {
  // take the title and if the shortname is nested inside wrap it in a span
  const titleWithSpan = title.replace(shortname, `<span class="cruiserweight">${shortname}</span>`);

  return (
    <div dangerouslySetInnerHTML={{ __html: titleWithSpan }} className="spanner" />
  )
}

function Title({ title, shortname, byline, slug, breadcrumb }: TitleTypes) {

  if (byline) {
    return (
      <hgroup className="eyebrow card__title">
        <h2
          className="title"
        >
          <Link to={`/${breadcrumb}/${slug}`}>
            <Spanner
              title={title}
              shortname={shortname}
            />
          </Link>
        </h2>
        <p
          className="supra font-weight-300"
        >
          {byline}
        </p>
      </hgroup >
    )
  } else {
    return (
      <h2 className="card__title">
        <Link to={`/${breadcrumb}/${slug}`}>
          <Spanner
            title={title}
            shortname={shortname}
          />
        </Link>
      </h2>
    )
  }
}

function Card({ content, breadcrumb }: CardTypes) {

  return (
    <div className="card">
      <hr className="card__top-line" />
      <div className="card__background">{/* stay gold */}</div>
      <Link
        to={`${breadcrumb}/${content.slug}`}
        className="card__image"
      >
        <GatsbyImage
          image={content.cover.localFile.childImageSharp.gatsbyImageData}
          alt={content.cover.alternativeText}
        />
      </Link>
      <div className="card__backer">{/* stay gold */}</div>
      <Title
        title={content.title}
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
      <hr className="card__base-line" />
    </div >
  );
};

export default Card;
