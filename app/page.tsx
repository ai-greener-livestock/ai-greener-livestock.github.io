import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, BarChart3, Globe, Users, Zap, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  USDA Research Project
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  AI for
                  <span className="text-green-700"> Greener</span>
                  <br />
                  Livestock
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Developing cutting-edge AI solutions to monitor and reduce methane emissions from livestock, 
                  combining optical gas imaging with deep learning for sustainable agriculture.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                  <Link href="/research">
                    🔬 Explore Our AI Technology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/project">
                    👥 Meet the Research Team
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">Up to 88.56%</div>
                  <div className="text-sm text-gray-600">Best IoU Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">3 Datasets</div>
                  <div className="text-sm text-gray-600">MR, CR & CD</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">Real-time</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
                {/* Placeholder for hero image - optical gas imaging visualization */}
                <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Optical Gas Imaging</p>
                    <p className="text-sm opacity-80">Methane Detection in Action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transforming Livestock Sustainability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our USDA-funded research project combines artificial intelligence with optical gas imaging 
              to provide farmers and researchers with practical tools for monitoring and reducing methane emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <CardTitle>Advanced Detection</CardTitle>
                <CardDescription>
                  Real-time methane plume segmentation using transformer-based deep learning models
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>
                  Contributing to climate change mitigation through innovative livestock emission monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
                <CardTitle>Practical Solutions</CardTitle>
                <CardDescription>
                  Tools designed for farmers, researchers, and policymakers to implement sustainable practices
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Research & Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Published findings from our USDA-funded research, demonstrating breakthrough AI technology 
              for detecting methane emissions and practical dietary solutions for reducing livestock environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 text-green-700 mr-2" />
                  Gasformer: AI That Sees Invisible Gas
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-2">
                  Published in IEEE Conferences • January 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We created an AI system called &ldquo;Gasformer&rdquo; that can automatically spot methane gas 
                  (which is invisible to our eyes) using optical gas imaging cameras. Think of it like giving 
                  farmers &ldquo;super vision&rdquo; to see harmful emissions they couldn&apos;t detect before.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Key Breakthrough:</h4>
                  <p className="text-sm text-blue-700">
                    Our AI achieved 88.56% accuracy in detecting methane from dairy cow rumen gas samples - 
                    better than any previous method and fast enough to work in real-time conditions.
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Works with FLIR optical gas imaging cameras</li>
                  <li>Detects even small amounts of methane gas automatically</li>
                  <li>Tested on over 14,000 images from controlled laboratory experiments</li>
                  <li>Helps farmers make immediate decisions to reduce emissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 text-green-700 mr-2" />
                  What Cows Eat Affects Climate Change
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 mt-2">
                  Published in IET Image Processing • January 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We discovered exactly how different cow diets affect methane emissions by studying rumen liquid 
                  (cow stomach contents) and bacteria in controlled laboratory conditions. Our research proves that 
                  changing what farmers feed their cows can dramatically reduce harmful greenhouse gases.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-3">Diet Impact Results:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Grass-Heavy Diet:</span>
                      <span className="text-red-600 font-bold">482 ppm CH₄ (Highest)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Grain-Heavy Diet:</span>
                      <span className="text-yellow-600 font-bold">294 ppm CH₄ (Lower)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Balanced Diet:</span>
                      <span className="text-green-600 font-bold">167 ppm CH₄ (Lowest)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Seaweed Supplement:</span>
                      <span className="text-blue-600 font-bold">98% Reduction!</span>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Surprising Discovery:</h4>
                  <p className="text-sm text-yellow-700">
                    Adding a small amount of seaweed (bromoform) to cow feed almost completely eliminated methane production - 
                    offering a practical solution for farmers to fight climate change.
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Studied 4 different diets using rumen fermentation systems</li>
                  <li>Used advanced laboratory equipment to measure exact gas amounts</li>
                  <li>Created 4,885 optical gas imaging pictures showing gas emissions from each diet</li>
                  <li>Provides clear guidelines for farmers to choose climate-friendly feeds</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Access Full Research */}
          <div className="text-center mt-12 mb-8">
            <Card className="bg-white border-2 border-green-200">
              <CardContent className="py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dive Deeper Into Our Research
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Access our complete published papers, datasets with 14,462 labeled images, 
                  and open-source code repositories — all freely available 
                  to accelerate global research in sustainable agriculture.
                </p>
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/resources">
                    📚 Access All Research Materials
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Why AI is Essential */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-center text-green-800">
                Why AI is Essential for Methane Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800">Traditional Method Limitations</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><span className="font-medium">Gas chambers:</span> Expensive, labor-intensive, stress animals</li>
                    <li><span className="font-medium">Manual analysis:</span> Time-consuming, subjective, inconsistent</li>
                    <li><span className="font-medium">Limited scalability:</span> Cannot monitor large herds efficiently</li>
                    <li><span className="font-medium">Point measurements:</span> Miss spatial distribution patterns</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-800">AI-Powered Advantages</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><span className="font-medium">Real-time processing:</span> Instant detection and quantification</li>
                    <li><span className="font-medium">Non-invasive monitoring:</span> No animal stress or behavior disruption</li>
                    <li><span className="font-medium">Objective analysis:</span> Consistent, repeatable measurements</li>
                    <li><span className="font-medium">Scalable deployment:</span> Monitor entire farms autonomously</li>
                    <li><span className="font-medium">Pattern recognition:</span> Detect subtle correlations humans miss</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join the Future of Sustainable Agriculture
          </h2>
                      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether you&apos;re a farmer, researcher, or technology developer — our AI solutions 
              and open research can help you make a real impact on climate change.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/project">
                🤝 Partner With Our Team
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/resources">
                🚀 Access All Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
