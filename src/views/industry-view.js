import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// import {render} from 'react-dom'
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";

const IndustryView = ({ industry }) => {
  return (
    <>
      <Header />
      <HeaderContact />

      <article className="single">
        <div className="single__cover">
          <GatsbyImage
            image={industry.cover?.localFile?.childImageSharp?.gatsbyImageData}
            alt={industry.cover?.alternativeText}
            className="shadow"
          />
        </div>

        <Cross />

        <div className="single__title">
          <h2>{industry.title}</h2>
          <div>
            <h3>{industry.byline}</h3>
            <div className="single__markdown">
              <ReactMarkdown children={industry.content} />
            </div>
          </div>
        </div>

        <Cross />

        {industry.industry_aspects.map((aspect) => (
          <section key={aspect.id}>
            <div className="single__title">
              <div>
              <h4>{aspect.title}</h4>
              <div className="single__markdown">
                <ReactMarkdown children={aspect.content} />
              </div>
              </div>

            <ul className="single__gallery">
              {aspect.images.map((images) => (
                <li
                key={images.localFile?.childImageSharp?.id}
                className=""
                >
                  <GatsbyImage
                    image={images.localFile?.childImageSharp?.gatsbyImageData}
                    // alt={photos.name}
                    />
                </li>
              ))}
            </ul>
              </div>

            <Cross />
          </section>
        ))}
      </article>
      <Footer />
    </>
  );
};

export default IndustryView;
