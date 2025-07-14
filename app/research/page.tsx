import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Beaker, BarChart3, Database } from "lucide-react"

export default function ResearchPage() {
  const equipmentList = [
    {
      id: 1,
      title: "FLIR GF77 Optical Gas Imaging Camera",
      description: "Special camera that can detect methane gas invisible to human eyes",
      specifications: "320×240 resolution, 7-8.5 μm spectral range, 100 ppm-m sensitivity",
      purpose: "Captures images showing methane plumes as visible shapes"
    },
    {
      id: 2,
      title: "Laser Methane Detector (LMD)",
      description: "Device that measures exact methane concentrations",
      specifications: "5 ppm sensitivity, 0-50,000 ppm range, <0.1s response time",
      purpose: "Validates our AI measurements with precise readings"
    },
    {
      id: 3,
      title: "Fermentation System",
      description: "Laboratory setup that simulates cow stomach conditions",
      specifications: "4 single-flow continuous fermenters, 39°C temperature",
      purpose: "Creates controlled conditions to test different cow diets"
    },
    {
      id: 4,
      title: "Gas Chromatography (GC)",
      description: "Laboratory instrument that analyzes gas composition",
      specifications: "SRI 8610C with thermal conductivity detector",
      purpose: "Measures exact amounts of methane, CO2, and H2 in samples"
    }
  ]

  const datasets = [
    {
      id: 1,
      title: "Controlled Methane Release (MR) Dataset",
      description: "Images of methane released at known flow rates",
      size: "9,237 labeled images",
      purpose: "Train AI to recognize different amounts of methane",
      details: "10-100 SCCM flow rates, controlled laboratory conditions"
    },
    {
      id: 2,
      title: "Dairy Cow Rumen Gas (CR) Dataset", 
      description: "Images of actual methane from cow stomach contents",
      size: "340 labeled images",
      purpose: "Test if AI works on real cow emissions",
      details: "24-hour batch culture from Holstein dairy cow rumen"
    },
    {
      id: 3,
      title: "Controlled Diet (CD) Dataset",
      description: "Images showing how different diets affect methane",
      size: "4,885 labeled images",
      purpose: "Study relationship between cow diet and emissions",
      details: "4 different diets including seaweed supplement"
    }
  ]

  const methodologySteps = [
    {
      title: "Sample Collection",
      description: "We collected rumen liquid (cow stomach contents) from a dairy farm and used it in laboratory fermentation systems that mimic cow digestion.",
      details: "Holstein dairy cow rumen → 700 mL fermentation vessels → 39°C controlled temperature"
    },
    {
      title: "Diet Testing",
      description: "We tested 4 different diets to see how each affects methane production: control (50/50 grass/grain), low forage (20/80), high forage (80/20), and seaweed supplement.",
      details: "24-hour batch culture → Gas collection in TEDLAR bags → Multiple measurement methods"
    },
    {
      title: "Image Capture",
      description: "We used special cameras to photograph methane gas (invisible to our eyes) against an ice background to create contrast.",
      details: "FLIR GF77 camera → 12 inches distance → 640×480 resolution → Multiple color modes"
    },
    {
      title: "AI Training",
      description: "We trained an AI system called 'Gasformer' to automatically detect and measure methane in thousands of images.",
      details: "Transformer architecture → 160,000 training iterations → 88.56% accuracy achieved"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
              Research Methodology
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Studied Methane Emissions from Cows
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A detailed look at our research methods, equipment, and findings. 
              We used laboratory experiments, special cameras, and artificial intelligence 
              to study how cow diet affects methane emissions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Overview</h2>
              <p className="text-lg text-gray-600">
                What we wanted to learn and what we discovered
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Beaker className="h-5 w-5 text-blue-600 mr-2" />
                    Research Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">1. Can AI detect methane gas?</h4>
                    <p className="text-sm text-gray-600">We wanted to see if artificial intelligence could automatically detect methane gas in camera images as accurately as human experts.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">2. How does diet affect emissions?</h4>
                    <p className="text-sm text-gray-600">We tested different cow diets to measure exactly how much methane each one produces.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">3. Can this work in practice?</h4>
                    <p className="text-sm text-gray-600">We evaluated whether our methods could be used by farmers and researchers in real-world conditions.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-green-600 mr-2" />
                    Research Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-1">Multi-disciplinary Method</h4>
                    <p className="text-sm text-green-700">Combined computer science, animal nutrition, and agricultural engineering expertise</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">Controlled Laboratory Study</h4>
                    <p className="text-sm text-blue-700">Used standardized fermentation systems to ensure reproducible results</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-1">Validated with Multiple Methods</h4>
                    <p className="text-sm text-purple-700">Cross-validated AI results with gas chromatography and laser detection</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Equipment</h2>
              <p className="text-lg text-gray-600">
                The specialized tools we used to detect and measure methane emissions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentList.map((equipment) => (
                <Card key={equipment.id} className="border-l-4 border-blue-400">
                  <CardHeader>
                    <CardTitle className="text-lg">{equipment.title}</CardTitle>
                    <CardDescription>{equipment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">How We Used It:</h4>
                      <p className="text-sm text-gray-600">{equipment.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Technical Details:</h4>
                      <p className="text-sm text-gray-500 font-mono">{equipment.specifications}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step Methodology</h2>
              <p className="text-lg text-gray-600">
                Detailed breakdown of our research process
              </p>
            </div>

            <div className="space-y-8">
              {methodologySteps.map((step, index) => (
                <Card key={index} className="border-l-4 border-green-400">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-700 font-bold">{index + 1}</span>
                      </div>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 font-mono">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Datasets</h2>
              <p className="text-lg text-gray-600">
                We created three datasets with over 14,000 labeled images to train and test our AI system.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {datasets.map((dataset) => (
                <Card key={dataset.id} className="text-center">
                  <CardHeader>
                    <Database className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{dataset.title}</CardTitle>
                    <CardDescription>{dataset.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-2xl font-bold text-purple-700">{dataset.size}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Purpose:</h4>
                      <p className="text-sm text-gray-600">{dataset.purpose}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs text-purple-700">{dataset.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Research Findings</h2>
              <p className="text-lg text-gray-600">
                Complete results from our AI model performance and dietary impact studies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Performance Comparison</CardTitle>
                  <CardDescription>Gasformer vs. Other Computer Vision Models</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Model</th>
                          <th className="p-2 text-left">mIoU (%)</th>
                          <th className="p-2 text-left">Parameters</th>
                          <th className="p-2 text-left">FPS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50">
                          <td className="p-2 font-medium">Gasformer</td>
                          <td className="p-2 font-bold text-green-600">88.56</td>
                          <td className="p-2">3.65M</td>
                          <td className="p-2">97.45</td>
                        </tr>
                        <tr>
                          <td className="p-2">Segformer B0</td>
                          <td className="p-2">88.41</td>
                          <td className="p-2">3.7M</td>
                          <td className="p-2">91.2</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">DeepLabv3+</td>
                          <td className="p-2">88.18</td>
                          <td className="p-2">41M</td>
                          <td className="p-2">28.3</td>
                        </tr>
                        <tr>
                          <td className="p-2">SegNeXt-T</td>
                          <td className="p-2">88.00</td>
                          <td className="p-2">4.2M</td>
                          <td className="p-2">85.1</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">FCN</td>
                          <td className="p-2">86.41</td>
                          <td className="p-2">134M</td>
                          <td className="p-2">12.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Gasformer achieved the highest accuracy while maintaining fast processing speed and compact model size.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diet Impact on Methane Emissions</CardTitle>
                  <CardDescription>Laboratory Results from Different Feed Compositions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Diet Treatment</th>
                          <th className="p-2 text-left">CH₄ (ppm)</th>
                          <th className="p-2 text-left">Total Gas (mL)</th>
                          <th className="p-2 text-left">pH</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-red-50">
                          <td className="p-2">High Forage (80%)</td>
                          <td className="p-2 font-bold text-red-600">482.45</td>
                          <td className="p-2">374.10</td>
                          <td className="p-2">6.80</td>
                        </tr>
                        <tr>
                          <td className="p-2">Low Forage (20%)</td>
                          <td className="p-2 font-bold text-yellow-600">293.72</td>
                          <td className="p-2">384.17</td>
                          <td className="p-2">6.31</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">Control (50/50)</td>
                          <td className="p-2 font-bold text-green-600">167.22</td>
                          <td className="p-2">382.82</td>
                          <td className="p-2">6.64</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="p-2">+ Seaweed (Bromoform)</td>
                          <td className="p-2 font-bold text-blue-600">1.41</td>
                          <td className="p-2">327.98</td>
                          <td className="p-2">6.57</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 text-center">
                      <strong>Key Finding:</strong> Seaweed supplement reduced methane by 99.2% (482.45 → 1.41 ppm)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Access Research */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Access Our Complete Research
            </h2>
            <p className="text-xl mb-8 opacity-90">
              All research papers, datasets, and source code are available for download. 
              Use our work to advance climate research and agricultural sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/resources">
                  📊 Download Data & Code
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
                <Link href="/team">
                  👥 Contact Research Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 