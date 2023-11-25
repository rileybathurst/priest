require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Priest Metal',
    description: 'Specialist Laser Cutting & Steel Suppliers, Fabricators and Welders in Christchurch, New Zealand',
    url: 'https://priestsheetmetal.co.nz/',
    siteUrl: 'https://priestsheetmetal.co.nz',
    image: 'https://priest.s3.ap-southeast-2.amazonaws.com/ogimages/priest-og-image.jpg',
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    email: 'info@priestsheetmetal.co.nz',
    // TODO: I don't think this is used
    enquiriesEmail: 'enquiries@priestsheetmetal.co.nz',
    logo: 'images/PriestSheetMetal&PlateChristchurch-blue.png',
    // TODO: add a geo fence to this
    areaServed: 'Christchurch, New Zealand',
    location: {
      address: {
        streetAddress: "10 Barbour Street",
        addressLocality: "Waltham",
        addressRegion: "Christchurch",
        postalCode: "8011",
        addressCountry: "New Zealand",
      },
    },
    mapGoogle: 'https://goo.gl/maps/DLWcUSz5iroPwhbb9',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          `service`,
          `videos`,
          `testimonial`,
          `industry`,
          `industry-aspect`,
          `new`,
          `image-grab`,
          `process`
        ],
        singleTypes: [
          `craftsmanship`,
          `specialist`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // helps with mozilla observatory in a substatial way
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    // favicon support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Priest Sheetmetal &amp; Plate Christchurch`,
        short_name: `priestsheetmetal`,
        start_url: `/`,
        // icon: 'https://priest.s3.ap-southeast-2.amazonaws.com/images/icon.svg'
        icon: 'src/images/icon.svg'
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeScriptHashes: false,
        directives: {
          "default-src": "'self' blob: player.vimeo.com google.com https://stream.mux.com/ https://inferred.litix.io/ *.mux.com/",
          "style-src": "'self' 'unsafe-inline'",
          "script-src": "'self' blob: 'unsafe-inline' player.vimeo.com google.com",
          // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
          "font-src": "'self' 'unsafe-inline' data:",
          "frame-src": "'self' player.vimeo.com google.com www.google.com",
          "img-src": "'self' data: https://priest.s3.ap-southeast-2.amazonaws.com/ https://image.mux.com/ https://inferred.litix.io/",
          "connect-src": "'self' https://priest.s3.ap-southeast-2.amazonaws.com/ https://inferred.litix.io/ *.mux.com/",
        }
      }
    }
  ],
};
