import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// import {render} from 'react-dom'
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import Seo from "../components/seo";

const IndustryView = ({ industry, other }) => {
  return (
    <div id="IndustryView">
      <Seo
        title={industry.title}
        description={industry.excerpt}
        />
      <Header />
      <HeaderContact />

      <p className="breadcrumbs"><Link to="/">Home</Link> &gt; <Link to="/industries">Industry Suppliers</Link> &gt; {industry.title}</p>

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

              {/* this has a dumb name */}
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

      <Cross />

      <h4 className="page-width"><Link to="/services" className="backed">Other Industries</Link></h4>
      <ul className="row">
        {other.edges.map((other) => (
          <li key={other?.node?.id}>
            <Link to={`/services/${other.node.slug}`} className="backed">
            {/* in theory I could only show the right one  */}
            {other?.node?.title}
            </Link>
          </li>
        ))}
      </ul>


      <Footer />
    </div>
  );
};

export default IndustryView;
