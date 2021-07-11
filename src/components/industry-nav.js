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
        <nav>
          <ul className="footer__industries">
            {data.allStrapiIndustries.edges.map(document => (
              <li key={document.node.slug}>
                <Link to={`/industries/${document.node.slug}`} target="_blank" rel="noreferrer" className="backed">
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
