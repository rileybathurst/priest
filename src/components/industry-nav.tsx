import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// TODO: Im not sure this is the right way to do this
// Sending a prop from the page might do a far nicer job
function Current(props: { current?: any; name?: any; slug?: any; }) {
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

export default function IndustryNav(props: { current?: any; }) {
  const data = useStaticQuery(graphql`
    query IndustryNavQuery {
      allStrapiIndustry(sort: {order: ASC}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <>
      {data.allStrapiIndustry.nodes.map((industry: {
        slug: string;
        title: string;
      }) => (
        <li key={industry.slug}>
          <Current current={props.current} name={industry.title} slug={industry.slug} />
        </li>
      ))}
    </>
  )
}
