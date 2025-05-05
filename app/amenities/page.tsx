// app/amenities/page.tsx
'use client'
import { Montserrat } from 'next/font/google'
import AmenitiesSection from './AmenitiesSection'
import NeighborhoodSection from './NeighborhoodSection'
import FAQSection from './FAQSection'
import ReviewsSection from './ReviewsSection'
import ScrollHandler from './ScrollHandler'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-stone-100">
    <main className="container mx-auto px-4 py-6">
       <ScrollHandler />  
      <div className="space-y-8">
        <div id="amenities">
          <AmenitiesSection />
        </div>

        <div id="faq">
          <FAQSection />
        </div>

        <div id="neighborhood">
          <NeighborhoodSection />
        </div>
        
        <div id="reviews">
          <ReviewsSection />
        </div>
      </div>
    </main>
    </div>
  )
}