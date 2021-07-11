import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
export default function FooterNav() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allStrapiService(sort: { fields: [order], order: ASC }) {
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

          <ul id="footer-nav">
            {data.allStrapiService.edges.map(document => (
              <li key={document.node.slug}>
                <Link to={`/services/${document.node.slug}`} target="_blank" rel="noreferrer">
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
