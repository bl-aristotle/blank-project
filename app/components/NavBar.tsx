'use client'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { useState, useRef, useEffect } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  const moreLinks = [
    { href: '/amenities', label: 'AMENITIES' },
    { href: '/amenities#faq', label: 'FAQ' },
    { href: '/amenities#neighborhood', label: 'NEIGHBORHOOD' },
    { href: '/amenities#reviews', label: 'REVIEWS' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close More dropdown if clicking outside (desktop only)
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false)
      }
      
      // Close entire mobile menu if clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          !(event.target as HTMLElement).closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false)
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 10)
      setIsAtTop(scrollTop === 0)
      
      // Close More dropdown on scroll (desktop behavior)
      setIsMoreOpen(false)
      
      // Don't close mobile menu on scroll - keep it sticky
    }

    // Initialize scroll state
    handleScroll()

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
    setIsMoreOpen(false)
  }

  const toggleMoreDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMoreOpen(!isMoreOpen)
    // Don't close mobile menu here - only for desktop
  }

  const toggleMoreMobile = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsMoreOpen(!isMoreOpen)
  }

  const closeAllDropdowns = () => {
    setIsMoreOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-stone-200 py-4 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
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
                const timer = setTimeout(() => {
                  window.location.href = "/gallery";
                }, 1000);
                return () => clearTimeout(timer);
              }}
              className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}
            >
              GALLERY
            </Link>
            <Link href="/contact" className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}>
              CONTACT
            </Link>
            
            {/* More dropdown - desktop */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={toggleMoreDropdown}
                className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition flex items-center gap-1`}
                aria-expanded={isMoreOpen}
              >
                MORE
                <svg
                  className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMoreOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/schedule-tour" className={`px-4 py-2 rounded-full bg-stone-50 text-stone-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${montserrat.className}`}>
              SCHEDULE TOUR
            </Link>
          </div>

          <button
            className="md:hidden p-4 focus:outline-none z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className={`md:hidden bg-gray-100 z-40 w-full ${
            isAtTop ? 'relative' : 'fixed top-20 shadow-lg'
          }`}
          style={{
            maxHeight: isAtTop ? 'none' : 'calc(100vh - 4rem)',
            overflowY: isAtTop ? 'visible' : 'auto'
          }}
        >
          <div className="flex flex-col items-center space-y-4 py-4 px-4">
            <Link 
              href="/floorplans" 
              className={`text-gray-800 text-md ${montserrat.className} w-full text-center py-1`}
              onClick={closeAllDropdowns}
            >
              FLOORPLANS
            </Link>
            <Link
              href="/gallery"
              className={`text-gray-800 text-md ${montserrat.className} w-full text-center py-1`}
              onClick={closeAllDropdowns}
            >
              GALLERY
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-800 text-md ${montserrat.className} w-full text-center py-1`}
              onClick={closeAllDropdowns}
            >
              CONTACT
            </Link>
            
            <div className="w-full text-center" ref={moreRef}>
              <button
                onClick={toggleMoreMobile}
                className={`text-gray-800 text-md ${montserrat.className} flex items-center justify-center w-full py-1`}
                aria-expanded={isMoreOpen}
              >
                MORE
                <svg
                  className={`w-5 h-5 ml-1 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMoreOpen && (
                <div className="mt-2 space-y-2 w-full" onClick={(e) => e.stopPropagation()}>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-1 px-4 text-gray-700 hover:bg-gray-200 transition-colors"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="/schedule-tour" 
              className={`px-6 py-3 rounded-full bg-white text-black font-medium mt-2 w-full text-center`}
              onClick={closeAllDropdowns}
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      )}
    </>
  )
}