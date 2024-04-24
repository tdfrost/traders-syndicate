import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"
import { ButtonType } from "../buttons/PrimaryButton"

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-black flex">
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

      <div>
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/">
          About Us
        </Link>
        <Link className="text-white" href="/">
          FAQ
        </Link>
        <Link className="text-white" href="/">
          Memberships
        </Link>
      </div>

      <div>
        <PrimaryButton buttonColor={ButtonType.secondary} text="Login" />
        <PrimaryButton buttonColor={ButtonType.primary} text="Sign Up" />
      </div>
    </nav>
  )
}

export default Navbar
