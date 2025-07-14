import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { Camera, Download, ExternalLink, Image as ImageIcon, Brain, BarChart3, CheckCircle, ArrowUp, ArrowDown, TrendingUp, Zap, Target } from "lucide-react"

export default function ResearchPage() {
  const equipmentList = [
    {
      id: 1,
      title: "FLIR GF77 OGI Camera",
      description: "Optical gas imaging camera for methane detection",
      specifications: "320×240 resolution, spectral range 8.0-9.2 μm",
      category: "Imaging",
      purpose: "Makes invisible methane gas visible to cameras"
    },
    {
      id: 2,
      title: "Laser Methane Detector",
      description: "Quantitative methane concentration measurement",
      specifications: "1 ppm sensitivity, real-time readings",
      category: "Measurement", 
      purpose: "Measures exact amounts of methane in the air"
    },
    {
      id: 3,
      title: "Fermentation System",
      description: "In vitro rumen fermentation setup",
      specifications: "4 single-flow continuous fermenters",
      category: "Laboratory",
      purpose: "Simulates cow stomach to test different diets"
    },
    {
      id: 4,
      title: "Computing Hardware",
      description: "AI model training and inference systems",
      specifications: "GPU-accelerated processing",
      category: "Computing",
      purpose: "Runs AI models to analyze gas images automatically"
    }
  ]

  const researchImages = [
    {
      id: 1,
      title: "FLIR GF77 Camera",
      description: "Special camera that can see methane gas invisible to human eyes",
      category: "Equipment",
      type: "image"
    },
    {
      id: 2,
      title: "Methane Plume Detection",
      description: "Example of how our AI spots methane emissions from cows",
      category: "AI Results",
      type: "image"
    },
    {
      id: 3,
      title: "Laboratory Setup",
      description: "Controlled experiments to test how diet affects methane production",
      category: "Research",
      type: "image"
    },
    {
      id: 4,
      title: "Data Analysis",
      description: "Our AI learning to recognize methane patterns",
      category: "Technology",
      type: "image"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              How Our Technology Works
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI That Sees Invisible Greenhouse Gases
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've created artificial intelligence that can automatically detect and measure methane emissions 
              from livestock – helping farmers reduce their environmental impact while improving efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Simple 3-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Technology Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Think of it like giving farmers "super vision" to see harmful emissions they couldn't detect before, 
              then using AI to automatically measure and analyze them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-blue-700" />
                </div>
                <CardTitle>1. See the Invisible</CardTitle>
                <CardDescription>
                  Special thermal cameras detect methane gas that's completely invisible to human eyes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Our FLIR cameras work like night-vision goggles, but instead of seeing heat, 
                  they see methane gas by detecting how it absorbs specific types of light.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle>2. AI Recognition</CardTitle>
                <CardDescription>
                  Our "Gasformer" AI instantly analyzes images to find and outline methane plumes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Like how your phone can automatically recognize faces in photos, our AI recognizes 
                  methane gas patterns with 88.56% accuracy – better than any previous method.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-purple-700" />
                </div>
                <CardTitle>3. Instant Insights</CardTitle>
                <CardDescription>
                  Get real-time measurements and recommendations for reducing emissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  The system tells farmers exactly how much methane their animals are producing 
                  and suggests feed changes that could reduce it by up to 98%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Results - Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We've Achieved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research has produced breakthrough results that make methane monitoring practical 
              for real farms and provide clear solutions for reducing emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-l-4 border-green-500">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-green-700 mx-auto mb-2" />
                <CardDescription className="text-xs uppercase tracking-wide">AI Accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-700 mb-1">88.56%</div>
                <div className="text-sm text-gray-600">Detection Accuracy</div>
                <div className="flex items-center justify-center mt-2">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs text-green-600">Best performance ever</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-blue-500">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <CardDescription className="text-xs uppercase tracking-wide">Processing Speed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-700 mb-1">115</div>
                <div className="text-sm text-gray-600">Images per Second</div>
                <div className="flex items-center justify-center mt-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs text-green-600">Real-time ready</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-purple-500">
              <CardHeader className="pb-3">
                <BarChart3 className="h-8 w-8 text-purple-700 mx-auto mb-2" />
                <CardDescription className="text-xs uppercase tracking-wide">Training Data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-700 mb-1">15K+</div>
                <div className="text-sm text-gray-600">Labeled Images</div>
                <div className="flex items-center justify-center mt-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs text-green-600">Largest public dataset</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-red-500">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-red-700 mx-auto mb-2" />
                <CardDescription className="text-xs uppercase tracking-wide">Emission Reduction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-700 mb-1">98%</div>
                <div className="text-sm text-gray-600">With Feed Additive</div>
                <div className="flex items-center justify-center mt-2">
                  <ArrowDown className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs text-green-600">Seaweed supplement</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Diet Impact Results */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">How Diet Affects Methane Emissions</CardTitle>
              <CardDescription className="text-center">
                We tested different cow diets to see which ones produce less harmful emissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="text-2xl font-bold text-red-700 mb-2">482 ppm</div>
                  <div className="text-sm font-medium text-gray-800">High Grass Diet</div>
                  <div className="text-xs text-gray-600">(80% forage, 20% grain)</div>
                  <div className="text-xs text-red-600 mt-1">❌ Highest emissions</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="text-2xl font-bold text-yellow-700 mb-2">294 ppm</div>
                  <div className="text-sm font-medium text-gray-800">Low Grass Diet</div>
                  <div className="text-xs text-gray-600">(20% forage, 80% grain)</div>
                  <div className="text-xs text-yellow-600 mt-1">⚠️ Moderate emissions</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="text-2xl font-bold text-green-700 mb-2">167 ppm</div>
                  <div className="text-sm font-medium text-gray-800">Balanced Diet</div>
                  <div className="text-xs text-gray-600">(50% forage, 50% grain)</div>
                  <div className="text-xs text-green-600 mt-1">✅ Good balance</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="text-2xl font-bold text-blue-700 mb-2">6.5 ppm</div>
                  <div className="text-sm font-medium text-gray-800">Seaweed Added</div>
                  <div className="text-xs text-gray-600">(Balanced + bromoform)</div>
                  <div className="text-xs text-blue-600 mt-1">🌟 98% reduction!</div>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Key Discovery:</h4>
                <p className="text-sm text-blue-700">
                  Adding a small amount of seaweed extract (bromoform) to cow feed almost completely eliminated 
                  methane production, offering farmers a practical solution to dramatically reduce their environmental impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Details</h2>
              <p className="text-xl text-gray-600">
                For those interested in the science behind our breakthrough technology
              </p>
            </div>

            <Tabs defaultValue="equipment" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="equipment">Equipment & Setup</TabsTrigger>
                <TabsTrigger value="ai">AI Technology</TabsTrigger>
                <TabsTrigger value="validation">Scientific Validation</TabsTrigger>
              </TabsList>

              <TabsContent value="equipment" className="mt-8">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {equipmentList.map((equipment) => (
                      <Card key={equipment.id}>
                        <CardHeader className="p-0">
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-t-lg flex items-center justify-center">
                            <div className="text-center">
                              <Camera className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                              <div className="text-sm text-gray-600">{equipment.category}</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-sm">{equipment.title}</h3>
                            <Badge variant="outline" className="text-xs">{equipment.category}</Badge>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{equipment.description}</p>
                          <p className="text-xs text-blue-600 mb-2 font-medium">{equipment.purpose}</p>
                          <p className="text-xs text-gray-500">{equipment.specifications}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How Optical Gas Imaging Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Optical Gas Imaging (OGI) is like thermal night-vision, but instead of seeing heat differences, 
                        it sees gas molecules that absorb specific wavelengths of infrared light.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Simple Explanation:</h4>
                        <ol className="list-decimal list-inside text-sm text-blue-700 space-y-1">
                          <li>Methane gas absorbs infrared light at specific wavelengths (around 7.7 micrometers)</li>
                          <li>Our FLIR camera is tuned to see exactly those wavelengths</li>
                          <li>When methane is present, it shows up as dark areas against the background</li>
                          <li>Our AI then automatically identifies and measures these dark areas</li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="mt-8">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Brain className="h-5 w-5 text-green-700 mr-2" />
                        Our "Gasformer" AI Model
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        We developed a custom AI model called "Gasformer" specifically designed to recognize 
                        methane gas patterns in thermal images. Think of it as training a computer to become 
                        an expert at spotting gas that even humans can't see.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold">What Makes It Special:</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• <strong>Transformer Architecture:</strong> Uses advanced "attention" mechanisms like ChatGPT</li>
                            <li>• <strong>Multi-scale Analysis:</strong> Looks at images at different zoom levels simultaneously</li>
                            <li>• <strong>Real-time Processing:</strong> Can analyze 115 images per second</li>
                            <li>• <strong>Low-contrast Detection:</strong> Finds methane even when barely visible</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Performance Comparison:</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                              <span className="text-sm font-medium">Gasformer (Ours)</span>
                              <span className="text-lg font-bold text-green-700">88.56%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-sm">SegNeXt</span>
                              <span className="text-lg font-bold text-gray-700">85.42%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-sm">DeepLabv3+</span>
                              <span className="text-lg font-bold text-gray-700">82.31%</span>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-sm">Standard Methods</span>
                              <span className="text-lg font-bold text-gray-700">79.84%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Training Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Like teaching a child to recognize objects, we trained our AI by showing it thousands 
                        of images where we manually outlined where the methane gas appeared.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-700">14,462</div>
                          <div className="text-sm text-gray-600">Total Training Images</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-700">3</div>
                          <div className="text-sm text-gray-600">Different Datasets</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-700">160K</div>
                          <div className="text-sm text-gray-600">Training Iterations</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="validation" className="mt-8">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Scientific Validation</CardTitle>
                      <CardDescription>How we proved our technology actually works</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold">Laboratory Validation</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• <strong>Gas Chromatography:</strong> Gold standard lab equipment confirmed our measurements</li>
                            <li>• <strong>Controlled Experiments:</strong> Precise methane release at known concentrations</li>
                            <li>• <strong>Rumen Simulation:</strong> Lab systems that mimic cow stomachs exactly</li>
                            <li>• <strong>Multiple Diets:</strong> Tested 4 different feeding strategies</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Real-World Testing</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>• <strong>Live Animals:</strong> Tested on actual dairy cows</li>
                            <li>• <strong>Farm Conditions:</strong> Various environmental conditions</li>
                            <li>• <strong>Multiple Cameras:</strong> FLIR GF77 and Gx320 systems</li>
                            <li>• <strong>Cross-Validation:</strong> Multiple measurement methods compared</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-4">Correlation with Standard Methods</h4>
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-green-700">R² = 0.94</div>
                          <div className="text-sm text-gray-600">Correlation with Gas Chromatography</div>
                        </div>
                        <p className="text-sm text-green-700 text-center">
                          Our optical imaging results matched laboratory gas analysis 94% of the time – 
                          proving our method is scientifically accurate and reliable.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Research Publications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold">IEEE CVPR 2024 Workshop</h4>
                          <p className="text-sm text-gray-600">
                            "Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Peer-reviewed and presented at the world's leading computer vision conference
                          </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold">IET Image Processing 2025</h4>
                          <p className="text-sm text-gray-600">
                            "Optical gas imaging and deep learning for quantifying enteric methane emissions"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Published in prestigious engineering journal with rigorous peer review
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Technology in Action</h2>
              <p className="text-xl text-gray-600">
                Visual examples of how our AI detects invisible methane emissions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                          <div className="text-center">
                            <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-500">{image.category}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-sm">{image.title}</h3>
                          <Badge variant="outline" className="text-xs">{image.category}</Badge>
                        </div>
                        <p className="text-xs text-gray-600">{image.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{image.title}</DialogTitle>
                      <DialogDescription>{image.description}</DialogDescription>
                    </DialogHeader>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">High-resolution research image would be displayed here</p>
                        <div className="flex gap-2 justify-center mt-4">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Full Size
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our technology helps different people tackle climate change and improve farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">For Farmers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Save Money:</strong> Reduce wasted feed energy (up to 15% loss from methane)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Improve Efficiency:</strong> Get instant feedback on feed choices</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Environmental Certification:</strong> Prove your farm is climate-friendly</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Future-Proof:</strong> Stay ahead of environmental regulations</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">For Researchers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Precise Measurements:</strong> Accurate data for scientific studies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Large-Scale Studies:</strong> Monitor many animals simultaneously</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Diet Testing:</strong> Quickly validate emission reduction strategies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Open Data:</strong> Access our datasets and code for free</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">For Policymakers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Evidence-Based Policy:</strong> Make decisions backed by real data</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Monitor Compliance:</strong> Verify farm emission reduction claims</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Carbon Credits:</strong> Enable accurate carbon trading systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600"><strong>Climate Goals:</strong> Track progress toward emission targets</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to Learn More or Get Involved?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explore our published research, access our data and code, or reach out to discuss 
            how this technology could work for your farm, research, or organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/resources">
                📚 Get All Research Materials
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/project">
                👥 Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 