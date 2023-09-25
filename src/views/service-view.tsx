import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import MuxVideo from "../components/mux-video";
import MuxCover from "../components/mux-cover";

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

    // console.log(currentIndex);
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

    // console.log(images.images);
    // console.log(index);

    // this doesnt find it but I feel like its close?
    // console.log(images.images.indexOf((element) => element.name === index));

    // console.log(images.images.findIndex((element) => element.name === index))
    let i = images.images.findIndex((element) => element.name === index);

    galleryRef.current.children[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  // i have an index but not a number?


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
            <button onClick={() => handlePrev(currentIndex)}>Previous</button>
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

            {/* {Object.keys(images.images)} */}

            <button onClick={() => handleNext(currentIndex)}>Next</button>
          </section>
        </div>
      </>
    );
  } else {
    return null;
  }
}

const ServiceView = ({ service }) => {
  function Cover(props) {
    var imageAlt = props.imageAlt; // the vimeo id

    if (props.muxCover) {
      return (
        <div className="single__cover--video">
          <MuxCover mux={props.muxCover} />
        </div>
      );
    } else {
      return (
        <GatsbyImage
          image={cover}
          alt={imageAlt}
          className="single__cover--image"
        />
      );
    }
  }

  const cover = getImage(
    service.cover?.localFile?.childImageSharp?.gatsbyImageData
  );

  return (
    <>
      <Header />
      <HeaderContact />

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
            <p className="current" aria-current="page">{service.title}</p>
          </li>
        </ol>
      </nav>

      <article className="single">
        <div className="single__cover">
          <Cover
            medium={service.coverMedium}
            muxCover={service.muxCover}
            image={service.cover?.localfile?.childImageData?.GatsbyImageData}
            imageAlt={service.cover?.alternativeText}
          />
        </div>

        <Cross />

        <div className="single__title">
          <hgroup>
            <h2 className="eyebrow">{service.title}</h2>
            <p className="supra">{service.byline}</p>
          </hgroup>
          <div className="single__markdown">
            <ReactMarkdown
              children={service.content.data.content}
            />
          </div>
        </div>

        <section className="deck card__large">
          {service.videos.map((vids) => (
            <div
              key={vids.id}
              className="card"
            >
              <div className="card__video">
                <MuxVideo mux={vids.mux} />
              </div>

              <div className="card__text">
                <h3>{vids.title}</h3>
                <p>{vids.content}</p>
              </div>
              <div className="card__backer">{/* stay gold*/}</div>
            </div>
          ))}
        </section>

        {/* <Gallery images={service.gallery} /> */}

        <Carousel images={service.gallery} />

      </article>

      <Footer />
    </>
  );
};

export default ServiceView;
