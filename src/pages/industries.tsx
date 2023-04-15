import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
import Cross from "../components/cross";

function Byline(props: { byline: string; }) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>;
  } else {
    return null;
  }
}

const IndustriesPage = () => {

  const data = useStaticQuery(graphql`
    query IndustriesQuery {
      allStrapiIndustry(sort: {order: ASC}) {
        nodes {
          id
          title
          byline
          slug

          cover {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Seo
        title="Industries - Priest Sheetmetal &amp; Plate Christchurch"
        description="Adding value through craftsmanship. Our skilled team of tradesman, draftsman and general engineers offer a range of plate processing and metal fabrication services to meet your metalwork needs. With the latest in CNC machinery, CAD software and one of the largest selections of steel folding press brakes in New Zealand we can be sure to assist you at every stage; from design, prototyping though to production."
      />

      <HeaderContact />

      <main className="container">
        <div className="tasks__wrapper">
          {data.allStrapiIndustry.nodes.map((document: { id: React.Key | null | undefined; slug: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; cover: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData; }; }; alternativeText: string; }; byline: any; }) => (
            <div key={document.id} className="tasks--outer">
              <section className="tasks">
                <h3 className="tasks__title h4">
                  <Link to={`/industry/${document.slug}`}>
                    {document.title}
                  </Link>
                </h3>

                <div className="tasks__background--upper shadow">
                  {/* stay gold */}
                </div>

                <Link
                  to={`/industry/${document.slug}`}
                  className="tasks__image shadow"
                  title={document.title} //? this has a slug does it need a title
                >
                  <GatsbyImage
                    image={
                      document.cover?.localFile?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={document.cover?.alternativeText}
                    className="shadow"
                  />
                </Link>

                <div className="tasks__info">
                  <Byline byline={document.byline} />
                  <div className="clipshaper">
                    <div className="clipper">{/* stay gold*/}</div>
                  </div>
                </div>

                <div className="service__more--back">{/* stay gold */}</div>
                <Link
                  to={`/industries/${document.slug}`}
                  className="service__more"
                >
                  More about {document.title}
                </Link>
              </section>

              <Cross />
            </div>

          ))}
        </div>
        {/* tasks__wrapper */}
      </main>
      <Footer />
    </>
  );
};

export default IndustriesPage;
