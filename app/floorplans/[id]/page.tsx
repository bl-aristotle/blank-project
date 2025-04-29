// app/floorplans/[id]/page.tsx
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import type { Floorplan } from '@/types'

interface Params {
  params: {
    id: string
  }
}

export default async function FloorplanDetailPage({ params }: Params) {
  // Fetch floorplan with its available units
  const floorplan = await prisma.floorplan.findUnique({
    where: { id: params.id },
    include: {
      Unit: {
        where: { status: 'AVAILABLE' },
        orderBy: { floor: 'asc' }
      }
    }
  })

  if (!floorplan) return notFound()

  const parsedFloorplan: Floorplan = {
    ...floorplan,
    features: JSON.parse(floorplan.features || '[]')
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{parsedFloorplan.name}</h1>
        
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src={parsedFloorplan.imageUrl}
              alt={parsedFloorplan.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <div className="flex gap-4 text-lg mb-4">
              <span>{parsedFloorplan.bedrooms === 0 ? 'Studio' : `${parsedFloorplan.bedrooms} BR`}</span>
              <span>{parsedFloorplan.bathrooms} BA</span>
              <span>{parsedFloorplan.sqft.toLocaleString()} sqft</span>
            </div>
            <p className="text-2xl font-semibold mb-6">${parsedFloorplan.price.toLocaleString()}/mo</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {parsedFloorplan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Available Units Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Available Units</h2>
          {floorplan.Unit.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {floorplan.Unit.map((unit) => (
                <div key={unit.id} className="border p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Unit {unit.unitNumber}</h3>
                  <p className="text-gray-600">Floor {unit.floor}</p>
                  <p className="mt-2 text-green-600 font-medium">Available Now</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Schedule Tour
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No available units for this floorplan at the moment.</p>
          )}
        </section>
      </div>
    </main>
  )
}