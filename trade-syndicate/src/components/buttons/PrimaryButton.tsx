import Link from "next/link"
import React from "react"

export enum ButtonType {
  primary = "bg-red-orange-500 text-white",
  secondary = "bg-white text-black",
}

interface IButtonProps {
  buttonColor: ButtonType
  text: string
  textCapitalized?: boolean
}

const PrimaryButton = (button: IButtonProps) => {
  if (button.textCapitalized) {
    return (
      <Link
        href="/"
        className={
          button.buttonColor +
          " font-semibold py-2 px-4 rounded-full w-fit uppercase"
        }
      >
        {button.text}
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={
        button.buttonColor +
        " font-semibold py-1 px-4 text-lg rounded-full w-fit"
      }
    >
      {button.text}
    </Link>
  )
}

export default PrimaryButton
