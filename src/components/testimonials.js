// I need to variable the polygons of the stars

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
      render={(data) => (
        <section id="testimonials">
          <h3 className="text-center">Testimonials</h3>
          <div className="stars">
          <div className="star__back">{/* stay gold */}</div>
            <div className="svgs">
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
            {/* .svgs */}
          </div>
          {/* .star */}
          <div id="quotes">
            {/* used for animation */}
            {data.allStrapiTestimonials.edges.map((document) => (
              <blockquote className="quoted" key={document.node.id}>
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
