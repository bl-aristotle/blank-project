'use client'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-stone-200 py-4">
        <div className="mx-auto px-4 lg:px-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className={`text-stone-400 ${montserrat.className}`}>THE</span>
            <span className={`text-stone-600 ${montserrat.className}`}>EVELYN</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-12 items-center">
            <Link href="/floorplans" className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}>
              FLOORPLANS
            </Link>
            <Link
                      href="/gallery"
                      onClick={(e) => {
                        // Only force reload if the navigation hasn't happened after 1s
                        const timer = setTimeout(() => {
                          window.location.href = "/gallery";
                        }, 1000);
                        // Clean up the timer if navigation succeeds
                        return () => clearTimeout(timer);
                      }}
                      className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}
                    >
                      GALLERY
                    </Link>
            <Link href="/amenities" className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}>
              AMENITIES
            </Link>
            <Link href="/contact" className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}>
              CONTACT
            </Link>
            <Link href="/schedule-tour" className={`px-4 py-2 rounded-full bg-stone-50 text-stone-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${montserrat.className}`}>
              SCHEDULE TOUR
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-black transform transition ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-black transform transition ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-black transform transition ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu - pushes content down */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link 
                href="/floorplans" 
                className={`text-gray-800 text-lg ${montserrat.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FLOORPLANS
              </Link>
              <Link
                href="/gallery"
                className={`text-gray-800 text-lg ${montserrat.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link 
                href="/amenities" 
                className={`text-gray-800 text-lg ${montserrat.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                AMENITIES
              </Link>
              <Link 
                href="/contact" 
                className={`text-gray-800 text-lg ${montserrat.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link 
                href="/schedule-tour" 
                className={`px-4 py-2 rounded-full bg-white text-black`}
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Tour
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}