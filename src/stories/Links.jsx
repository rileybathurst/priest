// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";
import "./links.css";

export const Links = ({ primary }) => {
  const mode = primary
    ? "storybook-Links--primary"
    : "storybook-Links--secondary";
  return (
    <>
      <p>
        <a href="#">Regular Text</a>
      </p>
      <p>
        <a href="#" className="a-hover">
          Regular Text:hover
        </a>
      </p>
      <div className="dark">
        <p>
          <a href="#" className="dark-a">
            Regular Text:hover
          </a>
        </p>
      </div>
    </>
  );
};

Links.propTypes = {
  primary: PropTypes.bool,
};

Links.defaultProps = {
  primary: false,
};
