import { useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Layout from "./layout"
import Characters from "../components/entrance-add-ons/characters"

const RootWrapper = ({ children }) => {
  const [audience, setAudience] = useState("employers")
  return (
    <div className="root-wrapper">
  
      <Characters audience={audience} setAudience={setAudience}/>
      <Layout audience={audience} setAudience={setAudience} />

      <div className="children">{children}</div>
    </div>
  )
}

export default RootWrapper
