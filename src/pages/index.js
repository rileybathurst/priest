import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "../styles/index.scss";

function Casper(props) {
  if (props.doesit) {
    return <>👻</>
  } else {
    return null
  }
}

function SummitImage() {
  return (
    <StaticImage
      src="https://priest.s3-ap-southeast-2.amazonaws.com/images/priest_sheetmetal-industrial-sheetmetal-christchurch_new_zealand-1920.jpg"
      alt="industrial sheetmetal christchurch"
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

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = ({ data }) => {
  return (
    <>
    {/* <div className="summit__wrapper"> */}
    <div className="summit__backer">
      <section id="summit">
        <div className="summit__info">
          {" "}
          {/* this has old naming and needs to be checked */}
          <h1>
            SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS
            IN CHRISTCHURCH.
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
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            title="hero video 1"
            src={"https://player.vimeo.com/video/431997968?background=1"}
            style={{
              position: "absolute",
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
          <SummitImage />{" "}
          {/* this is a secondary version of the image until I figure out some magic */}
        </div>

        <div className="summit__videobacker--color hide-for-full">
          {/* stay gold */}
        </div>

        {/* Im not sure if I can do this without multiloading images but seems like it should be possible if not tricky */}
        <div className="summit__team-photo_1">
          <TeamPhoto1 />
        </div>
        <div className="summit__team-photo_2">
          <TeamPhoto2 />
        </div>

        <div className="summit__contact">
          {/* <SummitContact /> */}
        </div>
      </section>

      <div className="summit__videobacker show-for-full">
        <SummitImage />
      </div>
      <div className="summit__videobacker--color show-for-full">
        {/* stay gold */}
      </div>
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

          <div className="tasks__background--lower shadow">
            {/* stay gold */}
          </div>

          <div className="tasks__info">
            {/* <Byline byline={document.node.byline} /> */}
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
        </div>{" "}
        {/* .grid-x */}
      </div>{" "}
      {/* .grid-container */}
    </section>

    <section id="testimonials">
      <div className="bg-light-gray">
        <h3>Testimonials</h3>
      </div>
      <div id="star">
        {" "}
        {/* needed for grid */}
        <div className="bg-light-gray">{/* stay gold */}</div>
        <div className="bg-medium-gray">{/* stay gold */}</div>
        <div id="star-container">
          <svg title="star-1" className="star-1" viewBox="0 0 200 200">
            {" "}
            {/* height="210" width="500" */}
            <polygon points="100,10 40,198 190,78 10,78 160,198" />{" "}
            {/* width="100%" height="100%" */}
          </svg>

          <svg title="star-2" className="star-2" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" />
          </svg>
          <svg title="star-3" className="star-3" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" />
          </svg>
          <svg title="star-4" className="star-4" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" />
          </svg>
          <svg title="star-5" className="star-5" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" />
          </svg>
        </div>{" "}
        {/* #star-container */}
      </div>{" "}
      {/* #star */}
      <div id="quotes" className="bg-medium-gray">
        {/* {data.allStrapiTestimonials.edges.map(document => (
          <blockquote id="quoted" className="bg-medium-gray">
            <p>{document.node.content}</p>{" "}
            <footer>{document.node.author}</footer>
          </blockquote>
        ))} */}
      </div>
    </section>
  </>
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
        }
      }
    }
  }
`
