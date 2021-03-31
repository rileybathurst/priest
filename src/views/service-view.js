import * as React from "react"
import { Link } from "gatsby"

const ServiceView = ({ service }) => {
  return (
    <>
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{service.title}</h1>
        <h1>{service.id}</h1>
      </main>
      <footer>Product provided by Incite.</footer>
    </>
  )
}

export default ServiceView
