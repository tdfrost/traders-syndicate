import FaqQuesiton from "@/components/dropDown/FaqQuesiton"
import React from "react"

const Faq = () => {
  return (
    <div className="w-full my-8">
      <div className="h-[300px] flex items-center justify-center">
        <h1 className="text-white text-6xl text-center font-medium tracking-wider">
          FAQ
        </h1>
      </div>
      <div>
        <FaqQuesiton></FaqQuesiton>
      </div>
    </div>
  )
}

export default Faq
