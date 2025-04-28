'use client'
import './globals.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Hero from './components/Hero'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Banner />
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={`transition-all duration-300 ${isMenuOpen ? 'mt-[200px]' : 'mt-0'}`}>
        <Hero />
      </div>
      {children}
    </>
  )
}