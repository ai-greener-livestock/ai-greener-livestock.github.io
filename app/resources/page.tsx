import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Github, FileText, Award, Users, Leaf, Zap, Target, Eye, Brain, BarChart3 } from "lucide-react"

export default function ResourcesPage() {
  const impactStats = [
    {
      number: "88.56%",
      label: "AI Detection Accuracy",
      description: "Our AI can spot methane emissions as accurately as trained experts"
    },
    {
      number: "50%",
      label: "Faster Detection",
      description: "Identify emission problems in minutes instead of hours"
    },
    {
      number: "300+",
      label: "Dairy Cows Monitored",
      description: "Real-world testing on working farms"
    },
    {
      number: "$0",
      label: "Cost to Access",
      description: "All our research and data is freely available"
    }
  ]

  const howItWorks = [
    {
      icon: Eye,
      title: "See the Invisible",
      description: "Special cameras detect methane gas that's invisible to human eyes",
      technical: "FLIR GF77 thermal imaging with optical gas detection"
    },
    {
      icon: Brain,
      title: "AI Recognition",
      description: "Our AI instantly recognizes methane patterns and measures emissions",
      technical: "Transformer-based architecture with 88.56% accuracy"
    },
    {
      icon: BarChart3,
      title: "Smart Insights",
      description: "Get real-time data to help farmers reduce emissions and save money",
      technical: "Automated quantification and reporting dashboard"
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Teaching AI to See Methane: Our Breakthrough Technology",
      originalTitle: "Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock in Optical Gas Imaging",
      authors: "Toqi Tahamid Sarker, Mohamed G Embaby, Khaled R Ahmed, Amer AbuGhazaleh",
      venue: "IEEE/CVF Computer Vision Conference 2024",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      plainLanguage: "We created an AI system that can automatically detect methane emissions from livestock with 88.56% accuracy - as good as human experts but much faster.",
      whyItMatters: "This breakthrough makes it practical and affordable for farms to monitor their environmental impact in real-time, helping reduce greenhouse gas emissions from agriculture.",
      realWorldImpact: "Farmers can now identify and fix emission problems quickly, potentially reducing agricultural methane by up to 30%.",
      links: {
        pdf: "#",
        doi: "10.1109/CVPRW63382.2024.00558",
        github: "https://github.com/toqitahamid/Gasformer"
      }
    },
    {
      id: 2,
      title: "Proving It Works: Real Farm Testing Results",
      originalTitle: "Optical gas imaging and deep learning for quantifying enteric methane emissions from cattle under different diets",
      authors: "Mohamed G Embaby, Toqi Tahamid Sarker, Khaled R Ahmed, Amer AbuGhazaleh",
      venue: "IET Image Processing Journal",
      year: "2025",
      type: "Journal Article", 
      status: "Published",
      plainLanguage: "We tested our technology on real dairy farms and proved it works as well as traditional expensive methods, while being much faster and easier to use.",
      whyItMatters: "This validation shows our technology is ready for real-world use and can help farmers make data-driven decisions about reducing emissions.",
      realWorldImpact: "Dairy farmers can now monitor their herds' environmental impact without expensive equipment or disrupting their operations.",
      links: {
        pdf: "#",
        doi: "10.1049/ipr2.12934"
      }
    }
  ]

  const datasets = [
    {
      id: 1,
      title: "Controlled Emission Dataset",
      subtitle: "The Training Ground for Our AI",
      description: "Like teaching a child to recognize shapes, we trained our AI using thousands of controlled methane releases",
      size: "9,237 labeled images",
      format: "High-quality thermal images with precise measurements",
      realWorldUse: "Training AI systems to detect emissions",
      whyUseful: "Provides the foundation for accurate, automated emission detection",
      technicalSpecs: "640×480 resolution, FLIR GF77 camera, flow rates 10-100 SCCM",
      downloadSize: "2.8 GB",
      lastUpdated: "December 2024"
    },
    {
      id: 2,
      title: "Real Farm Data",
      subtitle: "From Actual Dairy Cows",
      description: "Real emissions data from Holstein dairy cows during their normal daily activities",
      size: "340 labeled images",
      format: "Authentic farm environment recordings",
      realWorldUse: "Validating AI performance in real conditions",
      whyUseful: "Proves the technology works in actual farm settings, not just labs",
      technicalSpecs: "24-hour batch culture system, 39°C incubation, TMR feed",
      downloadSize: "0.1 GB",
      lastUpdated: "December 2024"
    },
    {
      id: 3,
      title: "Diet Impact Study",
      subtitle: "How Feed Affects Emissions",
      description: "Comparing methane emissions when cows eat different types of feed",
      size: "4,885 labeled images",
      format: "Multi-category emission classifications",
      realWorldUse: "Helping farmers choose feeds that reduce emissions",
      whyUseful: "Shows which feeding strategies can significantly reduce methane output",
      technicalSpecs: "3 concentration classes, gas chromatography validated",
      downloadSize: "1.5 GB",
      lastUpdated: "December 2024"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              🌱 Fighting Climate Change with AI
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Making Farming Smarter and Cleaner
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're using artificial intelligence to help farmers reduce methane emissions from their livestock. 
              Our technology is <strong>free</strong>, <strong>accurate</strong>, and <strong>easy to use</strong> - 
              because fighting climate change shouldn't be expensive or complicated.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-700">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔬 How Our Technology Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Think of it like a smart security camera, but instead of watching for intruders, 
              it watches for invisible methane gas and automatically measures it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center border-2 border-gray-100 hover:border-green-200 transition-colors">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <details className="text-sm">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                      Technical Details
                    </summary>
                    <p className="mt-2 text-gray-500 text-left">{step.technical}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🌍 Why This Matters</h2>
              <p className="text-lg text-gray-600">
                Agriculture produces about 14% of global greenhouse gas emissions. 
                With our technology, farmers can be part of the solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Livestock methane emissions are invisible to farmers</li>
                    <li>• Traditional monitoring is expensive and complicated</li>
                    <li>• Farmers want to help but lack affordable tools</li>
                    <li>• Climate regulations are getting stricter</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li>• AI makes emission detection automatic and accurate</li>
                    <li>• Technology is free and open-source</li>
                    <li>• Works in real farm conditions</li>
                    <li>• Helps farmers improve efficiency and compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Our Research Breakthrough</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've published our findings in top scientific journals so other researchers can build on our work.
              Here's what we discovered, explained in plain English.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {publications.map((paper) => (
              <Card key={paper.id} className="border-l-4 border-blue-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={paper.status === 'Published' ? 'default' : 'secondary'}>
                          {paper.status}
                        </Badge>
                        <Badge variant="outline">{paper.type}</Badge>
                        <span className="text-sm text-gray-500">{paper.year}</span>
                      </div>
                      <CardTitle className="text-2xl leading-tight mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{paper.authors}</CardDescription>
                      <div className="flex items-center text-sm text-blue-700 mt-2">
                        <Award className="h-4 w-4 mr-1" />
                        {paper.venue}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What We Did:</h4>
                    <p className="text-blue-800">{paper.plainLanguage}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Why This Matters:</h4>
                      <p className="text-sm text-gray-600">{paper.whyItMatters}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Real-World Impact:</h4>
                      <p className="text-sm text-gray-600">{paper.realWorldImpact}</p>
                    </div>
                  </div>

                  <details className="border-t pt-4">
                    <summary className="cursor-pointer text-gray-600 font-medium hover:text-gray-800">
                      View Technical Title & Details
                    </summary>
                    <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                      <p className="font-medium text-gray-800">{paper.originalTitle}</p>
                    </div>
                  </details>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button size="sm" variant="default" asChild>
                      <a href={`https://doi.org/${paper.links.doi}`} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Research Paper
                      </a>
                    </Button>
                    {paper.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Get the Code (Free)
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🗄️ Training Data for AI Developers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Want to build your own emission detection AI? We're sharing all our training data for free. 
              These datasets include thousands of examples to help train accurate models.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {datasets.map((dataset) => (
              <Card key={dataset.id} className="border-l-4 border-green-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{dataset.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-green-700 mt-1">{dataset.subtitle}</CardDescription>
                      <p className="text-gray-600 mt-2">{dataset.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">{dataset.size}</div>
                      <div className="text-sm text-gray-500">{dataset.downloadSize}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">What You Can Do With This:</h4>
                      <p className="text-sm text-gray-600 mb-3">{dataset.realWorldUse}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Why It's Useful:</h4>
                      <p className="text-sm text-gray-600">{dataset.whyUseful}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Dataset Details:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li><strong>Format:</strong> {dataset.format}</li>
                        <li><strong>Size:</strong> {dataset.downloadSize}</li>
                        <li><strong>Updated:</strong> {dataset.lastUpdated}</li>
                        <li><strong>License:</strong> Creative Commons (Free to use)</li>
                      </ul>
                    </div>
                  </div>

                  <details className="border-t pt-4">
                    <summary className="cursor-pointer text-gray-600 font-medium hover:text-gray-800">
                      Technical Specifications
                    </summary>
                    <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-600">
                      {dataset.technicalSpecs}
                    </div>
                  </details>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t">
                    <Button size="sm" variant="default">
                      <Download className="h-4 w-4 mr-2" />
                      Download Free Dataset
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Usage Instructions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Different Audiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">👥 How You Can Use Our Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
                <CardTitle>🚜 For Farmers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Use our technology to monitor your livestock's environmental impact and potentially qualify for carbon credits.
                </p>
                <Button variant="outline" size="sm">Learn About Implementation</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle>🔬 For Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access our complete datasets, code, and research papers to build upon our work or create new innovations.
                </p>
                <Button variant="outline" size="sm">Access Research Materials</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-purple-700" />
                </div>
                <CardTitle>💼 For Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Integrate our emission monitoring technology into your agricultural products or environmental solutions.
                </p>
                <Button variant="outline" size="sm">Partnership Opportunities</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="py-8">
              <div className="text-center mb-6">
                <h4 className="font-semibold text-blue-900 mb-4">📄 Using Our Work? Please Cite Us!</h4>
                <p className="text-blue-800 mb-6">
                  If our research helps your work, please give us credit by citing our papers. 
                  This helps other researchers find and build upon our discoveries.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <div className="text-blue-800 font-semibold mb-2 text-center">📊 For Journal Articles (2025)</div>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 overflow-x-auto">
                    <pre className="whitespace-pre text-xs">
{`@article{embaby2025optical,
  title={Optical gas imaging and deep learning for quantifying enteric methane emissions from cattle under different diets},
  author={Embaby, Mohamed G and Sarker, Toqi Tahamid and AbuGhazaleh, Amer and Ahmed, Khaled R},
  journal={IET Image Processing},
  volume={19}, number={1}, pages={e13327}, year={2025}, publisher={Wiley Online Library}
}`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <div className="text-blue-800 font-semibold mb-2 text-center">🏆 For Conference Papers (2024)</div>
                  <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 overflow-x-auto">
                    <pre className="whitespace-pre text-xs">
{`@InProceedings{Sarker_2024_CVPR,
  author = {Sarker, Toqi Tahamid and Embaby, Mohamed G and Ahmed, Khaled R and Abughazaleh, Amer},
  title = {Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock in Optical Gas Imaging},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops},
  month = {June}, year = {2024}, pages = {5489-5497}
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make Farming More Sustainable?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a farmer wanting to reduce emissions, a researcher building on our work, 
            or a company developing solutions - our technology is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <a href="https://github.com/toqitahamid/Gasformer" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Get Started - It's Free
              </a>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <Link href="/research">
                🧪 Learn How It Works
              </Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            ✅ Open Source  ✅ No Cost  ✅ Published Research  ✅ Real-World Tested
          </p>
        </div>
      </section>
    </div>
  )
} 
} 