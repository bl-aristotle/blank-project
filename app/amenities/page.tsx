// app/amenities/page.tsx
'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

type AmenityCategory = {
  id: string
  name: string
  imageUrl: string
  features: string[]
}

const amenityCategories: AmenityCategory[] = [
  {
    id: 'unit',
    name: 'Unit Features',
    imageUrl: "/images/amenities/bedroom.jpeg",
    features: [
      "Smart home technology with voice control",
      "Gourmet kitchens with premium appliances",
      "Spa-inspired bathrooms with heated floors",
      "Custom walk-in closets with organization systems",
      "Floor-to-ceiling windows with panoramic views",
      "Private balconies or terraces",
      "Washer and dryer in every unit",
      "Soundproofed walls and ceilings",
      "Energy-efficient LED lighting throughout",
      "USB charging outlets in all rooms",
      "Smart thermostats with zone control",
      "Hardwood flooring in living areas",
      "Pre-wired for high-speed internet",
      "Keyless entry systems",
      "Built-in Bluetooth speakers"
    ]
  },
  {
    id: 'property',
    name: 'Property Amenities',
    imageUrl: "/images/amenities/gym-turf.jpeg",
    features: [
      "Rooftop infinity pool with cabanas",
      "State-of-the-art fitness center",
      "Co-working lounge with high-speed WiFi",
      "Resident lounge with catering kitchen",
      "Pet spa and grooming station",
      "Package receiving room with cold storage",
      "Secure underground parking",
      "Electric vehicle charging stations",
      "Bicycle storage and repair station",
      "On-site maintenance team",
      "Guest suites for visitors",
      "Landscaped courtyard with seating",
      "Party room with full kitchen",
      "Conference rooms for business meetings",
      "24-hour concierge service"
    ]
  },
  {
    id: 'penthouse',
    name: 'Penthouse Features',
    imageUrl: "/images/amenities/bathroom.jpeg",
    features: [
      "Expansive private terraces",
      "Custom wine cellars",
      "Home theater systems",
      "Premium smart home automation",
      "Chef's kitchens with premium appliances",
      "Spa bathrooms with soaking tubs",
      "Dedicated elevator access",
      "Panoramic city views",
      "Private rooftop gardens",
      "Smart glass privacy systems",
      "Custom interior lighting design",
      "Premium soundproofing throughout",
      "Walk-in dressing rooms",
      "Library/study rooms",
      "Dual master suites"
    ]
  }
]

export default function AmenitiesPage() {
  const [activeTab, setActiveTab] = useState('unit')
  const activeCategory = amenityCategories.find(cat => cat.id === activeTab)!

  return (
    <div className="min-h-screen bg-stone-100">
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-6">
        <h2 className={`text-2xl font-bold mb-2 text-stone-600 text-center ${montserrat.className}`}>Amenities</h2>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 xl:mb-12">
          <div className="flex gap-1 bg-stone-200 p-1 rounded-lg">
            {amenityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === category.id 
                    ? 'bg-white shadow-sm text-stone-800 font-medium' 
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 xl:gap-24 mb-12">
          {/* Left Column - Image */}
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-md border border-stone-200">
              <Image
                src={activeCategory.imageUrl}
                alt={activeCategory.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semi text-stone-600 mb-6">
              {activeCategory.name}
            </h3>
            
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              {activeCategory.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-stone-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <button className="bg-stone-600 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
            SCHEDULE A TOUR
          </button>
        </div>
      </main>
    </div>
  )
}