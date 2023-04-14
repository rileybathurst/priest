// I need to variable the polygons of the stars

import React from "react";
import { StaticQuery, graphql } from "gatsby";

function Stars() {
  let stars: number[] = []
  for (let i = 0; i < 5; i++) {
    stars.push(i)
  }

  return (
    <>
      {stars.map((star) => (
        <svg className={`star-${star}`} viewBox="0 0 200 200" key={star}>
          <polygon points="100,10 40,198 190,78 10,78 160,198">
            <title>star-{star}</title>
          </polygon>
        </svg>
      ))}
    </>
  )
}

export default function Testimonials() {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allStrapiTestimonial {
              nodes {
                id
                content
                author
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

              <Stars />

            </div>
          </div>
          <div id="quotes">
            {/* used for animation */}
            {data.allStrapiTestimonial.nodes.map((Testimonial: {
              id: string;
              content: string;
              author: string;
            }) => (
              <blockquote className="quoted" key={Testimonial.id}>
                <p>{Testimonial.content}</p>
                <footer className="text-center">{Testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    />
  );
}
