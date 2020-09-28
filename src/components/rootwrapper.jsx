import React from "react"
import Layout from "./layout"

const RootWrapper = ({ children }) => {
  return (
    <div className="root-wrapper">
      <Layout />

      <div className="children">{children}</div>
    </div>
  )
}

export default RootWrapper
