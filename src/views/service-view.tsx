import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import SummitContact from "../components/summit-contact";
import Cross from "../components/cross";
import MuxVideo from "../components/mux-video";
import MuxCover from "../components/mux-cover";
import SeoShowcase from "../components/seo-showcase";
import TitleWeight from "../components/title-weight";

function Carousel(images) {

  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

    if (currentIndex === 0) {
      galleryRef.current.lastChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      galleryRef.current.children[currentIndex - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handleNext = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    if (currentIndex === galleryRef.current.children.length - 1) {
      galleryRef.current.children[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      galleryRef.current.children[currentIndex + 1].scrollIntoView({

      });
    }
  };

  const handleLabelClick = (index) => {
    setCurrentIndex(index);

    let i = images.images.findIndex((element) => element.name === index);

    galleryRef.current.children[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  if (images.images?.length > 0) {
    return (
      <>
        <Cross />
        <div className="carousel__wrap">
          <section
            className="carousel"
            ref={galleryRef}
          >
            {images.images.map((photos) => (
              <div
                key={photos.hash}
                className="slider"
                ref={useRef()}
              >
                <GatsbyImage
                  image={photos.localFile?.childImageSharp?.gatsbyImageData}
                  alt={photos.name}
                />
              </div>
            ))}
          </section>

          <section className="carousel__label">
            <button onClick={() => handlePrev(currentIndex)}>
              <span className="background">
                {/* stay gold */}
              </span>
              <span className="foreground">
                Previous
              </span>
            </button>
            {images.images.map((photos) => (
              <button
                title={photos.name}
                key={photos.name}
                // I can push up the index of the number I am clicking on
                onClick={() => handleLabelClick(photos.name)}
                className="slider"
              >

                <GatsbyImage
                  image={photos.localFile?.childImageSharp?.gatsbyImageData}
                  alt={photos.name}
                />
              </button>
            ))}

            <button onClick={() => handleNext(currentIndex)}>
              <span className="background">
                {/* stay gold */}
              </span>
              <span className="foreground">
                Next
              </span>
            </button>
          </section>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function Cover({ muxCover, image, imageAlt }) {

  var imageAlt = imageAlt;

  if (muxCover) {
    return (
      <div className="single__cover--video">
        <MuxCover mux={muxCover} />
      </div>
    );
  } else {
    return (
      <GatsbyImage
        image={image}
        alt={imageAlt}
        className="single__cover--image"
      />
    );
  }
}

function Title({ title, byline }) {
  if (byline) {
    return (
      <hgroup>
        <h2 className="eyebrow">{title}</h2>
        <p className="supra">{byline}</p>
      </hgroup>
    );
  } else {
    return (
      <h2>{title}</h2>
    );
  }
}

const ServiceView = ({ service }) => {

  const cover = getImage(
    service.cover?.localFile?.childImageSharp?.gatsbyImageData
  );

  return (
    <>
      <Header />
      <div className="albatross summit__info">
        <SummitContact />
      </div>

      {/* https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/</> */}
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li key='services'>
            <Link to="/services">Services</Link>
          </li>
          <li key='chevron'>
            <p className="chevron">&gt;</p>
          </li>
          <li key='current'>
            <p className="current" aria-current="page"><TitleWeight
              title={service.title}
              shortname={service.shortname}
              wrap="div"
            /></p>
          </li>
        </ol>
      </nav>

      <article className="single">
        <div className="single__cover">
          <Cover
            muxCover={service.muxCover}
            image={cover}
            imageAlt={service.cover?.alternativeText}
          />
        </div>

        <Cross />

        <div className="single__title">
          <TitleWeight
            title={service.title}
            shortname={service.shortname}
            wrap="h1"
          // byline={service.byline}
          />
          <div className="single__markdown">
            <ReactMarkdown
              children={service.content.data.content}
            />
          </div>
        </div>

        {/* <Cross /> */}

        <section className="deck">
          {service.videos.map((vids) => (
            <div
              key={vids.id}
              className=""
            >
              <div className="">
                <MuxVideo mux={vids.mux} />
              </div>

              <div className="">
                <h3>{vids.title}</h3>
                <p>{vids.content}</p>
              </div>
              <div className="">{/* stay gold*/}</div>
            </div>
          ))}
        </section>

        <Carousel images={service.gallery} />

      </article>

      <Footer />
      {/*       <SeoShowcase
        title={`${service.title} | ${useSiteMetadata().title}`}
        description={service.excerpt}
      // ogImage={data.strapiService.og_image}
      /> */}
    </>
  );
};

export default ServiceView;
