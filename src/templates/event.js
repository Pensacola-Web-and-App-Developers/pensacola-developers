import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const event = data.markdownRemark

  let featuredImgFluid = event.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div className="mt-12 mx-auto">
        <h1 className="font-bold text-center text-2xl">{event.frontmatter.title}</h1>
        <Img className="mt-5 rounded-md" fluid={featuredImgFluid} />
        <div className="markdown bg-cool-grey-050 max-w-2xl rounded shadow-md p-8 my-10" dangerouslySetInnerHTML={{ __html: event.html }} />
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
  