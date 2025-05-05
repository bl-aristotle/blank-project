// app/amenities/NeighborhoodSection.tsx
'use client'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const montserrat = Montserrat({ subsets: ['latin'] })

const neighborhoodPhotos = [
  { src: '/images/neighborhood/cafe2.png', alt: 'Local coffee shop' },
  { src: '/images/neighborhood/subway2.png', alt: 'Subway entrance' },
  { src: '/images/neighborhood/park2.png', alt: 'Nearby park' },
  { src: '/images/neighborhood/shopping.png', alt: 'Boutique shopping' }
]

export default function NeighborhoodSection() {
  const propertyLat = 40.7128 // Your latitude
  const propertyLng = -74.0060 // Your longitude

  return (
    <section id="neighborhood" className="bg-white">
      <div className="container mx-auto px-4 lg:px-16 xl:px-24 py-6 pb-12">
        <h2 className={`text-3xl font-bold mb-6 text-center text-stone-600 ${montserrat.className}`}>
          Discover the Neighborhood
        </h2>
        
        {/* Map + Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* OpenStreetMap Container */}
          <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl relative border border-stone-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${propertyLng-0.01},${propertyLat-0.01},${propertyLng+0.01},${propertyLat+0.01}&layer=mapnik&marker=${propertyLat},${propertyLng}`}
              className="border-0"
              aria-label="Property location map"
            />
            <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-full shadow-md text-sm hover:bg-stone-100 transition">
              <a 
                href={`https://www.openstreetmap.org/?mlat=${propertyLat}&mlon=${propertyLng}#map=17/${propertyLat}/${propertyLng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Explore Area
              </a>
            </div>
          </div>
          
          {/* Neighborhood Details */}
          <div className="flex flex-col justify-center">
            <h3 className={`text-2xl font-bold mb-6 text-stone-600 ${montserrat.className}`}>Prime Manhattan Location</h3>
            <div className="prose prose-lg text-stone-600 mb-6">
              <p>
                The Evelyn resides in one of New York's most coveted neighborhoods, placing you steps away from the city's finest dining, 
                shopping, and cultural attractions. Our central location means you're just a short walk from iconic landmarks while our 
                serene residential setting offers a peaceful retreat from the urban bustle.
              </p>
              <p>
                Everyday essentials and luxuries are within easy reach, with gourmet markets, boutique fitness studios, and award-winning 
                restaurants all just blocks away. For entertainment, Lincoln Center's performances and the AMC Loews theater are less than 
                10 minutes away, making spontaneous nights out effortless.
              </p>
            </div>
            
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                <span><strong className="font-semibold">98 Walk Score</strong> - Most errands can be accomplished on foot</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span><strong className="font-semibold">4/5/6 Subway Lines</strong> - 5 min walk to 86th Street station</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                <span><strong className="font-semibold">24/7 Amenities</strong> - Pharmacies, banks, and grocery stores nearby</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center text-stone-600 ${montserrat.className}`}>Neighborhood Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoodPhotos.map((photo, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}