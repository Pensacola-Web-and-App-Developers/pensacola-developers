import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import meetup from "../images/background.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="bg-center bg-cover">
      <div className="text-white flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
        <h1 className="font-bold text-2xl sm:text-5xl">Welcome</h1>
        <p className="font-bold text-center sm:text-2xl py-10">
          Pensacola Developers is an inclusive organization for web developers and web
          designers looking to network with others in the industry, for those wanting to learn about
          new technologies and for anyone wanting to learn web
          development
        </p>
        <Link
          to="/about"
          className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2">
          Learn More
        </Link>
      </div>
    </section>

    <section className="flex flex-col sm:flex-row justify-center items-stretch mx-auto sm:px-10 py-16">
      <div className="border-r border-cool-grey-900 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Connect
        </h2>
        <p>
          Programmers get the stigma they aren’t social, we beg to differ.
          Pensacola Developers are about connecting individuals in the local
          tech community.
        </p>
      </div>

      <div className="border-r border-cool-grey-900 mt-10 sm:mt-0 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Educate
        </h2>
        <p>
          Pensacola Developers provides opportunities to learn web technologies
          and have a little fun while doing it.
        </p>
      </div>

      <div className="mt-10 sm:mt-0 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Support
        </h2>
        <p>
          We want to help cultivate a local environment that supports and
          encourages those learning and continuing to learn web development
          technologies.
        </p>
      </div>
    </section>

    {/* <section className="flex flex-wrap justify-center items-center lg:max-w-screen-xl px-4 py-5 mx-auto mt-10">
      <div className="bg-cool-grey-900 max-w-sm rounded px-5 py-5 m-2">
        <h3 className="font-bold text-xl">Events</h3>
        <p>
          Getting together is what we are about. So check out some events while
          you are here.
        </p>
        <div className="flex flex-col sm:flex-row items-start mt-4">
          <Link
            to="/events"
            className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
          >
            Browse Events
          </Link>
        </div>
      </div>

      <div className="bg-cool-grey-900 max-w-sm rounded px-5 py-5 m-2">
        <h3 className="font-bold text-xl">Blog</h3>
        <p>
          Want to learn about local events, current members, or some other nerdy
          stuff?
        </p>
        <div className="flex flex-col sm:flex-row items-start mt-4">
          <Link
            to="/blog"
            className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
          >
            Browse Articles
          </Link>
        </div>
      </div>

      <div className="bg-cool-grey-900 max-w-sm rounded px-5 py-5 m-2">
        <h3 className="font-bold text-xl">Resources</h3>
        <p>
          Here’s a collection of resources that novice and veteran web
          developers might find handy.
        </p>
        <div className="flex flex-col sm:flex-row items-start mt-4">
          <Link
            to="/resources"
            className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage
