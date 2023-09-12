// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

export const Card = ({ primary }) => {
  const mode = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div className="deck">
      <div className="card">
        <a href="#" className="card__image shadow">
          <img src="#" alt="" />
        </a>
        <div className="card__backer">{/* stay gold */}</div>
        <h2>
          <a href="#">Title</a>
        </h2>
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
