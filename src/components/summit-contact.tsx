import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const SummitContact = () => (
  <div className="chain">
    <a href={`tel: ${useSiteMetadata().telephone}`} className='layered_button'>
      <button className='sr-only'>
        Call us {useSiteMetadata().telephone}
      </button>
      <div className='background'>
        {/* stay gold */}
      </div>

      <p className="supra">Call us</p>
      <div className='word'>
        {useSiteMetadata().telephone}
      </div>
    </a>

    <a href={useSiteMetadata().mapGoogle} className='layered_button'>
      <button className='sr-only'>
        Find us {useSiteMetadata().location.address.streetAddress}
      </button>
      <div className='background'>
        {/* stay gold */}
      </div>

      <p className="supra">Find us</p>
      <div className='word'>
        {useSiteMetadata().location.address.streetAddress}
      </div>
    </a>
  </div>
);

export default SummitContact;
