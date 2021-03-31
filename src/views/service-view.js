import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";

const ServiceView = ({ service }) => {
  // START OF COVER
  function Cover(props) {
    var medium = props.medium // query the cover if its has been set to video
    var video = props.video // the vimeo id
    // var photo = props.photo // if there isnt a video cover insert a photo
    var image = props.image // if there isnt a video cover insert a photo

    if (medium === 'video') {
      return  <div style={{
        padding:'56.25% 0 0 0',
        position:'relative'
        }}>
          <iframe src={'https://player.vimeo.com/video/' + video + '?background=1'}
          title='cover video'
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%'
            }}
            frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
        </div>
    } else {
      return <GatsbyImage image={cover} />
    }
  }
  // END OF COVER

  // Im unsure if this has to be below but currently it works so don't break it
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

        <Cover medium={service.coverMedium} video={service.coverVideo} image={cover} />

        {/* <GatsbyImage image={cover} /> test for as a single image */}

        <hr className="swiss" />

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
      </article>
      <Footer />
    </>
  );
};

export default ServiceView;
