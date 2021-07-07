import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// import {render} from 'react-dom'
// import ReactMarkdown from "react-markdown";

import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderContact from "../../components/header-contact";

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

const ServiceView = () => (
  <>
    <Header />
    <HeaderContact />

    {/* get rid of this inline styline */}
    <article
      style={{
        maxWidth: "75rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem"
      }}
    >
      <CvilCover />
      {/* <GatsbyImage image={cover} /> test for as a single image */}
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      {/* title and content area open */}
      <div className="block">
        <h1>Civil</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
          orci ut justo elementum, non pharetra ex pretium. Sed sed consectetur
          mauris. Duis vestibulum leo ut ultrices varius. Etiam auctor enim et
          tristique porttitor. Integer malesuada feugiat varius. Suspendisse eu
          purus libero. Donec vel orci dignissim, elementum lacus sit amet,
          sollicitudin sapien. Fusce velit elit, pulvinar vitae purus id,
          bibendum varius metus. Integer interdum feugiat lacus, quis luctus
          magna. Fusce volutpat risus ac velit tincidunt dictum sit amet vitae
          risus. Nullam convallis ipsum orci, in hendrerit mi semper id. Donec
          tempor lectus vel nunc vehicula, nec egestas mauris efficitur. Nullam
          at purus sed eros pulvinar accumsan. Nulla facilisi.
        </p>
      </div>
      {/* .block */}
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      <section class="block">
        <div>
          <h2>Aluminium Tread Plate Stairs</h2>
          <ul>
            <li>Curabitur at velit ut felis consequat congue ut nec magna.</li>
            <li>Cras gravida turpis at massa ornare pulvinar.</li>
            <li>Nunc sit amet ligula quis ligula luctus aliquet.</li>
            <li>
              Nulla sit amet lorem blandit, lacinia urna hendrerit, tristique
              nisl.
            </li>
            <li>Quisque vel diam eget nulla malesuada lobortis quis id sem.</li>
            <li>Proin et massa sed nisl ornare maximus a non orci.</li>
          </ul>
        </div>
        <div class="block-gallery">
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Aluminium-Tread-Plate-Stairs-Fabrication-Cutting-and-Folding-Welding.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
        </div>
      </section>
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      <section class="block">
        <div>
          <h2>Chimney Duct Fabrication</h2>
          <ul>
            <li>Curabitur at velit ut felis consequat congue ut nec magna.</li>
            <li>Cras gravida turpis at massa ornare pulvinar.</li>
            <li>Nunc sit amet ligula quis ligula luctus aliquet.</li>
            <li>
              Nulla sit amet lorem blandit, lacinia urna hendrerit, tristique
              nisl.
            </li>
            <li>Quisque vel diam eget nulla malesuada lobortis quis id sem.</li>
            <li>Proin et massa sed nisl ornare maximus a non orci.</li>
          </ul>
        </div>
        <div class="block-gallery">
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Galvanized-Ducting-Commercial-Fabrication-Cutting-and-Folding-Flange-and-Plate-Rolling.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Industrial-Ducting-Unit-Galvanized-Steel-Fabrication-Cutting-and-Folding-Welding.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/rolling-priest_sheetmetal.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
        </div>
      </section>
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      <section class="block">
        <div>
          <h2>Custom Sized Grates</h2>
          <ul>
            <li>Curabitur at velit ut felis consequat congue ut nec magna.</li>
            <li>Cras gravida turpis at massa ornare pulvinar.</li>
            <li>Nunc sit amet ligula quis ligula luctus aliquet.</li>
            <li>
              Nulla sit amet lorem blandit, lacinia urna hendrerit, tristique
              nisl.
            </li>
            <li>Quisque vel diam eget nulla malesuada lobortis quis id sem.</li>
            <li>Proin et massa sed nisl ornare maximus a non orci.</li>
          </ul>
        </div>
        <div class="block-gallery">
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Civil-Infrastructure-+Profile+Cutting-+Welding-Manhole-Grate-and-Cover-Fabrication-Tread-Plate.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Infrastructure-civil-Steel-Grate-Fabrication-Welding.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Steel-Grate-Fabrication-Welding.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
        </div>
      </section>
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      <section class="block">
        <div>
          <h2>Custom Made Cages</h2>
          <ul>
            <li>Curabitur at velit ut felis consequat congue ut nec magna.</li>
            <li>Cras gravida turpis at massa ornare pulvinar.</li>
            <li>Nunc sit amet ligula quis ligula luctus aliquet.</li>
            <li>
              Nulla sit amet lorem blandit, lacinia urna hendrerit, tristique
              nisl.
            </li>
            <li>Quisque vel diam eget nulla malesuada lobortis quis id sem.</li>
            <li>Proin et massa sed nisl ornare maximus a non orci.</li>
          </ul>
        </div>
        <div class="block-gallery">
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Cages-Custom-Made-Fabrication-Cutting-and-Folding-Welding-Steel.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
        </div>
      </section>
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>
      <section class="block">
        <div>
          <h2>Custom Pipe</h2>
          <ul>
            <li>Curabitur at velit ut felis consequat congue ut nec magna.</li>
            <li>Cras gravida turpis at massa ornare pulvinar.</li>
            <li>Nunc sit amet ligula quis ligula luctus aliquet.</li>
            <li>
              Nulla sit amet lorem blandit, lacinia urna hendrerit, tristique
              nisl.
            </li>
            <li>Quisque vel diam eget nulla malesuada lobortis quis id sem.</li>
            <li>Proin et massa sed nisl ornare maximus a non orci.</li>
          </ul>
        </div>
        <div class="block-gallery">
          <StaticImage
            src="https://priest.s3.ap-southeast-2.amazonaws.com/civil-testing/Steel-Tube-Fabrication-Welding.jpg"
            alt="civil cover"
            style={{
              marginBottom: "2rem"
            }}
          />
        </div>
      </section>
      {/* <Gallery hasGallery={service.hasGallery} /> */}
    </article>
    <Footer />
  </>
);

export default ServiceView;
