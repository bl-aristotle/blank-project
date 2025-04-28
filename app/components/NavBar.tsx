'use client'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

interface NavBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function NavBar({ isMenuOpen, toggleMenu }: NavBarProps) {
  return (
    <nav className="bg-gray-200 py-4 relative z-50">
      <div className="mx-auto px-4 lg:px-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <span className={`text-stone-400 ${montserrat.className}`}>THE</span>
                    <span className={`text-stone-600 ${montserrat.className}`}>EVELYN</span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-12 items-center">
                    <Link href="/floorplans" className={`text-stone-600 ${montserrat.className} hover:text-blue-600 transition`}>FLOORPLANS</Link>
                    <Link href="/gallery" className={`text-stone-600 ${montserrat.className}`}>GALLERY</Link>
                    <Link href="/amenities" className={`text-stone-600 ${montserrat.className}`}>AMENITIES</Link>
                    <Link href="/contact" className={`text-stone-600 ${montserrat.className}`}>CONTACT</Link>
                    <button className={`px-4 py-2 rounded-full bg-stone-50 text-stone-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  ${montserrat.className}`}>
                        SCHEDULE TOUR
                    </button>
                </div>
                
                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-4 focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Button clicked') // Debugging
                    toggleMenu()
                  }}
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
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-lg">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <Link 
                                href="/floorplans" 
                                className={`text-gray-800 text-lg ${montserrat.className}`}
                                onClick={toggleMenu}
                            >
                                FLOORPLANS
                            </Link>
                            <Link 
                                href="/gallery" 
                                className={`text-gray-800 text-lg ${montserrat.className}`}
                                onClick={toggleMenu}
                            >
                                GALLERY
                            </Link>
                            <Link 
                                href="/amenities" 
                                className={`text-gray-800 text-lg ${montserrat.className}`}
                                onClick={toggleMenu}
                            >
                                AMENITIES
                            </Link>
                            <Link 
                                href="/contact" 
                                className={`text-gray-800 text-lg ${montserrat.className}`}
                                onClick={toggleMenu}
                            >
                                CONTACT
                            </Link>
                            <button className={`px-4 py-2 rounded-full bg-white text-black`}>
                                Schedule Tour
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}