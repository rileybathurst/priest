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

  // TODO: rename
  function Sec(props) {
    // seperator between the secondary videos
    if (props.hasVideo === true) {
      return <Cross />;
    }
    return null;
  }


  const cover = getImage(
    service.cover?.localFile?.childImageSharp?.gatsbyImageData
  );

  return (
    <>
      <Header />
      <HeaderContact />

      {/* // TODO: breadcrumbs aria */}
      <section className="breadcrumbs">
        <p>
          <Link to="/services">Services</Link>
        </p>
        <p className="chevron">&gt;</p>
        <p className="current">{service.title}</p>
      </section>

      <article className="single">
        <div className="single__cover">
          <Cover
            medium={service.coverMedium}
            // video={service.coverVideo}
            muxCover={service.muxCover}
            image={service.cover?.localfile?.childImageData?.GatsbyImageData}
            imageAlt={service.cover?.alternativeText}
          />
        </div>

        <Cross />

        <div className="single__title">
          <h2>{service.title}</h2>
          {/* // ? is this div needed? */}
          <div className="single__markdown">
            <ReactMarkdown
              children={service.content.data.content}
            />
          </div>
        </div>

        {service.videos.map((vids) => (
          <section key={vids.id}>
            {/* // TODO: do this with a loop */}
            <Sec hasVideo={service.hasVideo} />

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
