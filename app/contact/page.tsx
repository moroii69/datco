"use client"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }
  useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)

    setShowSuccessModal(true)
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
                We're here to help and answer any question you might have. We look forward to hearing from you.
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

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
  <DialogContent className="bg-gray-800 text-gray-100 border-gray-700">
    <div className="flex flex-col items-center justify-center p-6">
      <div className="checkmark-circle mb-6">
        <div className="background"></div>
        <div className="checkmark draw"></div>
      </div>
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Thank You!</h2>
      <p className="text-gray-300 text-center mb-6">
        Your message has been successfully sent. We will get back to you within 2-3 business days.
      </p>
      <Button
        onClick={() => setShowSuccessModal(false)}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Close
      </Button>
    </div>
  </DialogContent>
</Dialog>

<style jsx>{`
  .checkmark-circle {
    width: 80px;
    height: 80px;
    position: relative;
    display: inline-block;
    vertical-align: top;
  }
  .checkmark-circle .background {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #1a365d;
    position: absolute;
    top: 0;
    left: 0;
  }
  .checkmark-circle .checkmark {
    width: 80px; /* Same width as the circle */
    height: 80px; /* Same height as the circle */
    position: absolute;
    top: 0; /* Align to the top */
    left: 0; /* Align to the left */
    display: flex; /* Use flexbox to center checkmark */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    padding: 8px; /* Add padding for spacing */
    box-sizing: border-box; /* Include padding in width/height */
  }
  .checkmark-circle .checkmark.draw:after {
    content: "";
    width: 32px;
    height: 60px;
    border: 6px solid #4299e1;
    border-top: 0;
    border-left: 0;
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%) rotate(45deg); /* Rotate clockwise by 45 degrees */
    animation: checkmark 0.6s ease-out; /* Add animation */
  }
  @keyframes checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 32px;
      opacity: 1;
    }
    40% {
      height: 60px;
      width: 32px;
      opacity: 1;
    }
    100% {
      height: 60px;
      width: 32px;
      opacity: 1;
    }
  }
`}</style>

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