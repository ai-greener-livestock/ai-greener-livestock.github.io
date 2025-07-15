import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Khaled R. Ahmed",
      role: "Principal Investigator",
      title: "Associate Professor & Graduate Program Director",
      department: "School of Computing",
      institution: "Southern Illinois University Carbondale",
      email: "khaled.ahmed@siu.edu",
      expertise: ["Computer Vision", "Machine Learning", "Deep Learning", "Software Engineering", "Distributed Systems", "Parallel Computing", "Big Data", "Intelligent Transport Systems"],
      description: "Dr. Ahmed leads the AI and computer vision aspects of the project, focusing on developing advanced deep learning models for methane detection and quantification. With over 19 years of experience in academia, research, and industry, he previously served as Associate Professor at King Faisal University and was a postdoctoral researcher at University of Tokyo, Japan. He has authored 69 publications and edited four books, serving as PI and Co-PI on 11 funded research projects including three current federal/state research funds.",
      education: "Ph.D. in Computer Science",
      photo: "/team/khaled-ahmed.png"
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
      description: "Dr. AbuGhazaleh brings expertise in livestock nutrition and methane production, leading the experimental design and biological validation aspects of the research. After completing his PhD, he worked as a research scientist in the Department of Animal Science at Clemson University, South Carolina. He currently serves as coordinator for the department's Online Companion Animal Nutrition Program and advisor for the Saluki Service Dawgs Club.",
      education: "Ph.D. in Dairy Science, South Dakota State University",
      photo: "/team/amer-abughazaleh.png"
    },
    {
      id: 3,
      name: "Mohamed G. Embaby, PhD",
      role: "Postdoctoral Researcher",
      title: "Postdoctoral Researcher at UC Davis (Clear Center)",
      department: "University of California, Davis", 
      institution: "Formerly: Southern Illinois University Carbondale",
      email: "mohamed.embaby@siu.edu",
      expertise: ["Animal Nutrition", "Gas Chromatography", "In Vitro Fermentation", "Statistical Analysis", "Remote Sensing", "GIS", "Environmental Sciences", "Dairy Cattle Production"],
      description: "Dr. Embaby contributed expertise in experimental design, laboratory analysis, and data interpretation for the agricultural and nutritional aspects of the research during his time at SIU. He has over 8 years of research experience, previously serving as Research Assistant at the National Research Centre in Egypt's Dairy Cattle Production Department, and has background in statistics and geoinformation systems. He is now continuing his postdoctoral research at UC Davis.",
      education: "Ph.D. in Agricultural Sciences, Southern Illinois University Carbondale (2018-2024); M.Sc. in Geoinformation in Environmental Management, Mediterranean Agronomic Institute of Chania (2013-2016)",
      photo: "/team/mohamed-embaby.png"
    },
    {
        id: 4,
        name: "Toqi Tahamid Sarker",
        role: "PhD Student",
        title: "Graduate Research Assistant",
        department: "School of Computing",
        institution: "Southern Illinois University Carbondale", 
        email: "toqitahamid.sarker@siu.edu",
        expertise: ["Computer Vision", "Semantic Segmentation", "Object Detection/Tracking", "Transformer Architectures", "Deep Learning", "PyTorch"],
        description: "Toqi is a second-year PhD student in Computer Science, focusing on developing the Gasformer architecture and advancing AI techniques for environmental monitoring applications. ",
        education: "Ph.D. in Computer Science, Southern Illinois University Carbondale (Fall 2023 - Present); B.Sc. in Computer Science and Engineering, BRAC University, Bangladesh (2012-2016)",
        photo: "/team/toqi-tahamid-sarker.png"
      },
      {
        id: 5,
        name: "Taminul Islam",
        role: "Research Assistant",
        title: "Graduate Research Assistant",
        department: "School of Computing",
        institution: "Southern Illinois University Carbondale",
        email: "taminul.islam@siu.edu",
        expertise: ["Computer Vision", "Deep Learning", "Semantic Segmentation", "Object Detection/Tracking", "Natural Language Processing", "Healthcare AI", "Agricultural AI", "Cybersecurity"],
        description: "Taminul is a PhD student in Computer Science at the BASE: Bridging AI, Systems, and Environment Research lab, focusing on computer vision and deep learning applications in agriculture. He has published research papers in NLP, cybersecurity, healthcare, and agriculture through prestigious publishers including IEEE, Springer, Taylor & Francis, and Elsevier. As an active mentor, he has guided approximately 80 students in research projects and has reviewed over 25 articles for various journals and conferences.",
        education: "Ph.D. in Computer Science, Southern Illinois University Carbondale (Present); B.Sc. in Computer Science and Engineering, Daffodil International University, Bangladesh (First-class honors with Full Free Scholarship)",
        photo: "/team/taminul-islam.png"
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
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Research Team
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
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
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">{member.name}</CardTitle>
                    <div className="space-y-1">
                      <Badge variant="default" className="bg-blue-600">
                        {member.role}
                      </Badge>
                      <CardDescription className="text-sm">
                        {member.title}<br/>
                        {member.department}<br/>
                        {member.institution}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{member.description}</p>
                    
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">Education:</h4>
                      <p className="text-sm text-gray-600">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
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



      {/* Contact */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Interested in Collaboration?
          </h2>
                        <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
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

        </div>
      </section>
    </div>
  )
} 