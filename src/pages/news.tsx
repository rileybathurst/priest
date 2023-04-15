import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";
import Cross from "../components/cross";

const NewsPage = () => {

  const data = useStaticQuery(graphql`
    query NewsQuery {
      allStrapiNew {
        edges {
          node {
            id
            title
            slug
            excerpt
            createdAt(formatString: "D MMMM, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Seo
        title="News - Priest Sheetmetal &amp; Plate Christchurch"
        description="Recent happenings."
      />

      <HeaderContact />

      <main className="container">
        <p className="breadcrumbs"><Link to="/">Home</Link>  &gt; News</p>

        <Cross />

        {data.allStrapiNew.edges.map(news => (
          <div key={news.node.id} >
            <article className="single">
              <h4>
                <Link to={`/new/${news.node.slug}`}>
                  {news.node.title}
                </Link>
              </h4>
              <p>{news.node.createdAt}</p>
              <p>{news.node.excerpt}</p>
            </article>
            <Cross />
          </div>
        ))}
        {/* tasks__wrapper */}
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
