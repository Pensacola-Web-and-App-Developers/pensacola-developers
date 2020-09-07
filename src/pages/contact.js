import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

const BlogPage = () => {
  const style = {
    height: "420px",
    border: "1px #ccc solid !important",
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 pt-6">
        <h1 className="font-bold text-2xl sm:text-4xl mt-10">Contact Us</h1>
        <p className="text-center sm:text-xl py-4">
          Have questions? Need answers? We have some of both.
        </p>
      </section>

      <section className="flex flex-col justify-center items-center min-w-full mx-auto px-4 pb-8 pt-8">
        {/* <ContactForm /> */}
        <iframe
          className="max-w-xl w-full"
          src="https://discord.com/widget?id=701045647305998356&theme=dark"
          style={style}
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>

        <p className="text-center sm:text-l py-4">
          Just hit the connect button above!
        </p>
      </section>
    </Layout>
  )
}

export default BlogPage
