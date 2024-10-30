import Image from 'next/image'
import { Header } from '@/components/header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mechanicalServices = [
  "Sewage & Water Treatment",
  "Process Piping",
  "Instrumentation",
  "QA/QC Programs",
  "Gas Line Installation",
  "Pumping Stations",
  "Fire & Smoke Management",
  "Production Lines Assembly",
]

const majorProjects = [
  {
    name: "Dubai Mall Expansion",
    image: "https://placehold.co/400x300.png",
    contractor: "Emaar Properties",
    value: "$50 million",
    period: "2018-2020",
    scope: "Complete electro-mechanical installation for the new wing of Dubai Mall, including HVAC, lighting, and fire safety systems.",
  },
  {
    name: "Abu Dhabi Airport Terminal",
    image: "https://placehold.co/400x300.png",
    contractor: "Abu Dhabi Airports Company",
    value: "$75 million",
    period: "2019-2022",
    scope: "Installation of advanced electro-mechanical systems for the new terminal, including baggage handling, security systems, and energy-efficient lighting.",
  },
  {
    name: "Riyadh Metro Station",
    image: "https://placehold.co/400x300.png",
    contractor: "Arriyadh Development Authority",
    value: "$30 million",
    period: "2020-2022",
    scope: "Electro-mechanical works for multiple metro stations, including ventilation, power distribution, and platform screen doors.",
  },
]

const certifications = [
  { name: "ISO 9001:2015", image: "https://placehold.co/100x100.png" },
  { name: "ISO 14001:2015", image: "https://placehold.co/100x100.png" },
  { name: "OHSAS 18001:2007", image: "https://placehold.co/100x100.png" },
  { name: "OSHAD-SF", image: "https://placehold.co/100x100.png" },
]

export default function Contracting() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage="Contracting" />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-blue-400">Electro-Mechanical Contracting</h1>
        
        <section className="mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-300">
              DATCO excels in providing comprehensive electro-mechanical contracting services across the Middle East and Asia. Our team of skilled professionals ensures the highest quality in every project, from design to implementation. With over two decades of experience, we have successfully completed projects in various sectors, including commercial, residential, and industrial.
            </p>
          </div>
        </section>

        <section id="mechanical" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Mechanical Contractors Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mechanicalServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Our expert team provides top-notch {service.toLowerCase()} solutions, ensuring efficiency and reliability in every project.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Major Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
                <Image src={project.image} alt={project.name} width={400} height={300} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300"><strong>General Contractor:</strong> {project.contractor}</p>
                  <p className="text-gray-300"><strong>Contract Value:</strong> {project.value}</p>
                  <p className="text-gray-300"><strong>Period:</strong> {project.period}</p>
                  <p className="text-gray-300"><strong>Scope of Work:</strong> {project.scope}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image src={cert.image} alt={cert.name} width={100} height={100} className="mx-auto mb-2" />
                <p className="text-gray-300 font-semibold">{cert.name}</p>
              </div>
            ))}
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