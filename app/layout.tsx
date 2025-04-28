'use client'

import './globals.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import { useState, useEffect } from 'react'

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <body>
        <Banner />
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className={`transition-all duration-300 ${isMenuOpen ? 'mt-[200px]' : 'mt-0'}`}>
          <Hero />
        </div>
      </body>
    </html>
  )
}