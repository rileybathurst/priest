module.exports = {
  siteMetadata: {
    title: 'Priest Sheetmetal & Plate Christchurch',
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/',
    siteUrl: 'https://priestsheetmetal.co.nz/',
    image: 'https://priest.s3.ap-southeast-2.amazonaws.com/ogimages/priest-og-image.jpg',
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'images/PriestSheetMetal&PlateChristchurch-blue.png',
    areaServed: 'Christchurch, New Zealand',
    author: 'Priest Sheetmetal'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://45.79.101.19:1338", // linode build
        // apiURL: "http://localhost:1338", // local
        collectionTypes: [
          "service",
          `galleries`,
          `videos`,
          `testimonials`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // helps with mozilla observatory in a substatial way
    "gatsby-plugin-react-helmet",
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
            "default-src": "'self' player.vimeo.com google.com",
            "style-src": "'self' 'unsafe-inline'",
            "script-src": "'self' 'unsafe-inline' player.vimeo.com google.com",
            // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
            "font-src": "'self' 'unsafe-inline' data:",
            "frame-src": "'self' player.vimeo.com google.com www.google.com",
          }
        }
      },
  ],
};
