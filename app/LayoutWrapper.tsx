'use client'
import './globals.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import dynamic from 'next/dynamic'

// Load FloorplanHomeContent without SSR
const FloorplanHomeContent = dynamic(
  () => import('./components/FloorplanHomeContent'),
  { ssr: false }
)

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log('Menu toggled', !isMenuOpen) // Verify in browser console
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Banner />
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* Single animated container */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'translate-y-[200px]' : 'translate-y-0'}`}>
        <Hero />
        <FloorplanHomeContent />
        {children}
      </div>
    </>
  )
}

