// app/gallery/page.tsx
'use client'
import { useState } from 'react'

type GalleryImage = {
  id: string
  url: string
  name: string
  type: 'AMENITY' | 'INTERIOR'
}

// This would be in a parent server component or fetched via API
const mockImages: GalleryImage[] = [
    { id: "1", name: "Building Ground View", url: "/images/amenities/building-ant-view.jpeg", type: "AMENITY"  },
    { id: "2", name: "Building Ariel View", url: "/images/amenities/building-ariel.jpeg", type: "AMENITY"  },
    { id: "3", name: "Building Close Up", url: "/images/amenities/building-close-up.jpeg", type: "AMENITY"  },
    { id: "4", name: "Ground Entrance", url: "/images/amenities/ground-entrance.jpeg", type: "AMENITY"  },
    { id: "5", name: "Gym Runner", url: "/images/amenities/gym-runner.jpeg", type: "AMENITY"  },
    { id: "6", name: "Gym Turf Area", url: "/images/amenities/gym-turf.jpeg", type: "AMENITY"  },
    { id: "7", name: "Gym Wide Angle", url: "/images/amenities/gym-wide-angle.jpeg", type: "AMENITY"  },
    { id: "8", name: "Library", url: "/images/amenities/library.jpeg", type: "AMENITY"  },
    { id: "9", name: "Library Wide Angle", url: "/images/amenities/library-wide-angle.jpeg", type: "AMENITY"  },
    { id: "10", name: "Lobby Art", url: "/images/amenities/lobby-art.jpeg", type: "AMENITY"  },
    { id: "11", name: "Lobby Seating", url: "/images/amenities/lobby-seating.jpeg", type: "AMENITY"  },
    { id: "12", name: "Lobby Stairs", url: "/images/amenities/lobby-stairs.jpeg", type: "AMENITY"  },
    { id: "13", name: "Lounge Seating", url: "/images/amenities/lounge-seating.jpeg", type: "AMENITY"  },
    { id: "14", name: "Outside Ground Floor", url: "/images/amenities/outside-ground-floor.jpeg", type: "AMENITY"  },
    { id: "15", name: "Pool", url: "/images/amenities/pool.jpeg", type: "AMENITY"  },
    { id: "16", name: "Pool Blurry", url: "/images/amenities/pool-blurry.jpeg", type: "AMENITY"  },
    { id: "17", name: "Sauna", url: "/images/amenities/sauna.jpeg", type: "AMENITY"  },
    { id: "18", name: "Spin Room", url: "/images/amenities/spin-room.jpeg", type: "AMENITY"  },
    { id: "19", name: "Weight Room", url: "/images/amenities/weight.jpeg", type: "AMENITY"  },
    { id: "20", name: "Yoga Room", url: "/images/amenities/yoga-room.jpeg", type: "AMENITY"  },
  
    // Interior (Units)
    { id: "21", name: "Balcony Sunset", url: "/images/amenities/balcony-sunset.jpeg", type: "INTERIOR"  },
    { id: "22", name: "Bathroom", url: "/images/amenities/bathroom.jpeg", type: "INTERIOR"  },
    { id: "23", name: "Bedroom", url: "/images/amenities/bedroom.jpeg", type: "INTERIOR"  },
    { id: "24", name: "Living Room", url: "/images/amenities/livingroom-couches.jpeg", type: "INTERIOR"  },
    { id: "25", name: "Unit Balcony", url: "/images/amenities/unit-balcony.jpeg", type: "INTERIOR"  },
    { id: "26", name: "Unit Kitchen", url: "/images/amenities/unit-kitchen.jpeg", type: "INTERIOR"  }
  ]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AMENITY' | 'INTERIOR'>('ALL')
  
  // Use mock data temporarily - replace with your actual data fetching
  const filteredImages = activeFilter === 'ALL' 
    ? mockImages 
    : mockImages.filter(img => img.type === activeFilter)

  if (!filteredImages) {
    return <div className="py-16 text-center">Loading gallery images...</div>
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Property Gallery</h1>
        
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-4 py-2 rounded-full ${
              activeFilter === 'ALL' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('AMENITY')}
            className={`px-4 py-2 rounded-full ${
              activeFilter === 'AMENITY' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Amenities
          </button>
          <button
            onClick={() => setActiveFilter('INTERIOR')}
            className={`px-4 py-2 rounded-full ${
              activeFilter === 'INTERIOR' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Interior
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-white font-bold">{image.name}</h3>
                  <p className="text-white/80 text-sm">
                    {image.type === 'AMENITY' ? 'Amenity' : 'Interior'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}