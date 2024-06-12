import Navbar from "@/components/navbar/Navbar"
import Link from "next/link"
import React from "react"

const Membership = () => {
  return (
    <div className="w-full my-8">
      <Navbar />
      <div className="h-[300px] md:h-[360px] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white text-6xl md:text-7xl text-center font-medium md:font-semibold tracking-wider">
          Join The Syndicate
        </h1>
        <h2 className="text-white text-xl text-center">
          Learn to follow the rules that keep you in the trade.
        </h2>
      </div>
      <div className="flex space-y-9 md:space-y-11">
        <div className="w-[360px] h-[440px] py-6 px-6 bg-shark-900 rounded-xl flex flex-col justify-between">
          <h3 className=" w-fit py-2 px-4 text-sm text-red-orange-800 font-semibold bg-red-orange-50 rounded-2xl">
            Free
          </h3>

          <div>
            <p className="text-white">Dive Into Trading</p>
            <h4 className="mt-2 mb-4 font-semibold text-5xl text-red-orange-500">
              Free
            </h4>
            <ul className="list-disc list-inside text-white">
              <li>3-Day Free Trail</li>
              <li>Full Server Access</li>
              <li>Expert Guidance</li>
              <li>Access Our Resource Library</li>
              <li>Live Trading Workshops</li>
              <li>Community Networking</li>
            </ul>
          </div>

          <Link
            className="w-full text-center py-3 bg-red-orange-50 text-red-orange-800 font-medium rounded-2xl"
            href="/"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Membership
