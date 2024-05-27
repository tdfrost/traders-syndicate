import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import MotionLogo from "../buttons/MotionLogo"
import { AnimatePresence, motion } from "framer-motion"

const Loader = ({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>
}) => {
  const [logoDrawn, setLogoDrawn] = useState(false)

  const variants = {
    hide: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "easeInOut",
        opacity: {
          delay: 0.15,
          duration: 0.7,
        },
        y: {
          type: "easeIn",
          duration: 0.7,
        },
      },
    },
  }

  return (
    <div className="overflow-hidden h-screen w-full flex flex-col space-y-4 justify-center items-center">
      <MotionLogo key="intro-Logo" setLogoDrawn={setLogoDrawn} />
      <motion.p
        variants={variants}
        initial="hide"
        animate={!logoDrawn ? "hide" : "show"}
        onAnimationComplete={() => {
          setLoading(false)
        }}
        key="intro-text"
        className="text-white font-semibold text-2xl text center"
      >
        Welcome to the Syndicate
      </motion.p>
    </div>
  )
}

export default Loader
