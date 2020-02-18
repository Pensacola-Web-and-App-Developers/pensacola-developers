import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">About Us</h1>
      <p className="text-center sm:text-xl py-10">
        Pensacola Developers is about people, so here are some.
      </p>
    </section>
  </Layout>
)

export default SecondPage
