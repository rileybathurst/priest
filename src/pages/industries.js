import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

function CvilCover() {
  return (
    <StaticImage
      src="https://priest.s3.ap-southeast-2.amazonaws.com/cover-images/civil-cover.jpg"
      alt="civil cover"
      style={{
        marginBottom: "2rem"
      }}
    />
  );
}

const IndustriesPage = () => (
  <Layout>
    <Seo title="Industries - Priest Sheetmetal &amp; Plate Christchurch" />

    <HeaderContact />

    <main className="container">
      <div className="tasks__wrapper">
        <section key="industries" className="tasks">
          <h4 className="tasks__title">
            <Link to={`/industries/civil`}>Civil</Link>
          </h4>

          <div className="tasks__background--upper shadow">
            {/* stay gold */}
          </div>

          <Link to={`/industries/civil`} className="tasks__image shadow">
            <CvilCover />
          </Link>

          <div className="tasks__info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat orci ut justo elementum, non pharetra ex pretium. Sed sed
              consectetur mauris. Duis vestibulum leo ut ultrices varius. Etiam
              auctor enim et tristique porttitor. Integer malesuada feugiat
              varius. Suspendisse eu purus libero. Donec vel orci dignissim,
              elementum lacus sit amet, sollicitudin sapien. Fusce velit elit,
              pulvinar vitae purus id, bibendum varius metus. Integer interdum
              feugiat lacus, quis luctus magna. Fusce volutpat risus ac velit
              tincidunt dictum sit amet vitae risus. Nullam convallis ipsum
              orci, in hendrerit mi semper id. Donec tempor lectus vel nunc
              vehicula, nec egestas mauris efficitur. Nullam at purus sed eros
              pulvinar accumsan. Nulla facilisi.
            </p>
            <Link to={`/industries/civil`} className="tasks__more">
              <span className="button hollow">More about Civil</span>
            </Link>
          </div>
        </section>

        <div className="tasks__cross cross__wrapper">
          <hr className="cross__hr" />
          <div className="cross__divider">{/* stay gold */}</div>
        </div>
      </div>
      {/* tasks__wrapper */}
    </main>
  </Layout>
);

export default IndustriesPage;
