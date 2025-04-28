// components/Hero.tsx
'use client'
import HeroPhoto from './HeroPhoto'

export default function Hero() {
  // To switch back to video later:
  // 1. Change this to true
  // 2. Put your video in /public/videos/hero.mp4
  const useVideo = false

  return useVideo ? (
    <div className="w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  ) : (
    <HeroPhoto />
  )
}