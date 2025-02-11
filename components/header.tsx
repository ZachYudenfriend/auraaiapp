"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header className="py-4 bg-gray-900 sm:py-6 font-libre-franklin">
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
              <span className="text-white text-xl font-semibold">AURA AI</span>
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

          <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
            <NavLink href="#" label="Features" />
            <NavLink href="#" label="Blog" />
            <NavLink href="#" label="Jobs" />
          </nav>
        </div>

        {isExpanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <NavLink href="#" label="Features" />
              <NavLink href="#" label="Blog" />
              <NavLink href="#" label="Jobs" />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
    {label}
  </Link>
)

export default Header

