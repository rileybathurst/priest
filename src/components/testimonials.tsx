// I need to variable the polygons of the stars

import React from "react";
import { StaticQuery, graphql } from "gatsby";
export default function Testimonials() {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allStrapiTestimonial {
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
              <svg className="star-2" viewBox="0 0 200 200">
                {/* // TODO rename the titles like this */}
                <title>star-2</title>
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
          </div>
          <div id="quotes">
            {/* used for animation */}
            {data.allStrapiTestimonial.edges.map((Testimonial) => (
              <blockquote className="quoted" key={Testimonial.node.id}>
                <p>{Testimonial.node.content}</p>
                <footer className="text-center">{Testimonial.node.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    />
  );
}
