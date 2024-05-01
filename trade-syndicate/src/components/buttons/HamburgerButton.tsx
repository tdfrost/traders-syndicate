"use client"

import React, { useState } from "react"
import { motion, MotionConfig } from "framer-motion"

const HamburgerButton = () => {
  const [active, setActive] = useState(false)

  return (
    <MotionConfig
      transition={{
        duration: 0.54,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => {
          setActive(!active)
        }}
        className="relative h-10 w-10 rounded-full transition-colors"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "0%",
            top: "10%",
            x: "0%",
            y: "-50%",
          }}
          d-orange-500
          className="absolute rounded-md h-1.5 w-6 bg-red-orange-500"
          variants={{
            open: {
              top: ["10%", "50%", "50%"],
              opacity: [1, 1, 0],
            },
            closed: { top: ["50%", "50%", "10%"], opacity: [0, 1, 1] },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute rounded-md h-1.5 w-10 bg-red-orange-500"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: { rotate: ["45deg", "0deg", "0deg"] },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute rounded-md h-1.5 w-10 bg-red-orange-500"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: { rotate: ["-45deg", "0deg", "0deg"] },
          }}
        />
        <motion.span
          style={{
            right: "0%",
            top: "90%",
            x: "0%",
            y: "-50%",
          }}
          className="absolute rounded-md h-1.5 w-6 bg-red-orange-500"
          variants={{
            open: {
              //rotate: ["0deg", "0deg", "45deg"],
              top: ["90%", "50%", "50%"],
              opacity: [1, 1, 0],
            },
            closed: { top: ["50%", "50%", "90%"], opacity: [0, 1, 1] },
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

export default HamburgerButton
