import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col min-h-screen antialiased">
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <main className="bg-grey-200 text-black flex flex-col flex-1">
          {children}
        </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
