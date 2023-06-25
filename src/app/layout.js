import { Outfit } from 'next/font/google'

// These styles apply to every route in the application
import '@/styles/globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Astro Teller',
  description: 'Know your stars using Artificial Intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
