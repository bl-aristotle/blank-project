// app/gallery/page.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GalleryCarousel } from '../components/GalleryCarousel'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


type GalleryImage = {
  id: string
  url: string
  name: string
  type: 'AMENITY' | 'INTERIOR'
}

// This would be in a parent server component or fetched via API
const mockImages: GalleryImage[] = [
    { id: "1", name: "Building Ground View", url: "/images/amenities/building-ant-view.jpeg", type: "AMENITY"  },
    { id: "23", name: "Bedroom", url: "/images/amenities/bedroom.jpeg", type: "INTERIOR"  },
    { id: "2", name: "Building Ariel View", url: "/images/amenities/building-ariel.jpeg", type: "AMENITY"  },
    { id: "22", name: "Bathroom", url: "/images/amenities/bathroom.jpeg", type: "INTERIOR"  },
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
  
    { id: "24", name: "Living Room", url: "/images/amenities/livingroom-couches.jpeg", type: "INTERIOR"  },
    { id: "21", name: "Balcony Sunset", url: "/images/amenities/balcony-sunset.jpeg", type: "INTERIOR"  },
    { id: "25", name: "Unit Balcony", url: "/images/amenities/unit-balcony.jpeg", type: "INTERIOR"  },
    { id: "26", name: "Unit Kitchen", url: "/images/amenities/unit-kitchen.jpeg", type: "INTERIOR"  }
  ]

  export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState<'ALL' | 'AMENITY' | 'INTERIOR'>('ALL')
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  
    const filteredImages = activeFilter === 'ALL'
      ? mockImages
      : mockImages.filter(img => img.type === activeFilter)
  
    const openImage = (index: number) => setSelectedImageIndex(index)
    const closeImage = () => setSelectedImageIndex(null)
  
    return (
      <main className="py-6 bg-stone-100">
        <div className="container mx-auto px-4">
        <h2 className={`text-2xl font-bold mb-2 text-stone-600 text-center ${montserrat.className}`}>Property Gallery</h2>
          
          
         {/* Filter Buttons */}
         <div className="flex justify-center mb-6 mt-6">
          <div className="flex gap-1 bg-stone-200 p-1 rounded-lg">
            {(['ALL', 'AMENITY', 'INTERIOR'] as const).map((filter) => (
            <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md transition-colors ${
                   activeFilter === filter
                    ? 'bg-white shadow-sm text-stone-800 font-medium' 
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
               {filter === 'ALL' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
  
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group overflow-hidden rounded-md shadow-md cursor-pointer hover:shadow-lg transition-all"
                onClick={() => openImage(index)}
              >
                {/* Change this div */}
                <div className="relative aspect-[3/2]">
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Carousel Modal */}
        {selectedImageIndex !== null && (
          <GalleryCarousel
            images={filteredImages}
            initialIndex={selectedImageIndex}
            onClose={closeImage}
          />
        )}
      </main>
    )
  }