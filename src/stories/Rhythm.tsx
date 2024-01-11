// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/app.css";
import './rhythm-stories.css';

export const Rhythm = ({ primary }) => {
  const mode = primary ? 'storybook-Rhythm--primary' : 'storybook-Rhythm--secondary';
  return (
    <>
      <div className='albatross testing'>
        Albatross<br />
        max-width: var(--albatross);<br />
        margin-inline: auto;<br />
        padding-inline: 1rem;
      </div>

    </>
  );
};

Rhythm.propTypes = {
  primary: PropTypes.bool,
};

Rhythm.defaultProps = {
  primary: false,
};