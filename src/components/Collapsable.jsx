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
      <div
        className="collapse-header flex"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <Link
          to={link}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: "active" } : null
          }
        >
          <h4>{title}</h4>
        </Link>
        <div className="plus-minus">
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
