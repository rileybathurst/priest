// this is the Name.jsx file
import React from "react";
import PropTypes from "prop-types";

export const Colors = ({ primary }) => {
  const mode = primary
    ? "storybook-Colors--primary"
    : "storybook-Colors--secondary";
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--priest-blue)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --Priest-blue
        <br />
        top header
        <br />
        link hover
        <span className="contrast">1:3.23</span>
      </div>

      <div
        style={{
          backgroundColor: "var(--secondary-color)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --Secondary-color
        <br />
        secondary header
        <br />
        regular links
        <span className="contrast">1:6.37</span>
      </div>

      <div
        style={{
          backgroundColor: "var(--black)",
          color: "var(--white)",
          paddingBlock: "var(--block-spacing)",
          paddingInline: "var(--inline-spacing)",
        }}
      >
        --White on --Black
        <br />
        regular text
        <span className="contrast">1:6.37</span>
      </div>

      <section>
        <h1>Color Contrast</h1>
        <br />
        {/* i think theres some storybook css affecting this */}
        <h2>Normal Text</h2>
        <p>WCAG AA: 4.5:1</p>
        <p>WCAG AAA: 7:1</p>
        <h2>Large Text</h2>
        <p>WCAG AA: 3:1</p>
        <p>WCAG AAA: 4.5:1</p>
        <h2>Graphical Objects and User Interface Components</h2>
        <p>WCAG AA: 3:1</p>

        <p>
          WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for
          normal text and 3:1 for large text. WCAG 2.1 requires a contrast ratio
          of at least 3:1 for graphics and user interface components (such as
          form input borders). WCAG Level AAA requires a contrast ratio of at
          least 7:1 for normal text and 4.5:1 for large text. Large text is
          defined as 14 point (typically 18.66px) and bold or larger, or 18
          point (typically 24px) or larger.
        </p>
      </section>
    </>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
};

Colors.defaultProps = {
  primary: false,
};
