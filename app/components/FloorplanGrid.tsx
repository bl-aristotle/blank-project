// components/FloorplanGrid.tsx
import FloorplanCard from './FloorplanCard'
import { Montserrat } from 'next/font/google'
import type { Floorplan } from '@/types' // Point to your types.ts

const montserrat = Montserrat({ subsets: ['latin'] })

export default function FloorplanGrid({ 
  floorplans 
}: {
  floorplans: Floorplan[] 
}) {
  return (
    <div className={`grid gap-8 ${montserrat.className} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
      {floorplans.map((plan) => (
        <FloorplanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}