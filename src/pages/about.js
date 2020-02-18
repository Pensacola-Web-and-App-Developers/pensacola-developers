import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import derek from "../images/bios/derek.jpeg"
import andrew from "../images/bios/photo-1.png"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">About Us</h1>
      <p className="text-center max-w-3xl leading-loose sm:text-xl py-10">
      Pensacola Developers was created to help connect like minded individuals in the community. We know that web development is ever changing, we also want to create local education opportunities. Vetern or novice developers are encouraged to participate, everyone has something to bring to the table. Let's meet some of the people.
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
        Some People
      </h2>

      <div className="bg-cool-grey-900 max-w-xs sm:max-w-2xl rounded p-8 mt-8">
        <div className="flex sm:flex-row justify-start">
          <img
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-inner"
            src={derek}
            alt="Derek Daley"
          />
          <div className="ml-5">
            <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
              Derek Daley
            </div>
            <h2 className="font-semibold text-xl py-2">Organizer</h2>
          </div>
        </div>
        <div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            tempora similique, tempore reprehenderit et, esse, doloribus
            aspernatur saepe praesentium qui nemo corrupti reiciendis illum
            natus beatae laborum distinctio aliquam eius.
          </p>
        </div>
      </div>

      <div className="bg-cool-grey-900 max-w-xs sm:max-w-2xl rounded p-8 mt-8">
        <div className="flex sm:flex-row justify-start">
          <img
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-inner"
            src={andrew}
            alt="Andrew Gilliland"
          />
          <div className="ml-5">
            <div className="uppercase font-semibold text-light-blue-vivid-500 text-lg pt-4 sm:pt-0">
              Andrew Gilliland
            </div>
            <h2 className="font-semibold text-xl py-2">Organizer</h2>
          </div>
        </div>
        <div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            tempora similique, tempore reprehenderit et, esse, doloribus
            aspernatur saepe praesentium qui nemo corrupti reiciendis illum
            natus beatae laborum distinctio aliquam eius.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
