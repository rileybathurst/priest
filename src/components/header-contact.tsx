import * as React from "react";
import SummitContact from "./summit-contact";

const HeaderContact = () => (
  <div className="header-contact-background-wrap">
    <div id="header-contact-background" className="shadow">
      <div className="header-contact">
        <h3>
          SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS IN
          CHRISTCHURCH.
        </h3>

        <section className="together">
          <SummitContact />
        </section>
      </div>
    </div>
  </div>
);

export default HeaderContact;
