import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const floorplans = await prisma.floorplan.findMany({
      where: { available: true }
    })
    return NextResponse.json(floorplans)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch floorplans' },
      { status: 500 }
    )
  }
}