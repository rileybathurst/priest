import React from "react";
import { StaticQuery, graphql } from "gatsby";
export default function Testimonials() {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allStrapiTestimonials {
            edges {
              node {
                id
                content
                author
              }
            }
          }
        }
      `}
      render={data => (
        <section id="testimonials">
          <div className="bg-light-gray">
            <h3 className="text-center">Testimonials</h3>
          </div>
          <div id="star">
            {/* needed for grid */}
            <div className="bg-light-gray">{/* stay gold */}</div>
            <div className="bg-medium-gray">{/* stay gold */}</div>
            <div id="star-container">
              <svg title="star-1" className="star-1" viewBox="0 0 200 200">
                {/* height="210" width="500" */}
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
                {/* width="100%" height="100%" */}
              </svg>
              <svg title="star-2" className="star-2" viewBox="0 0 200 200">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
              <svg title="star-3" className="star-3" viewBox="0 0 200 200">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
              <svg title="star-4" className="star-4" viewBox="0 0 200 200">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
              <svg title="star-5" className="star-5" viewBox="0 0 200 200">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
            </div>
            {/* #star-container */}
          </div>
          {/* #star */}
          <div id="quotes" className="bg-medium-gray">
            {data.allStrapiTestimonials.edges.map(document => (
              <blockquote id="quoted" className="bg-medium-gray" key={document.node.id}>
                <p>{document.node.content}</p>
                <footer className="text-center">{document.node.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    />
  );
}
