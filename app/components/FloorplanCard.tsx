// app/components/FloorplanCard.tsx
'use client'
import Link from 'next/link'
import type { Floorplan } from '@/types'
import CardImage from './CardImage'

export default function FloorplanCard({ plan }: { plan: Floorplan }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full aspect-square"> {/* Square container */}
        <CardImage src={plan.imageUrl} alt={plan.name} />
      </div>
      <div className="p-6">
      <h3 className="text-xl font-medium mb-1">{plan.name}</h3>
        <div className="flex gap-4 text-sm text-stone-600 mb-1 justify-left">
          <span>{plan.bedrooms === 0 ? 'Studio' : `${plan.bedrooms} BR`}</span>
          <span> | </span>
          <span>{plan.bathrooms} BA</span>
          <span> | </span>
          <span>{plan.sqft.toLocaleString()} sqft</span>
        </div>
        <p className="text-sm font-semibold mb-4">Rent: ${plan.price.toLocaleString()}</p>
        <Link
          href={`/floorplans/${plan.id}`}
          className="block w-full text-center bg-stone-700 text-white py-2 rounded hover:bg-stone-800 transition"
        >
          {plan.unitCount.toLocaleString()} Available
        </Link>
      </div>
    </div>
  )
}