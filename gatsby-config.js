module.exports = {
  siteMetadata: {
    title: "priest",
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1338",
        contentTypes: [
          "service"
        ],
        queryLimit: 1000,
      },
    },
  ],
};
