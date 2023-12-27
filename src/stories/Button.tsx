// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/buttons.css";
import "./buttons-stories.css";

export const Button = ({ primary }) => {
  const mode = primary ? 'storybook-Button--primary' : 'storybook-Button--secondary';
  return (
    <>
      hello

      <hr />

      <button class='button'>
        Button test
      </button>

      <hr class='stories-hr' />

      <button class='stories-button'>
        Button test
      </button>
      <button class='stories-button'>
        lorem ipsum dolor sit amen
      </button>
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};