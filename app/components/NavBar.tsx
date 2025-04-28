'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            // Close menu if window width is greater than or equal to md breakpoint (768px)
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Clean up
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="bg-gray-200 py-4 relative">
            <div className="mx-auto px-4 lg:px-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-gray-400">THE</span>
                    <span className="text-gray-700">EVELYN</span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-12 items-center">
                    <Link href="/floorplans" className={`text-gray-800 ${montserrat.className}`}>FLOORPLANS</Link>
                    <Link href="/gallery" className={`text-gray-800 ${montserrat.className}`}>GALLERY</Link>
                    <Link href="/amenities" className={`text-gray-800 ${montserrat.className}`}>AMENITIES</Link>
                    <Link href="/contact" className={`text-gray-800 ${montserrat.className}`}>CONTACT</Link>
                    <button className={`px-4 py-2 rounded-full bg-white text-black`}>
                        SCHEDULE TOUR
                    </button>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden btn btn-square btn-ghost pl-4"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-10 w-10 stroke-current"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> 
                    </svg>
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