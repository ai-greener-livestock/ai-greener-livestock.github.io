import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Beaker, BarChart3, FileText, Database } from "lucide-react"

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
                    Key Findings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-1">AI Detection Works</h4>
                    <p className="text-sm text-green-700">Our AI achieved 88.56% accuracy - as good as human experts</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-1">Diet Makes Huge Difference</h4>
                    <p className="text-sm text-yellow-700">High-grass diets produce 3x more methane than balanced diets</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">Seaweed Almost Eliminates Methane</h4>
                    <p className="text-sm text-blue-700">Adding seaweed supplement reduced emissions by 98%</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Equipment</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Did It</h2>
              <p className="text-lg text-gray-600">
                Step-by-step breakdown of our research process
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Research Datasets</h2>
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

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Results Summary</h2>
              <p className="text-lg text-gray-600">
                Here&apos;s what our experiments revealed about methane detection and dietary impacts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">AI Performance Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Detection Accuracy:</span>
                      <span className="font-bold text-green-600">88.56%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Images Processed:</span>
                      <span className="font-bold text-blue-600">14,462</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Speed:</span>
                      <span className="font-bold text-purple-600">97.45 FPS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Model Size:</span>
                      <span className="font-bold text-orange-600">3.65M parameters</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Diet Impact Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">High Forage (80%):</span>
                      <span className="font-bold text-red-600">482 ppm CH₄</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Low Forage (20%):</span>
                      <span className="font-bold text-yellow-600">294 ppm CH₄</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Balanced (50/50):</span>
                      <span className="font-bold text-green-600">167 ppm CH₄</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">+ Seaweed:</span>
                      <span className="font-bold text-blue-600">1.4 ppm CH₄</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700 text-center">
                        <strong>98% reduction</strong> with seaweed supplement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-green-800">What This Means</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">For Farmers:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Simple diet changes can dramatically reduce emissions</li>
                      <li>• Balanced feeds produce less methane than high-grass diets</li>
                      <li>• Seaweed supplements offer huge reduction potential</li>
                      <li>• Technology exists to monitor emissions automatically</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">For Researchers:</h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• AI can reliably detect methane in optical gas images</li>
                      <li>• Our datasets and models are freely available</li>
                      <li>• Method works for both controlled and real conditions</li>
                      <li>• Opens possibilities for real-time farm monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Findings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Findings from Our Studies</h2>
              <p className="text-lg text-gray-600">
                Excerpts from our research papers highlighting key findings.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Performance</CardTitle>
                  <CardDescription>From Gasformer Paper (CVPR 2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Gasformer outperformed other models in segmenting methane plumes:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Model</th>
                          <th className="p-2 text-left">mIoU</th>
                          <th className="p-2 text-left">mFscore</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2">Gasformer</td>
                          <td className="p-2">88.56</td>
                          <td className="p-2">93.61</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">Segformer B0</td>
                          <td className="p-2">88.41</td>
                          <td className="p-2">93.52</td>
                        </tr>
                        <tr>
                          <td className="p-2">DeepLabv3+</td>
                          <td className="p-2">88.18</td>
                          <td className="p-2">93.37</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">SegNeXt-T</td>
                          <td className="p-2">88.00</td>
                          <td className="p-2">93.26</td>
                        </tr>
                        <tr>
                          <td className="p-2">FCN</td>
                          <td className="p-2">86.41</td>
                          <td className="p-2">92.24</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Diet Impact Results</CardTitle>
                  <CardDescription>From IET Paper (2025)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Effects of different diets on methane production:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Diet</th>
                          <th className="p-2 text-left">CH4 (ppm)</th>
                          <th className="p-2 text-left">Total Gas (mL)</th>
                          <th className="p-2 text-left">pH</th>
                          <th className="p-2 text-left">Ammonia (mg/dL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2">Control</td>
                          <td className="p-2">167.22</td>
                          <td className="p-2">382.82</td>
                          <td className="p-2">6.64</td>
                          <td className="p-2">9.78</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">+ Bromoform</td>
                          <td className="p-2">1.41</td>
                          <td className="p-2">327.98</td>
                          <td className="p-2">6.57</td>
                          <td className="p-2">4.22</td>
                        </tr>
                        <tr>
                          <td className="p-2">High Forage</td>
                          <td className="p-2">482.45</td>
                          <td className="p-2">374.10</td>
                          <td className="p-2">6.80</td>
                          <td className="p-2">32.83</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2">Low Forage</td>
                          <td className="p-2">293.72</td>
                          <td className="p-2">384.17</td>
                          <td className="p-2">6.31</td>
                          <td className="p-2">20.87</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Access Research */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto text-center border-2 border-blue-200">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Access Our Complete Research
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                All our research papers, datasets, AI models, and analysis code are freely available. 
                Use our work to advance your own research or develop practical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/resources">
                    <FileText className="h-5 w-5 mr-2" />
                    Publications & Datasets
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://github.com/toqitahamid/Gasformer" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Download Code & Models
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Open source • Free to use • Peer-reviewed • USDA funded
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 