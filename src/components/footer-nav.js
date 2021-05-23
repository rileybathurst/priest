import React from "react";
import { StaticQuery, graphql } from "gatsby";
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

          <div className="splitter">
            <hr />
            <div className="cross">{/* stay gold */}</div>
          </div>

          <ul id="footer-nav">
            {data.allStrapiService.edges.map(document => (
              <li key={document.node.slug}>
                <a href={`https://priestsheetmetal.co.nz/services/${document.node.slug}`} target="_blank" rel="noreferrer">
                  {document.node.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    />
  );
}
