// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

import "../styles/app.css";
import "./card-stories.css";

export const Card = ({ primary }) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="deck">
      <div>
        <div className="card">
          <hr className="card__top-line" />
          <div className="card__background">{/* stay gold */}</div>
          {/* <div className="card__overlay">stay gold</div> */}
          <div className="card__image">
            {/* // TODO: add image */}
            {/* <GatsbyImage
              image={content.cover.localFile.childImageSharp.gatsbyImageData}
              alt={content.cover.alternativeText}
            /> */}
          </div>
          {/* // TODO: make the title function a story */}
          <h2 className="card__title">
            <a href="/breadcrumbslug">shortname</a>
          </h2>
          <div className="card__excerpt">
            <p>excerpt // TODO: make this longer</p>
          </div>
          <a href="breadcrumb/slug" className="card__more">
            More info on <span>title</span>
          </a>
          <hr className="card__base-line" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  primary: PropTypes.bool,
};

Card.defaultProps = {
  primary: false,
};
