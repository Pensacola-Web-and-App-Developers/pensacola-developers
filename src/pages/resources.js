import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Events" />
    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Resources</h1>
      <p className="text-center sm:text-xl py-10">
        Keep your brain fresh with some of this knowledge.
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <div className="max-w-xl">
        <a
          className="font-semibold text-lg text-light-blue-vivid-500 hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 outline-none"
          href="https://css-tricks.com/"
        >
          CSS-Tricks
        </a>
        <p>
          CSS-Tricks is a great place to read articles, catch up and see the
          latest when it comes to Cascading Style Sheets.
        </p>
      </div>

      <div className="max-w-xl mt-10">
        <a
          className="font-semibold text-lg text-light-blue-vivid-500 hover:text-light-blue-vivid-700 focus:text-light-blue-vivid-700 outline-none"
          href="https://developer.mozilla.org/en-US/"
        >
          MDN Web Docs
        </a>
        <p>
          Mozilla Developer Network Web Docs are hands down the forefront for
          getting information for front-end development.
        </p>
      </div>
    </section>
  </Layout>
)

export default ResourcesPage
