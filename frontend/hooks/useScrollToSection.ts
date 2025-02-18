"use client"

import { useEffect } from "react"

export function useScrollToSection() {
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.hash?.replace("#", "")

      if (!targetId) return

      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        })

        // Update the URL without a page reload
        window.history.pushState(null, "", `#${targetId}`)
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])
}

