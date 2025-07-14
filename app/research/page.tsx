import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Beaker, BarChart3, Database } from "lucide-react"
import { ModelPerformanceChart } from "@/components/ResearchCharts"

export default function ResearchPage() {
  const equipmentList = [
    {
      id: 1,
      title: "FLIR GF77 Optical Gas Imaging Camera",
      description: "Uncooled LWIR camera that visualizes methane plumes invisible to the naked eye",
      specifications: "320×240 resolution, 7-8.5 μm spectral range, 100 ppm-m NECL sensitivity, <25 mK thermal sensitivity",
      purpose: "Captures infrared images of methane plumes for AI analysis and segmentation",
      image: "/equipment/flir-gf77.png"
    },
    {
      id: 2,
      title: "Laser Methane Detector (LMD)",
      description: "TopCruz® LZ-30 detector using Tunable Diode Laser Absorption Spectroscopy",
      specifications: "5 ppm sensitivity at 15m, 0-50,000 ppm range, <0.1s response time, 20cm beam diameter at 30m",
      purpose: "Provides precise methane concentration measurements for validating AI model results",
      image: "/equipment/laser-methane-detector.jpeg"
    },
    {
      id: 3,
      title: "ANKOM Gas Production System",
      description: "Automated batch culture system for measuring total gas and methane production",
      specifications: "24-hour incubation, 39°C water bath, anaerobic conditions with CO₂ flushing",
      purpose: "Simulates rumen fermentation conditions and collects gas samples for analysis",
      image: "/equipment/ankom-module.jpeg"
    },
    {
      id: 4,
      title: "Precision Gas Flow Controller",
      description: "Cole-Parmer Digital Pressure Controller for controlled methane release experiments",
      specifications: "0-15 psi pressure range, 1/8\" NPT(F) fitting, 10-100 SCCM flow control",
      purpose: "Creates controlled methane releases at specific flow rates for dataset generation",
      image: "/equipment/control-flow-meter.jpeg"
    },
    {
      id: 5,
      title: "Experimental Camera Setup",
      description: "Standardized imaging configuration for consistent methane plume capture",
      specifications: "12-inch camera distance, 2-inch gas-to-background distance, ice block background",
      purpose: "Ensures reproducible imaging conditions and optimal temperature contrast for detection",
      image: "/equipment/camera-setup.jpeg"
    },
         {
       id: 6,
       title: "FLIR Gx320 OGI Camera (In Vivo)",
       description: "Cooled mid-wave infrared camera for detecting methane emissions from live cattle",
       specifications: "640×480 resolution, 30 fps, cooled InSb detector, superior sensitivity for field conditions",
       purpose: "Captures methane emissions directly from live cattle in farm environments for real-world validation",
       image: "/equipment/cow-hero-2.jpeg"
     },
     {
       id: 7,
       title: "Gas Chromatography System",
       description: "SRI 8610C gas chromatograph with thermal conductivity detector for gas analysis",
       specifications: "Shin Carbon detector, Hayesep D column, 50°C operation, argon carrier gas",
       purpose: "Provides ground truth measurements of CH₄, CO₂, and H₂ concentrations for validation",
       image: "/equipment/ankom-module.jpeg"
     }
  ]

  const datasets = [
    {
      id: 1,
      title: "Controlled Diet (CD) Dataset",
      description: "Methane plume images categorized by GC-validated concentration ranges from different dietary treatments",
      size: "4,885 labeled images",
      purpose: "Quantify methane emissions across dietary interventions using AI segmentation",
      details: "Class-1 (166-171 ppm), Class-2 (300-334 ppm), Class-3 (457-510 ppm) from control, low forage, and high forage diets"
    },
    {
      id: 2,
      title: "Controlled Methane Release (MR) Dataset",
      description: "Calibrated methane release images at precise flow rates using gas cylinder and flow controller",
      size: "9,237 labeled images",
      purpose: "Train AI models to detect and quantify methane at known concentrations",
      details: "10-100 SCCM flow rates, FLIR GF77 camera, ice background for temperature contrast"
    },
         {
       id: 3,
       title: "Dairy Cow Rumen Gas (CR) Dataset", 
       description: "Real-world methane emission images from Holstein dairy cow rumen fermentation samples",
       size: "340 labeled images",
       purpose: "Validate AI performance on actual livestock methane emissions",
       details: "24-hour ANKOM batch culture, TEDLAR gas collection, challenging low-contrast conditions"
     },
     {
       id: 4,
       title: "Beef Cattle Methane Emission Dataset (In Vivo)",
       description: "Live cattle methane emission detection from actual farm conditions using FLIR Gx320 camera",
       size: "208,149 total frames with 11,694 annotated methane plumes",
       purpose: "Real-world validation of AI models on live cattle with dietary classification",
       details: "30 fps capture, 5.6% plume occurrence rate, three dietary treatments, intermittent eructation events"
     }
  ]

  const methodologySteps = [
    {
      title: "Continuous Culture Fermentation",
      description: "We used four single-flow continuous fermenters to simulate cow rumen conditions, each containing 700 mL of rumen liquor from fistulated dairy cattle fed different diets for 10 days.",
      details: "700 mL rumen liquor → 39°C temperature → 45 RPM stirring → 70 mL/h artificial saliva buffer → CO₂ flushing for anaerobic conditions"
    },
    {
      title: "Controlled Diet Testing",
      description: "Four different treatments were tested: Control (50:50 forage:concentrate), Low Forage (20:80), High Forage (80:20), and Bromoform supplement (seaweed extract at 0.14 g/L/day).",
      details: "10-day incubation → 54g diet fed 3x daily → pH monitoring → Transfer to 24-hour ANKOM batch culture"
    },
    {
      title: "Gas Collection and Analysis",
      description: "Methane gas was collected in TEDLAR gas bags and analyzed using gas chromatography, laser methane detection, and optical gas imaging with standardized protocols.",
      details: "ANKOM batch culture → TEDLAR gas collection → GC analysis (SRI 8610C) → LMD measurements → OGI capture"
    },
    {
      title: "Optical Gas Imaging Setup",
      description: "We developed a novel imaging configuration using FLIR GF77 camera with ice background to create sufficient temperature contrast for methane visualization at low concentrations.",
      details: "12-inch camera distance → 2-inch gas-to-background distance → Ice block background → 640×480 resolution → Multiple color modes"
    },
          {
        title: "AI Model Development and Training",
        description: "We developed two specialized AI architectures: Gasformer for in vitro laboratory analysis and GasTwinFormer for in vivo live cattle detection with dietary classification capabilities.",
        details: "Gasformer (in vitro): 85.1% mIoU, 91.72% mF1 → GasTwinFormer (in vivo): 74.47% mIoU, 83.63% mF1, 100% dietary classification accuracy"
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

      {/* Visual Research Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Methane from Dairy Cattle</h2>
              <p className="text-lg text-gray-600">
                Holstein dairy cows produce methane through enteric fermentation in their rumen. 
                Our research focuses on developing non-invasive methods to detect and quantify these emissions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/equipment/cow-hero.jpeg" 
                  alt="Holstein dairy cow in research setting"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">Holstein dairy cows are the primary focus of our methane emission research</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/equipment/cow-hero-2.jpeg" 
                  alt="Live beef cattle during in vivo methane emission detection experiment"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">In vivo methane detection from live cattle using FLIR Gx320 OGI camera</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Research Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <div className="text-blue-700 font-bold text-lg">6%</div>
                  <p className="text-gray-600">of global greenhouse gas emissions come from ruminant livestock</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-blue-700 font-bold text-lg">6-12%</div>
                  <p className="text-gray-600">of dietary energy is lost as methane that could be used for milk/meat production</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-blue-700 font-bold text-lg">36x</div>
                  <p className="text-gray-600">more potent warming effect than CO₂ over 100-year period</p>
                </div>
              </div>
            </div>
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
                    <h4 className="font-medium text-blue-800 mb-1">Dual In Vitro & In Vivo Approach</h4>
                    <p className="text-sm text-blue-700">Combined controlled laboratory studies with real-world live cattle experiments</p>
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
                <Card key={equipment.id} className="border-l-4 border-blue-400 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={equipment.image} 
                      alt={equipment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                We created four comprehensive datasets with over 26,000 labeled images from both laboratory and live cattle studies to train and test our AI systems.
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

            {/* Interactive Results Visualization */}
            <div className="space-y-8 mt-12">
              <ModelPerformanceChart />
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