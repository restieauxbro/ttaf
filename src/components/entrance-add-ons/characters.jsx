import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import "../../styles/components/characters.scss"

// DATA
import { audienceData } from "../../data/audiences"

// VARIANTS
const parentStagger = {
  initial: { opacity: 1 },
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const exit = {
  y: "-100%",
  transition: { delay: 0.5, duration: 0.5 },
}

const Characters = ({ setAudience }) => {
  const [shown, setShown] = useState(true)
  return (
    <>
      <AnimatePresence>
        {shown && (
          <motion.div className="characters-cnt" exit={exit}>
            <div className="container">
              <motion.div
                className="card-cnt"
                variants={parentStagger}
                initial="initial"
                animate="animate"
              >
                {audienceData.map(({ name, state, mainPage }) => (
                  <Link
                    to={mainPage}
                    key={state}
                    onClick={() => setAudience(state)}
                  >
                    <motion.div
                      className="card"
                      onClick={() => setShown(false)}
                      variants={fadeUp}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="card-content">
                        <h4>{name}</h4>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Characters
