import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";

const ServiceView = ({ service }) => {
  // START OF COVER
  function Cover(props) {
    var medium = props.medium; // query the cover if its has been set to video
    var video = props.video; // the vimeo id

    if (medium === "video") {
      return (
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}
        >
          <iframe
            src={"https://player.vimeo.com/video/" + video + "?background=1"}
            title="cover video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      );
    } else {
      return <GatsbyImage image={cover} />;
    }
  }
  // END OF COVER

  // START OF VIDEOS
  function Sec(props) {
    // seperator between the secondary videos
    if (props.hasVideo === true) {
      return <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>;
    }
    return null;
  }
  // END OF VIDEOS

  // START OF GALLERY
  function Gallery(props) {
    // const image = getImage(service.gallery.formats.medium) // this might not work because of being in the map
    
    var hasGallery = props.hasGallery;
    if (hasGallery) {
      return (
        <>
          <div className="splitter">
            <hr />
            <div className="cross">{/* stay gold */}</div>
          </div>

          <div
          style={{
            display: "flex",
            marginBottom: "28px",
            justifyContent: "space-between",
            flexDirection: "column"
          }}
          className="services-photogallery"
        >
          <h3 className="wp-block-colum">Photo Gallery</h3>
          <div className="wp-block-colum">
            {/* 🚨 figure seems the wrong thing to be here */}
            <figure className="wp-block-gallery columns-2 is-cropped">
              <ul className="blocks-gallery-grid">
                {service.gallery.map((photos) => (
                    <li key={photos.hash} className="blocks-gallery-item">
                      <p>{photos.formats.thumbnail.id}</p>
                      <p>{photos.hash}</p>
                    {/* <li>test{photos.formats.medium.id}</li> */}
                    {/* I have had issues with null values this was fixed with removing and adding images */}
                    {/* check it with localhost:8000/___graphql */}
                      {/* <GatsbyImage
                        image={
                          photos.formats.medium.childImageSharp.gatsbyImageData
                        }
                        alt={photos.hash}
                      /> 
                      theres an image cache issue with this */}
                      {/* <GatsbyImage image={image} alt={photos.hash} /> */}
                      <GatsbyImage image={photos.formats.thumbnail.childImageSharp.gatsbyImageData} alt={photos.hash} /> 
                    </li>
                ))}
              </ul>
            </figure>
          </div>
          {/* .wp-block-column */}
        </div>
          {/* {props.loop} */}
        </>
      );
    } // else return
    return (
      null
    );
  }
  // END OF GALLERY

  const cover = getImage(service.Cover);
  return (
    <>
      <Header />
      <HeaderContact />

      {/* get rid of this inline styline */}
      <article
        style={{
          maxWidth: "75rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
        }}
      >
        <Cover
          medium={service.coverMedium}
          video={service.coverVideo}
          image={cover}
        />

        {/* <GatsbyImage image={cover} /> test for as a single image */}

        <div className="splitter">
          <hr />
          <div className="cross">{/* stay gold */}</div>
        </div>

        {/* title and content area open */}
        <div
          style={{
            display: "flex",
            marginBottom: "28px",
            justifyContent: "space-between",
          }}
          className="service-info"
        >
          <h2 className="wp-block-colum">{service.title}</h2>
          <div className="wp-block-colum">
            <h3>{service.byline}</h3>
            <p>{service.Content}</p>
          </div>
        </div>
        {/* title and content area close */}

        {service.videos.map((vids) => (
          <>
            <Sec hasVideo={service.hasVideo} />

            <div className="wp-block-media-text">
              <figure className="wp-block-media-text__media">
                <div
                  style={{
                    padding: "56.25% 0 0 0",
                    position: "relative",
                  }}
                >
                  <iframe
                    title={vids.title}
                    src={
                      "https://player.vimeo.com/video/" +
                      vids.vimeo +
                      "?title=0&byline=0&portrait=0"
                    }
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              </figure>

              <div className="wp-block-media-text__content">
                <h3>{vids.title}</h3>
                {vids.content}
              </div>
            </div>
          </>
        ))}
        {/* close out the videos area */}

        <Gallery hasGallery={service.hasGallery} />

        {/* this all used to be under the if gallery but it had a ridiculous double loop I can probably simplify now */}
        {/* I have had some problems with this */}
        {/* implemented the fix in here https://github.com/strapi/gatsby-source-strapi/issues/141 */}
        
      </article>
      <Footer />
    </>
  );
};

export default ServiceView;
