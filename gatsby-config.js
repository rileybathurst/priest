module.exports = {
  siteMetadata: {
    title: 'Priest Sheet Metal & Plate Christchurch',
    titleTemplate: "%s",
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/',
    siteUrl: 'https://priestsheetmetal.co.nz/',
    image: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg',
    areaServed: 'Christchurch, New Zealand',
    author: 'Priest Sheetmetal'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "45.79.101.19:1338",
        contentTypes: [
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab\:400`,
          `Open Sans\:400,700`
        ],
        display: 'swap'
      }
    }
  ],
};
