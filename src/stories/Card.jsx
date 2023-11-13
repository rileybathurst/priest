// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

import "./card.css";

export const Card = ({ primary }) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="deck">
      <div>
        <div className="card">
          <div className="card__overlay">{/* stay gold */}</div>
          <a href="#" className="card__image shadow">
            {/* // TODO: add image */}
            {/* <GatsbyImage
              image={content.cover.localFile.childImageSharp.gatsbyImageData}
              alt={content.cover.alternativeText}
            /> */}
          </a>
          <div className="card__backer">{/* stay gold */}</div>
          {/* // TODO: make the title function a story */}
          <h2>
            <a href="/breadcrumbslug">shortname</a>
          </h2>
          <div className="card__excerpt">
            <p>excerpt // TODO: make this longer</p>
          </div>
          <a href="breadcrumb/slug" className="card__more">
            More info on title
          </a>
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
