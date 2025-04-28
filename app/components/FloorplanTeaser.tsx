'use client'

import type { Floorplan } from '@prisma/client'
import FloorplanCard from './FloorplanCard'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

interface Props {
  floorplans: (Floorplan & { features: string[] })[]
}

export default function FloorplanTeaser({ floorplans }: Props) {
  return (
    <section className="py-8 px-10 bg-stone-300">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl mb-8 pt-2 pb-2 text-center text-stone-600 font-semibold ${montserrat.className}`}>FEATURED FLOORPLANS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {floorplans.map((plan) => (
            <FloorplanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
