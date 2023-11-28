import { Inter } from 'next/font/google'
import './globals.css'
const Navbar=dynamic(()=>import ('@/Components/Navbar/Navbar'))
import NextTopLoader from 'nextjs-toploader'
import dynamic from 'next/dynamic'
import Footer from '@/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextTopLoader color="#20B15A"speed={200}/>
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}
