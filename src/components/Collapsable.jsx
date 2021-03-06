import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const Collapsable = ({ title, children, link }) => {
  const [open, setOpen] = useState(false)
  const isActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : null
  }
  return (
    <div className="collapsable ">
      <div className="collapse-header flex">
        <div
          className="open-dropdown"
          onClick={() => {
            setOpen(true)
          }}
        >
          <Link to={link} getProps={isActive}>
            <h4>{title}</h4>
          </Link>
        </div>
        <div
          className="plus-minus"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <h4>{open ? "-" : "+"}</h4>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: { duration: 0.2 } }}
            style={{ overflow: "hidden" }}
          >
            <div className="sub-nav-cnt">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Collapsable
