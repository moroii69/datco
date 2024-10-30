import Image from 'next/image'
import { Header } from '@/components/header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ahmed Al-Sayed",
    position: "CEO",
    image: "https://placehold.co/600x400.png",
    bio: "With over 30 years of experience in the industry, Ahmed leads DATCO with a vision for innovation and excellence.",
  },
  {
    name: "Sarah Chen",
    position: "COO",
    image: "https://placehold.co/600x400.png",
    bio: "Sarah oversees DATCO&apos;s operations, ensuring efficiency and quality in all our projects and supply chain management.",
  },
  {
    name: "Mohammed Rahman",
    position: "Head of Contracting",
    image: "https://placehold.co/600x400.png",
    bio: "Mohammed brings 20 years of experience in electro-mechanical contracting, leading our team to deliver exceptional results.",
  },
  {
    name: "Lisa Wong",
    position: "Head of Supply Management",
    image: "https://placehold.co/600x400.png",
    bio: "Lisa&apos;s expertise in supply chain management ensures DATCO provides top-quality products to our clients efficiently.",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage="About Us" />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-blue-400">About DATCO</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Story</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-300">
              Founded in 1995, Diamond Asia Trading and Contracting Company (DATCO) has grown from a small local business to a leading provider of electro-mechanical contracting and supply management services across the Middle East and Asia. With a commitment to quality, innovation, and customer satisfaction, we have successfully completed hundreds of projects and built strong relationships with clients  and suppliers alike.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              Our journey has been marked by continuous growth, adaptation to new technologies, and a relentless focus on delivering excellence in every project we undertake. Today, DATCO stands as a testament to the power of vision, hard work, and dedication to our craft.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-300">
              At DATCO, our mission is to provide innovative, high-quality electro-mechanical solutions and products that exceed our clients&apos; expectations. We strive to:
            </p>
            <ul className="list-disc list-inside text-lg mb-4 text-gray-300 space-y-2">
              <li>Deliver exceptional value through our contracting services and supply management</li>
              <li>Maintain the highest standards of quality and safety in all our operations</li>
              <li>Foster long-term relationships with our clients, partners, and employees</li>
              <li>Contribute to the sustainable development of the communities we serve</li>
              <li>Stay at the forefront of technological advancements in our industry</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
                <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="text-blue-400">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-300 mb-2">{member.position}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Values</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-lg mb-4 text-gray-300 space-y-2">
              <li>Integrity: We conduct our business with the highest ethical standards</li>
              <li>Excellence: We strive for excellence in everything we do</li>
              <li>Innovation: We embrace new technologies and innovative solutions</li>
              <li>Teamwork: We believe in the power of collaboration and mutual respect</li>
              <li>Sustainability: We are committed to environmentally responsible practices</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2023 Diamond Asia Trading and Contracting Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}