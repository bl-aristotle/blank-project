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