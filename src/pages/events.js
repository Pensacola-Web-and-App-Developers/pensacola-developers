import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventCard from "../components/EventCard"

import oddColony from "../images/odd-colony-1.jpg"
import firstAngularSite from "../images/my-first-angular-site.jpeg"
import introToReact from "../images/events/intro-to-react.png"
import virtualHappyHour from "../images/events/virtual-happy-hour.png"

const EventsPage = ({ data }) => (
  <Layout>
    <SEO title="Events" />

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Events</h1>
      <p className="text-center sm:text-xl py-10">
        Come see what's going on with Pensacola Developers!
      </p>

      <div className="bg-cool-grey-900 border-2 border-pink-vivid-500 max-w-lg p-8 rounded">
        If you are new to joining any of Pensacola Developer's workshops, check
        out our{" "}
        <Link
          className="text-pink-vivid-500 font-semibold hover:text-pink-vivid-400"
          to="/workshop-setup"
        >
          Workshop Setup
        </Link>{" "}
        so you have everything ready when you join in.
      </div>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <div className="bg-cool-grey-900 max-w-2xl rounded p-8 mt-8">
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
            Pensacola Developers is inviting you to a Virtual Social Happy Hour
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

      <div className="bg-cool-grey-900 max-w-2xl rounded p-8 mt-8">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <div>
            <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
              Thu, Apr 9 @ 6:00 PM
            </div>
            <h2 className="font-semibold text-xl py-2">Intro To React</h2>
            <a
              className="font-semibold text-pink-vivid-500 hover:text-pink-vivid-400"
              href="https://www.twitch.tv/pensacoladevs"
            >
              twitch.tv/pensacoladevs/
            </a>
          </div>
          <img
            className="sm:h-24 rounded"
            src={introToReact}
            alt="Intro To React"
          />
        </div>
        <div>
          <p className="mt-5">
            Get your feet wet with React, a JavaScript library for building user
            interfaces. In this free workshop put on by Pensacola Developers, we
            will build an app to help you understand the fundamentals of React.
            The workshop will be streamed live on the Pensacola Developer's
            Twitch Channel at{" "}
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

      <EventCard
        day="Tue"
        date="Mar 10"
        time="6:00 PM"
        title="Getting Started with Angular"
        location="cowork@nnex"
        photo={firstAngularSite}
        description="It's finally here! Our first workshop is going to take place at cowork@annex on Palafox. Based on some feedback we received, we deviated a little from the original plan. We're going to jump in to development with Angular and show you how to build your first custom site using this all inclusive platform. Check back for details on what you need as a pre-setup for the workshop!"
      />

      <EventCard
        day="Tue"
        date="Feb 18"
        time="6:00 PM"
        title="Coding Social"
        location="Odd Colony Brewing Company"
        photo={oddColony}
        description="Come hang out and talk shop! Veteran and newbie coders feel free to come talk projects, share resources, and cut loose!"
      />
    </section>

    {/* <section className="text-cool-grey-050 mx-auto">
      {data.allMeetupEvent.edges.map(({ node }) => (
        <div
          className="bg-cool-grey-900 max-w-2xl rounded px-10 py-12 mt-5"
          key={node.id}
        >
          <div>
            <div>
              {node.local_date} @ {node.local_time}
            </div>
            <h3>{node.name}</h3>
            <div>{node.venue.name}</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: node.description }} />
        </div>
      ))}
    </section> */}
  </Layout>
)

export default EventsPage

export const query = graphql`
  query {
    allMeetupEvent {
      edges {
        node {
          id
          name
          local_date
          local_time
          description
          venue {
            name
          }
        }
      }
    }
  }
`
