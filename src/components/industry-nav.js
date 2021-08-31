import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

function Current(props) {
  const current = props.current;
  const name = props.name;
  const slug = props.slug;

  if (current === name) {
    return (
      <Link to={`/industries/${slug}`} className="current">
        {name}
      </Link>
    );
  } else {
    return (
      <Link to={`/industries/${slug}`}>
        {name}
      </Link>
    );
  }
}

export default function IndustryNav(props) {
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
/*         <nav>
          <ul className="footer__industries"> */
          <>
            {data.allStrapiIndustries.edges.map(document => (
              <li key={document.node.slug}>
{/*                 <Link to={`/industries/${document.node.slug}`} target="_blank" rel="noreferrer" className="backed">
                  {document.node.title}
                </Link> */}
                <Current current={props.current} name={document.node.title} slug={document.node.slug} />
              </li>
            ))}
          </>
/*           </ul>
        </nav> */
      )}
    />
  );
}
