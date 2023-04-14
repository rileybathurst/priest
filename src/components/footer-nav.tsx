import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
export default function FooterNav() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allStrapiService(sort: {order: ASC}) {
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
          <ul class="footer__services">
            {data.allStrapiService.edges.map(document => (
              <li key={document.node.slug}>
                <Link to={`/services/${document.node.slug}`} target="_blank" rel="noreferrer" className="backed footer-lists">
                  {document.node.title}
                </Link>
              </li>
            ))}
            <li>{/* stay gold spacing */}</li>
          </ul>
        </nav>
      )}
    />
  );
}
