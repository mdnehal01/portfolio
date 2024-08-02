"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import ShimmerButton from "./ShimmerButton"
import TwConnectBtn from "./TwConnectBtn"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    // Render nothing on the server
    return null
  }

  return (
    <div className="absolute z-50 top-10 right-10">
      <TwConnectBtn
        handleClick={toggleTheme} 
        icon={theme === "light" ? <MoonIcon /> : <SunIcon />} 
      />
    </div>
  )
}
