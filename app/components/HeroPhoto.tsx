// components/HeroPhoto.tsx
'use client'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function HeroPhoto() {
    return (
      <div className="w-full h-[60vh] bg-gray-100 relative overflow-hidden">
        <img
          src="/images/amenities/unit-kitchen.jpeg" // Will create this in step 3
          alt="The Evelyn Apartments"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute top-40 left-0 right-0 text-center">
          <h1   className={`text-4xl sm:text-5xl md:text-6xl font-bold text-stone-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${montserrat.className}`}>
            THE EVELYN RESIDENCES
          </h1>
        </div>
      </div>
    )
  }


  