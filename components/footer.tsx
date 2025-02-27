import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-3 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-black/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex justify-center lg:justify-end">
        <nav className="flex space-x-6 text-sm">
          <a 
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
          <Link 
            href="/privacy" 
            className="text-white/70 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
} 