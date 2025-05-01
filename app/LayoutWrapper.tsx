'use client'
import { usePathname } from 'next/navigation'
import NavBar from './components/NavBar'
import Banner from './components/Banner'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <Banner />
      <NavBar />
      {children}
    </>
  )
}