import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import ReactMarkdown from "react-markdown";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SummitContact from "../components/summit-contact";
import Testimonials from "../components/testimonials";
import Cross from "../components/cross";

import "@fontsource/roboto-slab/400.css";
// at some point this can be a variable
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import "../styles/index.scss";

function Byline(props) {
  if (props.byline) {
    return <h4>{props.byline}</h4>;
  } else {
    return null;
  }
}

function SummitImage() {
  // const grayscale = true
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/priest_sheetmetal-industrial-sheetmetal-christchurch_new_zealand-1920.jpg"
      alt="industrial sheetmetal christchurch"
      // this is insane that this is the syntax with double brackets
      // typescript also doesnt like this
      transformOptions={{ grayscale: "true" }}
    />
  );
}

function TeamPhoto1() {
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/Priest_2019_0514.jpg"
      alt="welding sheetmetal christchurch"
    />
  );
}

function CutPhoto() {
  return (
    <StaticImage
      src="https://priest.s3.ap-southeast-2.amazonaws.com/images/shutterstock_1047148825_1.jpg"
      alt="welding sheetmetal christchurch"
    />
  );
}

function SummitInfo() {
  const ref = useRef();

  const [jump, setJump] = useState(0);

  // trying to cleanup typescript warnings
  if (ref.current) {
    useEffect(() => {
      // console.log(ref.current.clientHeight);
      const height = ref.current.clientHeight;
      setJump(height);
      // adding the [] only re-renders on change
    }, [jump]);
  }

  const high = {
    // why does this have a second and not a pix
    height: { jump }.jump,
  }

  return (
    <div className="summit__info">
      <div id="summit__info--shape" className="summit--shape" style={high}>{/* stay gold */}</div>
      <div className="summit__info--text" ref={ref}>
        {/* this has old naming and needs to be checked */}
        <h1>Specialist Laser Cutting &amp; Steel Suppliers, Fabricators and Welders in Christchurch.</h1>
        <p>With over 67 years running experience, Priest Sheetmetal is an
          established name as a manufacturer and supplier of profile cut and
          fabricated steelwork to Christchurch businesses.</p>
      </div>
    </div>
  );
}

// queries the height of the text block to make the shapeoutside cut
function SummitAbout() {
  // query the current box
  const ref = useRef();
  // set the height of the slice
  // start at 0
  const [jump, setJump] = useState(0);

  useEffect(() => {
    // console.log(ref.current.clientHeight);
    const height = ref.current.clientHeight;
    setJump(height);
    // adding the [] only re-renders on change
  }, [jump]);

  const high = {
    // why does this have a second and not a pix
    height: { jump }.jump,
  }

  return (
    <div className="summit__about">
      <div id="summit__about--shape" className="summit--shape" style={high}>{/* stay gold */}</div>
      <section id="summit__about--text" ref={ref} >
        <h2>Adding value through craftsmanship.</h2>
        <p>Our skilled team of tradesman, draftsman and general engineers offer a range of plate processing and metal fabrication services to meet your engineering needs. With the latest in CNC machinery, CAD software and one of the largest selections of steel folding press brakes in New Zealand we can be sure to assist you at every stage; from design, prototyping through to production.<br /><b>Design for manufacturing, gets products built faster.</b></p>
      </section>
    </div>
  );
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Priest Sheetmetal &amp; Plate Christchurch" />
      <div className="summit__backer--wrapper">
      <div className="summit__backer">
        <section id="summit">
          <SummitInfo />

          <SummitAbout />

          <div className="summit__video">
            <iframe
              title="hero video 1"
              src={"https://player.vimeo.com/video/597365161?background=1"}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="shadow"
            />
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js" /> */}

          <div className="summit__videobacker">
            <SummitImage />
            {/* this is a secondary version of the image until I figure out some magic */}
            <div className="blue-backer">{/* stay gold */}</div>
          </div>

          <div className="summit__team-photo_1">
            <TeamPhoto1 />
          </div>
          <div className="summit__team-photo_2">
            <CutPhoto />
          </div>

          <div className="summit__contact">
            <SummitContact />
          </div>
        </section>
      </div>
      </div>

      <div className="tasks__wrapper">
        {data.allStrapiService.edges.map((document) => (
          <div key={document.node.id} className="tasks--outer">
            <section className="tasks">
              <h3 className="tasks__title h4">
                <Link to={`/services/${document.node.slug}`}>
                  {document.node.title}
                </Link>
              </h3>

              <div className="tasks__background--upper shadow">
                {/* stay gold */}
              </div>

              <Link
                to={`/services/${document.node.slug}`}
                className="tasks__image shadow"
                title={document.node.title}
              >
                <GatsbyImage
                  image={
                    document.node.Cover?.localFile?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={document.node.Cover?.alternativeText}
                  className="shadow"
                />
              </Link>

              <div className="tasks__info">
                <Byline byline={document.node.byline} />
                {/*                 <div className="clipshaper">
                  <div className="clipper"> stay gold </div>
                  <p>{document.node.Content}</p>
                </div> */}

                <div className="single__markdown">
                  <ReactMarkdown children={document.node.markdown} />
                </div>
              </div>

              <div className="service__more--back">{/* stay gold */}</div>
              <Link
                to={`/services/${document.node.slug}`}
                className="service__more"
              >
                {/* <span className="button hollow"> */}
                More about {document.node.title}
                {/* </span> */}
              </Link>
            </section>

            <Cross />
          </div>
        ))}
      </div>
      {/* tasks__wrapper */}

      <div className="page">
        <h2 className="centered">Industry Suppliers</h2>
      </div>

      <div className="diatomic-wrapper">
        {data.allStrapiIndustries.edges.map((industry) => (
          <section key={industry.node.id} className="diatomic-card">
            <Link
              to={`/industries/${industry.node.slug}`}
              className="diatomic-card__image"
            >
              <GatsbyImage
                image={
                  industry.node.cover?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={industry.node.cover?.alternativeText}
                className="diatomic-card__image"
              />
            </Link>

            <section className="diatomic-card__text">
              <div className="diatomic-card__text--container">
                <h3 className="">
                  <Link to={`/industries/${industry.node.slug}`}>
                    {industry.node.title}
                  </Link>
                </h3>
                <h4 className="industry__byline">{industry.node.byline}</h4>

                <p>{industry.node.content}</p>
                <Link
                  to={`/industries/${industry.node.slug}`}
                  className="diatomic-card__text--more"
                >
                  More about {industry.node.title}
                </Link>
              </div>{/* diatomic-card__text--container */}
            </section>{/* diatomic-card__text */}
          </section>
        ))}
      </div>
      <Cross />

      <section id="map" className="">
        <iframe
          title="google maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797"
          width="1200"
          height="450"
          frameBorder="0"
          allowFullScreen
          className="lozad vimeo"
        />
      </section>

      <Testimonials />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allStrapiService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          byline
          Content
          markdown
          slug

          Cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }

    allStrapiIndustries(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          byline
          content
          slug
          cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }

    allStrapiTestimonials {
      edges {
        node {
          content
          author
        }
      }
    }
  }
`;
