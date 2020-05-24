import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const event = data.markdownRemark

  let featuredImgFluid = event.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="mt-12 mx-auto text-cool-grey-900 px-2">
        <h1 className="font-bold text-center text-2xl sm:text-3xl">
          {event.frontmatter.title}
        </h1>
        <div className="bg-cool-grey-050 max-w-2xl rounded shadow-md my-10">
          <Img className="mt-5 rounded-t-md" fluid={featuredImgFluid} />
          <div className="font-semibold p-8">
            <h2 className="text-xl">Details</h2>
            <div className="mt-3">
              {event.frontmatter.date} @ {event.frontmatter.time} Central
            </div>
            <div className="mt-3">Location: {event.frontmatter.location}</div>
            <div
              className="markdown mt-3"
              dangerouslySetInnerHTML={{ __html: event.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "dddd, MMMM DD")
        time
        location
        url
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
