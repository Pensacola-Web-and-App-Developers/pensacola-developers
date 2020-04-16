import PropTypes from "prop-types"
import React from "react"

import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import meetup from "../images/social/meetup.svg"
import youtube from "../images/social/youtube.svg"
import twitter from "../images/social/twitter.svg"
import twitch from "../images/social/twitch.svg"

const Navbar = ({ siteTitle }) => (
  <footer className="bg-white px-5 sm:px-20 py-5 flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center md:max-w-2xl w-full">
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="facebook"
          className="h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.facebook.com/pensacoladevs"
        >
          <img src={facebook} alt="Facebook" className="h-10 w-10" />
        </a>
      </div>
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="twitter"
          className=" h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://twitter.com/pensacoladevs"
        >
          <img src={twitter} alt="Twitter" className="h-10 w-10" />
        </a>
      </div>
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="instagram"
          className=" h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.instagram.com/pensacoladevs/"
        >
          <img src={instagram} alt="Instagram" className="h-10 w-10" />
        </a>
      </div>
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="meetup"
          className=" h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.meetup.com/Pensacola-Web-and-App-Developers/"
        >
          <img src={meetup} alt="Meetup" className="h-10 w-10" />
        </a>
      </div>
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="twitch"
          className=" h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.twitch.tv/pensacoladevs"
        >
          <img src={twitch} alt="Twitch" className="h-10 w-10" />
        </a>
      </div>
      <div className="px-2 py-1 md:w-1/6 w-1/3  flex justify-center">
        <a
          title="youtube"
          className=" h-10 w-10 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-500 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.youtube.com/channel/UCot6iIQkxQZnnFKwG2cO3iQ"
        >
          <img src={youtube} alt="Youtube" className="h-10 w-10" />
        </a>
      </div>
    </div>

    <div className="flex justify-center mt-3 w-full">
      <div className="text-cool-grey-300">
        © {new Date().getFullYear()} {siteTitle}
      </div>
    </div>
  </footer>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
