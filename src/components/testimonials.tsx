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
      <div className="stars">
        <Stars />
      </div>
      <div id="quotes">
        {data.allStrapiTestimonial.nodes.map((testimonial: {
          id: string;
          content: string;
          author: string;
        }) => (
          <blockquote key={testimonial.id}>
            <p>{testimonial.content}</p>
            <footer>{testimonial.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
