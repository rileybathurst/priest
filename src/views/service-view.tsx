import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import MuxVideo from "../components/mux-video";
import MuxCover from "../components/mux-cover";

function Gallery(gallery) {
  if (gallery.images.length > 0) {
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
          <h2>{service.title}</h2>
          <div className="single__markdown">
            <ReactMarkdown
              children={service.content.data.content}
            />
          </div>
        </div>

        {service.videos.map((vids) => (
          <section key={vids.id}>
            <Cross />

            <div className="videos">
              <figure>
                {/*
                // TODO this is a relic from before aspect ratio css
                wait for 2 versions of safari
                */}
                <div>
                  <MuxVideo mux={vids.mux} />
                </div>
              </figure>

              <div>
                <h3>{vids.title}</h3>
                <p>{vids.content}</p>
              </div>
            </div>
          </section>
        ))}

        <Gallery images={service.gallery} />

      </article>

      <Footer />
    </>
  );
};

export default ServiceView;
