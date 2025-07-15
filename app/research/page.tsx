import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  BarChart3, 
  Database, 
  Brain, 
  Microscope, 
  Users, 
  Target,
  Award,
  BookOpen,
  Code,
  Download,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Globe,
  ArrowRight,
  FileText,
  Eye,
  Layers,
  Settings,
  Activity
} from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-6">
              Research Timeline
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Driven Methane Detection for Livestock Monitoring
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A comprehensive three-phase research program developing cutting-edge artificial intelligence techniques combined with optical gas imaging technology to detect, segment, and quantify methane emissions from livestock operations.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-700">32%</div>
                      <div className="text-sm text-red-600">of human-caused methane emissions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-700">70%</div>
                      <div className="text-sm text-red-600">increase in demand by 2050</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Livestock methane emissions represent a critical challenge in climate science, making automated monitoring systems essential for effective mitigation strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Brain className="h-6 w-6 mr-2" />
                    Our Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-700">3</div>
                      <div className="text-sm text-blue-600">research phases</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-700">AI + OGI</div>
                      <div className="text-sm text-blue-600">integrated solution</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Combining cutting-edge artificial intelligence with optical gas imaging technology for real-time methane detection and quantification.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <Target className="h-6 w-6 mr-2" />
                    Research Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-700">25K+</div>
                      <div className="text-sm text-green-600">annotated images</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-700">100%</div>
                      <div className="text-sm text-green-600">dietary classification accuracy</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Systematic progression from proof-of-concept to practical real-world applications with demonstrated farm deployment capability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Livestock methane emissions represent a critical challenge in climate science, accounting for <strong className="text-red-700">32% of human-caused methane production</strong> globally. As the world&apos;s population is projected to reach 9.7 billion by 2050, the demand for livestock products will increase by <strong className="text-blue-700">70%</strong>, making automated monitoring systems essential for developing effective climate mitigation strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive research program addresses this challenge through the development of cutting-edge artificial intelligence techniques combined with optical gas imaging technology to detect, segment, and quantify methane emissions from livestock operations. This three-phase research initiative demonstrates a systematic progression from fundamental proof-of-concept work to practical real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Phases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Phases</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                A systematic three-phase progression from fundamental algorithmic development to practical real-world deployment.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/research/technical-details">
                  <FileText className="mr-2 h-5 w-5" />
                  View Complete Technical Details
                </Link>
              </Button>
            </div>

            <Tabs defaultValue="phase1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="phase1" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Phase 1: Foundation
                </TabsTrigger>
                <TabsTrigger value="phase2" className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  Phase 2: Validation
                </TabsTrigger>
                <TabsTrigger value="phase3" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Phase 3: Application
                </TabsTrigger>
              </TabsList>

              {/* Phase 1 */}
              <TabsContent value="phase1" className="space-y-8">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-blue-800 mb-2">Phase 1: Foundation - Gasformer (2024)</CardTitle>
                        <CardDescription className="text-lg text-blue-700">
                          Establishing Transformer-Based Methane Detection
                        </CardDescription>
                      </div>
                      <Badge className="bg-blue-200 text-blue-800">2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="research-phase space-y-6">
                          <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                              <Target className="h-5 w-5 mr-2" />
                              Research Goal
                            </h3>
                            <p className="text-gray-700">
                              Develop the first transformer-based architecture for low-flow rate methane emission segmentation in livestock applications.
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                              <Brain className="h-5 w-5 mr-2" />
                              Key Innovation: Gasformer Architecture
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Encoder:</strong> Mix Vision Transformer (MiT-B0) for multi-scale feature extraction</li>
                              <li>• <strong>Decoder:</strong> Light-Ham decoder with Hamburger Matrix Decomposition</li>
                              <li>• <strong>Breakthrough:</strong> Effective detection at concentrations as low as 10 SCCM</li>
                            </ul>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                              <Settings className="h-5 w-5 mr-2" />
                              Experimental Setup
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Equipment:</strong> FLIR GF77 OGI Camera (uncooled LWIR, 320×240 resolution)</li>
                              <li>• <strong>Detection Range:</strong> 7-8.5 μm spectral range, optimized for methane&apos;s 7.7±0.1 μm absorption band</li>
                              <li>• <strong>Environment:</strong> Ice background for consistent temperature contrast</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                              <Database className="h-5 w-5 mr-2" />
                              Datasets Created
                            </h3>
                            <div className="space-y-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Controlled Methane Release (MR) Dataset</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  <li>• 9,237 images across 10-100 SCCM flow rates</li>
                                  <li>• Precision gas flow controller for accurate control</li>
                                  <li>• Multiple color modes (white hot, black hot, rainbow)</li>
                                </ul>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Dairy Cow Rumen Gas (CR) Dataset</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  <li>• 340 images from real dairy cow rumen gas samples</li>
                                  <li>• 24-hour ANKOM batch culture system</li>
                                  <li>• Direct livestock emission capture</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              Results & Impact
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">88.56%</div>
                                <div className="text-sm text-green-600">mIoU on livestock dataset</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">97.45</div>
                                <div className="text-sm text-green-600">FPS processing speed</div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Validation:</strong> Successful transfer learning from controlled to real livestock scenarios
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <FileText className="h-4 w-4 mr-2" />
                              Read Full Paper
                            </Button>
                            <Button size="sm" variant="outline">
                              <Code className="h-4 w-4 mr-2" />
                              Access Code
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download Datasets
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Phase 2 */}
              <TabsContent value="phase2" className="space-y-8">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-green-800 mb-2">Phase 2: Comprehensive Validation - Multi-Model Analysis (2025)</CardTitle>
                        <CardDescription className="text-lg text-green-700">
                          Quantifying Dietary Impact on Methane Emissions
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-200 text-green-800">2025</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="research-phase space-y-6">
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <Target className="h-5 w-5 mr-2" />
                              Research Goal
                            </h3>
                            <p className="text-gray-700">
                              Validate OGI+AI approach against gold-standard analytical methods and investigate dietary treatment effects on methane production.
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <Microscope className="h-5 w-5 mr-2" />
                              Comprehensive Experimental Design
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Multi-instrument Validation:</strong> OGI + Gas Chromatography + Laser Methane Detector</li>
                              <li>• <strong>Biological Realism:</strong> 4 single-flow continuous fermenters simulating cow rumen conditions</li>
                              <li>• <strong>Dietary Treatments:</strong> Control, Control+Bromoform, Low Forage (20:80), High Forage (80:20)</li>
                            </ul>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <Database className="h-5 w-5 mr-2" />
                              Advanced Dataset: Controlled Diet (CD)
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Scale:</strong> 4,885 CH₄ plume images across dietary treatments</li>
                              <li>• <strong>Class-1:</strong> 166-171 ppm (Control diet)</li>
                              <li>• <strong>Class-2:</strong> 300-334 ppm (Low Forage diet)</li>
                              <li>• <strong>Class-3:</strong> 457-510 ppm (High Forage diet)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-6">
                          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                              <Award className="h-5 w-5 mr-2" />
                              Breakthrough Findings
                            </h3>
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded">
                                <div className="font-medium text-amber-800">Method Validation</div>
                                <div className="text-sm text-gray-600">LMD data followed similar patterns to GC results, confirming OGI reliability</div>
                              </div>
                              <div className="bg-white p-3 rounded">
                                <div className="font-medium text-amber-800">Dietary Impact Quantification</div>
                                <div className="text-sm text-gray-600">High Forage diet produced significantly more CH₄ (p &lt; 0.01)</div>
                              </div>
                              <div className="bg-white p-3 rounded">
                                <div className="font-medium text-amber-800">Mitigation Evidence</div>
                                <div className="text-sm text-gray-600">Bromoform completely inhibited CH₄ emission (98% reduction)</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <BarChart3 className="h-5 w-5 mr-2" />
                              Comparative Model Performance
                            </h3>
                            <div className="space-y-3">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <div className="font-medium text-green-800 mb-2">Gasformer Performance</div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="text-center">
                                    <div className="text-xl font-bold text-green-700">85.1%</div>
                                    <div className="text-xs text-green-600">mIoU</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-xl font-bold text-green-700">91.72%</div>
                                    <div className="text-xs text-green-600">mF-score</div>
                                  </div>
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                  Most parameter-efficient (3.65M parameters) with highest FPS (64.5)
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                              <Globe className="h-5 w-5 mr-2" />
                              Scientific Impact
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>First Study:</strong> Combining OGI + deep learning for livestock methane quantification</li>
                              <li>• <strong>Practical Validation:</strong> Correlation between visual plume characteristics and actual concentrations</li>
                              <li>• <strong>Climate Relevance:</strong> Quantitative framework for evaluating dietary mitigation strategies</li>
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <FileText className="h-4 w-4 mr-2" />
                              Read Full Paper
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Access CD Dataset
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Phase 3 */}
              <TabsContent value="phase3" className="space-y-8">
                <Card className="border-2 border-purple-200">
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-purple-800 mb-2">Phase 3: Real-World Application - GasTwinFormer (2025)</CardTitle>
                        <CardDescription className="text-lg text-purple-700">
                          Integrated Segmentation and Dietary Classification
                        </CardDescription>
                      </div>
                      <Badge className="bg-purple-200 text-purple-800">2025</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="research-phase space-y-6">
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                              <Target className="h-5 w-5 mr-2" />
                              Research Goal
                            </h3>
                            <p className="text-gray-700">
                              Develop a unified framework for simultaneous methane detection and dietary treatment classification in real livestock environments.
                            </p>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-purple-200">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                              <Layers className="h-5 w-5 mr-2" />
                              Novel Architecture: GasTwinFormer
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Hybrid Encoder:</strong> Mix Twin encoder alternating between EMA and LSA</li>
                              <li>• <strong>Dual-Task Learning:</strong> Simultaneous methane segmentation and dietary classification</li>
                              <li>• <strong>Advanced Decoder:</strong> Hierarchical LR-ASPP for multi-scale feature aggregation</li>
                            </ul>
                          </div>

                          <div className="bg-white p-6 rounded-lg border border-purple-200">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                              <Users className="h-5 w-5 mr-2" />
                              Real Livestock Validation
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                              <li>• <strong>Equipment:</strong> FLIR Gx320 OGI camera (320×240, 30 fps, &lt;15 mK thermal sensitivity)</li>
                              <li>• <strong>Live Animal Study:</strong> 12 postpartum beef cows across 3 dietary treatments</li>
                              <li>• <strong>Duration:</strong> 30-day controlled feeding trial with IACUC approval</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg border border-purple-200">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                              <Database className="h-5 w-5 mr-2" />
                              Comprehensive Dataset: Beef Cattle Emissions
                            </h3>
                            <div className="space-y-3">
                              <div className="text-center mb-4">
                                <div className="text-2xl font-bold text-purple-700">11,694</div>
                                <div className="text-sm text-purple-600">manually annotated frames from 19 recordings</div>
                              </div>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="bg-purple-50 p-3 rounded text-center">
                                  <div className="font-bold text-purple-700">2,730</div>
                                  <div className="text-xs text-purple-600">High Forage (23.4%)</div>
                                </div>
                                <div className="bg-purple-50 p-3 rounded text-center">
                                  <div className="font-bold text-purple-700">4,658</div>
                                  <div className="text-xs text-purple-600">Mixed Diet (39.8%)</div>
                                </div>
                                <div className="bg-purple-50 p-3 rounded text-center">
                                  <div className="font-bold text-purple-700">4,306</div>
                                  <div className="text-xs text-purple-600">High Grain (36.8%)</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                              <Award className="h-5 w-5 mr-2" />
                              Breakthrough Achievements
                            </h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">74.47%</div>
                                <div className="text-xs text-green-600">mIoU segmentation</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">100%</div>
                                <div className="text-xs text-green-600">dietary classification</div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-700">114.9 FPS</div>
                              <div className="text-xs text-green-600">with only 3.348M parameters</div>
                            </div>
                          </div>

                          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
                              <Activity className="h-5 w-5 mr-2" />
                              Innovation: Hybrid Encoder Architecture
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li>• <strong>Alternating Attention:</strong> Multi-head attention and locally-grouped self-attention mechanisms</li>
                              <li>• <strong>Optimal Balance:</strong> Global context understanding with fine-grained local feature detection</li>
                              <li>• <strong>Real-World Adaptation:</strong> Handles increased variability in live livestock environments</li>
                              <li>• <strong>Efficiency:</strong> 114.9 FPS processing with only 3.348M parameters</li>
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              <FileText className="h-4 w-4 mr-2" />
                              Read Full Paper
                            </Button>
                            <Button size="sm" variant="outline">
                              <Code className="h-4 w-4 mr-2" />
                              Access Code
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download Dataset
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Research Evolution & Future Directions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Evolution & Future Directions</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                The progression of our research program demonstrates a carefully orchestrated evolution from fundamental algorithmic development to practical real-world application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Technical Progression</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">Single-task CNN → Transformer-based → Hybrid attention → Dual-task learning</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">Controlled lab → In vitro simulation → Real livestock</span>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700">Visual assessment → Multi-instrument validation → Live animal studies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Key Contributions to the Field</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• First transformer architecture for livestock methane detection</li>
                    <li>• Largest annotated dataset for agricultural gas emission analysis</li>
                    <li>• Novel dual-task framework combining detection and classification</li>
                    <li>• Comprehensive validation against analytical chemistry standards</li>
                    <li>• Real-world deployment capability for practical farm applications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ongoing Research</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800 mb-1">Multi-gas Detection</h4>
                    <p className="text-xs text-gray-600">Extending to CO₂ and N₂O emissions</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800 mb-1">Continuous Monitoring</h4>
                    <p className="text-xs text-gray-600">24/7 automated farm surveillance systems</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 mb-1">Mitigation Optimization</h4>
                    <p className="text-xs text-gray-600">AI-driven dietary recommendation systems</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Globe className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-amber-800 mb-1">Global Deployment</h4>
                    <p className="text-xs text-gray-600">Adaptation to different livestock systems worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Link href="/research/technical-details">
                    <FileText className="mr-2 h-5 w-5" />
                    Read Complete Technical Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our research has resulted in a strong publication record reflecting both technical innovation and practical impact.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock in Optical Gas Imaging
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Sarker, T.T., et al. • <strong>CVPR Workshop on Computer Vision for Agriculture</strong> • 2024
                      </p>
                      <p className="text-sm text-gray-600">
                        Presented at the premier computer vision conference, receiving significant attention from both CV and agricultural research communities.
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Optical gas imaging and deep learning for quantifying enteric methane emissions from rumen fermentation in vitro
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Embaby, M.G., et al. • <strong>IET Image Processing</strong> • vol. 19, no. 1 • 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        Provides detailed methodological information enabling replication and extension by other research groups.
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-purple-800 mb-2">
                        GasTwinFormer: A Hybrid Vision Transformer for Livestock Methane Emission Segmentation and Dietary Classification in Optical Gas Imaging
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Sarker, T.T., et al. • <strong>Submitted to ICCV</strong> • 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        Represents the transition to high-impact computer vision venues and recognition of agricultural AI as a legitimate area for technical innovation.
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Badge variant="secondary">Under Review</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding Support</h3>
                <p className="text-gray-600">
                  This research is supported by prestigious funding agencies, reflecting confidence in both the technical approach and potential for practical impact.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-green-800 mb-2">USDA NIFA Award</h4>
                  <p className="text-green-600 font-medium">2022-70001-37404</p>
                  <p className="text-sm text-gray-600 mt-2">Primary funding for comprehensive research program</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">SIU Office of Vice Chancellor for Research</h4>
                  <p className="text-blue-600 font-medium">Institutional Support</p>
                  <p className="text-sm text-gray-600 mt-2">Additional funding for equipment and personnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Advancing Agricultural AI Research</h2>
            <p className="text-xl mb-8 opacity-90">
              This research represents a significant advancement in agricultural AI applications, providing practical tools for climate-smart livestock management while contributing to global methane emission reduction efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/resources">
                  <Download className="mr-2 h-5 w-5" />
                  Access All Resources
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
                <Link href="/team">
                  <Users className="mr-2 h-5 w-5" />
                  Meet the Research Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 