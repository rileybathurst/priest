import * as React from "react";
import { Link } from "gatsby";

const Banner = () => {
  return (
    <Link
      to="/services/laser-profile-cutting/"
      className="banner"
    >
      <span className="spec">12kW <span className="flyweight">Fibre</span></span>
      &nbsp;
      <span className="story">South Islands Most Powerful Laser</span>
    </Link>
  );
};

export default Banner;
