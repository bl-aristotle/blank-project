'use client'

export default function Hero() {
  return (
    <div className="w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}