import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import patternRandomized from "../images/pattern-randomized.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${patternRandomized})` }}
    >
      <div className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
        <h1 className="font-bold text-2xl sm:text-4xl mt-10">Welcome</h1>
        <p className="text-center sm:text-xl py-10">
          Pensacola Developers is an organization for web designers and
          developers looking to network with others in the industry, learn about
          new or emerging technologies, and for anyone wanting to learn web
          development.
        </p>
        <Link
          to="/about"
          className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
        >
          Learn More
        </Link>
      </div>
    </section>

    <section className="flex flex-col sm:flex-row justify-center items-stretch border-t border-b border-cool-grey-900 mx-auto sm:px-10 py-16">
      <div className="border-r border-cool-grey-900 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Connect
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non illo,
          ullam voluptatibus maxime, eligendi vel odio culpa nihil corporis in
          repudiandae autem quos a assumenda ipsam voluptas similique deserunt
          at?
        </p>
      </div>

      <div className="border-r border-cool-grey-900 mt-10 sm:mt-0 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Educate
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          eaque inventore voluptates, similique ratione dolores sed consectetur,
          error fugit consequuntur deleniti illo architecto cumque harum nam
          explicabo. Odit, recusandae? Excepturi.
        </p>
      </div>

      <div className="mt-10 sm:mt-0 px-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Support
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti
          accusamus asperiores et harum delectus possimus omnis dignissimos?
          Quos repudiandae porro, adipisci voluptates quisquam aliquam voluptas
          quaerat ipsam quasi dolores?
        </p>
      </div>
    </section>

    <section className="flex flex-wrap justify-center items-center lg:max-w-screen-xl px-4 py-5 mx-auto mt-10">
      <div className="bg-cool-grey-900 max-w-sm rounded px-5 py-5 m-2">
        <h3 className="font-bold text-xl">Events</h3>
        <p>
          We have events (sometimes). Isn't that the point of having a group.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dolorem,
          assumenda nemo deserunt in nihil.
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          deleniti accusantium odio commodi distinctio repellendus sunt sed
          consequuntur amet officia?
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
          deleniti accusantium odio commodi distinctio repellendus sunt sed
          consequuntur amet officia?
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
    </section>
  </Layout>
)

export default IndexPage
