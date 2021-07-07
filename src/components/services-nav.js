import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
export default function ServicesNav() {
  return (
    <StaticQuery
      query={graphql`
        query ServicesQuery {
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
        <>
        {data.allStrapiService.edges.map(document => (
          <li key={document.node.slug}>
            <Link to={`/services/${document.node.slug}`} target="_blank" rel="noreferrer">
              {document.node.title}
            </Link>
          </li>
        ))}
        </>
      )}
    />
  );
}
