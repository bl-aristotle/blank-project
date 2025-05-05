// app/components/FloorplanTeaser.tsx
'use client'
import { useState, useEffect } from 'react'
import type { Floorplan } from '@prisma/client'
import FloorplanCard from './FloorplanCard'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

interface Props {
  floorplans: (Floorplan & { features: string[] })[]
}

export default function FloorplanTeaser({ floorplans }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)
  const [isXlView, setIsXlView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsToShow(3)
        setIsXlView(true)
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2)
        setIsXlView(false)
      } else {
        setItemsToShow(1)
        setIsXlView(false)
      }
      setCurrentIndex(0)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= floorplans.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? floorplans.length - itemsToShow : prevIndex - 1
    )
  }

  const visibleFloorplans = floorplans.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <section className="py-8 px-4 sm:px-10 bg-stone-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className={`text-3xl mb-4 text-stone-600 font-semibold ${montserrat.className}`}>
            FEATURED FLOORPLANS
          </h2>
          <Link 
            href="/floorplans" 
            className="inline-block px-6 py-2 bg-stone-600 text-white rounded-md hover:bg-stone-700 transition-colors mb-4"
          >
            View All Floorplans
          </Link>
        </div>
        
        {/* Main container with min-height based on viewport */}
        <div className="relative min-h-[500px] md:min-h-[450px] xl:min-h-[400px] flex items-center justify-center gap-4">
          {/* Previous Button */}
          {!isXlView && (
            <button 
              onClick={prevSlide}
              className="z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all self-center"
              aria-label="Previous floorplans"
            >
              <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Floorplan Cards */}
          <div className={`grid ${
            itemsToShow === 3 ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 
            itemsToShow === 2 ? 'grid-cols-2' : 'grid-cols-1'
          } gap-6 w-full max-w-7xl mx-auto`}>
            {visibleFloorplans.map((plan) => (
              <div key={plan.id} className="h-full">
                <FloorplanCard plan={plan} className="h-full" />
              </div>
            ))}
          </div>

          {/* Next Button */}
          {!isXlView && (
            <button 
              onClick={nextSlide}
              className="z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all self-center"
              aria-label="Next floorplans"
            >
              <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Indicators */}
        {itemsToShow === 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {floorplans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-stone-600' : 'bg-stone-400'}`}
                aria-label={`Go to floorplan ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}