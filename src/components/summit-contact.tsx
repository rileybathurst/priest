import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const SummitContact = () => (
  <>
    <h3 className="dampier">
      <a href={`tel: ${useSiteMetadata().telephone}`}>
        Call us {useSiteMetadata().telephone}
      </a>
    </h3>

    <h3 className="dampier">
      <a href={useSiteMetadata().mapGoogle}>
        Find us {useSiteMetadata().location.address.streetAddress}
      </a>
    </h3>
  </>
);

export default SummitContact;
