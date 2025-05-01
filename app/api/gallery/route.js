// app/api/gallery/route.js
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('Attempting to fetch gallery images...') // Log 1
    const images = await prisma.galleryImage.findMany()
    console.log('Found images:', images.length) // Log 2
    return NextResponse.json(images)
  } catch (error) {
    console.error('Database error:', error) // Log 3
    return NextResponse.json(
      { error: error.message }, // Include actual error
      { status: 500 }
    )
  }
}