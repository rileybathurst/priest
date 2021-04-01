import * as React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import SmallMenu from "./small-menu"

const Header = () => (
  <>
    <header>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="text-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <div className="bg-secondary show-for-medium shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              {/* this is written kinda backwards to make the link be the full size but should be fixed */}
              <Link to="/"><li>Home</li></Link>
              <Link to="/services"><li>Services</li></Link>
              <Link to="/gallery"><li>Gallery</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
        </nav>
      </div>{/* medium up nav */}
    </header>
  </>
)

export default Header
