import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Project title and copyright */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-900 text-sm">
              AI Greener Livestock
            </h3>
            <p className="text-gray-500 text-xs">
              © 2026 Southern Illinois University. All rights reserved.
            </p>
          </div>

          {/* Right side - Navigation */}
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Home
            </Link>
            <Link 
              href="/research" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Research
            </Link>
            <Link 
              href="/team" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Team
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 