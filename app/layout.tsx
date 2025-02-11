import type { Metadata } from "next"
import { Libre_Franklin } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const libreFranklin = Libre_Franklin({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AURA AI",
  description: "Develop skills, mindset, and charisma with our real-time AI coach",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  )
}



import './globals.css'