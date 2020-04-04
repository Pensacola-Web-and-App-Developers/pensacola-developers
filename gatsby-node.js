// 1. Load API key as an environment variable
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const axios = require("axios")

// console.log(process.env.TEST_ENV_VAR)

// 2. Send a call to the Meetup API to retrieve events by category
// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const result = await axios({
//     method: "GET",
//     url: "https://api.meetup.com/find/upcoming_events",
//     data: {
//       topic_category: "tech",
//     },
//   }).catch(error => {
//     console.error(error.message)
//   })

//   console.log(result)

//   const nodeData = {
//     title: "Test Node",
//     description: "This is a test.",
//   }

//   const newNode = {
//     ...nodeData,
//     id: createNodeId("TestNode-testid"), // required by Gatsby
//     internal: {
//       type: "TestNode", // required by Gatsby
//       contentDigest: createContentDigest(nodeData), // required by Gatsby
//     },
//   }

//   actions.createNode(newNode)
// }

// 3. Create Gatsby nodes using the Meetup API response
// 4. Create a page to show all events
// 5. Create individual pages for each event

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
