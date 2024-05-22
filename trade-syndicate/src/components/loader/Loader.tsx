import React, { Dispatch, SetStateAction, useEffect } from "react"
import MotionLogo from "../buttons/MotionLogo"

const Loader = ({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="overflow-hidden h-screen w-full flex justify-center items-center">
      <MotionLogo />
    </div>
  )
}

export default Loader
