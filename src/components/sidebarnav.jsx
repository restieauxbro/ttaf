import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Collapsable from "../components/Collapsable"

const SidebarNav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            subMenu {
              anchorName
              anchorLink
            }
          }
        }
      }
    }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <div className="global-sidebar">
      <div className="margin">
        <div className="sidebar-container">
          {menuLinks.map(({ name, link, subMenu }) => (

            <Collapsable title={name} link={link}>
              
              {subMenu.map(({ anchorName, anchorLink }) => (
                <div className="sub-nav-items">
                  <div>
                    <Link to={anchorLink} activeClassName="active">
                      {anchorName}
                    </Link>
                  </div>
                </div>
              ))}
            </Collapsable>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarNav
