import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Img from "gatsby-image"

const Navbar = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)

  function toggle() {
    setOpen(!isOpen)
  }

  function toggleKeyPress() {
    setOpen(!isOpen)
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pdfull-revamp.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <nav className="bg-white px-4 sm:px-5 py-4">
      <div className="sm:flex sm:justify-between sm:items-center lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="navbar-logo-link">
            <Img
              className="navbar-logo"
              fixed={data.file.childImageSharp.fixed}
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-cool-grey-500 hover:text-cool-grey-300 focus:text-cool-grey-300 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`text-cool-grey-700 font-semibold px-2 pt-2 pb-4 sm:py-0 sm:flex  ${
            isOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="mt-1 sm:mt-0 sm:ml-2 px-3 py-1 sm:py-2 hover:bg-cool-grey-100 focus:bg-cool-grey-100 focus:outline-none rounded-md"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="mt-1 sm:mt-0 sm:ml-2 px-3 py-1 sm:py-2 hover:bg-cool-grey-100 focus:bg-cool-grey-100 focus:outline-none rounded-md"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="mt-1 sm:mt-0 sm:ml-2 px-3 py-1 sm:py-2 hover:bg-cool-grey-100 focus:bg-cool-grey-100 focus:outline-none rounded-md"
          >
            About
          </Link>
          <Link
            to="/resources"
            className="mt-1 sm:mt-0 sm:ml-2 px-3 py-1 sm:py-2 hover:bg-cool-grey-100 focus:bg-cool-grey-100 focus:outline-none rounded-md"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className="mt-1 sm:mt-0 sm:ml-2 px-3 py-1 sm:py-2 hover:bg-cool-grey-100 focus:bg-cool-grey-100 focus:outline-none rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
