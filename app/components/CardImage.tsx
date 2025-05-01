// components/FloorplanImage.tsx
'use client'
import Image from 'next/image'

export default function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4" // Adds padding inside the square
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}