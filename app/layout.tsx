import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "AI Greener Livestock | USDA Research Project",
  description: "Artificial Intelligence for Greener Livestock: Educational and Research. USDA-funded project developing AI-powered solutions to monitor and reduce methane emissions from livestock.",
  keywords: "AI, livestock, methane emissions, USDA, research, optical gas imaging, computer vision, sustainability",
  authors: [{ name: "Dr. Khaled R. Ahmed & Dr. Amer AbuGhazaleh - Southern Illinois University Carbondale" }],
  creator: "Southern Illinois University Carbondale",
  publisher: "Southern Illinois University Carbondale",
  openGraph: {
    title: "AI Greener Livestock | USDA Research Project",
    description: "Developing AI-powered solutions to monitor and reduce methane emissions from livestock using optical gas imaging technology.",
    url: "https://https://ai-greener-livestock.github.io",
    siteName: "AI Greener Livestock",
    type: "website",
    images: [
      {
        url: "public/logo-og.svg",
        width: 1200,
        height: 630,
        alt: "AI Greener Livestock - Climate-Smart Agriculture Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Greener Livestock | USDA Research Project",
    description: "AI-powered solutions for sustainable livestock management and methane emission reduction.",
    images: ["/logo-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
