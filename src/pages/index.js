import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import SummitContact from '../components/summit-contact'
import Testimonials from "../components/testimonials";

import "@fontsource/roboto-slab/400.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
import "../styles/index.scss";

function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>
  } else {
    return null
  }
}

function SummitImage() {
  // const grayscale = true
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/priest_sheetmetal-industrial-sheetmetal-christchurch_new_zealand-1920.jpg"
      alt="industrial sheetmetal christchurch"
      // this is insane that this is the syntax with double brackets
      transformOptions={{grayscale: "ture"}}
    />
  )
}

function TeamPhoto1() {
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/Priest_2019_0514.jpg"
      alt="welding sheetmetal christchurch"
    />
  )
}

function TeamPhoto2() {
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/Priest_2019_0078.jpg"
      alt="sheetmetal christchurch"
    />
  )
}

/* 
  lets start with a single page
function BlogPost({ document }) {
  const image = getImage(document.node.Cover)
  return (
    <>
      <GatsbyImage image={image} />
    </>
  )
 } */

 // this might be easier outside of a map
// const image = getImage(data.localFile)
// file?.childImageSharp?.gatsbyImageData

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
    {/* <div className="summit__wrapper"> */}
    <div className="summit__backer">
      <section id="summit">
        <div className="summit__info">
          
          {/* this has old naming and needs to be checked */}
          <h1>
            Specialist welders, sheetmetal engineers and generald fabricators in Christchurch
          </h1>
          <p>
            Our team of welders and engineers can tackle any welding or
            fabrication job. We specalise in TIG, MIG, ARC and resistance-Spot
            Welding. We can weld alloy, mild steel, stainless and much more. Our
            Fabricators can fold, stamp, punch, and cut to your requirements
            with our specialized machinery and experience.
          </p>
        </div>

        <div className="summit__about">
          <h2>We're Experienced Sheetmetal Engineers.</h2>
          <p>
            Priest Sheetmetal &amp; Plate Ltd is a family run business that has
            operated out of our 10 Barbour St address in Waltham, Christchurch
            for over 63 years. Let our experience guide you from design,
            manufacture, to assembly and installation of your fabrication
            project.
          </p>
        </div>

        {/* Summit Videos */}
        <div
          className="summit__video"
          /* style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }} */
        >
          <iframe
            title="hero video 1"
            src={"https://player.vimeo.com/video/431997968?background=1"}
            style={{
              // position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              // https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
              // guess and check on the numbers
            }}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            className="shadow"
          ></iframe>
          {/* this will feel better with the box below once it gets the image behind */}
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        {/* can this be compressed moved to the footer? */}

        <div className="summit__videobacker hide-for-full">
          <SummitImage />
          {/* this is a secondary version of the image until I figure out some magic */}
          <div className="blue-backer">{/* stay gold */}</div>
        </div>

{/*         <div className="summit__videobacker--color hide-for-full">
          stay gold
        </div> */}

        {/* Im not sure if I can do this without multiloading images but seems like it should be possible if not tricky */}
        <div className="summit__team-photo_1">
          <TeamPhoto1 />
        </div>
        <div className="summit__team-photo_2">
          <TeamPhoto2 />
        </div>

        <div className="summit__contact">
          <SummitContact />
        </div>
      </section>

      <div className="summit__videobacker show-for-full">
        <SummitImage />
        {/* <div className="blue-backer">stay gold</div> */}
      </div>
{/*       <div className="summit__videobacker--color show-for-full">
          stay gold
      </div> */}
    </div>
    {/* .summit__wrapper */}

    <div className="tasks__wrapper">
      {data.allStrapiService.edges.map(document => (
        <section className="tasks">
          <h4 className="tasks__title">
            <Link to={`/services/${document.node.slug}`}>
              {document.node.title}
            </Link>
          </h4>

          <div className="tasks__background--upper shadow">
            {/* stay gold */}
          </div>

          <Link to={`/services/${document.node.slug}`} className="tasks__image shadow">
            <p>{document.node.Cover.url}</p>
            <GatsbyImage image={document.node.Cover?.localFile?.childImageSharp?.gatsbyImageData} className="shadow" />
          </Link>

          <div className="tasks__background--lower shadow">
            {/* stay gold */}
          </div>

          <div className="tasks__info">
            <Byline byline={document.node.byline} />
            <p>{document.node.Content}</p>
            <Link
              to={`/services/${document.node.slug}`}
              className="tasks__more"
            >
              <span className="button hollow">
                More about {document.node.title}
              </span>
            </Link>
          </div>

          <hr className="tasks__divider" />
          <div className="tasks__divider--cross">{/* stay gold */}</div>
        </section>
      ))}
    </div>
    {/* tasks__wrapper */}

    <section id="map" className="">
      {/* bg-primary shadow-darker */}
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell gp2-tb">
            <span className="iframe-100">
              <iframe
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9573440490253!2d172.6515813562169!3d-43.544931066056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f0816bfbed%3A0xc483fb0bb523cec9!2s10+Barbour+St%2C+Waltham%2C+Christchurch+8011%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1473280636797"
                width="1200"
                height="450"
                frameBorder="0"
                allowFullScreen
                className="lozad vimeo"
              ></iframe>
            </span>
          </div>
        </div>
        {/* .grid-x */}
      </div>
      {/* .grid-container */}
    </section>

    <Testimonials />
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          byline
          Content
          slug

          Cover {
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
`
