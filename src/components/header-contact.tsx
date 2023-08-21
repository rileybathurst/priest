import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const HeaderContact = () => (
  <div className="header__contact--wrap">
    <section className="header__contact">
      <h3>
        <a href={useSiteMetadata().mapGoogle}>
          Find us {useSiteMetadata().location.address.streetAddress}
        </a>
      </h3>
      <h3>
        <a href={`tel: ${useSiteMetadata().telephone}`}>
          Call us {useSiteMetadata().telephone}
        </a>
      </h3>

    </section>
  </div>
);

export default HeaderContact;
