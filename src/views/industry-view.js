import * as React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import {render} from 'react-dom'
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";

const IndustryView = ({ industry }) => {
  return (
    <>
      <Header />
      <HeaderContact />

      {/* get rid of this inline styline */}
      <article
        style={{
          maxWidth: "75rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem"
        }}
      >

        <div className="splitter">
          <hr />
          <div className="cross">{/* stay gold */}</div>
        </div>

        {/* title and content area open */}
        <div
          style={{
            display: "flex",
            marginBottom: "28px",
            justifyContent: "space-between"
          }}
          // className="service-info"
        >
          <h2 className="wp-block-colum">{industry.title}</h2>
          <div className="wp-block-colum">
            <h3>{industry.byline}</h3>
            <ReactMarkdown children={industry.content} />
          </div>
        </div>
        {/* title and content area close */}

      </article>
      <Footer />
    </>
  );
};

export default IndustryView;
