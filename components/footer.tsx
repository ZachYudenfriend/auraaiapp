import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 lg:px-8 bg-transparent font-dm-sans">
      <div className="max-w-7xl mx-auto flex justify-end">
        <nav className="flex space-x-6">
          <Link 
            href="/terms" 
            className="text-gray-700 hover:text-sauce transition-colors text-sm"
          >
            terms & conditions
          </Link>
          <Link 
            href="/privacy" 
            className="text-gray-700 hover:text-sauce transition-colors text-sm"
          >
            privacy policy
          </Link>
        </nav>
      </div>
    </footer>
  )
} 