import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
export default function IndustryNav() {
  return (
    <StaticQuery
      query={graphql`
        query IndustryNavQuery {
          allStrapiIndustries(sort: { fields: [order], order: ASC }) {
            edges {
              node {
                slug
                title
              }
            }
          }
        }
      `}
      render={data => (
        <nav className="bg-secondary">

{/*           <div className="splitter">
            <hr />
            <div className="cross">stay gold</div>
          </div> */}

          <ul id="footer-nav">
            {data.allStrapiIndustries.edges.map(document => (
              <li key={document.node.slug}>
                <Link to={`/industries/${document.node.slug}`} target="_blank" rel="noreferrer">
                  {document.node.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    />
  );
}
