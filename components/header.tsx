"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="py-6 font-dm-sans relative z-10">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-black text-2xl font-medium font-space-grotesk">sauce</span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span className="sr-only">{isExpanded ? "close menu" : "open menu"}</span>
              {isExpanded ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          <nav className="hidden space-x-8 md:flex md:items-center">
            <NavLink href="/features" label="features" />
            <NavLink href="/promo" label="promo" />
            <NavLink href="/support" label="support" />
          </nav>
        </div>

        {isExpanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-4">
              <NavLink href="/features" label="features" />
              <NavLink href="/promo" label="promo" />
              <NavLink href="/support" label="support" />
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
        relative text-base font-medium transition-all duration-300
        ${isActive 
          ? 'text-sauce' 
          : 'text-gray-700 hover:text-sauce'
        }
      `}
    >
      <span>{label}</span>
    </Link>
  )
}

export default Header

