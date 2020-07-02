import { graphql, Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"

const LinksPage = () => (
  <section>
    <SEO title="Links" />
    <section
      className="bg-cool-grey-050 flex flex-col h-screen justify-center items-center mx-auto px-4 pt-6"
      style={{
        backgroundImage:
          "linear-gradient(301deg,rgba(44,34,150,0),#7b2297),linear-gradient(rgba(0,82,154,0.95),rgba(0,82,154,0.95)),linear-gradient(121deg,#3fcc6f,#3fcc6f),linear-gradient(238deg,rgba(173,32,142,0),#ad208e),linear-gradient(42deg,rgba(0,190,213,0),rgba(0,190,213,0.85) 85%,rgba(0,190,213,0.87) 87%,#00bed5),linear-gradient(126deg,rgba(0,190,213,0),#00bed5),linear-gradient(#594099,#594099)",
      }}
    >
      <h1 className="font-bold text-cool-grey-050 text-2xl sm:text-4xl">
        Pensacola Developers
      </h1>
      <div className="flex flex-col justify-between mt-12">
        <button className="bg-light-blue-vivid-500 text-cool-grey-050 px-10 py-2 font-semibold rounded-md shadow-xl hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400">
          <Link to="/events">Events</Link>
        </button>
        <button className="bg-light-blue-vivid-500 text-cool-grey-050 mt-5 px-10 py-2 font-semibold rounded-md shadow-xl hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400">
          <a href="https://www.twitch.tv/pensacoladevs">Twitch</a>
        </button>
        <button className="bg-light-blue-vivid-500 text-cool-grey-050 mt-5 px-10 py-2 font-semibold rounded-md shadow-xl hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400">
          <a href="https://discord.gg/t8cDk6D">Discord</a>
        </button>
        <button className="bg-light-blue-vivid-500 text-cool-grey-050 mt-5 px-10 py-2 font-semibold rounded-md shadow-xl hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400">
          <a href="https://buttondown.email/pensacoladevs">Newsletter</a>
        </button>
        <button className="bg-light-blue-vivid-500 text-cool-grey-050 mt-5 px-10 py-2 font-semibold rounded-md shadow-xl hover:bg-light-blue-vivid-400 focus:bg-light-blue-vivid-400">
          <a href="https://www.facebook.com/groups/3495832307155381">
            Facebook
          </a>
        </button>
      </div>
    </section>
  </section>
)

export default LinksPage
