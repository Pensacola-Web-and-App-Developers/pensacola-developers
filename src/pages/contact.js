import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const BlogPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Contact Us</h1>
      <p className="text-center sm:text-xl py-10">
        Any questions? Need some answers? We have some of both.
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 pt-5 pb-24">
      <ContactForm />
    </section>
  </Layout>
)

export default BlogPage
