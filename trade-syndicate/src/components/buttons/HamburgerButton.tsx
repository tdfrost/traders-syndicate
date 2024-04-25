"use client"

import React from "react"
import { motion } from "framer-motion"

const HamburgerButton = () => {
  return (
    <motion.button className="relative h-10 w-10 rounded-full bg-white/0 transition-colors hover:bg-white/20">
      <motion.span
        style={{
          left: "0%",
          top: "10%",
          x: "0%",
          y: "-50%",
        }}
        className="absolute rounded-md h-1.5 w-6 bg-red-orange-500"
      />
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="absolute rounded-md h-1.5 w-10 bg-red-orange-500"
      />
      <motion.span
        style={{
          right: "0%",
          top: "90%",
          x: "0%",
          y: "-50%",
        }}
        className="absolute rounded-md h-1.5 w-6 bg-red-orange-500"
      />
    </motion.button>
  )
}

export default HamburgerButton
