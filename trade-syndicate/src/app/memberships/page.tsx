import MembershipCard, {
  Details,
  Size,
} from "@/components/cards/MembershipCard"
import Navbar from "@/components/navbar/Navbar"
import Link from "next/link"
import React from "react"

const cardOne: Details = {
  name: "Free",
  headline: "Dive Into Trading",
  price: "Free",
  offerings: [
    "3-Day Free Trail",
    "Full Server Access",
    "Expert Guidance",
    "Access Our Resource Library",
    "Live Trading Workshops",
    "Community Networking",
  ],
  buttonText: "Start Your Free Trial",
  size: Size.Small,
}

const cardTwo: Details = {
  name: "Premium",
  headline: "Dive Into Profits",
  price: "$199/mo",
  offerings: [
    "Full Server Access",
    "Direct Expert Sessions",
    "Priority Live Trading Access",
    "Live Trading Workshops",
    "Premium Networking Community",
  ],
  buttonText: "Unlock Your Trading Success",
  size: Size.Large,
}

const cardThree: Details = {
  name: "VIP",
  headline: "Dive Into Syndicate",
  price: "$3499/year",
  offerings: [
    "Exclusive Discord Access",
    "Personalized Expert Sessions",
    "Comprehensive VIP Course",
    "Live Trading Workshops",
    "Elite Community Network",
  ],
  buttonText: "Build With The Syndicate",
  size: Size.Small,
}

const Membership = () => {
  return (
    <div className="w-full my-8">
      <Navbar />
      <div className="h-[300px] md:h-[320px] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white text-6xl md:text-7xl text-center font-medium md:font-semibold tracking-wider">
          Join The Syndicate
        </h1>
        <h2 className="text-white text-xl text-center">
          Learn to follow the rules that keep you in the trade.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8">
        <MembershipCard
          name={cardOne.name}
          headline={cardOne.headline}
          price={cardOne.price}
          offerings={cardOne.offerings}
          buttonText={cardOne.buttonText}
          size={cardOne.size}
        />

        <MembershipCard
          name={cardTwo.name}
          headline={cardTwo.headline}
          price={cardTwo.price}
          offerings={cardTwo.offerings}
          buttonText={cardTwo.buttonText}
          size={cardTwo.size}
        />

        <MembershipCard
          name={cardThree.name}
          headline={cardThree.headline}
          price={cardThree.price}
          offerings={cardThree.offerings}
          buttonText={cardThree.buttonText}
          size={cardThree.size}
        />
      </div>
    </div>
  )
}
export default Membership
