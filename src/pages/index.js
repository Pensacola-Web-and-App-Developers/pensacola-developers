import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="bg-center bg-cover">
      <div className="welcome-msg text-white flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
        <p className="font-bold text-center text-xl sm:text-3xl py-10">
          Pensacola Developers is an inclusive organization for web developers
          and web designers looking to network, wanting to learn and who have a
          passion for innovation
        </p>
        <Link
          to="/about"
          className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
        >
          Learn More
        </Link>
      </div>
    </section>

    <section className="flex flex-col sm:flex-row justify-center items-stretch mx-auto sm:px-10 py-16">
      <div className="flex border-r border-cool-grey-100 px-8">
        <div className="flex-shrink-0">
          <div className="flex justify-center items-center h-10 w-10 rounded-md bg-light-blue-vivid-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-link fill-current h-8 w-8"
            >
              <path
                className="secondary text-light-blue-vivid-050"
                d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
              />
              <path
                className="primary text-light-blue-vivid-100"
                d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="uppercase tracking-wider font-semibold text-cool-grey-800 text-xl">
            Connect
          </h2>
          <p className="mt-2 leading-relaxed text-cool-grey-600 max-w-2xl">
            Programmers get the stigma they aren’t social, but we beg to differ.
            Pensacola Developers is about connecting individuals in the local
            tech community. We invite everyone to discuss your nerdiest
            thoughts.
          </p>
        </div>
      </div>

      <div className="flex border-r border-cool-grey-100 mt-10 sm:mt-0 px-8">
        <div className="flex-shrink-0">
          <div className="flex justify-center items-center h-10 w-10 rounded-md bg-light-blue-vivid-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-book-open h-8 w-8 fill-current"
            >
              <g>
                <path
                  className="secondary text-light-blue-vivid-050"
                  d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                />
                <path
                  className="primary text-light-blue-vivid-100"
                  d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="uppercase tracking-wider font-semibold text-cool-grey-800 text-xl">
            Educate
          </h2>
          <p className="mt-2 leading-relaxed text-cool-grey-600 max-w-2xl">
            Pensacola Developers provides opportunities to learn web
            technologies from your peers and have a little fun while doing it.
            Whether you're just starting or retiring from a long career, you're
            welcome to learn with us.
          </p>
        </div>
      </div>

      <div className="flex mt-10 sm:mt-0 px-8">
        <div className="flex-shrink-0">
          <div className="flex justify-center items-center h-10 w-10 rounded-md bg-light-blue-vivid-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-buoy fill-current h-8 w-8 "
            >
              <g>
                <path
                  className="secondary text-light-blue-vivid-050"
                  d="M2.43 14.92A2 2 0 0 1 1 13v-2a2 2 0 0 1 1.43-1.92 10.02 10.02 0 0 1 6.65-6.65A2 2 0 0 1 11 1h2a2 2 0 0 1 1.92 1.43c3.17.97 5.68 3.48 6.65 6.65A2 2 0 0 1 23 11v2a2 2 0 0 1-1.43 1.92 10.02 10.02 0 0 1-6.65 6.65A2 2 0 0 1 13 23h-2a2 2 0 0 1-1.92-1.43 10.02 10.02 0 0 1-6.65-6.65zM12 17l1.79-1.42a4.02 4.02 0 0 0 1.8-1.8L17 12l-1.42-1.79a4.02 4.02 0 0 0-1.8-1.79L12 7l-1.79 1.42a4.02 4.02 0 0 0-1.79 1.8L7 12l1.42 1.78c.39.78 1.02 1.41 1.8 1.8L12 17z"
                />
                <path
                  className="primary text-light-blue-vivid-100"
                  d="M12 2c1.6 0 3.13.38 4.47 1.05L13.8 8.42a3.98 3.98 0 0 0-3.58 0L7.53 3.05A9.96 9.96 0 0 1 12 2zM2 12c0-1.6.38-3.13 1.05-4.47l5.37 2.68a3.98 3.98 0 0 0 0 3.58l-5.37 2.68A9.96 9.96 0 0 1 2 12zm8.21 3.58a3.98 3.98 0 0 0 3.58 0l2.68 5.37a9.96 9.96 0 0 1-8.94 0l2.68-5.37zm10.74-8.05a9.96 9.96 0 0 1 0 8.94l-5.37-2.68a3.98 3.98 0 0 0 0-3.58l5.37-2.68z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="uppercase tracking-wider font-semibold text-cool-grey-800 text-xl">
            Support
          </h2>
          <p className="mt-2 leading-relaxed text-cool-grey-600 max-w-2xl">
            We want to help cultivate a safe environment that supports and
            encourages innovation and learning. Let us know how we can help you.
            If we can't, chances are we can find someone who can.
          </p>
        </div>
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
