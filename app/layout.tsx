import type { Metadata } from "next"
import { Libre_Franklin } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const libreFranklin = Libre_Franklin({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AURA AI",
  description: "Develop skills, mindset, and charisma with our real-time AI coach",
  generator: "v0.dev"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Icons */}
        <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        
        {/* PWA & Web App Meta */}
        <meta name="apple-mobile-web-app-title" content="AURA AI" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={libreFranklin.className}>{children}</body>
    </html>
  )
}
