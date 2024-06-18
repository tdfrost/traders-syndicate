import React, { useEffect } from "react"

const useIntro = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const currTimestamp = Date.now()
    const prevTimestamp = JSON.parse(
      localStorage.getItem("timestamp") || "1000"
    )

    const replayTimeLimit = 4 * 60 * 60 * 1000

    const hasReplayIntervalPassed =
      currTimestamp - prevTimestamp > replayTimeLimit

    useEffect(() => {
      hasReplayIntervalPassed
        ? localStorage.setItem("timestamp", currTimestamp.toString())
        : localStorage.setItem("timestamp", prevTimestamp.toString())
    }, [])
    return hasReplayIntervalPassed
  }
}

export default useIntro
