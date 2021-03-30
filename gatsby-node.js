const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/service.js`)
  const result = await graphql(`
    query {
      allStrapiService {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
  result.data.allStrapiService.edges.forEach(edge => {
    createPage({
      path: `/services/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id, // needed to build the page
        title: edge.node.title,
      },
    })
  })
}






/* exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getServices = makeRequest(graphql, `
    {
      allStrapiService {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiService.edges.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}`,
        component: path.resolve(`src/templates/service.js`),
        context: {
          id: node.id,
          // title: node.Title,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getServices;
}; */
