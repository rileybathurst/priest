// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

import { Card } from "./Card";

export const Deck = ({ primary }) => {
  const mode = primary
    ? "storybook-Deck--primary"
    : "storybook-Deck--secondary";
  return (
    <>
      <Card />
      <Card />
    </>
  );
};

Deck.propTypes = {
  primary: PropTypes.bool,
};

Deck.defaultProps = {
  primary: false,
};
