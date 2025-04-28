// app/LayoutWrapper.tsx
'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Banner />
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      
      {/* Content area with conditional spacing */}
      <div className={`transition-all duration-200 ${
        isMenuOpen ? 'translate-y-[200px]' : 'translate-y-0'
      }`}>
        {children}
      </div>
    </>
  )
}