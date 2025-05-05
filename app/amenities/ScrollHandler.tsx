// app/amenities/ScrollHandler.tsx
'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function ScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          // Get element's position relative to viewport
          const rect = element.getBoundingClientRect()
          // Only scroll if element is not already at the top
          if (rect.top < 0 || rect.top > 100) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }, 100)
  }, [pathname, searchParams])

  return null
}