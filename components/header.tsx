"use client"

import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contracting', href: '/contracting' },
  { name: 'Supply Management', href: '/supply-management' },
  { name: 'Contact Us', href: '/contact' },
]

interface HeaderProps {
  currentPage: string
}

export function Header({ currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-100">
              DATCO
            </Link>
            <nav className="flex items-center space-x-1">
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  item.name === 'Contracting' || item.name === 'Supply Management' ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200">
                          {item.name}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.name === 'Contracting' && (
                          <>
                            <DropdownMenuItem>
                              <Link href="/contracting#mechanical" className="text-gray-700 hover:text-gray-500 hover:bg-gray-800">Mechanical Contractors</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/contracting#projects" className="text-gray-700 hover:text-gray-500 hover:bg-gray-800">Major Projects</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/contracting#certifications" className="text-gray-700 hover:text-gray-500 hover:bg-gray-800">Certifications</Link>
                            </DropdownMenuItem>
                          </>
                        )}
                        {item.name === 'Supply Management' && (
                          <>
                            <DropdownMenuItem>
                              <Link href="/supply-management#products" className="text-gray-700 hover:text-gray-500 hover:bg-gray-800">Electro-Mechanical Products</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/supply-management#brochure" className="text-gray-700 hover:text-gray-500 hover:bg-gray-800">Brochure Download</Link>
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link key={item.name} href={item.href}>
                      <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-200">
                        {item.name}
                      </Button>
                    </Link>
                  )
                ))}
              </div>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="md:hidden"
                    onClick={() => setIsOpen(true)}
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-1 text-lg text-gray-300 hover:bg-gray-800 hover:text-gray-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
          
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href="/" className="text-gray-400 hover:text-gray-200">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {currentPage !== 'Home' && (
                <>
                  <BreadcrumbSeparator className="text-gray-600" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-300">{currentPage}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  )
}