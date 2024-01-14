import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const SummitContact = () => (
  <div className="chain">
    <div className='button_eyebrow'>
      <p className="supra">Call us</p>
      <a
        href={`tel: ${useSiteMetadata().telephone}`}
        className='button'
      >
        <span className='background'>
          {/* stay gold */}
        </span>
        <span className="foreground">
          {useSiteMetadata().telephone}
        </span>
      </a>
    </div>

    <div className='button_eyebrow'>
      <p className="supra">Find us</p>
      <a
        href={`tel: ${useSiteMetadata().mapGoogle}`}
        className='button'
      >
        <span className='background'>
          {/* stay gold */}
        </span>
        <span className="foreground">
          {useSiteMetadata().location.address.streetAddress}
        </span>
      </a>
    </div>
  </div>
);

export default SummitContact;
