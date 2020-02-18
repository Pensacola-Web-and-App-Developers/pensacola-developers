import PropTypes from "prop-types"
import React from "react"

import facebook from "../images/social/facebook.svg"
import instagram from "../images/social/instagram.svg"
import meetup from "../images/social/meetup.svg"

const Navbar = ({ siteTitle }) => (
  <footer className="bg-black border-t border-cool-grey-900 px-5 sm:px-20 py-5">
    <div className="flex justify-center">
      <div className="px-2 py-1">
        <a
          title="facebook"
          className="bg-light-blue-vivid-500 h-8 w-8 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-700 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.facebook.com/pensacoladevs"
        >
          <img src={facebook} alt="Facebook" className="h-8 w-8" />
        </a>
      </div>
      <div className="px-2 py-1">
        <a
          title="instagram"
          className="bg-light-blue-vivid-500 h-8 w-8 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-700 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.instagram.com/pensacoladevs/"
        >
          <img src={instagram} alt="Instagram" className="h-8 w-8" />
        </a>
      </div>
      <div className="px-2 py-1">
        <a
          title="meetup"
          className="bg-light-blue-vivid-500 h-8 w-8 flex justify-center items-center rounded p-1 hover:bg-light-blue-vivid-700 focus:bg-light-blue-vivid-700 focus:outline-none"
          href="https://www.meetup.com/Pensacola-Web-and-App-Developers/"
        >
          <img src={meetup} alt="Meetup" className="h-8 w-8" />
        </a>
      </div>
    </div>

    <div className="flex justify-center mt-3">
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
