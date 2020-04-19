import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import derek from "../images/bios/derek.jpeg"
import andrew from "../images/bios/photo-1.png"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="flex flex-col border-b justify-center items-center lg:max-w-4xl mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl sm:text-4xl mt-10">About Us</h1>
      <p className="text-center max-w-3xl leading-loose sm:text-xl py-4">
        Pensacola Developers was created to help connect like minded individuals
        in the technology community. We know that web development is ever
        changing, and we want to create local education opportunities. We want
        to encourage veteran and novice developers participate. We strongly
        believe everyone has something to bring to the table.
      </p>
    </section>

    <section className="flex flex-col justify-center items-center lg:max-w-4xl mx-auto px-4 py-10">
      <h2 className="uppercase tracking-wider font-semibold text-light-blue-vivid-500 text-xl">
        Let's meet the team
      </h2>

      <div className="bg-white max-w-xs sm:max-w-2xl rounded p-8 mt-8">
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
            Coming from an extremely rural area in Mississippi, he wasn't
            introduced to software development until after high school. When he
            moved to the sunshine state he burned through as many online
            tutorials as possible picking up{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://www.python.org/"
            >
              Python
            </a>{" "}
            as the first language he loved! Fast forward years later and he's
            now a Software Architect for a transportation company working on{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://aws.amazon.com/"
            >
              AWS
            </a>{" "}
            certifications and creating enterprise applications in{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://angular.io/"
            >
              Angular
            </a>
            . When he's not nerding out he's usually hiking, biking, fishing or
            watching the{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://www.disneyplus.com/"
            >
              Disney
            </a>{" "}
            channel with his daughter.
          </p>
        </div>
      </div>

      <div className="bg-white max-w-xs sm:max-w-2xl rounded p-8 mt-8">
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
            Hailing from small town Illinois, his first experience on the
            computer was ripping music off of{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://us.napster.com/"
            >
              Napster
            </a>
            . This guy likes to talk web development, web design, and business
            in the tech industry. Currently, he’s mostly working with{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://reactjs.org/"
            >
              React
            </a>{" "}
            and building websites with{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://www.gatsbyjs.org/"
            >
              Gatsby
            </a>
            . He also likes to dabble with{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://nodejs.org/en/"
            >
              Node.js
            </a>{" "}
            and{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://www.mongodb.com/"
            >
              MongoDB
            </a>{" "}
            on some side projects. When he’s not programming, he likes to get
            his fitness on and crank some{" "}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://www.hallandoates.com/"
            >
              Hall & Oates
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
