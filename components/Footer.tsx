import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Project Title & Description */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AI Greener Livestock
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Artificial Intelligence for Greener Livestock: Educational and Research
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="/research" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
            >
              Research
            </Link>
            <Link 
              href="/team" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
            >
              Team
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-700 hover:text-green-600 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
            >
              Resources
            </Link>
          </div>

          {/* Contact & University Info */}
          <div className="space-y-6 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-green-600" />
                <a 
                  href="mailto:khaled.ahmed@siu.edu"
                  className="hover:text-green-600 transition-colors duration-300 text-xs sm:text-sm"
                >
                  Research Team
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-xs sm:text-sm">Southern Illinois University, Carbondale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base">
              © 2025 Southern Illinois University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 