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

      <div className="bg-cool-grey-050 max-w-2xl rounded shadow-md p-8 mt-8">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <div>
            <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
              Wed, Apr 22 @ 6:00 PM
            </div>
            <h2 className="font-semibold text-xl py-2">
              Web Development: Back to the Basics
            </h2>
            <a
              className="font-semibold text-pink-vivid-500 hover:text-pink-vivid-400"
              href="https://www.twitch.tv/pensacoladevs"
            >
              twitch.tv/pensacoladevs/
            </a>
          </div>
          <img
            className="sm:h-24 rounded"
            src={basicWeb}
            alt="Web Development: Back to the Basics"
          />
        </div>
        <div>
          <p className="mt-5">
            The web development world can be so overwhelming. Let's ignore all
            the latest trends and frameworks, and let's go back to the basics.
            That's right! We're going to go back and explore good ole HTML, CSS,
            and JavaScript. The workshop will be streamed live on the Pensacola
            Developer's Twitch Channel at{" "}
            <a
              className="font-semibold text-pink-vivid-500 hover:text-pink-vivid-400"
              href="https://www.twitch.tv/pensacoladevs"
            >
              twitch.tv/pensacoladevs/
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bg-cool-grey-050 max-w-2xl rounded shadow-md p-8 mt-8">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <div>
            <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
              Fri, Apr 17 @ 6:00 PM
            </div>
            <h2 className="font-semibold text-xl py-2">
              Virtual Social Happy Hour
            </h2>
            <a
              className="font-semibold text-pink-vivid-500 hover:text-pink-vivid-400"
              href="https://us04web.zoom.us/j/71609321461?pwd=NGZXV0NISldVcHJWQ05HV3MyaTJYdz09"
            >
              Zoom
            </a>
          </div>
          <img
            className="sm:h-24 rounded"
            src={virtualHappyHour}
            alt="Virtual Social Happy Hour"
          />
        </div>
        <div>
          <p className="mt-5">
            Pensacola Developers are inviting you to a Virtual Social Happy Hour
            on Zoom! Feel free to jump in!
            <br />
            <br />
            <div className="text-pink-vivid-500">
              Meeting ID: 716 0932 1461
              <br />
              Password: 023880
            </div>
          </p>
        </div>
      </div>

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
