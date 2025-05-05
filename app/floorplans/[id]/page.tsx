// app/floorplans/[id]/page.tsx
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import type { Floorplan } from '@/types'
import DetailsImage from '../../components/DetailsImage'
import FloorplanDetailsCard from '../../components/FloorplanDetailsCard'

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
    <main className="py-6 bg-stone-200">
      <div className="container mx-auto px-4">
        
        
        {/* Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 mb-12">
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-4 text-center">{parsedFloorplan.name}</h1>
            <FloorplanDetailsCard plan={parsedFloorplan} />
          </div>
         
          {/* Left content - takes 2 cols (2/3 width) */}
          <div className="lg:col-span-5 md:ml-10 mt-12">   
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 mt-4">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {parsedFloorplan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
             {/* Available Units Section */}
             <section className="mt-12">
  <h2 className="text-2xl font-bold mb-6">Available Units</h2>
  
  {floorplan.Unit.length > 0 ? (
    <div className="overflow-x-auto">
      {/* Table headers - reduced gap and padding */}
      <div className="grid grid-cols-12 gap-2 mb-2 px-2 py-2 bg-gray-100 rounded-t-lg">
        <div className="col-span-3 font-semibold text-sm">APT</div>
        <div className="col-span-3 font-semibold text-sm">Floor</div>
        <div className="col-span-3 font-semibold text-sm">Status</div>
        <div className="col-span-3"></div>
      </div>
      
      {/* Unit rows - tighter spacing */}
      <div className="space-y-1">
        {floorplan.Unit.map((unit) => (
          <div 
            key={unit.id} 
            className="grid grid-cols-12 gap-2 items-center px-2 py-2 border-b hover:bg-gray-50 transition"
          >
            <div className="col-span-3 font-medium text-sm">Unit {unit.unitNumber}</div>
            <div className="col-span-3 text-gray-600 text-sm">{unit.floor}</div>
            <div className="col-span-3">
              <span className="text-green-600 font-medium text-sm">Available</span>
            </div>
            <div className="col-span-3">
              <button className="w-full md:w-3/4 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition text-xs whitespace-nowrap">
                Schedule Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-gray-500">No available units</p>
  )}
</section>
          </div>
        </div>
      </div>
    </main>
  )
}