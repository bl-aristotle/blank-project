// app/amenities/page.tsx
'use client'
import Head from 'next/head';


const amenities = [
  {
    title: "Rooftop Pool",
    description: "Enjoy stunning views while swimming in our infinity-edge rooftop pool.",
    icon: "🏊‍♀️"
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym equipment available 24/7 for residents.",
    icon: "💪"
  },
  {
    title: "Co-Working Lounge",
    description: "Productive workspace with high-speed internet and coffee bar.",
    icon: "💻"
  },
  {
    title: "Pet Spa",
    description: "Pamper your furry friends in our dedicated pet grooming area.",
    icon: "🐕"
  },
  {
    title: "Yoga Deck",
    description: "Outdoor space for yoga and meditation with peaceful garden views.",
    icon: "🧘‍♀️"
  },
  {
    title: "Concierge Service",
    description: "24/7 concierge to assist with all your needs and requests.",
    icon: "🛎️"
  }
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>The Evelyn Residences - Amenities</title>
        <meta name="description" content="Explore the luxurious amenities at The Evelyn Residences" />
      </Head>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">The Evelyn Residences</h1>
          <h2 className="text-3xl text-slate-600 mb-4">Luxury Amenities</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Experience unparalleled comfort and convenience with our premium amenities
          </p>
        </header>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{amenity.title}</h3>
              <p className="text-slate-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <footer className="bg-white rounded-xl p-8 text-center shadow-sm">
          <p className="text-xl text-slate-600 mb-6">
            Schedule a tour to experience our amenities in person
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            SCHEDULE TOUR
          </button>
        </footer>
      </main>
    </div>
  );
}