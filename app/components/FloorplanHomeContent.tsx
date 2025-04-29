// app/components/FloorplanHomeContent.tsx
'use client'
import { useEffect, useState } from 'react'
import type { Floorplan } from '@prisma/client'
import FloorplanTeaser from './FloorplanTeaser'

type FloorplanWithFeatures = Floorplan & {
  features: string[]
}

export default function FloorplanHomeContent() {
  const [floorplans, setFloorplans] = useState<FloorplanWithFeatures[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/floorplans?limit=3') // Only fetch 3
        const data = await res.json()
        setFloorplans(data.map((plan: Floorplan) => ({
          ...plan,
          features: JSON.parse(plan.features)
        })))
      } catch (error) {
        console.error('Error fetching floorplans:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="py-12 text-center">Loading floorplans...</div>
  if (!floorplans) return <div className="py-12 text-center">No floorplans available</div>

  return <FloorplanTeaser floorplans={floorplans} />
}