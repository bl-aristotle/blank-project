// types.ts
export type FloorplanTeaser = {
  id: string
  name: string
  bedrooms: number
  bathrooms: number
  sqft: number
  price: number
  imageUrl: string
  unitCount: number
  features: string[] // Now properly typed as array (not JSON string)
}

// types/floorplan.ts
export type Floorplan = {
  id: string
  name: string
  bedrooms: number
  bathrooms: number
  sqft: number
  price: number
  imageUrl: string
  features: string[]  // Already properly typed as array
  unitCount: number
  available?: boolean  // Optional field
  updatedAt?: Date     // Optional field
}