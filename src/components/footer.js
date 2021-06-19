import * as React from "react";
import Logo from "./logo";
import FooterNav from "./footer-nav";

const Footer = () => (
  <footer>
    <div className="footer-top">{/* stay gold */}</div>
    <div className="bg-secondary">
      <div className="footer-contact-areas">
        <div className="footer-icons">
          <a href="tel:033669818">
            <div className="footer-icon-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                title="call us"
              >
                <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
              </svg>
              {/* can I make the color a variable? */}
            </div>

            <div className="footer-icon-text">
              <p className="text-left one-point-two-em no-margin">
                <span className="hide-for-large bold-big">Phone</span>
                <span className="show-for-large">(03) 366 9818</span>
              </p>
            </div>
          </a>
        </div>
        {/* .footer-icons  */}

        <div className="footer-icons ">
          <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">
            <div className="footer-icon-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                title="find us"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />

                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            <div className="footer-icon-text">
              <p className="text-left one-point-two-em no-margin">
                <span className="hide-for-large">Map</span>
                <span className="show-for-large">
                  10 Barbour Street, Waltham, Christchurch
                </span>
              </p>
            </div>
          </a>
        </div>
        {/* .footer-icons  */}
        <div className="footer-icons ">
          <a href="mailto:info@priestsheetmetal.co.nz">
            <div className="footer-icon-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                title="email us"
              >
                <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            </div>
            <div className="footer-icon-text">
              <p className="text-left one-point-two-em no-margin">
                <span className="hide-for-large">email</span>
                <span className="show-for-large">
                  info@priestsheetmetal.co.nz
                </span>
              </p>
            </div>
          </a>
        </div>
        {/* .footer-icons  */}
        <div className="footer-icons">
          {/* this one is messy and annoying as its not actually a link */}
          <div>
            <div className="footer-icon-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                title="fax us"
              >
                <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
                <circle cx="18" cy="11.5" r="1" />
              </svg>
            </div>
            <div className="footer-icon-text">
              <p className="text-left one-point-two-em no-margin">
                <span className="hide-for-large">Fax</span>
                <span className="show-for-large">(03) 366 9819</span>
              </p>
            </div>
          </div>
        </div>
        {/* .footer-icons  */}
      </div>
    </div>
    {/* .footer-contact-areas */}

    <FooterNav />

    <div className="bg-secondary copyright">
      <div className="splitter">
        <hr />
        <div className="cross">{/* stay gold */}</div>
      </div>

      <div id="footer-logo">
        <Logo />
      </div>
      <p className="text-center">
        &copy; 2021 {/* this needs to be dynamic */}
      </p>
    </div>
  </footer>
);

export default Footer;
