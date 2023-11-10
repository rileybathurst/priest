import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function IndustryNav() {
  const allStrapiIndustry = useStaticQuery(graphql`
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
      {allStrapiIndustry.nodes.map((industry: {
        title: string;
        slug: string;
      }) => (
        <li key={industry.slug}>
          <Link to={`/industry/${industry.slug}`}>
            {industry.title}
          </Link>
        </li>
      ))}
    </>
  )
}
