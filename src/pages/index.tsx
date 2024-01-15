import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
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
import Cross from '../components/cross';

import { CardTypes } from '../types/card-types';
import SeoShowcase from '../components/seo-showcase';
import Material from '../components/material';
import Banner from '../components/banner';

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

      <section id="summit">
        <div className="summit__info">
          <Banner />
          <h1 className='flyweight'>{useSiteMetadata().description}</h1>
          <ReactMarkdown children={specialist} />
          <ReactMarkdown children={craftsmanship.body.data.body} />
          <SummitContact />
        </div>

        <div className="summit__video">
          <MuxHome />
        </div>
      </section>

      <Cross />

      <Link to="/services" className='eyebrow albatross'>
        <h2 className='supra'>Services</h2>
        <h2 className='title'>{craftsmanship.title}</h2>
      </Link>

      <div className="deck">
        {services.map((service: CardTypes, index: number) => (
          <Card
            content={service}
            breadcrumb="services"
            key={index}
          />
        ))}
      </div >

      <Cross />

      <Link to="/services/steel-supply-plateprocessing/" className='eyebrow albatross'>
        <h2 className='title'>Materials</h2>
        <h2 className='supra'>Thickness and Options</h2>
      </Link>
      <Material />

      {/*
I want good testimonials
<div className='index-testimonials'>
        <Testimonials />
      </div> */}

      <Cross />

      <section id="map">
        <Map />
      </section>

      <Footer />
      {/* <SeoShowcase
        title={`${useSiteMetadata().title} | ${useSiteMetadata().description}`}
      /> */}
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
