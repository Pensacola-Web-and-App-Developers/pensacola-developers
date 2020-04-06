import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkShopSetupPage = () => (
  <Layout>
    <SEO title="Setup" />
    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">Workshop Setup</h1>
      <p className="text-center max-w-2xl leading-loose sm:text-xl py-10">
        For everyone joining any of our workshops for the first time, in person
        or virtual, we will use the same setup unless otherwise specified. Don't
        worry, both of these are for free.
      </p>

      <div className="flex flex-col items-center">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          VS Code
        </h2>
        <p className="max-w-xl mt-3">
          We will use the VS Code source-code editor, which you can download{" "}
          <a
            className="text-pink-vivid-500 font-semibold focus:text-pink-vivid-400 hover:text-pink-vivid-400"
            href="https://code.visualstudio.com/"
          >
            here
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
          Node.js
        </h2>
        <p className="max-w-xl mt-3">
          You will also need to install Node.js, a JavaScript runtime
          environment that executes JavaScript code outisde of a web browser.
          You can download it{" "}
          <a
            className="text-pink-vivid-500 font-semibold focus:text-pink-vivid-400 hover:text-pink-vivid-400"
            href="https://nodejs.org/en/"
          >
            here
          </a>
          .
        </p>
      </div>
    </section>
  </Layout>
)

export default WorkShopSetupPage
