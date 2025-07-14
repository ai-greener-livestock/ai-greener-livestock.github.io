import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Github, FileText, Database, ExternalLink, Book } from "lucide-react"

export default function ResourcesPage() {
  const publications = [
    {
      id: 1,
      title: "Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock in Optical Gas Imaging",
      authors: "Toqi Tahamid Sarker, Mohamed G Embaby, Khaled R Ahmed, Amer AbuGhazaleh",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops",
      year: "2024",
      pages: "5489-5497",
      type: "Conference Paper",
      status: "Published",
      doi: "10.1109/CVPRW63382.2024.00558",
      links: {
        pdf: "#",
        github: "https://github.com/toqitahamid/Gasformer",
        doi: "https://doi.org/10.1109/CVPRW63382.2024.00558"
      }
    },
    {
      id: 2,
      title: "Optical gas imaging and deep learning for quantifying enteric methane emissions from cattle under different diets",
      authors: "Mohamed G Embaby, Toqi Tahamid Sarker, Khaled R Ahmed, Amer AbuGhazaleh",
      venue: "IET Image Processing",
      year: "2025",
      volume: "19",
      issue: "1",
      pages: "e13327",
      type: "Journal Article",
      status: "Published",
      doi: "10.1049/ipr2.12934",
      links: {
        pdf: "#",
        doi: "https://doi.org/10.1049/ipr2.12934"
      }
    }
  ]

  const datasets = [
    {
      id: 1,
      title: "Controlled Methane Release (MR) Dataset",
      description: "Optical gas imaging dataset of controlled methane releases at known flow rates",
      size: "9,237 labeled images",
      format: "640×480 thermal images with segmentation masks",
      specifications: "FLIR GF77 camera, flow rates 10-100 SCCM, controlled laboratory conditions",
      license: "Restricted Access",
      downloadSize: "2.8 GB",
      lastUpdated: "December 2024",
      status: "Private"
    },
    {
      id: 2,
      title: "Dairy Cow Rumen Gas (CR) Dataset",
      description: "Real methane emissions from Holstein dairy cow rumen samples",
      size: "340 labeled images",
      format: "640×480 thermal images with emission annotations",
      specifications: "24-hour batch culture system, 39°C incubation, authentic farm conditions",
      license: "Restricted Access",
      downloadSize: "0.1 GB",
      lastUpdated: "December 2024",
      status: "Private"
    },
    {
      id: 3,
      title: "Controlled Diet (CD) Dataset",
      description: "Methane emission data across different cattle dietary treatments",
      size: "4,885 labeled images",
      format: "Multi-class emission classifications with dietary metadata",
      specifications: "4 dietary treatments including seaweed supplement, gas chromatography validated",
      license: "Creative Commons Attribution 4.0",
      downloadSize: "1.5 GB",
      lastUpdated: "December 2024",
      status: "Available"
    }
  ]

  const codeRepositories = [
    {
      id: 1,
      title: "Gasformer Model Implementation",
      description: "Complete implementation of the Gasformer architecture with training and inference code",
      language: "Python",
      framework: "PyTorch",
      repository: "https://github.com/toqitahamid/Gasformer",
      features: ["Pre-trained models", "Training scripts", "Evaluation metrics", "Data loaders"],
      documentation: "Complete setup and usage instructions",
      license: "MIT License"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
              Research Resources
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Publications, Data & Code
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              All research outputs from our methane emission detection study are freely available.
              Access our publications, datasets, and source code to build upon our work.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Publications</h2>
              <p className="text-lg text-gray-600">
                Peer-reviewed research papers documenting our methodology and findings
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((paper) => (
                <Card key={paper.id} className="border-l-4 border-blue-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="default" className="bg-green-600">
                            {paper.status}
                          </Badge>
                          <Badge variant="outline">{paper.type}</Badge>
                          <span className="text-sm text-gray-500">{paper.year}</span>
                        </div>
                        <CardTitle className="text-xl leading-tight mb-2">{paper.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-sm mb-2">{paper.authors}</CardDescription>
                        <div className="text-sm text-gray-700">
                          <strong>{paper.venue}</strong>
                          {paper.volume && `, Vol. ${paper.volume}`}
                          {paper.issue && ` (${paper.issue})`}
                          {paper.pages && `, pp. ${paper.pages}`}
                          , {paper.year}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" variant="default" asChild>
                        <a href={paper.links.doi} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Paper (DOI)
                        </a>
                      </Button>
                      {paper.links.pdf && paper.links.pdf !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      )}
                      {paper.links.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🗂️ Datasets</h2>
              <p className="text-lg text-gray-600">
                Labeled datasets for methane detection research. The Controlled Diet (CD) dataset is openly available, 
                while other datasets require permission for research collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {datasets.map((dataset) => (
                <Card key={dataset.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Database className="h-8 w-8 text-purple-600 mb-3" />
                      <Badge 
                        variant="outline" 
                        className={dataset.status === "Available" ? "text-green-700 border-green-700" : "text-red-700 border-red-700"}
                      >
                        {dataset.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{dataset.title}</CardTitle>
                    <CardDescription>{dataset.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Size:</span>
                        <p className="text-gray-600">{dataset.size}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Download:</span>
                        <p className="text-gray-600">{dataset.downloadSize}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700 text-sm">Format:</span>
                      <p className="text-sm text-gray-600">{dataset.format}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700 text-sm">Specifications:</span>
                      <p className="text-xs text-gray-600">{dataset.specifications}</p>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="flex justify-between text-xs text-gray-500 mb-3">
                        <span>License: {dataset.license}</span>
                        <span>Updated: {dataset.lastUpdated}</span>
                      </div>
                      {dataset.status === "Available" ? (
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-1" />
                            Info
                          </Button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1" variant="outline" disabled>
                            <Download className="h-4 w-4 mr-1" />
                            Restricted
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-1" />
                            Request Access
                          </Button>
                        </div>
                      )}
                      {dataset.status === "Private" && (
                        <p className="text-xs text-gray-500 mt-2">
                          Contact research team for collaboration access
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Repositories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💻 Source Code</h2>
              <p className="text-lg text-gray-600">
                Complete implementation code and tools for reproducing our results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {codeRepositories.map((repo) => (
                <Card key={repo.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Github className="h-6 w-6 text-gray-700" />
                      <Badge variant="outline">{repo.language}</Badge>
                      <Badge variant="secondary">{repo.license}</Badge>
                    </div>
                    <CardTitle className="text-lg">{repo.title}</CardTitle>
                    <CardDescription>{repo.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="font-medium text-gray-700 text-sm">Framework:</span>
                      <p className="text-sm text-gray-600">{repo.framework}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700 text-sm">Features:</span>
                      <ul className="text-sm text-gray-600 ml-4 mt-1">
                        {repo.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex gap-3">
                        <Button size="sm" asChild className="flex-1">
                          <a href={repo.repository} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Repository
                          </a>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Book className="h-4 w-4 mr-2" />
                          Docs
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📝 How to Cite</h2>
              <p className="text-lg text-gray-600">
                If you use our work, please cite the appropriate papers using these references
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-blue-800">BibTeX Citations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="text-blue-800 font-medium mb-2">Conference Paper (CVPR 2024)</div>
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

                  <div className="bg-white p-4 rounded border">
                    <div className="text-blue-800 font-medium mb-2">Journal Article (IET 2025)</div>
                    <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 overflow-x-auto">
                      <pre className="whitespace-pre text-xs">
{`@article{embaby2025optical,
  title={Optical gas imaging and deep learning for quantifying enteric methane emissions from cattle under different diets},
  author={Embaby, Mohamed G and Sarker, Toqi Tahamid and AbuGhazaleh, Amer and Ahmed, Khaled R},
  journal={IET Image Processing}, volume={19}, number={1}, pages={e13327}, year={2025}, publisher={Wiley Online Library}
}`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Access */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help or Collaboration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our research team for dataset access, code implementation assistance, 
              or collaboration opportunities in climate and agricultural research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                <a href="/team">
                  👥 Meet the Research Team
                </a>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700">
                <a href="mailto:khaled.ahmed@siu.edu">
                  ✉️ Contact Principal Investigator
                </a>
              </Button>
            </div>
            <div className="text-sm mt-6 opacity-75">
              <p>USDA National Institute of Food and Agriculture Award #2022-70001-37404</p>
              <p>Southern Illinois University Carbondale</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}