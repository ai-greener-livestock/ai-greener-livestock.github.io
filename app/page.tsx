import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  FileText, 
  Target, 
  Zap, 
  Database, 
  Award, 
  Eye, 
  Brain, 
  Microscope,
  TrendingUp,
  Globe,
  Leaf,
  BookOpen,
  Code,
  UserCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Floating Navigation */}
      <nav className="fixed top-20 right-8 z-50 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-md border rounded-lg p-2 shadow-lg">
          <div className="flex flex-col space-y-1">
            <a href="#hero" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Overview</a>
            <a href="#challenge" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Challenge</a>
            <a href="#solution" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Solution</a>
            <a href="#methodology" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Methodology</a>
            <a href="#achievements" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Achievements</a>
            <a href="#journey" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Journey</a>
            <a href="#impact" className="text-xs px-3 py-1 rounded hover:bg-gray-100 transition-colors">Impact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-6 text-sm">
                USDA NIFA Award #2022-70001-37404
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI for Greener Livestock:
                <span className="block text-green-700">Revolutionizing Methane Monitoring</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforming Climate-Smart Agriculture Through Artificial Intelligence
              </p>
            </div>

            <div className="hero-section bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl mb-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      The agriculture industry faces an unprecedented challenge: meeting the food demands of a growing global population while dramatically reducing greenhouse gas emissions. Livestock operations contribute <strong className="text-green-700">32% of human-caused methane emissions</strong>, making automated monitoring essential for effective climate mitigation.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      Our groundbreaking research program combines cutting-edge artificial intelligence with optical gas imaging technology to create the <strong className="text-blue-700">world&apos;s first practical, real-time methane detection system</strong> for livestock operations.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      Through three years of intensive research and development, we have progressed from fundamental algorithmic innovation to real-world validation with live animals, creating tools that demonstrate the potential to enable farmers to monitor and reduce methane emissions while optimizing productivity. Our work represents the <strong className="text-purple-700">largest and most comprehensive study of AI-based livestock methane detection ever conducted</strong>.
                    </p>
                  </div>
                  <div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/equipment/cow-hero.jpeg"
                        alt="Live cattle in farm environment for AI-powered methane monitoring research"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="text-white">
                          <h4 className="text-lg font-semibold mb-1">Real-World Research Environment</h4>
                          <p className="text-sm opacity-90">Live cattle data was used for model training, validation and testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="text-center border-2 border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-700 mb-2">88.56%</div>
                  <div className="text-sm font-medium text-green-800">Laboratory Validation</div>
                  <div className="text-xs text-green-600 mt-1">Detection Accuracy</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">74.47%</div>
                  <div className="text-sm font-medium text-blue-800">Real-World Livestock</div>
                  <div className="text-xs text-blue-600 mt-1">Performance</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-700 mb-2">16,000+</div>
                  <div className="text-sm font-medium text-purple-800">Annotated Images</div>
                  <div className="text-xs text-purple-600 mt-1">Largest Dataset</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-amber-700 mb-2">98%</div>
                  <div className="text-sm font-medium text-amber-800">Emission Reduction</div>
                  <div className="text-xs text-amber-600 mt-1">Dietary Interventions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge We&apos;re Solving</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Global livestock production must increase by 70% over the next 25 years to meet rising food demands, yet agriculture faces mounting pressure to reduce its environmental footprint.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card className="border-l-4 border-red-500 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">The Methane Problem</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        Methane is 84 times more potent than CO₂ over 20 years
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        Livestock contribute 32% of human-caused methane emissions
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        Current monitoring methods are expensive and labor-intensive
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        Cannot scale to millions of livestock operations worldwide
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-amber-500 bg-amber-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Current Limitations</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">•</span>
                        Respiration chambers provide only snapshots
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">•</span>
                        Emission factors fail to capture dynamic relationships
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">•</span>
                        No real-time feedback for management decisions
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">•</span>
                        Lack of continuous monitoring capabilities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Critical Gap</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg">
                      Farmers and researchers need <strong>real-time, continuous monitoring systems</strong> that can provide immediate feedback on the effectiveness of different management practices for emission reduction.
                    </p>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-lg font-medium text-green-800">
                        Our research addresses this critical gap by developing intelligent monitoring systems that can detect, quantify, and analyze methane emissions automatically.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Revolutionary Solution</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Four breakthrough innovations working together to create the world&apos;s first practical methane monitoring system for livestock operations.
              </p>
            </div>

            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  AI Architecture
                </TabsTrigger>
                <TabsTrigger value="optical" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Optical Imaging
                </TabsTrigger>
                <TabsTrigger value="validation" className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  Validation
                </TabsTrigger>
                <TabsTrigger value="deployment" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Live Testing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ai" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Brain className="h-6 w-6 text-blue-600 mr-3" />
                      Advanced AI Architecture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-gray-700">
                      We have developed a series of increasingly sophisticated artificial intelligence models specifically designed for livestock methane detection. Our latest innovation, <strong>GasTwinFormer</strong>, represents the first AI system capable of simultaneously detecting methane emissions and identifying the dietary treatments that produced them.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-3">Key Innovations:</h4>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li>• Transformer-based architecture for gas detection</li>
                          <li>• Dual-task learning for emission and diet classification</li>
                          <li>• 12x fewer parameters than traditional models</li>
                          <li>• Real-time processing capabilities</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-center">
                          <Image
                            src="/equipment/flir-gf77.png"
                            alt="FLIR GF77 thermal camera for gas detection"
                            width={400}
                            height={300}
                            className="mx-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 mt-3">FLIR GF77 optical gas imaging camera - one of two core thermal cameras used for methane visualization (GF77 and GX320)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="optical" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Eye className="h-6 w-6 text-purple-600 mr-3" />
                      Optical Gas Imaging Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-gray-700">
                      Using specialized thermal infrared cameras that can visualize methane plumes invisible to the human eye, our system captures high-resolution emission data in real-time. This non-invasive approach allows continuous monitoring without disrupting normal animal behavior or farm operations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-3">Technology Features:</h4>
                        <ul className="space-y-2 text-sm text-purple-700">
                          <li>• FLIR thermal infrared cameras</li>
                          <li>• High-resolution emission capture</li>
                          <li>• Non-invasive monitoring</li>
                          <li>• Continuous operation capability</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-center">
                          <Image
                            src="/equipment/camera-setup.jpeg"
                            alt="Thermal camera setup for methane detection"
                            width={400}
                            height={300}
                            className="mx-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 mt-3">FLIR thermal camera setup for in vitro methane detection experiments</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="validation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Microscope className="h-6 w-6 text-green-600 mr-3" />
                      Comprehensive Validation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-gray-700">
                      Unlike previous research that relied solely on visual assessment, our approach has been rigorously validated against gold-standard analytical chemistry methods including gas chromatography and laser methane detection. This multi-instrument validation ensures that our AI-based measurements meet the accuracy standards required for scientific research and regulatory compliance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">Validation Methods:</h4>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>• Gas chromatography correlation</li>
                          <li>• Laser methane detection validation</li>
                          <li>• Multi-instrument comparison</li>
                          <li>• Correlation coefficients &gt; 0.95</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-center">
                          <Image
                            src="/equipment/laser-methane-detector.jpeg"
                            alt="Laser methane detector for validation"
                            width={400}
                            height={300}
                            className="mx-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 mt-3">Laser methane detector used for additional validation alongside gas chromatography</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deployment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Zap className="h-6 w-6 text-orange-600 mr-3" />
                      Live Animal Testing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-gray-700">
                      Our AI models have been successfully validated using data collected from live cattle in actual farm conditions. We conducted controlled studies with 12 postpartum beef cows under different dietary treatments, collecting thermal imaging data that our models processed at over 100 frames per second with high accuracy, demonstrating the technology&apos;s potential for future commercial deployment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-3">Performance Metrics:</h4>
                        <ul className="space-y-2 text-sm text-orange-700">
                          <li>• 114.9 frames per second processing</li>
                          <li>• Real-time data processing capability</li>
                          <li>• Live animal testing validated</li>
                          <li>• Demonstrates deployment potential</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                        <div className="text-center">
                          <Image
                            src="/equipment/flir-gx320.png"
                            alt="Live cattle monitoring in farm environment"
                            width={400}
                            height={300}
                            className="mx-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-600 mt-3">Data collection from live cattle in farm conditions for AI model development and validation</p>
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

      

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Breakthrough Achievements</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Seven groundbreaking milestones that establish new standards for agricultural AI and environmental monitoring.
              </p>
            </div>

            <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Target className="h-8 w-8 text-green-600" />
                    <Badge className="bg-green-200 text-green-800">🎯</Badge>
                  </div>
                  <CardTitle className="text-lg text-green-800">88.56% Detection Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Our Gasformer model achieved unprecedented accuracy in detecting methane from dairy cow rumen gas samples in controlled laboratory conditions.
                  </p>
                  <div className="text-xs text-green-600 font-medium">
                    Laboratory Validation • Surpassed all previous approaches
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Users className="h-8 w-8 text-blue-600" />
                    <Badge className="bg-blue-200 text-blue-800">🐄</Badge>
                  </div>
                  <CardTitle className="text-lg text-blue-800">74.47% Real-World Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    GasTwinFormer successfully detected methane emissions from live beef cattle in actual farm environments.
                  </p>
                  <div className="text-xs text-blue-600 font-medium">
                    Live Animal Testing • 100% dietary classification accuracy
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Database className="h-8 w-8 text-purple-600" />
                    <Badge className="bg-purple-200 text-purple-800">📊</Badge>
                  </div>
                  <CardTitle className="text-lg text-purple-800">16,000+ Annotated Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    We created the world&apos;s largest dataset of annotated livestock methane emission images.
                  </p>
                  <div className="text-xs text-purple-600 font-medium">
                    Largest Dataset • Laboratory to farm environments
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Award className="h-8 w-8 text-amber-600" />
                    <Badge className="bg-amber-200 text-amber-800">🔬</Badge>
                  </div>
                  <CardTitle className="text-lg text-amber-800">Multi-Method Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    First study to validate AI-based methane detection against gas chromatography and laser detection simultaneously.
                  </p>
                  <div className="text-xs text-amber-600 font-medium">
                    Gold Standard • Correlation coefficients &gt; 0.95
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-200 bg-teal-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CheckCircle className="h-8 w-8 text-teal-600" />
                    <Badge className="bg-teal-200 text-teal-800">🐄</Badge>
                  </div>
                  <CardTitle className="text-lg text-teal-800">Live Animal Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Successfully demonstrated real-time methane monitoring in actual beef cattle operations.
                  </p>
                  <div className="text-xs text-teal-600 font-medium">
                    Real Farm Conditions • Natural animal behavior
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-orange-50 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Zap className="h-8 w-8 text-orange-600" />
                    <Badge className="bg-orange-200 text-orange-800">⚡</Badge>
                  </div>
                  <CardTitle className="text-lg text-orange-800">Real-Time Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Achieved 114.9 frames per second processing speed with 100% dietary classification accuracy.
                  </p>
                  <div className="text-xs text-orange-600 font-medium">
                    Immediate Feedback • Farm management decisions
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Leaf className="h-8 w-8 text-green-600" />
                    <Badge className="bg-green-200 text-green-800">🌱</Badge>
                  </div>
                  <CardTitle className="text-lg text-green-800">Emission Reduction Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">
                    Quantified up to 98% methane reduction through dietary interventions, providing concrete evidence for feed-based mitigation strategies.
                  </p>
                  <div className="text-xs text-green-600 font-medium">
                    Dietary Interventions • Concrete mitigation evidence
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Journey Timeline */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Three-Phase Research Journey</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our research program demonstrates a systematic progression from fundamental innovation to practical application, with each phase building upon previous achievements while expanding scope and capability.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

              <div className="space-y-16">
                {/* Phase 1 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="border-2 border-blue-200 bg-blue-50">
                      <CardHeader>
                        <div className="flex items-center justify-end mb-2">
                          <Badge className="bg-blue-200 text-blue-800 mr-2">2024</Badge>
                          <Brain className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl text-blue-800">Phase 1: Innovation</CardTitle>
                        <p className="text-lg font-medium text-blue-700">Gasformer - Proving the Concept</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Developed the first transformer-based architecture for livestock methane detection, establishing the feasibility of AI-powered emission monitoring.
                        </p>
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <p className="text-xs text-blue-800 font-medium">Key Innovation:</p>
                          <p className="text-xs text-blue-700">Transformer architecture adapted for gas plume detection</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                      <div className="text-center">
                        <Image
                          src="/equipment/control-flow-meter.jpeg"
                          alt="Control flow meter for gas measurement"
                          width={400}
                          height={300}
                          className="mx-auto rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-3">Control flow meter for precise gas measurement in Phase 1 laboratory studies</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8">
                    <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                      <div className="text-center">
                        <Image
                          src="/equipment/ankom-module.jpeg"
                          alt="Ankom module for gas analysis"
                          width={400}
                          height={300}
                          className="mx-auto rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-3">Ankom gas production module used in Phase 2 validation studies</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <Microscope className="h-6 w-6 text-green-600 mr-2" />
                          <Badge className="bg-green-200 text-green-800">2025</Badge>
                        </div>
                        <CardTitle className="text-xl text-green-800">Phase 2: Validation</CardTitle>
                        <p className="text-lg font-medium text-green-700">Comprehensive Analysis - Validating the Science</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Conducted rigorous multi-instrument validation while investigating the relationship between dietary composition and methane production.
                        </p>
                        <div className="bg-green-100 p-3 rounded-lg">
                          <p className="text-xs text-green-800 font-medium">Key Innovation:</p>
                          <p className="text-xs text-green-700">Multi-modal validation framework with biological insights</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <Card className="border-2 border-purple-200 bg-purple-50">
                      <CardHeader>
                        <div className="flex items-center justify-end mb-2">
                          <Badge className="bg-purple-200 text-purple-800 mr-2">2025</Badge>
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-xl text-purple-800">Phase 3: Application</CardTitle>
                        <p className="text-lg font-medium text-purple-700">GasTwinFormer - Scaling the Solution</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700 mb-3">
                          Demonstrated practical deployment capability with live animals while introducing dual-task learning for simultaneous emission detection and dietary classification.
                        </p>
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <p className="text-xs text-purple-800 font-medium">Key Innovation:</p>
                          <p className="text-xs text-purple-700">Integrated detection and management decision support</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                      <div className="text-center">
                        <Image
                          src="/equipment/cow-hero-2.jpeg"
                          alt="FLIR GX320 camera capturing methane emissions from live cattle"
                          width={400}
                          height={300}
                          className="mx-auto rounded-lg shadow-md"
                        />
                        <p className="text-sm text-gray-600 mt-3">FLIR GX320 capturing cow methane emissions for GasTwinFormer data collection and validation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact & Applications</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our research creates transformative opportunities across multiple sectors, from advancing scientific understanding to enabling practical farm management solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-blue-800">
                    <BookOpen className="h-6 w-6 mr-3" />
                    For Researchers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our open-source datasets and methodologies provide the foundation for advancing agricultural AI research. The comprehensive validation framework establishes new standards for rigor in agricultural environmental monitoring studies.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Research Impact:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 16,000+ annotated images for AI development</li>
                      <li>• Multi-instrument validation methodology</li>
                      <li>• Open-source model architectures</li>
                      <li>• New standards for agricultural AI research</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-green-800">
                    <Users className="h-6 w-6 mr-3" />
                    For Farmers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Real-time emission monitoring enables immediate evaluation of feeding strategy effectiveness, supporting adaptive management approaches that optimize both productivity and environmental impact.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Farm Benefits:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Immediate feedback on feeding strategies</li>
                      <li>• Non-invasive monitoring systems</li>
                      <li>• Seamless integration with operations</li>
                      <li>• Optimized productivity and sustainability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-purple-800">
                    <FileText className="h-6 w-6 mr-3" />
                    For Policymakers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Accurate, scalable monitoring technology supports evidence-based policy development for agricultural emission reduction programs. The validated methodology provides measurement capabilities for carbon credit verification.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Policy Support:</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Evidence-based policy development</li>
                      <li>• Carbon credit verification systems</li>
                      <li>• Scalable monitoring for regulations</li>
                      <li>• Emission reduction program support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-amber-800">
                    <Globe className="h-6 w-6 mr-3" />
                    For the Environment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Widespread deployment of intelligent monitoring systems will enable precision emission management across millions of livestock operations, contributing significantly to global methane reduction goals.
                  </p>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-2">Environmental Impact:</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Precision emission management</li>
                      <li>• Global methane reduction contribution</li>
                      <li>• Maintained food security</li>
                      <li>• Sustainable livestock production</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Global Recognition */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">Research Support & Publications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-gray-700 mb-6">
                    Our research has received support from USDA NIFA funding and has been published in computer vision workshops at major conferences, demonstrating the technical quality and practical relevance of our agricultural AI approach.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-blue-800 mb-1">USDA NIFA Support</h4>
                    <p className="text-sm text-gray-600">Award #2022-70001-37404</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-green-800 mb-1">Publications</h4>
                    <p className="text-sm text-gray-600">CVPR Workshop, ICCV Workshop, IET Image Processing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Future Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              As we look toward widespread deployment of intelligent livestock monitoring systems, our research provides the foundation for transforming how the agricultural industry approaches environmental stewardship.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                The combination of high accuracy, real-time performance, and practical utility positions this technology to become an essential tool for sustainable livestock production.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <TrendingUp className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-blue-800 mb-2">Multi-Gas Monitoring</h3>
                  <p className="text-sm text-gray-600">Expanding to monitor multiple greenhouse gases simultaneously</p>
                </div>
                <div className="text-center">
                  <Eye className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-800 mb-2">24/7 Surveillance</h3>
                  <p className="text-sm text-gray-600">Continuous monitoring systems for round-the-clock farm surveillance</p>
                </div>
                <div className="text-center">
                  <Brain className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-800 mb-2">AI Recommendations</h3>
                  <p className="text-sm text-gray-600">Intelligent systems optimizing feed composition for productivity and impact</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">
                &quot;Advancing the frontiers of agricultural artificial intelligence to create a more sustainable future for livestock production worldwide.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Research CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Explore Our Research</h2>
            <p className="text-xl mb-12 opacity-90">
              Dive deeper into our comprehensive research program and access all the tools and data that are transforming agricultural monitoring.
            </p>
            
            <div className="cta-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">📖 Detailed Research Timeline</h3>
                  <p className="text-white/80 mb-4">
                    Dive deep into our three-phase research journey, from initial concept development through real-world deployment validation.
                  </p>
                  <Button asChild className="bg-white text-green-700 hover:bg-gray-100">
                    <Link href="/research">
                      Explore Timeline <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">💻 Code & Datasets</h3>
                  <p className="text-white/80 mb-4">
                    Access our open-source implementations and comprehensive datasets that are advancing agricultural AI research worldwide.
                  </p>
                  <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                    <Link href="/resources">
                      Download Resources <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">📄 Publications</h3>
                  <p className="text-white/80 mb-4">
                    Read our peer-reviewed publications that establish new standards for agricultural environmental monitoring research.
                  </p>
                  <Button asChild className="bg-white text-purple-700 hover:bg-gray-100">
                    <Link href="/publications">
                      View Publications <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <UserCheck className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">👥 Meet the Team</h3>
                  <p className="text-white/80 mb-4">
                    Learn about the interdisciplinary research team combining expertise in computer vision, agricultural science, and environmental monitoring.
                  </p>
                  <Button asChild className="bg-white text-green-700 hover:bg-gray-100">
                    <Link href="/team">
                      Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Acknowledgment */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-acknowledgment max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Acknowledgments</h3>
              <p className="text-gray-300">
                This research is made possible through the generous support of our funding partners and institutional collaborators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Funding Support</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• USDA National Institute of Food and Agriculture (Award: 2022-70001-37404)</p>
                  <p>• Southern Illinois University Office of the Vice Chancellor for Research</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Institutional Partners</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• School of Computing, Southern Illinois University</p>
                  <p>• School of Agricultural Sciences, Southern Illinois University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

