"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="py-4 sm:py-6 font-libre-franklin relative z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                className="w-auto h-8"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201686557491-xS6d7bp2ZS80qay4VvqhIMevQuv0DZ.png"
                alt="AURA AI Logo"
                width={32}
                height={32}
                priority
              />
              <span className="text-white text-xl font-medium tracking-wider bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">AURA AI</span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span className="sr-only">{isExpanded ? "Close menu" : "Open menu"}</span>
              {isExpanded ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          <nav className="hidden space-x-6 md:flex md:items-center md:justify-center">
            <NavLink href="/features" label="Features" />
            <NavLink href="/promo" label="Promo" />
            <NavLink href="/support" label="Support" />
          </nav>
        </div>

        {isExpanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-4">
              <NavLink href="/features" label="Features" />
              <NavLink href="/promo" label="Promo" />
              <NavLink href="/support" label="Support" />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`
        relative px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300
        ${isActive 
          ? 'bg-gray-800/80 border border-gray-700/50 shadow-lg backdrop-blur-sm' 
          : 'hover:bg-gray-800/50'
        }
      `}
    >
      <span className={`
        ${isActive 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'
          : 'text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500'
        }
      `}>{label.toUpperCase()}</span>
    </Link>
  )
}

export default Header

