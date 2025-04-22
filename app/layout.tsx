import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

// Import font CSS
import "@fontsource/space-grotesk/400.css"; // Weight 400
import "@fontsource/space-grotesk/500.css"; // Weight 500
import "@fontsource/space-grotesk/700.css"; // Weight 700
import "@fontsource/dm-sans/400.css"; // Weight 400
import "@fontsource/dm-sans/500.css"; // Weight 500
import "@fontsource/dm-sans/700.css"; // Weight 700

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "sauce",
  description: "Voice conversations enhanced with sauce",
  generator: "v0.dev"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <head>
        {/* Favicon Icons */}
        <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon-512x512.png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        
        {/* PWA & Web App Meta */}
        <meta name="apple-mobile-web-app-title" content="sauce" />
        <meta name="theme-color" content="#D13C3C" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
