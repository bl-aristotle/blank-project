import './globals.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';

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
          {children}
        </body>
      </html>
    )
  }