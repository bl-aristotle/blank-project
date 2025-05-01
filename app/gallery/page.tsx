// app/gallery/page.tsx
import prisma from '@/lib/prisma'
import GalleryGrid from '../components/GalleryGrid'

export default async function GalleryPage() {
  // Fetch all floorplans with their images
  const floorplans = await prisma.floorplan.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      bedrooms: true,
      price: true
    }
  })

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Property Gallery</h1>
        <GalleryGrid floorplans={floorplans} />
      </div>
    </main>
  )
}