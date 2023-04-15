import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allStrapiTestimonial {
        nodes {
          id
          content
          author
        }
      }
    }
  `)

  return (
    <section id="testimonials">
      <h3 className="text-center">Testimonials</h3>
      <div className="stars">
        <div className="star__back">{/* stay gold */}</div>
        <div className="svgs">

          <Stars />

        </div>
      </div>
      <div id="quotes">
        {data.allStrapiTestimonial.nodes.map((testimonial: {
          id: string;
          content: string;
          author: string;
        }) => (
          <blockquote className="quoted" key={testimonial.id}>
            <p>{testimonial.content}</p>
            <footer className="text-center">{testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
