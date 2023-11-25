import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useSiteMetadata } from "../hooks/use-site-metadata"

import ReactMarkdown from 'react-markdown';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from "../components/seo";
import SummitContact from "../components/summit-contact";
import Testimonials from "../components/testimonials";
import Card from "../components/card";
import MuxHome from '../components/mux-home';
import Map from '../components/map';

import IndustrialImage from '../images/industrail-image';
import WeldingImage from '../images/welding-image';
import CutImage from '../images/cut-image';

import { CardTypes } from '../types/card-types';
import SeoShowcase from '../components/seo-showcase';

type SummitTypes = {
  craftsmanship: {
    title: string;
    body: {
      data: {
        body: string;
      }
    }
  }
}

// queries the height of the text block to make the shapeoutside cut
function SummitAbout({ craftsmanship }: SummitTypes) {

  // query the current box
  const ref = useRef();
  // set the height of the slice
  // start at 0
  const [jump, setJump] = useState(0);

  useEffect(() => {
    // console.log(ref.current.clientHeight);
    // TODO needs an if ref statement
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
        <h2>{craftsmanship.title}</h2>
        {/* <p>Our skilled team of tradesman, draftsman and general engineers offer a range of plate processing and metal fabrication services to meet your engineering needs. With the latest in CNC machinery, CAD software and one of the largest selections of steel folding press brakes in New Zealand we can be sure to assist you at every stage; from design, prototyping through to production.<br /><b>Design for manufacturing, gets products built faster.</b></p> */}
        <ReactMarkdown children={craftsmanship.body.data.body} />
      </section>
    </div>
  );
}

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query IndexQuery {
    strapiSpecialist {
      body {
        data {
          body
        }
      }
    }
    
    strapiCraftsmanship {
      title
      body {
        data {
          body
        }
      }
    }
    
    allStrapiService(sort: {order: ASC}) {
      nodes {
        id
        title
        shortname
        byline
        slug
        excerpt

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
`)

  let specialist = data.strapiSpecialist.body.data.body;
  let craftsmanship = data.strapiCraftsmanship;
  let services = data.allStrapiService.nodes;

  return (
    <>
      <Header />
      <div className="summit__backer--wrapper">
        <div className="summit__backer">
          <section id="summit">
            <div className="summit__info">
              <div
                id="summit__info--shape"
                className="summit--shape"
              >
                {/* stay gold */}
              </div>
              <div className="summit__info--text">
                {/* this has old naming and needs to be checked */}
                <h1>{useSiteMetadata().description}</h1>
                <ReactMarkdown children={specialist} />
                {/* <p>With over 67 years running experience, Priest Sheetmetal is an 
                established name as a manufacturer and supplier of profile cut and
                fabricated steelwork to Christchurch businesses.</p> */}
              </div>
            </div>

            <SummitAbout craftsmanship={craftsmanship} />

            <div className="summit__video">
              <MuxHome />
            </div>

            <div className="summit__videobacker">
              <IndustrialImage />
              {/* this is a secondary version of the image until I figure out some magic */}
              <div className="blue-backer">{/* stay gold */}</div>
            </div>

            {/* // TODO: I bet I could make these classNames props */}
            <div className="summit__team-photo_1">
              <WeldingImage />
            </div>
            <div className="summit__team-photo_2">
              <CutImage />
            </div>

            <div className="summit__contact">
              <SummitContact />
            </div>
          </section>
        </div >
      </div >

      <h2 className='page-width'>
        <Link to="/services">
          Services
        </Link>
      </h2>
      <hr className='hr-aluminium' />

      <div className="deck">
        {services.map((service: CardTypes, index: number) => (
          <Card
            content={service}
            breadcrumb="services"
            key={index}
          />
        ))}
      </div >



      {/* // TODO: make these bigger and better designed not just slapped up */}
      < Testimonials />

      <section id="map">
        <Map />
      </section>

      <Footer />
      <SeoShowcase
        title={`${useSiteMetadata().title} | ${useSiteMetadata().description}`}
      />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <SEO
      title={`${useSiteMetadata().title} | ${useSiteMetadata().description}`}
    />
  </>
);
