"use client"

import Image from "next/image"
import React, { useRef } from "react"

const TimeLine = () => {
  const timeline1 = useRef(null)
  const timeline2 = useRef(null)
  const timeline3 = useRef(null)
  const circle1 = useRef(null)
  const circle2 = useRef(null)
  const circle3 = useRef(null)

  return (
    <div className="my-28">
      <div className="flex md:justify-center space-x-8 md:space-x-60">
        <div
          id="desktop-left-content"
          className="hidden md:flex flex-col justify-between h-auto"
        >
          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>

          <div className="md:w-[300px]">
            <p className="text-xl text-red-orange-500 uppercase font-light">
              Second
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>

          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>
        </div>

        <div id="timeline" className="flex flex-col items-center py-4">
          <div className="relative">
            <div
              id="circle1"
              ref={circle1}
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              1
            </div>
          </div>

          <div
            id="timeline2"
            ref={timeline2}
            className="h-[120px] md:h-[270px] w-[5px] bg-[#e5e5e5]"
          />
          <div className="relative">
            <div
              id="circle2"
              ref={circle2}
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              2
            </div>
          </div>

          <div
            id="timeline3"
            ref={timeline3}
            className="h-[120px] md:h-[270px] w-[5px] bg-[#e5e5e5]"
          />
          <div className="relative">
            <div
              id="circle3"
              ref={circle3}
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              3
            </div>
          </div>
        </div>

        <div
          id="desktop-right-content"
          className="hidden md:flex flex-col justify-between h-auto"
        >
          <div className="md:w-[300px]">
            <p className="text-xl text-red-orange-500 uppercase font-light">
              First
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>

          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>

          <div className="md:w-[300px]">
            <p className="text-xl text-red-orange-500 uppercase font-light">
              Third
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>
        </div>

        <div
          id="mobile-timeline-content"
          className="md:hidden flex flex-col justify-between h-auto"
        >
          <div>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
