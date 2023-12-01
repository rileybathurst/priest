// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary }) => {
  const mode = primary ? 'storybook-Button--primary' : 'storybook-Button--secondary';
  return (
    <>
      hello
      <button class='button'>
        Button test
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