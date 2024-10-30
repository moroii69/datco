import Image from 'next/image'
import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "EMT Conduit & Fittings",
    images: [
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png"
    ],
    description: "High-quality Electrical Metallic Tubing (EMT) conduits and fittings for various electrical applications.",
  },
  {
    name: "Rigid Conduit & Fittings",
    images: [
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png"
    ],
    description: "Durable rigid conduits and fittings designed for heavy-duty electrical installations.",
  },
  {
    name: "Conduit Boxes & Covers",
    images: [
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png"
    ],
    description: "A wide range of conduit boxes and covers for various electrical wiring applications.",
  },
  {
    name: "Cable Trays & Accessories",
    images: [
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png",
      "https://placehold.co/150x150.png"
    ],
    description: "Versatile cable trays and accessories for efficient cable management in various settings.",
  },
]

export default function SupplyManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header currentPage="Supply Management" />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center text-blue-400">Electro-Material Supply Management</h1>
        
        <section className="mb-16">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-300">
              DATCO is your reliable partner for all your electro-material supply needs across the Middle East and Asia. We offer a comprehensive range of high-quality products to support your projects, ensuring timely delivery and competitive pricing. Our extensive inventory and strong supplier relationships allow us to meet diverse project requirements efficiently, from small-scale installations to large industrial complexes.
            </p>
          </div>
        </section>

        <section id="products" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Electro-Mechanical Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.images.map((img, imgIndex) => (
                      <Image key={imgIndex} src={img} alt={`${product.name} ${imgIndex + 1}`} width={150} height={150} className="w-full h-auto rounded-md" />
                    ))}
                  </div>
                  <p className="text-gray-300">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="brochure" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Brochure Download</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4 text-gray-300">Download our comprehensive product catalog to explore our full range of electro-mechanical products and materials. Our catalog includes detailed specifications, applications, and ordering information for all our products.</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://picsum.photos/datco/DATCO_Product_Catalog_2023.pdf" download>Download Brochure (PDF)</a>
            </Button>
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