import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Collapsable from "../components/Collapsable"

import {audienceData} from "../data/audiences"

const SidebarNav = ({ audience, setAudience }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          apprenticeMenuLinks {
            link
            name
            subMenu {
              anchorLink
              anchorName
            }
          }
          employersMenuLinks {
            link
            name
            subMenu {
              anchorLink
              anchorName
            }
          }
          providersMenuLinks {
            link
            name
            subMenu {
              anchorLink
              anchorName
            }
          }
        }
      }
    }
  `)

  let menuLinks
  if (audience === "employers")
    menuLinks = data.site.siteMetadata.employersMenuLinks
  else if (audience === "providers")
    menuLinks = data.site.siteMetadata.providersMenuLinks
  else menuLinks = data.site.siteMetadata.apprenticeMenuLinks

  return (
    <div className="global-sidebar">
      <div className="margin">
        <div className="sidebar-container">
          <AudienceDropdown setAudience={setAudience} audience={audience} />
          {menuLinks.map(({ name, link, subMenu }) => (
            <Collapsable title={name} link={link} key={link}>
              {subMenu.map(({ anchorName, anchorLink }) => (
                <div className="sub-nav-items" key={anchorLink}>
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

const AudienceDropdown = ({ audience, setAudience }) => {
  function handleAudienceSelection(e) {
    setAudience(e.target.value)
    console.log(audience)
  }

 
  return (
    <>
      <select
        name="audience"
        id="audience-dropdown"
        onChange={handleAudienceSelection}
        value={audience}
      >
        {audienceData.map(({ name, state }) => (
          <option value={state} key={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  )
}
