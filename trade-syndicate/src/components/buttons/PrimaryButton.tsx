import Link from "next/link"
import React from "react"

export enum ButtonType {
  primary = "bg-red-orange-500",
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
        button.buttonColor +
        " font-semibold py-2 px-4 text-lg text-white rounded-full"
      }
    >
      {button.text}
    </Link>
  )
}

export default PrimaryButton
