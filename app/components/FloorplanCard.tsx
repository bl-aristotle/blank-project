// app/components/FloorplanCard.tsx
'use client'
import Link from 'next/link'
import type { Floorplan } from '@/types'

export default function FloorplanCard({ plan }: { plan: Floorplan }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <img
          src={plan.imageUrl}
          alt={plan.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <div className="flex gap-4 text-sm text-gray-600 mb-4">
          <span>{plan.bedrooms === 0 ? 'Studio' : `${plan.bedrooms} BR`}</span>
          <span>{plan.bathrooms} BA</span>
          <span>{plan.sqft.toLocaleString()} sqft</span>
        </div>
        <p className="text-2xl font-semibold mb-4">${plan.price.toLocaleString()}/mo</p>
        <Link
          href={`/floorplans/${plan.id}`}
          className="block w-full text-center bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}