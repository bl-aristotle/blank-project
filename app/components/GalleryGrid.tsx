// components/GalleryGrid.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'

type GalleryFloorplan = {
  id: string
  name: string
  imageUrl: string
  bedrooms: number
  price: number
}

export default function GalleryGrid({ floorplans }: { floorplans: GalleryFloorplan[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {floorplans.map((plan) => (
        <Link 
          key={plan.id} 
          href={`/floorplans/${plan.id}`}
          className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <div className="aspect-square relative">
            <Image
              src={plan.imageUrl}
              alt={plan.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <div>
              <h3 className="text-white font-bold text-lg">{plan.name}</h3>
              <p className="text-white/90">
                {plan.bedrooms === 0 ? 'Studio' : `${plan.bedrooms} BR`} • ${plan.price.toLocaleString()}/mo
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}