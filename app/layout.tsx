import './globals.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Hero from './components/Hero';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Banner/>
          <NavBar/>
          <Hero/>
          {children}
        </body>
      </html>
    )
  }