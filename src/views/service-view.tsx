import React, { useEffect, useRef } from "react";
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

  // console.log(images);

  // Select all slides
  useEffect(() => {

    console.log(useRef);

    const slides = document.querySelectorAll(".slide");
    console.log(slides);

    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
  });

  if (images.images?.length > 0) {
    return (
      <>
        <Cross />
        <div className="carousel__area">
          <div className="carousel__wrap">
            <ul className="carousel">
              {images.images.map((photos) => (
                <li
                  key={photos.hash}
                  className="slider"
                  ref={useRef()}
                >
                  <GatsbyImage
                    image={photos.localFile?.childImageSharp?.gatsbyImageData}
                    alt={photos.name}
                  />
                </li>
              ))}
            </ul>
            <ul className="thumbnails">
              {images.images.map((photos) => (
                <li key={photos.hash} className="slider">
                  <GatsbyImage
                    image={photos.localFile?.childImageSharp?.gatsbyImageData}
                    alt={photos.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

function Gallery(gallery) {
  if (gallery.images?.length > 0) {
    return (
      <>
        <Cross />
        <h3>Photo Gallery</h3>
        <ul className="gallery">
          {gallery.images.map((photos) => (
            <li key={photos.hash}>
              <GatsbyImage
                image={photos.localFile?.childImageSharp?.gatsbyImageData}
                alt={photos.name}
              />
            </li>
          ))}
        </ul>
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
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <p className="chevron">&gt;</p>
          </li>
          <li>
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
