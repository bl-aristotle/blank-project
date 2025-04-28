'use client'
import Link from 'next/link'
import type { Floorplan } from '@prisma/client'

interface Props {
  plan: Floorplan & { features: string[] }
}

export default function FloorplanCard({ plan }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <img 
        src={plan.imageUrl} 
        alt={plan.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <div className="flex gap-4 text-gray-600 my-2 text-sm">
        <span>{plan.bedrooms === 0 ? 'Studio' : `${plan.bedrooms} BR`}</span>
        <span>{plan.bathrooms} BA</span>
        <span>{plan.sqft.toLocaleString()} sqft</span>
      </div>
      <p className="text-2xl font-semibold my-3">${plan.price.toLocaleString()}/mo</p>
      <Link
        href={`/floorplans/${plan.id}`}
        className="block text-center bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
      >
        View Details
      </Link>
    </div>
  )
}