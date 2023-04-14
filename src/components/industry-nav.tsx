import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// TODO: Im not sure this is the right way to do this
function Current(props: { current: any; name: any; slug: any; }) {
  const current = props.current;
  const name = props.name;
  const slug = props.slug;

  if (current === name) {
    return (
      <Link to={`/industry/${slug}`} className="current">
        {name}
      </Link>
    );
  } else {
    return (
      <Link to={`/industry/${slug}`}>
        {name}
      </Link>
    );
  }
}

export default function IndustryNav(props: { current: any; }) {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allStrapiIndustry(sort: {order: ASC}) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allStrapiIndustry.nodes.map((document: {
        slug: string;
        title: string;
      }) => (
        <li key={document.slug}>
          <Current current={props.current} name={document.title} slug={document.slug} />
        </li>
      ))}
    </>
  )
}
