import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import {render} from 'react-dom'
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Cross from "../components/cross";
import Seo from "../components/seo";

// theres a problem with the key not working here
function Current(props) {
  const current = props.current;
  // const lock = props.lock; // this is always service? might be a cache error
  const slug = props.slug;
  const page = props.page;
  if (current === page) {
    return null;
  } else {
    return (
      <li key={slug}>{/* key={lock} className={slug} */}
        <Link to={`/services/${slug}`} className="backed">
          {page}
        </Link>
      </li>
    );
  }
}

const ServiceView = ({ service, other }) => {
  // START OF COVER
  function Cover(props) {
    var medium = props.medium; // query the cover if its has been set to video
    var video = props.video; // the vimeo id
    var imageAlt = props.imageAlt; // the vimeo id

    if (medium === "video") {
      return (
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "relative",
            marginBottom: "2rem",
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
      return (
        <GatsbyImage
          image={cover}
          alt={imageAlt}
          style={{ marginBottom: "2rem" }}
        />
      );
    }
  }
  // END OF COVER

  // START OF VIDEOS
  function Sec(props) {
    // seperator between the secondary videos
    if (props.hasVideo === true) {
      return <Cross />;
    }
    return null;
  }
  // END OF VIDEOS

  // START OF GALLERY
  function Gallery(props) {
    var hasGallery = props.hasGallery;
    if (hasGallery) {
      return (
        <>
          <Cross />
          <h3>Photo Gallery</h3>
          <ul className="gallery">
            {service.gallery.map((photos) => (
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
    } // else return
    return null;
  }
  // END OF GALLERY

  const cover = getImage(
    service.Cover?.localFile?.childImageSharp?.gatsbyImageData
  );

  return (
    <>
      <Seo
        title={service.title}
        description={service.excerpt}
        ogImage={service.og_image}
      />

      <Header />
      <HeaderContact />

      <p className="breadcrumbs"><Link to="/">Home</Link> &gt; <Link to="/services">Services</Link> &gt; {service.title}</p>

      <article className="single">
        <div className="single__cover">
          <Cover
            medium={service.coverMedium}
            video={service.coverVideo}
            image={service.Cover?.localfile?.childImageData?.GatsbyImageData}
            imageAlt={service.Cover.alternativeText}
          />
        </div>

        <Cross />

        {/* title and content area open */}
        <div className="single__title">
          <h2>{service.title}</h2>
          <div>
            <h3>{service.byline}</h3>
            <div className="single__markdown">
              <ReactMarkdown children={service.markdown} />
            </div>
          </div>
        </div>

        {service.videos.map((vids) => (
          <section key={vids.id}>
            <Sec hasVideo={service.hasVideo} />

            <div className="videos">
              <figure className="">
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

              <div className="">
                <h3>{vids.title}</h3>
                {vids.content}
              </div>
            </div>
          </section>
        ))}
        {/* close out the videos area */}

        <Gallery hasGallery={service.hasGallery} />

        {/* this all used to be under the if gallery but it had a ridiculous double loop I can probably simplify now */}
        {/* I have had some problems with this */}
        {/* implemented the fix in here https://github.com/strapi/gatsby-source-strapi/issues/141 */}
      </article>

      <Cross />

      <h4 className="page-width"><Link to="/services" className="backed">Other Services</Link></h4>
      <ul className="row">
        {other.edges.map((other) => (
          <Current current={service.title} lock={other?.node?.id} slug={other.node.slug} page={other?.node?.title} />
        ))}
      </ul>

      <Footer current={service.title} />
    </>
  );
};

export default ServiceView;
