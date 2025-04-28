import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import type { Floorplan } from '@/types'

interface Params {
  params: {
    id: string
  }
}

export default async function FloorplanDetailPage({ params }: Params) {
  // 1. Fetch the floorplan
  const floorplan = await prisma.floorplan.findUnique({
    where: { id: params.id }
  })

  // 2. Handle not found
  if (!floorplan) return notFound()

  // 3. Parse the features and assert type
  const parsedFloorplan: Floorplan = {
    ...floorplan,
    features: JSON.parse(floorplan.features || '[]')
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{parsedFloorplan.name}</h1>
        {/* Rest of your detail page UI */}
      </div>
    </main>
  )
}