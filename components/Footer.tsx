import Link from "next/link"
import { Github, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Information */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-green-700">AI Greener Livestock</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Artificial Intelligence for Greener Livestock: Educational and Research
            </p>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-gray-500">
                Award Number: 2022-70001-37404
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Funded by USDA National Institute of Food and Agriculture
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                Home
              </Link>
              <Link href="/project" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                About Project
              </Link>
              <Link href="/research" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                Research
              </Link>
              <Link href="/resources" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                Publications
              </Link>
              <Link href="/resources" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                Datasets
              </Link>
              <Link href="mailto:khaled.ahmed@siu.edu" className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a 
                  href="mailto:toqitahamid.sarker@siu.edu"
                  className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors"
                >
                  Research Team
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-gray-500" />
                <a 
                  href="https://github.com/toqitahamid/Gasformer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-600 hover:text-green-700 transition-colors flex items-center space-x-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                <p>Southern Illinois University</p>
                <p>Carbondale, Illinois</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2024 Southern Illinois University. This research is supported by the USDA NIFA under award 2022-70001-37404.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 