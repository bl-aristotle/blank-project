// app/gallery/page.tsx
'use client'
import { useState } from 'react'
import prisma from '@/lib/prisma'

type GalleryImage = {
  id: string
  url: string
  name: string
  type: 'AMENITY' | 'INTERIOR'
}

export default async function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AMENITY' | 'INTERIOR'>('ALL')
  
  const allImages = await prisma.galleryImage.findMany()
  
  const filteredImages = activeFilter === 'ALL' 
    ? allImages 
    : allImages.filter(img => img.type === activeFilter)

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