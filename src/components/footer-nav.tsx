import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function FooterNav() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <nav>
      <ul className="footer__services">
        {data.allStrapiService.nodes.map((document: {
          slug: string;
          title: string;
        }) => (
          <li key={document.slug}>
            <Link to={`/services/${document.slug}`} target="_blank" rel="noreferrer" className="footer-lists">
              {document.title}
            </Link>
          </li>
        ))}
        <li>{/* stay gold spacing */}</li>
      </ul>
    </nav>
  )
}
