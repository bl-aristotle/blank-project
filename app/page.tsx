'use client';

import Hero from './components/Hero'
import FloorplanHomeContent from './components/FloorplanHomeContent'
import NeighborhoodSection from './amenities/NeighborhoodSection';


export default function Home() {
  return (
    <>
      <Hero />
      <FloorplanHomeContent /> {/* Different component from FloorplanGrid */}
      <NeighborhoodSection />
    </>
  )
}