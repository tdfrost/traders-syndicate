import Image from "next/image"
import React from "react"

const FaqQuesiton = () => {
  return (
    <div className="flex flex-col px-6 py-8 min-h-24 w-full bg-shark-900 rounded space-y-6">
      <div className="flex justify-between h-full grow">
        <h2 className="text-xl font-semibold text-red-orange-500 uppercase">
          Tu pregunta Amigo
        </h2>
        <Image
          src="/icons/down-arrow.svg"
          width={25}
          height={25}
          alt="icon of a downward facing arrow"
        />
      </div>
      <div className="hidden">
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam
          sit amet nisl purus in mollis nunc. A iaculis at erat pellentesque
          adipiscing commodo. Ipsum a arcu cursus vitae congue. Nisl vel pretium
          lectus quam id leo in vitae turpis. Viverra adipiscing at in tellus
          integer feugiat scelerisque. Magna sit amet purus gravida quis blandit
          turpis. Aenean et tortor at risus viverra.
        </p>
      </div>
    </div>
  )
}

export default FaqQuesiton
