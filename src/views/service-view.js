import * as React from "react"
import { Link } from "gatsby"

function ServiceView({ service }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{service.title}</h1>
      </main>
      <footer>Product provided by Incite.</footer>
    </div>
  )
}

export default ServicetView
