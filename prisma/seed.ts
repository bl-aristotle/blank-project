import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.unit.deleteMany()
  await prisma.floorplan.deleteMany()

  // Create all floorplans with their units
  await prisma.floorplan.create({
    data: {
      name: "S1 - Studio Loft",
      bedrooms: 0,
      bathrooms: 1,
      sqft: 500,
      price: 1850,
      available: true,
      imageUrl: "/floorplans/studio.jpg",
      features: JSON.stringify(["Open layout", "Stand-up Shower"]),
      unitCount: 2,
      Unit: {
        create: [
          { unitNumber: "1101", floor: 11, status: "AVAILABLE" },
          { unitNumber: "1102", floor: 11, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "S2 - Studio Loft",
      bedrooms: 0,
      bathrooms: 1,
      sqft: 550,
      price: 1950,
      available: true,
      imageUrl: "/floorplans/studio.jpg",
      features: JSON.stringify(["Open layout", "Stand-up Shower", "Built-in Speakers", "Small Balcony"]),
      unitCount: 2,
      Unit: {
        create: [
          { unitNumber: "1103", floor: 11, status: "AVAILABLE" },
          { unitNumber: "1104", floor: 11, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "A1 - One Bedroom",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 700,
      price: 2200,
      available: true,
      imageUrl: "/floorplans/one-bed.jpg",
      features: JSON.stringify(["Walk-in closet", "Medium Balcony", "Garden Tub", "Peninsula Kitchen", "Built-in Speakers"]),
      unitCount: 4,
      Unit: {
        create: [
          { unitNumber: "1201", floor: 12, status: "AVAILABLE" },
          { unitNumber: "1202", floor: 12, status: "AVAILABLE" },
          { unitNumber: "1203", floor: 12, status: "AVAILABLE" },
          { unitNumber: "1204", floor: 12, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "A2 - One Bedroom",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 800,
      price: 2400,
      available: true,
      imageUrl: "/floorplans/one-bed.jpg",
      features: JSON.stringify(["Walk-in closet", "Medium Balcony", "Garden Tub", "Double Vanity", "Island Kitchen", "Mudroom", "Built-in Speakers"]),
      unitCount: 3,
      Unit: {
        create: [
          { unitNumber: "1301", floor: 13, status: "AVAILABLE" },
          { unitNumber: "1302", floor: 13, status: "AVAILABLE" },
          { unitNumber: "1303", floor: 13, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "B1 - Two Bedroom",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1000,
      price: 2900,
      available: true,
      imageUrl: "/floorplans/two-bed.jpg",
      features: JSON.stringify(["Walk-in closet", "Large Balcony", "Garden Tub", "Stand-up Shower", "Double Vanity", "Peninsula Kitchen", "Mudroom", "Built-in Speakers"]),
      unitCount: 4,
      Unit: {
        create: [
          { unitNumber: "1401", floor: 14, status: "AVAILABLE" },
          { unitNumber: "1402", floor: 14, status: "AVAILABLE" },
          { unitNumber: "1403", floor: 14, status: "AVAILABLE" },
          { unitNumber: "1404", floor: 14, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "B2 - Two Bedroom",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      price: 3200,
      available: true,
      imageUrl: "/floorplans/two-bed.jpg",
      features: JSON.stringify(["Walk-in closet", "Large Balcony", "Garden Tub", "Stand-up Shower", "Double Vanity", "Island Kitchen", "Mudroom", "Built-in Speakers", "Wine Fridge"]),
      unitCount: 3,
      Unit: {
        create: [
          { unitNumber: "1501", floor: 15, status: "AVAILABLE" },
          { unitNumber: "1502", floor: 15, status: "AVAILABLE" },
          { unitNumber: "1503", floor: 15, status: "AVAILABLE" }
        ]
      }
    }
  })

  await prisma.floorplan.create({
    data: {
      name: "Penthouse - Three Bedroom",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      price: 5500,
      available: true,
      imageUrl: "/floorplans/two-bed.jpg",
      features: JSON.stringify(["Split Level", "Private Elevator", "Oversized windows", "Walk-in closet", "Extra Large Private Terrace", "Garden Tub", "Stand-up Shower", "Double Vanity", "Island Kitchen", "Mudroom", "Built-in Speakers", "Wine Fridge"]),
      unitCount: 2,
      Unit: {
        create: [
          { unitNumber: "1601", floor: 16, status: "AVAILABLE" },
          { unitNumber: "1602", floor: 16, status: "AVAILABLE" }
        ]
      }
    }
  })

  console.log("✅ Successfully seeded database with floorplans and units")
}

main()
  .catch((e) => {
    console.error("Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })