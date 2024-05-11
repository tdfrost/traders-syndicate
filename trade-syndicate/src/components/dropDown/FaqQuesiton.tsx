"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { before } from "node:test"
import React, { useState } from "react"

const FaqQuesiton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="flex flex-col px-6 py-8 min-h-24 w-full bg-shark-900 rounded space-y-6"
      initial={{ height: 96 }}
      exit={{
        height: "96px",
        transition: {
          height: {
            duration: 0.4,
          },
        },
      }}
      animate={{
        height: "auto",
        transition: {
          height: {
            duration: 0.4,
          },
        },
      }}
    >
      <div
        className="
      flex justify-between h-full grow items-start"
      >
        <h2 className="text-xl font-semibold text-red-orange-500 uppercase">
          Tu pregunta Amigo
        </h2>
        <div
          onClick={() => {
            setIsOpen(!isOpen)
            console.log(setIsOpen)
          }}
        >
          <Image
            src="/icons/down-arrow.svg"
            width={25}
            height={25}
            alt="icon of a downward facing arrow"
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.2,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.2,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.2,
                  delay: 0.15,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              etiam sit amet nisl purus in mollis nunc. A iaculis at erat
              pellentesque adipiscing commodo. Ipsum a arcu cursus vitae congue.
              Nisl vel pretium lectus quam id leo in vitae turpis. Viverra
              adipiscing at in tellus integer feugiat scelerisque. Magna sit
              amet purus gravida quis blandit turpis. Aenean et tortor at risus
              viverra.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FaqQuesiton
