import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

// import {render} from 'react-dom'
// import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import Seo from "../components/seo";

function Current(props: { current: any; slug: any; page: any; }) {
  // TODO: these arent needed just use props in the return
  const current = props.current;
  // const lock = props.lock; // this is always service? might be a cache error
  const slug = props.slug;
  const page = props.page;
  if (current === page) {
    return null;
  } else {
    return (
      <li key={slug}>{/* key={lock} className={slug} */}
        <Link to={`/industry/${slug}`} className="backed">
          {page}
        </Link>
      </li>
    );
  }
}

const IndustryView = ({ industry, other }) => {
  return (
    <div id="IndustryView">
      <Seo
        title={industry.title}
        description={industry.excerpt}
        ogImage={industry.og_image}
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
              {/* // wait until we have content <ReactMarkdown children={industry.content} /> */}
            </div>
          </div>
        </div>

        <Cross />

        {industry.industry_aspect.map((aspect: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; gallery: any[]; }) => (
          <section key={aspect.id}>
            <div className="single__title">
              <div>
                <h4>{aspect.title}</h4>
                <div className="single__markdown">
                  {/* // todo wait till we have content <ReactMarkdown children={aspect.content} /> */}
                </div>
              </div>

              {/* // todo this has a dumb name */}
              <ul className="single__gallery">

                {aspect?.gallery?.map((
                  image: { localFile: { childImageSharp: { id: React.Key; gatsbyImageData: IGatsbyImageData; }; }; }
                ) => (
                  <li
                    key={image.localFile?.childImageSharp?.id}
                    className=""
                  >
                    <GatsbyImage
                      image={image.localFile?.childImageSharp?.gatsbyImageData}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>

            <Cross />
          </section >
        ))}
      </article >

      <Cross />

      <h4 className="page-width"><Link to="/industries" className="backed">Other Industries</Link></h4>
      <ul className="row">
        {/* // map over other nodes */}
        {other.nodes.map((other: {
          id: React.Key;
          title: string;
          slug: any;
        }) => (
          <Current
            current={industry.title}
            slug={other.slug}
            page={other.title} />
        ))}
      </ul>

      <Footer current={industry.title} />
    </div >
  );
};

export default IndustryView;
