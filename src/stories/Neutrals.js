// this is the Name.jsx file
import React from 'react';
import PropTypes from 'prop-types';

export const Neutrals = ({ primary }) => {
  const mode = primary ? 'storybook-Neutrals--primary' : 'storybook-Neutrals--secondary';
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--lead)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --lead
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--tungsten)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --tungsten
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--iron)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --iron
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--steel)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --steel
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--nickel)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --nickel
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--aluminium)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --aluminium
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--magnesium)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --magnesium
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--silver)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --silver
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--mercury)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --mercury
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
    </>
  );
};

Neutrals.propTypes = {
  primary: PropTypes.bool,
};

Neutrals.defaultProps = {
  primary: false,
};