import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <footer className="bg-black  border-t border-cool-grey-900 px-5 sm:px-20 py-5">
    <div className="flex justify-center">
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
