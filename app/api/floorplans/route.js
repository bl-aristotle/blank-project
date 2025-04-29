// app/api/floorplans/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const limit = url.searchParams.get('limit')
    
    const floorplans = await prisma.floorplan.findMany({
      where: { available: true },
      take: limit ? parseInt(limit) : undefined
    })
    return NextResponse.json(floorplans)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch floorplans' },
      { status: 500 }
    )
  }
}