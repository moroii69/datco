import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage="Home" />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12 mt-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-blue-400">
            Welcome to DATCO
          </h1>
          <p className="mt-3 text-xl sm:text-2xl text-gray-300">
            Diamond Asia Trading and Contracting Company
          </p>
          <p className="mt-3 text-lg sm:text-xl max-w-3xl mx-auto text-gray-400">
            Your trusted partner for Electro-Mechanical Contracting and Electro-Material Supply Management. With over 20 years of experience and a commitment to excellence, we deliver top-quality solutions for all your project needs across the Middle East and Asia.
          </p>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 mt-12">
          <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Contracting</CardTitle>
              <CardDescription className="text-gray-400">Electro-Mechanical Contracting Services</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="https://placehold.co/300x200.png" alt="Contracting Services" width={300} height={200} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="mb-4 text-gray-300">Our expert team handles a wide range of electro-mechanical contracting projects, from sewage treatment to fire management systems, ensuring top-notch quality and timely delivery.</p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contracting">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Supply Management</CardTitle>
              <CardDescription className="text-gray-400">Electro-Material Supply Management</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="https://placehold.co/300x200.png" alt="Supply Management Services" width={300} height={200} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="mb-4 text-gray-300">We provide high-quality electro-mechanical products and materials to meet all your project requirements efficiently, with a vast inventory and strong supplier relationships.</p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/supply-management">Explore Products</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Why Choose DATCO?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">With over two decades in the industry, we bring unparalleled expertise to every project.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We maintain the highest standards in both our contracting services and supply management.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We stay at the forefront of industry advancements to provide cutting-edge solutions.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Diamond Asia Trading and Contracting Company. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}