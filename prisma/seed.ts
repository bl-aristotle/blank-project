/// <reference types="node" />

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.floorplan.createMany({
    data: [
      {
        name: "Studio Loft",
        bedrooms: 0,
        bathrooms: 1,
        sqft: 600,
        price: 1850,
        available: true,
        imageUrl: "/floorplans/studio.jpg",
        features: JSON.stringify(["Open layout", "Smart thermostat"]),
        unitCount: 4
      },
      {
        name: "One Bedroom",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 850,
        price: 2400,
        available: true,
        imageUrl: "/floorplans/one-bed.jpg",
        features: JSON.stringify(["Walk-in closet", "Balcony"]),
        unitCount: 2
      },
      {
        name: "Two Bedroom",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1150,
        price: 3100,
        available: true,
        imageUrl: "/floorplans/two-bed.jpg",
        features: JSON.stringify(["Roof terrace", "Smart home", "Fireplace"]),
        unitCount: 1
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

  