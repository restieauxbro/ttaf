import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import SidebarNav from "./sidebarnav"
import Window from "../components/window"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header className="global-header">
        <div className="margin flex">
          
          <div className="microsite-title flex align-center">
            <a href="https://www.competenz.org.nz/">
          <div className="back-btn">
            <img src="https://www.flaticon.com/svg/static/icons/svg/126/126492.svg" alt=""/>
          </div>
          </a>
          <Link to={`/`}>
            <div className="title">{data.site.siteMetadata.title}</div>
          </Link>
          </div>
          <ul>
            <li>Contact</li>
            <img className="header-logo"
              src="https://www.competenz.org.nz/themes/competenz/images/logo-brandmark.svg"
              alt="Competenz logo"
            />
          </ul>
        </div>
      </header>
      <SidebarNav />
    </div>
  )
}

export default Layout
