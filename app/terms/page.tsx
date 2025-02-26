"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function TermsRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to Apple's EULA page
    window.location.href = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
  }, [])
  
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-medium mb-4">Redirecting...</h1>
        <p className="text-white/70">
          You are being redirected to our Terms & Conditions page.
        </p>
        <p className="mt-4">
          <a 
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
            className="text-cyan-400 hover:text-cyan-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here if you are not redirected automatically
          </a>
        </p>
      </div>
    </div>
  )
} 