"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We&apos;ll get back to you soon!",
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage="Contact Us" />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-blue-400">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 shadow-md border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4 text-gray-300">
                We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Address</h3>
                <p className="text-gray-300">
                    Jeddah - Madina - Road,<br />
                    Howaish Center, 2nd Floor,<br />
                    Off. No.21
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Phone</h3>
                <p className="text-gray-300">6685633 / 6685636</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Fax</h3>
                <p className="text-gray-300">6685632</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
                <p className="text-gray-300">info@datcosa.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 shadow-md border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-gray-700 text-gray-100 border-gray-600"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2023 Diamond Asia Trading and Contracting Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}