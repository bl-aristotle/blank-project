// app/floorplans/page.tsx
import prisma from '@/lib/prisma'
import FloorplanGrid from '../components/FloorplanGrid'

export default async function FloorplansPage() {
  const floorplans = await prisma.floorplan.findMany({
    where: { available: true }
  }).then(plans => 
    plans.map(plan => ({
      ...plan,
      features: JSON.parse(plan.features)
    }))
  )

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">All Floorplans</h1>
        <FloorplanGrid floorplans={floorplans} />
      </div>
    </main>
  )
}