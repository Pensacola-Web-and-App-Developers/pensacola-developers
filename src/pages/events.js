import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from "../components/EventCard"

import introToReact from "../images/events/intro-to-react.png"
import virtualHappyHour from "../images/events/virtual-happy-hour.png"
import basicWeb from "../images/events/wordcloud.png"

const EventsPage = ({ data }) => (
  <Layout>
    <SEO title="Events" />

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 pt-6">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Events</h1>
      <p className="text-center sm:text-xl py-4">
        Come see what's going on with Pensacola Developers!
      </p>

      <div className="bg-pink-vivid-050 border-2 border-pink-vivid-500 max-w-lg p-8 rounded">
        If you are new to joining any of Pensacola Developer's workshops, check
        out our{" "}
        <Link
          className="text-pink-vivid-500 font-semibold hover:text-pink-vivid-700 focus:text-pink-vivid-700 outline-none"
          to="/workshop-setup"
        >
          Workshop Setup
        </Link>{" "}
        so you have everything ready when you join in.
      </div>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <EventCard
          date={node.frontmatter.date}
          description={node.frontmatter.description}
          slug={node.fields.slug}
          time={node.frontmatter.time}
          title={node.frontmatter.title}
        >
          <Img
            className="rounded-t-md"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        </EventCard>
      ))}
    </section>
  </Layout>
)

export default EventsPage

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            time
            date(formatString: "dddd, MMMM DD")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 850) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
  }
`
