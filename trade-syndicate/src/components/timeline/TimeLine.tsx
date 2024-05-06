"use client"

import React, { useRef } from "react"

const TimeLine = () => {
  const timeline1 = useRef(null)
  const timeline2 = useRef(null)
  const timeline3 = useRef(null)
  const circle1 = useRef(null)
  const circle2 = useRef(null)
  const circle3 = useRef(null)

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          id="circle1"
          ref={circle1}
          className="items-center justify-center text-white rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
        >
          1
        </div>
      </div>
      <div
        id="timeline2"
        ref={timeline2}
        className="h-[300px] w-[5px] bg-[#e5e5e5]"
      />
      <div className="relative">
        <div
          id="circle2"
          ref={circle2}
          className="items-center justify-center text-white rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
        >
          2
        </div>
      </div>
      <div
        id="timeline3"
        ref={timeline3}
        className="h-[300px] w-[5px] bg-[#e5e5e5]"
      />
      <div className="relative">
        <div
          id="circle3"
          ref={circle3}
          className="items-center justify-center text-white rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
        >
          3
        </div>
      </div>
    </div>
  )
}

export default TimeLine
