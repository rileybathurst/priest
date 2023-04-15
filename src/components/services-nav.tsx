import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

function Current(props: {
  current?: string;
  name?: string;
  slug?: string;
}) {
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

export default function ServicesNav(props: { current?: any; }) {
  const data = useStaticQuery(graphql`
    query ServicesNavQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <>
      {data.allStrapiService.nodes.map((service: {
        slug: string;
        title: string;
      }) => (
        <li key={service.slug} >
          <Current current={props.current} name={service.title} slug={service.slug} />
        </li>
      ))}
    </>
  )
}
