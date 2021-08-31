import React, { useRef } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

function Current(props) {
  const current = props.current;
  const name = props.name;
  const slug = props.slug;

  if (current === name) {
    return (
      <Link to={`/services/${slug}`} className="current">
        {name}
      </Link>
    );
  } else {
    return (
      <Link to={`/services/${slug}`}>
        {name}
      </Link>
    );
  }
}

export default function ServicesNav(props) {
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
          <li key={document.node.slug} >
            <Current current={props.current} name={document.node.title} slug={document.node.slug} />
          </li>
        ))}
        </>
      )}
    />
  );
}
