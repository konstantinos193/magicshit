"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="py-4 bg-background">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">MAGICCATS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-white hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="#how-to-buy" className="text-white hover:text-secondary transition-colors">
            How to Buy
          </Link>
          <Button className="bg-primary text-white hover:bg-primary/80">Buy $MAGICCATS</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg p-4 z-50">
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-white hover:text-secondary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#how-to-buy"
              className="text-white hover:text-secondary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to Buy
            </Link>
            <Button className="bg-primary text-white hover:bg-primary/80 w-full">Buy $MAGICCATS</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

