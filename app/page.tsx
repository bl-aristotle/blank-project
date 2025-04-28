'use client';

import Hero from './components/Hero'
import FloorplanHomeContent from './components/FloorplanHomeContent'

export default function Home() {
  return (
    <>
      <Hero />
      <FloorplanHomeContent /> {/* Different component from FloorplanGrid */}
    </>
  )
}