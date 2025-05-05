// components/GalleryCarousel.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function GalleryCarousel({ 
  images, 
  initialIndex = 0,
  onClose 
}: {
  images: { url: string; name: string }[]
  initialIndex: number
  onClose: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  const goToPrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0))
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl h-full max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300"
        >
          &times;
        </button>

        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].name}
          fill
          className="object-contain"
          priority
        />

        <button
          onClick={e => { e.stopPropagation(); goToPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75"
        >
          &larr;
        </button>

        <button
          onClick={e => { e.stopPropagation(); goToNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75"
        >
          &rarr;
        </button>

        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p className="inline-block bg-black/50 px-4 py-2 rounded-lg">
            {images[currentIndex].name}
          </p>
        </div>
      </div>
    </div>
  )
}