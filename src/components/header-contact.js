import * as React from "react"

const HeaderContact = () => (
    <div id="header-contact-background" class="shadow">
        <div class="header-contact">
            <h3>SPECIALIST WELDERS, SHEETMETAL ENGINEERS &amp; GENERAL FABRICATORS IN CHRISTCHURCH.</h3>

            <section class="together">
                <div id="header-contact--phone">
                <div className="header-contact--icon">
                    <a href="tel:033669818">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" title="phone" >
                        <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                        </svg>
                    </a>
                </div>
                <div className="header-contact--text">
                    <p className="one-point-two-em no-margin"><b><a href="tel:033669818">Call us today to discuss your project: 366 9818</a></b></p>
                </div>
                </div> {/* .header-contact--phone */}

                <div id="header-contact--place">
                <div className="header-contact--icon">
                    <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" title="map" ><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                    </a>
                </div>
                <div className="header-contact--text">
                    <p className="one-point-two-em no-margin"><b><a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">Find us at 10 Barbour Street, Christchurch</a></b></p>
                </div>
                </div> {/* .header-contact--place */}
            </section>
        </div> 
    </div>
)

export default HeaderContact
