import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, MapPin, Award, Users, DollarSign, Mail, Phone, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              USDA NIFA Award #2022-70001-37404
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI for Greener Livestock
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A groundbreaking USDA-funded research project developing AI solutions to help farmers 
              monitor and reduce methane emissions from cattle – contributing to the fight against climate change 
              while improving farm efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why This Project Matters</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-2">The Climate Challenge</h3>
                  <p className="text-sm text-red-700">
                    Livestock produce about <strong>6% of all global greenhouse gas emissions</strong>. 
                    With the world population growing to 10.9 billion by 2100, we need solutions that 
                    let us feed more people while reducing environmental impact.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">Our Solution</h3>
                  <p className="text-sm text-green-700">
                    We&apos;re developing AI-powered tools that help farmers <strong>see invisible methane emissions</strong> in
                     real-time, enabling them to make immediate changes that reduce environmental impact 
                    while often saving money on feed.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">The Impact</h3>
                  <p className="text-sm text-blue-700">
                    Our research shows that simple dietary changes can reduce methane emissions by up to <strong>98%</strong>, 
                    and our AI can detect these changes instantly – making sustainable farming practical and profitable.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 text-green-700 mx-auto mb-2" />
                  <CardTitle className="text-lg">Project Duration</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-green-700">2022-2025</p>
                  <p className="text-sm text-gray-600">3-year research initiative</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <DollarSign className="h-8 w-8 text-green-700 mx-auto mb-2" />
                  <CardTitle className="text-lg">Funding Source</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-medium text-green-700">USDA NIFA</p>
                  <p className="text-sm text-gray-600">National Institute of Food and Agriculture</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-700 mx-auto mb-2" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-medium text-green-700">Southern Illinois University Carbondale</p>
                  <p className="text-sm text-gray-600">Carbondale, IL, USA</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Award className="h-8 w-8 text-green-700 mx-auto mb-2" />
                  <CardTitle className="text-lg">Award Number</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-green-700">2022-70001-37404</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We're Trying to Achieve</h2>
              <p className="text-xl text-gray-600">
                Our research focuses on practical solutions that benefit farmers, the environment, and society
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Environmental Impact Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">What We're Building:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>AI that can instantly detect invisible methane emissions</li>
                      <li>Real-time feedback systems for farmers</li>
                      <li>Tools to test which feeds produce less emissions</li>
                      <li>Educational resources for sustainable farming</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1">Expected Impact:</h4>
                    <p className="text-sm text-green-700">
                      Help reduce livestock methane emissions while maintaining or improving farm profitability, 
                      contributing to global climate change mitigation efforts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Educational & Practical Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Who Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Farmers seeking sustainable and profitable practices</li>
                      <li>Researchers studying agricultural emissions</li>
                      <li>Students learning about AI and agriculture</li>
                      <li>Policymakers developing environmental regulations</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">Knowledge Sharing:</h4>
                    <p className="text-sm text-blue-700">
                      All our research, data, and code are made publicly available to accelerate 
                      global efforts in sustainable agriculture and AI development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Research Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our interdisciplinary team combines expertise in computer science, agricultural sciences, 
              and sustainable livestock management to tackle this complex challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principal Investigator */}
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-green-700 mr-2" />
                      Dr. Khaled Ahmed
                    </CardTitle>
                    <CardDescription className="font-medium text-green-700">Principal Investigator</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>School of Computing, SIU</strong></p>
                  <p className="text-sm text-gray-600">
                    <strong>Expertise:</strong> Computer Vision, AI, Deep Learning for Agricultural Applications
                  </p>
                  <p className="text-sm text-gray-600">
                    Dr. Ahmed leads the AI development and computer vision aspects of the project, 
                    developing the advanced algorithms that can detect methane emissions in real-time.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a 
                      href="mailto:khaled.ahmed@siu.edu"
                      className="text-green-700 hover:underline text-sm"
                    >
                      khaled.ahmed@siu.edu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Co-Principal Investigator */}
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-blue-700 mr-2" />
                      Dr. Amer AbuGhazaleh
                    </CardTitle>
                    <CardDescription className="font-medium text-blue-700">Co-Principal Investigator</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>School of Agricultural Sciences, SIU</strong></p>
                  <p className="text-sm text-gray-600">
                    <strong>Expertise:</strong> Ruminant Nutrition, Methane Mitigation Strategies
                  </p>
                  <p className="text-sm text-gray-600">
                    Dr. AbuGhazaleh brings deep expertise in livestock nutrition and methane reduction, 
                    focusing on practical dietary interventions that farmers can implement.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a 
                      href="mailto:aabugha@siu.edu"
                      className="text-blue-700 hover:underline text-sm"
                    >
                      aabugha@siu.edu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Postdoctoral Researcher */}
            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-purple-700 mr-2" />
                      Dr. Mohamed Embaby
                    </CardTitle>
                    <CardDescription className="font-medium text-purple-700">Postdoctoral Researcher</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>USC San Diego (formerly SIU Carbondale)</strong></p>
                  <p className="text-sm text-gray-600">
                    <strong>Expertise:</strong> Animal Nutrition, Sustainable Livestock Management
                  </p>
                  <p className="text-sm text-gray-600">
                    Dr. Embaby conducts hands-on experiments testing different diets and measuring 
                    their impact on methane production, bridging the gap between lab research and farm applications.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a 
                      href="mailto:mohamed.embaby@siu.edu"
                      className="text-purple-700 hover:underline text-sm"
                    >
                      mohamed.embaby@siu.edu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PhD Student */}
            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-orange-700 mr-2" />
                      Toqi Tahamid Sarker
                    </CardTitle>
                    <CardDescription className="font-medium text-orange-700">PhD Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600"><strong>School of Computing, SIU</strong></p>
                  <p className="text-sm text-gray-600">
                    <strong>Expertise:</strong> Machine Learning, Computer Vision
                  </p>
                  <p className="text-sm text-gray-600">
                    Toqi is the lead developer of the "Gasformer" AI model, working on the cutting-edge 
                    machine learning algorithms that make automatic methane detection possible.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a 
                      href="mailto:toqitahamid.sarker@siu.edu"
                      className="text-orange-700 hover:underline text-sm"
                    >
                      toqitahamid.sarker@siu.edu
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Institution Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Southern Illinois University</h2>
              <p className="text-xl text-gray-600">
                A leading public research university with strong programs in agriculture and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>School of Computing</CardTitle>
                  <CardDescription>AI and Computer Science Research</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Faner Hall, SIU Carbondale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">(618) 453-6033</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Home to cutting-edge research in artificial intelligence, machine learning, 
                    and computer vision applications for solving real-world problems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>School of Agricultural Sciences</CardTitle>
                  <CardDescription>Sustainable Agriculture Research</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Agriculture Building, SIU Carbondale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">(618) 453-2469</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Leading research in sustainable agriculture practices, livestock management, 
                    and environmental stewardship.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">University Address</h3>
                <p className="text-gray-600">
                  Southern Illinois University Carbondale<br />
                  1263 Lincoln Drive<br />
                  Carbondale, IL 62901<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for new partnerships and collaborations to expand the impact 
              of our research and make sustainable farming more accessible worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle>For Farmers & Ranchers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Interested in testing our technology on your farm or learning about emission-reducing feed strategies?
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Beta testing opportunities for our monitoring systems</li>
                  <li>Free consultation on feed optimization</li>
                  <li>Potential cost savings and environmental benefits</li>
                  <li>Support for sustainable farming certifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle>For Researchers & Universities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Join our research network or use our data and tools for your own studies.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Joint research proposals and publications</li>
                  <li>Access to our datasets and AI models</li>
                  <li>Student exchange and collaboration programs</li>
                  <li>Shared equipment and laboratory time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle>For Technology Companies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Partner with us to bring this technology to market and scale its impact.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Licensing opportunities for commercial development</li>
                  <li>Custom AI model development and consulting</li>
                  <li>Integration with existing farm management systems</li>
                  <li>Co-development of hardware solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you're a farmer wanting to try our technology, a researcher interested in our data, 
                  or a company looking to bring these solutions to market – we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="default">
                    <a href="mailto:khaled.ahmed@siu.edu">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Our Team
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://github.com/toqitahamid/Gasformer" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Our Code
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/resources">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resources
                    </Link>
                  </Button>
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
            Join the Future of Sustainable Farming
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can make agriculture more sustainable, profitable, and climate-friendly. 
            Learn about our research, try our technology, or become part of our growing network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <Link href="/research">
                🔬 See Our Research
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
              <a href="mailto:khaled.ahmed@siu.edu">
                📧 Contact Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 