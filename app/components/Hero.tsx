'use client'

export default function Hero() {
  return (
    <div className="w-full">
      {/* Video with ABSOLUTE full coverage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="min-w-full h-auto hero-video object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}