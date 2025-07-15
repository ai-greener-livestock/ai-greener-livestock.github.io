"use client"

import Link from "next/link"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Research", href: "/research" },
    { title: "Team", href: "/team" },
    { title: "Resources", href: "/resources" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Enhanced Logo and Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-green-50 rounded-lg border border-green-100">
              <Leaf className="h-5 w-5 text-green-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base lg:text-lg font-bold text-green-700">AI Greener Livestock</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Climate-Smart Agriculture Research</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink 
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-green-800 focus:bg-green-50 focus:text-green-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-50 data-[state=open]:bg-green-50"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-green-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

            </div>
          </div>
        )}
      </div>
    </header>
  )
} 