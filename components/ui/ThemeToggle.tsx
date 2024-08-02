"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import ShimmerButton from "./ShimmerButton"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
        <div>
        <ShimmerButton handleClick={() => setTheme("light")} title="Light" icon={<MoonIcon/>} position="right"/>
        <ShimmerButton handleClick={() => setTheme("dark")} title="Dark" icon={<SunIcon/>} position="left"/>
        </div>
  )
}
