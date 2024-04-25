import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"
import { ButtonType } from "../buttons/PrimaryButton"
import HamburgerButton from "../buttons/HamburgerButton"

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-black flex items-center justify-between my-6">
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

      <div className="md:hidden">
        <HamburgerButton />
      </div>
    </nav>
  )
}

export default Navbar
