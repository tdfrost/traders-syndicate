"use client"

import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"
import { ButtonType } from "../buttons/PrimaryButton"
import HamburgerButton from "../buttons/HamburgerButton"
import { useCycle } from "framer-motion"

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true)

  return (
    <nav className="sticky top-0 inset-x-0 h-16">
      <div className="w-full bg-black flex items-center justify-between my-6">
        <div>
          <Link href="/">
            <Image
              src="/trade-syndicate-logo-wh.svg"
              width={50}
              height={50}
              alt="Traders Syndicate logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-12">
          <div className="flex items-center space-x-11">
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              About Us
            </Link>
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              FAQ
            </Link>
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              Memberships
            </Link>
          </div>

          <div className="flex space-x-4">
            <PrimaryButton buttonColor={ButtonType.secondary} text="Login" />
            <PrimaryButton buttonColor={ButtonType.primary} text="Sign Up" />
          </div>
        </div>

        <div onClick={() => console.log("clicked")} className="md:hidden z-20">
          <HamburgerButton />
        </div>
      </div>

      <div className="fixed inset-0 bg-[#28282B] p-8 container mx-auto space-y-5 flex flex-col justify-center items-center">
        <div>
          <ul className="flex flex-col space-y-6 text-center">
            <li>
              <a href="#" className="text-3xl font-bold text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-3xl font-bold text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-3xl font-bold text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-3xl font-bold text-white">
                Memberships
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full bg-white h-px" />

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
            </li>

            <li>
              <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
            </li>

            <li>
              <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
