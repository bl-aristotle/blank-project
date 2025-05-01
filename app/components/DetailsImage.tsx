// components/DetailsImage.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DetailsImage({ src, alt }: { src: string; alt: string }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const img = new window.Image()
        img.src = src
        img.onload = () => {
          setDimensions({
            width: img.width,
            height: img.height
          })
        }
      }, [src])

      const isLandscape = dimensions.width > dimensions.height


    return (
        <div className={`relative mx-auto ${isLandscape ? 'w-3/4 aspect-video' : 'w-1/2 aspect-[3/4]'}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          style={{
            margin: 'auto' // Centers the image
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    )
  }