import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
import Cross from "../components/cross";

function Byline(props) {
  if (props.byline) {
    // console.log('byline');
    return <h5>{props.byline}</h5>;
  } else {
    return null;
  }
}

const IndustriesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Industries - Priest Sheetmetal &amp; Plate Christchurch"
        description="Adding value through craftsmanship. Our skilled team of tradesman, draftsman and general engineers offer a range of plate processing and metal fabrication services to meet your metalwork needs. With the latest in CNC machinery, CAD software and one of the largest selections of steel folding press brakes in New Zealand we can be sure to assist you at every stage; from design, prototyping though to production."
      />

      <HeaderContact />

      <main className="container">
        <p className="breadcrumbs"><Link to="/">Home</Link> &gt; Industry Suppliers</p>
        <div className="tasks__wrapper">
          {data.allStrapiIndustry.edges.map(document => (
            <div key={document.node.id} className="tasks--outer">
              <section className="tasks">
                <h3 className="tasks__title h4">
                  <Link to={`/industry/${document.node.slug}`}>
                    {document.node.title}
                  </Link>
                </h3>

                <div className="tasks__background--upper shadow">
                  {/* stay gold */}
                </div>

                <Link
                  to={`/industry/${document.node.slug}`}
                  className="tasks__image shadow"
                  title={document.node.title}
                >
                  <GatsbyImage
                    image={
                      document.node.cover?.localFile?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={document.node.cover?.alternativeText}
                    className="shadow"
                  />
                </Link>

                <div className="tasks__info">
                  <Byline byline={document.node.byline} />
                  <div className="clipshaper">
                    <div className="clipper">{/* stay gold*/}</div>
                    {/* <p>{document.node.content}</p> */}
                  </div>
                </div>

                <div className="service__more--back">{/* stay gold */}</div>
                <Link
                  to={`/industries/${document.node.slug}`}
                  className="service__more"
                >
                  {/* <span className="button hollow"> */}
                  More about {document.node.title}
                  {/* </span> */}
                </Link>
              </section>

              <Cross />
            </div>

          ))}
        </div>
        {/* tasks__wrapper */}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query IndustriesQuery {
    allStrapiIndustry(sort: {order: ASC}) {
      edges {
        node {
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
  }
`;

export default IndustriesPage;


/* 
content

 */