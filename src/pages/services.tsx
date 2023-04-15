import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
import Cross from "../components/cross";

const ServicesPage = () => {

  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          id
          title
          excerpt
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
        title="Services - Priest Sheetmetal &amp; Plate Christchurch"
        description="Specialist laser cutting &amp; steel suppliers, fabricatiors and welders in Chrirstchurch. With over 67 years running experience, Priest Sheetmetal is an established name as a manufacturer and supplier of profile cut and fabricated steelwork to Christchurch businesses."
      />

      <HeaderContact />

      <main className="container">
        <p className="breadcrumbs"><Link to="/">Home</Link>  &gt; Services</p>

        <div className="tasks__wrapper">
          {data.allStrapiService.nodes.map((service: {
            id: React.Key;
            slug: string;
            title: string;
            cover: { localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData; }; }; alternativeText: string; };
            excerpt: string;
          }) => (
            <div key={service.id} >
              <section className="tasks">
                <h4 className="tasks__title">
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h4>

                <div className="tasks__background--upper shadow">
                  {/* stay gold */}
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="tasks__image shadow"
                >
                  <GatsbyImage
                    image={
                      service.cover?.localFile?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={service.cover?.alternativeText}
                    className="shadow"
                  />
                </Link>

                <div className="tasks__info">
                  <p>{service.excerpt}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="tasks__more"
                  >
                    <span>
                      More about {service.title}
                    </span>
                  </Link>
                </div>
              </section>
              <Cross />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
