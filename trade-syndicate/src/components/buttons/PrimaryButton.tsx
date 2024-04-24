import Link from "next/link"
import React from "react"

export enum ButtonType {
  primary = "bg-red-orange-500 text-white",
  secondary = "bg-white text-black",
}

interface IButtonProps {
  buttonColor: ButtonType
  text: string
}

const PrimaryButton = (button: IButtonProps) => {
  return (
    <Link
      href="/"
      className={
        button.buttonColor + " font-semibold py-1 px-4 text-lg rounded-full"
      }
    >
      {button.text}
    </Link>
  )
}

export default PrimaryButton
