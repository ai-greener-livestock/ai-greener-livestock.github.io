import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, GraduationCap, Users } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Khaled R. Ahmed",
      role: "Principal Investigator",
      title: "Assistant Professor",
      department: "School of Computing",
      institution: "Southern Illinois University Carbondale",
      email: "khaled.ahmed@siu.edu",
      expertise: ["Computer Vision", "Machine Learning", "Optical Gas Imaging", "Deep Learning"],
      description: "Dr. Ahmed leads the AI and computer vision aspects of the project, focusing on developing advanced deep learning models for methane detection and quantification.",
      education: "Ph.D. in Computer Science",
      photo: "/team/khaled-ahmed.jpg" // placeholder
    },
    {
      id: 2,
      name: "Dr. Amer AbuGhazaleh",
      role: "Co-Principal Investigator", 
      title: "Professor",
      department: "School of Agricultural Sciences",
      institution: "Southern Illinois University Carbondale",
      email: "aabugha@siu.edu",
      expertise: ["Animal Nutrition", "Ruminant Physiology", "Methane Mitigation", "Feed Science"],
      description: "Dr. AbuGhazaleh brings expertise in livestock nutrition and methane production, leading the experimental design and biological validation aspects of the research.",
      education: "Ph.D. in Animal Sciences",
      photo: "/team/amer-abughazaleh.jpg" // placeholder
    },
    {
      id: 3,
      name: "Mohamed G. Embaby",
      role: "Postdoctoral Researcher",
      title: "Postdoctoral Research Associate",
      department: "School of Agricultural Sciences", 
      institution: "Southern Illinois University Carbondale",
      email: "mohamed.embaby@siu.edu",
      expertise: ["Animal Nutrition", "Gas Chromatography", "In Vitro Fermentation", "Statistical Analysis"],
      description: "Dr. Embaby contributes expertise in experimental design, laboratory analysis, and data interpretation for the agricultural and nutritional aspects of the research.",
      education: "Ph.D. in Animal Sciences",
      photo: "/team/mohamed-embaby.jpg" // placeholder
    },
    {
        id: 4,
        name: "Toqi Tahamid Sarker",
        role: "PhD Student",
        title: "Graduate Research Assistant",
        department: "School of Computing",
        institution: "Southern Illinois University Carbondale", 
        email: "toqitahamid.sarker@siu.edu",
        expertise: ["Computer Vision", "Semantic Segmentation", "Transformer Architectures", "PyTorch"],
        description: "Toqi is pursuing his PhD in Computer Science, focusing on developing the Gasformer architecture and advancing AI techniques for environmental monitoring applications.",
        education: "M.S. in Computer Science, pursuing Ph.D.",
        photo: "/team/toqi-sarker.jpg" // placeholder
      },
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
              Research Team
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Research Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              An interdisciplinary team combining expertise in computer science, agricultural sciences, 
              and animal nutrition to advance methane emission detection and mitigation technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="h-full border-l-4 border-blue-400 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <div className="space-y-1">
                      <Badge variant="default" className="bg-blue-600">
                        {member.role}
                      </Badge>
                      <CardDescription className="text-sm">
                        {member.title}<br/>
                        {member.department}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{member.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm mb-2">Education:</h4>
                      <p className="text-sm text-gray-600">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          {member.email}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center border-2 border-green-200">
              <CardContent className="py-12">
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interdisciplinary Collaboration
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our team brings together computer science and agricultural expertise to address 
                  climate challenges through innovative AI and experimental approaches.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Computer Science Team:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• AI model development (Gasformer)</li>
                      <li>• Computer vision and image processing</li>
                      <li>• Deep learning architecture design</li>
                      <li>• Real-time detection systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">Agricultural Sciences Team:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Experimental design and execution</li>
                      <li>• Ruminant nutrition and physiology</li>
                      <li>• Gas chromatography analysis</li>
                      <li>• Feed formulation and testing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We welcome collaborations with researchers, industry partners, and institutions 
            working on climate solutions and agricultural sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <a href="mailto:khaled.ahmed@siu.edu">
                Contact Principal Investigator
              </a>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
              <a href="mailto:aabugha@siu.edu">
                Contact Co-Principal Investigator
              </a>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            USDA NIFA Award #2022-70001-37404 • Southern Illinois University Carbondale
          </p>
        </div>
      </section>
    </div>
  )
} 