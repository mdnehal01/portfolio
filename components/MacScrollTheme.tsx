"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { MacbookScroll } from './ui/MacScroll';
const MacScrollTheme = () => {
    const {theme} = useTheme();

    return (
        <div>
        {theme === "light" ? (
            <MacbookScroll
              src="/oneMusix.png"
              showGradient={false}
              title="Founder and Developer of One Musix"
              badge=""
            />
          ) : (
            <MacbookScroll
              src="/oneMusixLight.png"
              showGradient={false}
              title="Founder and Developer of One Musix"
              badge=""
            />
          )}
        </div>
    )
}

export default MacScrollTheme