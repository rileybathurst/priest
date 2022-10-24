import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../src/components/layout";
import HeaderContact from "../src/components/header-contact";
import Seo from "../src/components/seo";
import Cross from "../src/components/cross";

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="News - Priest Sheetmetal &amp; Plate Christchurch"
        description="Recent happenings."
      />

      <HeaderContact />

      <main className="container">
        <p className="breadcrumbs"><Link to="/">Home</Link>  &gt; News</p>

        <Cross />

        {data.allStrapiNews.edges.map(document => (
          <div key={document.node.id} >
            <article className="single">
              <h4>
                <Link to={`/news/${document.node.slug}`}>
                  {document.node.title}
                </Link>
              </h4>
              <p>{document.node.createdAt}</p>
              <p>{document.node.excerpt}</p>
            </article>
            <Cross />
          </div>
        ))}
        {/* tasks__wrapper */}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query NewsQuery {
    allStrapiNews {
      edges {
        node {
          id
          title
          Content
          slug
          excerpt
          createdAt(formatString: "D MMMM, YYYY")
        }
      }
    }
  }
`;

export default NewsPage;
