import React, { useEffect } from "react"

const useIntro = () => {
  const currTimestamp = Date.now()
  const prevTimestamp = JSON.parse(
    global.window?.localStorage.getItem("timestamp") || "1000"
  )

  const replayTimeLimit = 4 * 60 * 60 * 1000

  const hasReplayIntervalPassed =
    currTimestamp - prevTimestamp > replayTimeLimit

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      hasReplayIntervalPassed
        ? localStorage.setItem("timestamp", currTimestamp.toString())
        : localStorage.setItem("timestamp", prevTimestamp.toString())
    }
  }, [])
  return hasReplayIntervalPassed
}

export default useIntro
