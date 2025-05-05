// app/floorplans/page.tsx
import prisma from '@/lib/prisma'
import FloorplanGrid from '../components/FloorplanGrid'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

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
    <main className="bg-stone-100">
      <div className="container mx-auto px-4 py-6">
      <div className="text-center mx-auto px-4 max-w-3xl">
  <h2 className={`text-3xl font-bold mb-2 text-stone-600 ${montserrat.className}`}>Floorplans</h2>
  <p className="text-md text-stone-600 mb-4">
    Whether you're seeking a cozy <strong>studio</strong>, spacious <strong>1- or 2-bedroom</strong> layouts,
    or our exclusive <strong>penthouse collection</strong>, every residence is crafted for refined urban living.
  </p>
</div>


        <FloorplanGrid floorplans={floorplans} />
      </div>
    </main>
  )
}