import React from "react"
import { Link, graphql } from "gatsby"

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
      <div className="bg-cool-grey-900 max-w-2xl rounded p-8">
        <div className="flex justify-between">
          <div>
            <div className="font-semibold text-light-blue-vivid-500 text-lg">
              Blog.date
            </div>
            <h2 className="font-semibold text-xl py-2">Blog.title</h2>
          
          </div>
          <div className="bg-pink-vivid-300 rounded px-10">Blog.photo</div>
        </div>
        <div>
          <p className="mt-5">
            Blog.description Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consectetur magnam maiores voluptatibus eum quo
            cupiditate in reiciendis ipsa voluptas quisquam.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span> - {node.frontmatter.date}</span>
            </h3>
          </Link>
        </div>
      ))}
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
        }
      }
    }
  }
`
