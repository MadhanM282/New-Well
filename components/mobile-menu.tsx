"use client"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"


interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null



  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm lg:hidden">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1"></div>
        <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav className="container grid gap-6 py-6">
        <Link href="#" className="flex items-center py-3 text-lg font-medium hover:text-primary" onClick={onClose}>
          Home
        </Link>
        <Link
          href="#services"
          className="flex items-center py-3 text-lg font-medium hover:text-primary"
          onClick={onClose}
        >
          Services
        </Link>
        <Link
          href="#products"
          className="flex items-center py-3 text-lg font-medium hover:text-primary"
          onClick={onClose}
        >
          Products
        </Link>
        {/* <Link
          href="#projects"
          className="flex items-center py-3 text-lg font-medium hover:text-primary"
          onClick={onClose}
        >
          Projects
        </Link> */}
        {/* <Link
          href="#testimonials"
          className="flex items-center py-3 text-lg font-medium hover:text-primary"
          onClick={onClose}
        >
          Testimonials
        </Link> */}
        <Link
          href="#contact"
          className="flex items-center py-3 text-lg font-medium hover:text-primary"
          onClick={onClose}
        >
          Contact
        </Link>
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="outline" className="w-full justify-start" size="lg">
            <span className="mr-2">📞</span> Call Us: +919676616995
          </Button>
          <a href="#KAT" style={{'width':'100%'}} onClick={onClose} className="inline-block rounded-md border border-transparent bg-indigo-600 text-center font-medium text-white hover:bg-indigo-700 py-2">Get a Quote</a>

        </div>
      </nav>
    </div>
  )
}
