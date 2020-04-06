import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Blog</h1>
      <p className="text-center sm:text-xl py-10">
        Read something (like this headline)
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h2 className="uppercase tracking-wider font-semibold text-center text-light-blue-vivid-500 text-xl">
        Articles are coming soon!
        {/* {data.allMarkdownRemark.totalCount} Posts */}
      </h2>

      {/* {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          className="bg-cool-grey-900 max-w-2xl rounded p-8 mt-10"
          key={node.id}
        >
          <div className="flex justify-between">
            <div>
              <div className="font-semibold text-light-blue-vivid-500 text-lg">
                {node.frontmatter.date}
              </div>
              <Link to={node.fields.slug}>
                <h3 className="font-semibold text-xl py-2">
                  {node.frontmatter.title}
                </h3>
              </Link>
            </div>
            <div className="bg-pink-vivid-300 rounded w-32"></div>
          </div>
          <div>
            <p className="mt-5">{node.excerpt}</p>
          </div>
        </div>
      ))} */}
    </section>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
