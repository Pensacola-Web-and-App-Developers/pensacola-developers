import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Welcome</h1>
      <p className="text-center sm:text-xl py-10">
        Pensacola Developers is for professional web designers and developers looking to
        network with others in the industry, learn about new or emerging
        technologies, and for anyone wanting to learn web development.
      </p>
      <Link
        to="/about"
        className="font-semibold bg-light-blue-vivid-500 hover:bg-light-blue-vivid-700 rounded px-4 py-2"
      >
        Learn More
      </Link>
    </section>
  </Layout>
)

export default IndexPage
