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
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --lead
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--tungsten)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --tungsten
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--iron)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --iron
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--steel)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --steel
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--aluminium)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --aluminium
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--magnesium)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --magnesium
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--silver)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --silver
        <br />
        {/* regular text */}
        {/* <span className="contrast">1:6.37</span> */}
      </div>
      <div
        style={{
          backgroundColor: "var(--mercury)",
          color: "var(--mercury)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --mercury on --mercury
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