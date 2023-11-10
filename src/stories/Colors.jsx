// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

import "./colors.css";

function Palette({ palette }) {
  if (palette === "colors") {
    let colors = [
      "priest-pitch",
      "priest-dark",
      "priest-dull",
      "priest-blue",
      "priest-mid",
      "priest-light",
      "priest-bright",
      "priest-brilliant",
    ];
    // return colors;
    return (
      <div className="palette">
        {colors.map((color) => (
          <div className={`color ${color}`} key={color}>
            {color}
          </div>
        ))}
      </div>
    );
  } else if (palette === "neutrals") {
    let colors = [
      "lead",
      "tungsten",
      "iron",
      "steel",
      "aluminium",
      "magnesium",
      "silver",
      "mercury",
    ];
    return (
      <div className="palette">
        {colors.map((color) => (
          <div className={`color ${color}`} key={color}>
            {color}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export const Colors = ({ primary }) => {
  const mode = primary
    ? "storybook-Colors--primary"
    : "storybook-Colors--secondary";
  return (
    <div className="colors">
      <section>
        <h1>Color Palette</h1>
        <Palette palette="colors" />

        <h2>Neutrals Palette</h2>
        <Palette palette="neutrals" />
      </section>
    </div>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
};

Colors.defaultProps = {
  primary: false,
};
