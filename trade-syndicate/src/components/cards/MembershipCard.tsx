import Link from "next/link"
import React from "react"

export interface Details {
  name: string
  headline: string
  price: string
  offerings: string[]
  buttonText: string
  size: string
}

export enum Size {
  Small = "h-[440px]",
  Large = "h-[500px]",
}

const MembershipCard = (card: Details) => {
  return (
    <div
      className={
        "max-w-full w-[360px] " +
        `${card.size}` +
        " py-6 px-6 bg-shark-900 rounded-xl flex flex-col justify-between"
      }
    >
      <h3 className=" w-fit py-2 px-4 text-sm text-red-orange-800 font-semibold bg-red-orange-50 rounded-2xl">
        {card.name}
      </h3>

      <div>
        <p className="text-white">{card.headline}</p>
        <h4 className="mt-2 mb-4 font-semibold text-5xl text-red-orange-500">
          {card.price}
        </h4>
        <ul className="list-disc list-inside text-white">
          {card.offerings.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>

      <Link
        className="w-full text-center py-3 bg-red-orange-50 text-red-orange-800 font-medium rounded-2xl"
        href="/"
      >
        {card.buttonText}
      </Link>
    </div>
  )
}

export default MembershipCard
