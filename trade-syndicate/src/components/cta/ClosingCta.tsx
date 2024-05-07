import React from "react"
import PrimaryButton, { ButtonType } from "../buttons/PrimaryButton"

const ClosingCta = () => {
  return (
    <div className="bg-[url('/images/cta.png')] bg-no-repeat bg-cover rounded-md w-3/4 h-96 flex flex-col items-center justify-center space-y-8">
      <h2 className="text-5xl font-semibold text-center leading-[1.15]">
        Become a Traders Syndicate <br />
        Elite Trader
      </h2>

      <div className="hidden md:block py-2">
        <PrimaryButton
          buttonColor={ButtonType.primary}
          text="Join Our Discord"
          textCapitalized
        />
      </div>
    </div>
  )
}

export default ClosingCta
