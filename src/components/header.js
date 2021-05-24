import * as React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import ProfileIcon from "./profile-icon"
import SmallMenu from "./small-menu"

const Header = () => (
  <>
    <header>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="text-center">
          <li key="home"><Link to="/">Home</Link></li>
          <li key="services"><Link to="/services">Services</Link></li>
          <li key="contact"><Link to="/contact">Contact</Link></li>
          <li key="profile"><a href="https://priestprofile.co.nz/"><ProfileIcon />Profile Cutting and Laser</a></li>
        </ul>
      </nav>

      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <div className="bg-secondary shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              <li key="home"><Link to="/">Home</Link></li>
              <li key="services"><Link to="/services">Services</Link></li>
              <li key="gallery"><Link to="/gallery">Gallery</Link></li>
              <li key="contact"><Link to="/contact">Contact</Link></li>
              <li key="profile"><a href="https://priestprofile.co.nz/"><ProfileIcon />Profile Cutting and Laser</a></li>
            </ul>
          </div>
        </nav>
      </div>{/* medium up nav */}
    </header>
  </>
)

export default Header
