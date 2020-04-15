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
      file(relativePath: {eq: "pdfull.png"}) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `)

  return (
    <nav className="bg-white text-cool-grey-050 border-b border-cool-grey-900 px-4 sm:px-10 py-4">
      <div className="sm:flex sm:justify-between sm:items-center lg:max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="navbar-logo-link">
            <Img className="navbar-logo" fixed={data.file.childImageSharp.fixed} />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-cool-grey-500 hover:text-cool-grey-100 focus:text-cool-grey-100 focus:outline-none"
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
          className={`text-cool-grey-500 px-2 pt-2 pb-4 sm:py-0 sm:flex  ${
            isOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="mt-1 px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="mt-1 px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
          >
            Events
          </Link>
          <Link
            to="/blog"
            className="mt-1 px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="mt-1 px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
          >
            About
          </Link>
          <Link
            to="/resources"
            className="mt-1 px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className="mt-1  px-2 py-1 sm:py-0 hover:text-cool-grey-100 focus:outline-none sm:mt-0 sm:ml-2"
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
  siteTitle: ``
}

export default Navbar