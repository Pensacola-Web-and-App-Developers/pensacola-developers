import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />

    <section className="lg:max-w-4xl mx-auto px-4 py-24">
      <div className="bg-cool-grey-050 max-w-2xl rounded shadow-md py-8 px-4 flex flex-col justify-center items-center ">
        <p className="text-center sm:text-xl">
          Thank you for contacting Pensacola Developers! We'll be in touch with
          you shortly.<br></br>
        </p>

        <Link
          to="/contact"
          className="font-semibold bg-light-blue-vivid-500 text-white mt-5 rounded px-4 py-2"
        >
          Go Back
        </Link>
      </div>
    </section>
  </Layout>
)

export default ThanksPage
