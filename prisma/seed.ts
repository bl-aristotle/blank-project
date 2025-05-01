import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.galleryImage.deleteMany()
  await prisma.floorplan.deleteMany()
  await prisma.unit.deleteMany()

   // Seed floorplans (existing code)...
    // Create all floorplans with their units
  await prisma.floorplan.create({
    data: {
      name: "S1 - Studio Loft",
      bedrooms: 0,
      bathrooms: 1,
      sqft: 550,
      price: 1850,
      available: true,
      imageUrl: "/images/floorplans/s1.png",
      features: JSON.stringify(["Alcove studio","One wall kitchen","Stand-up shower","Small balcony","Marble backsplash","Stainless steel appliances","Built-in speakers", "Floor to ceiling windows"]),
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
      sqft: 580,
      price: 1950,
      available: true,
      imageUrl: "/images/floorplans/s2.png",
      features: JSON.stringify(["Alcove studio","Island kitchen","Stand-up shower","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
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
      sqft: 750,
      price: 2200,
      available: true,
      imageUrl: "/images/floorplans/a1.png",
      features: JSON.stringify(["Peninsula kitchen","Double bathroom access", "Walk-in closet","Stand-up shower","Medium balcony","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
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
      sqft: 900,
      price: 2500,
      available: true,
      imageUrl: "/images/floorplans/a2.png",
      features: JSON.stringify(["Island kitchen","Double bathroom access", "Walk-in closet","Stand-up shower","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
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
      sqft: 1180,
      price: 3700,
      available: true,
      imageUrl: "/images/floorplans/b1.png",
      features: JSON.stringify(["Island kitchen","Double bathroom access","Walk-in closet","Stand-up shower", "Garden tub","Double vanity", "Medium balcony","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
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
      sqft: 1350,
      price: 4000,
      available: true,
      imageUrl: "/images/floorplans/b2.png",
      features: JSON.stringify(["Corner unit","Wrap around balcony","Island kitchen","Double bathroom access","Walk-in closet","Stand-up shower", "Garden tub","Double vanity","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
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
      name: "Penthouse - Two Bedroom",
      bedrooms: 2,
      bathrooms: 3,
      sqft: 2900,
      price: 7900,
      available: true,
      imageUrl: "/images/floorplans/p1.png",
      features: JSON.stringify(["Corner unit","Double wrap around balcony","Den/study","Laundry room","Powder room","Island kitchen","Walk-in closet","Stand-up shower", "Garden tub","Double vanity","Marble backsplash","Stainless steel appliances","Built-in speakers","Floor to ceiling windows"]),
      unitCount: 2,
      Unit: {
        create: [
          { unitNumber: "1601", floor: 16, status: "AVAILABLE" },
          { unitNumber: "1602", floor: 16, status: "AVAILABLE" }
        ]
      }
    }
  })

  // Seed gallery images
  await prisma.galleryImage.createMany({
    data: [
      { name: "Building Ground View", url: "/images/amenities/building-ant-view.jpeg", type: "AMENITY"  },
      { name: "Building Ariel View", url: "/images/amenities/building-ariel.jpeg", type: "AMENITY"  },
      { name: "Building Close Up", url: "/images/amenities/building-close-up.jpeg", type: "AMENITY"  },
      { name: "Ground Entrance", url: "/images/amenities/ground-entrance.jpeg", type: "AMENITY"  },
      { name: "Gym Runner", url: "/images/amenities/gym-runner.jpeg", type: "AMENITY"  },
      { name: "Gym Turf Area", url: "/images/amenities/gym-turf.jpeg", type: "AMENITY"  },
      { name: "Gym Wide Angle", url: "/images/amenities/gym-wide-angle.jpeg", type: "AMENITY"  },
      { name: "Library", url: "/images/amenities/library.jpeg", type: "AMENITY"  },
      { name: "Library Wide Angle", url: "/images/amenities/library-wide-angle.jpeg", type: "AMENITY"  },
      { name: "Lobby Art", url: "/images/amenities/lobby-art.jpeg", type: "AMENITY"  },
      { name: "Lobby Seating", url: "/images/amenities/lobby-seating.jpeg", type: "AMENITY"  },
      { name: "Lobby Stairs", url: "/images/amenities/lobby-stairs.jpeg", type: "AMENITY"  },
      { name: "Lounge Seating", url: "/images/amenities/lounge-seating.jpeg", type: "AMENITY"  },
      { name: "Outside Ground Floor", url: "/images/amenities/outside-ground-floor.jpeg", type: "AMENITY"  },
      { name: "Pool", url: "/images/amenities/pool.jpeg", type: "AMENITY"  },
      { name: "Pool Blurry", url: "/images/amenities/pool-blurry.jpeg", type: "AMENITY"  },
      { name: "Sauna", url: "/images/amenities/sauna.jpeg", type: "AMENITY"  },
      { name: "Spin Room", url: "/images/amenities/spin-room.jpeg", type: "AMENITY"  },
      { name: "Weight Room", url: "/images/amenities/weight.jpeg", type: "AMENITY"  },
      { name: "Yoga Room", url: "/images/amenities/yoga-room.jpeg", type: "AMENITY"  },
    
      // Interior (Units)
      { name: "Balcony Sunset", url: "/images/amenities/balcony-sunset.jpeg", type: "INTERIOR"  },
      { name: "Bathroom", url: "/images/amenities/bathroom.jpeg", type: "INTERIOR"  },
      { name: "Bedroom", url: "/images/amenities/bedroom.jpeg", type: "INTERIOR"  },
      { name: "Living Room", url: "/images/amenities/livingroom-couches.jpeg", type: "INTERIOR"  },
      { name: "Unit Balcony", url: "/images/amenities/unit-balcony.jpeg", type: "INTERIOR"  },
      { name: "Unit Kitchen", url: "/images/amenities/unit-kitchen.jpeg", type: "INTERIOR"  }
    ]
  })
}

main()
  .catch(e => {
    console.error("Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })