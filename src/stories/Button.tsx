// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

import "../styles/app.css";
import "./buttons-stories.css";

export const Button = ({ primary }) => {
  const mode = primary ? 'storybook-Button--primary' : 'storybook-Button--secondary';
  return (
    <>

      <button className='button'>
        Button test
      </button>

      <hr className='stories-hr' />
      <p>Im not sure about this yet</p>

      <button className='stories-button'>
        Button test
      </button>
      <button className='stories-button'>
        lorem ipsum dolor sit amen
      </button>

      <hr />

      <button className='stories-button stories-button_hover'>
        Button test
      </button>

      <hr />

      <a href="#" className='stories-button_2'>
        <button className='sr-only'>
          layered button
        </button>
        <div className='background'>
          {/* stay gold */}
        </div>

        <div className='word'>
          layered button
        </div>
      </a>

      <a href="#" className='stories-button_2'>
        <button className='sr-only'>
          layered button
        </button>
        <div className='background'>
          {/* stay gold */}
        </div>

        <div className='word'>
          layered button
        </div>
      </a>
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};