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
        type: "easeIn",
        opacity: {
          delay: 0.2,
          duration: 0.5,
        },
        y: {
          type: "easeInOut",
          duration: 0.6,
        },
      },
    },
  }

  return (
    <div className="overflow-hidden h-screen w-full flex flex-col space-y-6 justify-center items-center">
      <MotionLogo key="intro-Logo" setLogoDrawn={setLogoDrawn} />
      <motion.p
        variants={variants}
        initial="hide"
        animate={!logoDrawn ? "hide" : "show"}
        onAnimationComplete={() => {
          setTimeout(() => {
            setLoading(false)
          }, 600)
        }}
        key="intro-text"
        className="text-white font-medium text-2xl"
      >
        Welcome to the Syndicate
      </motion.p>
    </div>
  )
}

export default Loader
