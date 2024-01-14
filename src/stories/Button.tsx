// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/app.css";
import "./buttons-stories.css";

export const Button = ({ primary }) => {
  const mode = primary ? 'storybook-Button--primary' : 'storybook-Button--secondary';
  return (
    <>

      <button>
        <span className='background'>
          {/* stay gold */}
        </span>

        <span className='foreground'>
          Button
        </span>
      </button>

      <hr />

      <div className='button_eyebrow'>
        <p className="supra">Eyebrow</p>
        <button>
          <span className='background'>
            {/* stay gold */}
          </span>

          <span className='foreground'>
            Button
          </span>
        </button>
      </div>
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};