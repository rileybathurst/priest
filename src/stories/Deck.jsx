// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

export const Deck = ({ primary }) => {
  const mode = primary
    ? "storybook-Deck--primary"
    : "storybook-Deck--secondary";
  return <>Deck</>;
};

Deck.propTypes = {
  primary: PropTypes.bool,
};

Deck.defaultProps = {
  primary: false,
};
