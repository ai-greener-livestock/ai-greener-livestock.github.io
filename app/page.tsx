import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-6">
              USDA NIFA Award #2022-70001-37404
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Using AI to Study Methane Emissions from Dairy Cows
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A research project at Southern Illinois University studying how artificial intelligence 
              can help detect and measure methane gas from livestock. We&apos;re exploring how different 
              diets affect cow emissions and developing tools to make monitoring easier for farmers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">88.56%</div>
                <div className="text-sm text-gray-600">AI Detection Accuracy</div>
                <div className="text-xs text-gray-500 mt-1">On livestock methane detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">14,462</div>
                <div className="text-sm text-gray-600">Images Analyzed</div>
                <div className="text-xs text-gray-500 mt-1">Across controlled experiments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">98%</div>
                <div className="text-sm text-gray-600">Methane Reduction</div>
                <div className="text-xs text-gray-500 mt-1">With seaweed supplement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Studied */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Studied</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Methane from cows contributes to climate change, but it&apos;s invisible to our eyes. 
              We wanted to see if AI could help detect this gas automatically and find out 
              how different foods affect how much methane cows produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-red-400">
              <CardHeader>
                <CardTitle className="text-red-700">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Livestock produce 6% of global greenhouse gas emissions</li>
                  <li>• Methane gas is invisible - farmers can&apos;t see or measure it easily</li>
                  <li>• Traditional detection methods are expensive and complicated</li>
                  <li>• We don&apos;t know exactly how diet changes affect emissions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-400">
              <CardHeader>
                <CardTitle className="text-green-700">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Used special cameras that can &quot;see&quot; methane gas</li>
                  <li>• Trained AI to automatically detect gas in thousands of images</li>
                  <li>• Tested different cow diets in controlled laboratory conditions</li>
                  <li>• Measured exact amounts of methane from each diet</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Discoveries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Discovered</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our research produced breakthrough findings in both AI detection capabilities and 
              practical solutions for reducing livestock emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                  AI Successfully Detects Methane
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our Gasformer AI system achieved human-level accuracy in detecting methane from 
                  livestock, making automatic monitoring possible for the first time.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Performance Highlights:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Achieved 88.56% accuracy on real cow samples</li>
                    <li>• Real-time processing at 97+ frames per second</li>
                    <li>• Outperformed existing computer vision models</li>
                    <li>• Works with standard thermal imaging cameras</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-2" />
                  Diet Dramatically Affects Emissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Different cow diets produced vastly different methane levels, with some simple 
                  changes offering dramatic emission reductions.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Key Findings:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• High-grass diets produce 3x more methane than balanced feeds</li>
                    <li>• Seaweed supplements reduce emissions by 98%</li>
                    <li>• Diet changes are more effective than we expected</li>
                    <li>• Results validated with laboratory analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">Breakthrough: Seaweed Supplement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Adding a small amount of seaweed containing bromoform to cow feed almost completely 
                eliminated methane production. This suggests a practical way for farmers to 
                dramatically reduce their environmental impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Practical Benefits:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Simple dietary addition, not expensive equipment</li>
                    <li>• Massive reduction in greenhouse gas emissions</li>
                    <li>• Could be implemented on farms immediately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Next Steps:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Long-term cow health studies needed</li>
                    <li>• Optimal dosage research ongoing</li>
                    <li>• Regulatory approval processes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Research Matters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <CardTitle>For Climate Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our AI detection method can help researchers worldwide study livestock emissions 
                  more accurately and affordably than traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <CardTitle>For Farmers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Understanding how diet affects emissions can help farmers choose feeds that 
                  reduce environmental impact while potentially improving efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                <CardTitle>For Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our open-source AI models and datasets can be used by developers to create 
                  practical monitoring tools for farms and research facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Learn More About Our Research
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explore detailed methodology, complete results, datasets, and source code. 
            All research outputs are freely available for academic and commercial use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/research">
                🔬 Technical Details & Results
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/resources">
                📊 Download Data & Code
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/team">
                👥 Meet the Research Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

