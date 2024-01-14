import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function ServicesNav() {
  const data = useStaticQuery(graphql`
    query ServicesNavQuery {
      allStrapiService(sort: {order: ASC}) {
        nodes {
          id
          slug
          shortname
        }
      }
    }
  `)

  return (
    <ul>
      {data.allStrapiService.nodes.map((service: {
        slug: string;
        shortname: string;
      }) => (
        <li key={service.id}>
          <Link to={`/services/${service.slug}`}>
            {service.shortname}
          </Link>
        </li>
      ))}
    </ul>
  )
}
