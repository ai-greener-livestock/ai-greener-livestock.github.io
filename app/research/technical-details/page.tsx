import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowLeft,
  FileText,
  Code,
  Download
} from "lucide-react"

export default function TechnicalDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <Button asChild variant="ghost" className="mr-4">
                <Link href="/research">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Research Overview
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
                Technical Research Details
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Research Timeline
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                AI-Driven Methane Detection for Livestock Monitoring - Complete Technical Documentation
              </p>
            </div>
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
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Livestock methane emissions represent a critical challenge in climate science, accounting for 32% of human-caused methane production globally. As the world&apos;s population is projected to reach 9.7 billion by 2050, the demand for livestock products will increase by 70%, making automated monitoring systems essential for developing effective climate mitigation strategies. Our comprehensive research program addresses this challenge through the development of cutting-edge artificial intelligence techniques combined with optical gas imaging technology to detect, segment, and quantify methane emissions from livestock operations.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                This three-phase research initiative demonstrates a systematic progression from fundamental proof-of-concept work to practical real-world applications. Each phase builds upon the previous work, incorporating lessons learned and expanding the scope of investigation to ultimately deliver a comprehensive solution for livestock methane monitoring that can be deployed in actual farming environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Foundation */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl text-blue-800 mb-3">Phase 1: Foundation - Gasformer (2024)</CardTitle>
                    <p className="text-xl text-blue-700">Establishing Transformer-Based Methane Detection</p>
                  </div>
                  <Badge className="bg-blue-600 text-white text-lg px-4 py-2">2024</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="research-phase prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The foundation of our research program began with addressing a fundamental limitation in existing methane detection systems. Traditional computer vision approaches for gas detection had primarily relied on convolutional neural networks designed for high-flow industrial leak detection, which proved inadequate for the subtle, low-concentration methane emissions characteristic of livestock operations. Our first major contribution was the development of Gasformer, the first transformer-based architecture specifically designed for detecting and segmenting methane plumes at the low flow rates typical of ruminant emissions.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Gasformer architecture represents a significant departure from conventional approaches by leveraging the global attention mechanisms inherent in transformer models. The encoder employs a Mix Vision Transformer (MiT-B0) architecture that generates multi-scale feature representations without requiring explicit positional encoding. This design choice was particularly crucial for methane plume detection, where the irregular and dynamic nature of gas emissions demands the ability to capture both fine-grained boundary details and broader contextual information simultaneously.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The decoder component utilizes an innovative Light-Ham architecture that incorporates Hamburger Matrix Decomposition to efficiently capture long-range dependencies while maintaining computational efficiency. This combination proved essential for accurately delineating the often-subtle boundaries between methane plumes and background thermal signatures in optical gas imaging data.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our experimental methodology involved the use of a FLIR GF77 optical gas imaging camera, an uncooled long-wave infrared system operating in the 7-8.5 μm spectral range. This range was specifically chosen to align with methane&apos;s primary absorption band at 7.7±0.1 μm, enabling the visualization of methane plumes that would otherwise be invisible to conventional cameras. To ensure consistent detection conditions, we developed a novel experimental setup using a block of ice as the background, providing the necessary temperature contrast for reliable methane visualization.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The research phase produced two comprehensive datasets that have since become valuable resources for the broader research community. The Controlled Methane Release dataset comprises 9,237 images captured across flow rates ranging from 10 to 100 Standard Cubic Centimeters per Minute (SCCM), with each flow rate precisely controlled using a digital pressure controller connected to a methane calibration gas cylinder. This dataset includes multiple color mode representations (white hot, black hot, and rainbow) to account for different visualization preferences and environmental conditions.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perhaps more significantly, we created the Dairy Cow Rumen Gas dataset, which contains 340 images derived from actual dairy cow rumen gas samples. These samples were collected using a sophisticated 24-hour ANKOM batch culture system that simulates rumen fermentation conditions, providing a direct link between controlled laboratory conditions and real livestock emissions. This dataset represents the first collection of its kind, bridging the gap between theoretical methane detection and practical livestock monitoring applications.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The results from this foundational phase exceeded expectations, with Gasformer achieving a mean Intersection over Union (mIoU) of 88.56% on the livestock dataset, significantly surpassing previous CNN-based approaches. Equally important was the model&apos;s computational efficiency, operating at 97.45 frames per second with only 3.652 million parameters, making it suitable for real-time monitoring applications. The successful transfer learning from controlled laboratory conditions to real livestock scenarios demonstrated the practical viability of the approach and set the stage for more comprehensive validation studies.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Read Full Paper
                    </Button>
                    <Button variant="outline">
                      <Code className="h-4 w-4 mr-2" />
                      Access Code
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Datasets
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 2: Comprehensive Validation */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl text-green-800 mb-3">Phase 2: Comprehensive Validation - Multi-Model Analysis (2025)</CardTitle>
                    <p className="text-xl text-green-700">Quantifying Dietary Impact on Methane Emissions</p>
                  </div>
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2">2025</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="research-phase prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Building upon the success of the initial Gasformer development, the second phase of our research program focused on comprehensive validation of the optical gas imaging approach against established analytical chemistry methods. This phase was driven by the recognition that while our initial results were promising, widespread adoption of AI-based methane monitoring would require rigorous validation against gold-standard measurement techniques used in agricultural research.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The experimental design for this phase represented a significant expansion in both scope and complexity. We developed a multi-instrument validation approach that simultaneously employed optical gas imaging, gas chromatography, and laser methane detection to provide comprehensive characterization of methane emissions under controlled conditions. This triangulated measurement approach allowed us to establish direct correlations between visual plume characteristics captured by OGI cameras and quantitative concentration measurements from analytical instruments.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The biological component of this research involved the creation of four single-flow continuous fermenters designed to simulate cow rumen conditions with high fidelity. Each fermenter contained 700 mL of rumen liquor collected from fistulated dairy cattle, maintained at 39°C with continuous stirring and CO₂ flushing to preserve anaerobic conditions essential for proper rumen microorganism function. The fermenters were fed different dietary treatments to investigate the relationship between feed composition and methane production: a control diet with 50:50 forage to concentrate ratio, the same control diet supplemented with bromoform as an emission inhibitor, a low forage diet (20:80 ratio), and a high forage diet (80:20 ratio).
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Controlled Diet dataset that emerged from this work represents the most comprehensive collection of its kind, containing 4,885 methane plume images categorized into three distinct concentration classes based on gas chromatography measurements. Class-1 images (166-171 ppm) corresponded to the control diet, Class-2 images (300-334 ppm) to the low forage treatment, and Class-3 images (457-510 ppm) to the high forage diet. This classification system provided an unprecedented opportunity to investigate the relationship between dietary composition and visual plume characteristics.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The validation results provided compelling evidence for the reliability of the optical gas imaging approach. Laser methane detector readings followed patterns nearly identical to those observed in gas chromatography measurements, with correlation coefficients exceeding 0.95 across all dietary treatments. These findings established that visual plume analysis could serve as a reliable proxy for quantitative methane concentration measurements, opening the door for practical field applications where traditional analytical methods would be impractical.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    From a biological perspective, the research yielded important insights into dietary mitigation strategies. The high forage treatment produced significantly higher methane concentrations compared to all other treatments (p &lt; 0.01), consistent with established understanding of rumen fermentation dynamics. Most remarkably, the bromoform-supplemented diet resulted in nearly complete methane inhibition, with 98% reduction compared to control conditions, providing quantitative validation of this potential emission reduction strategy.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The comparative analysis of six different semantic segmentation architectures on this dataset revealed that Gasformer maintained its superior performance, achieving 85.1% mIoU and 91.72% mean F-score while remaining the most computationally efficient option with 3.65 million parameters and 64.5 frames per second processing speed. These results demonstrated the robustness of the transformer-based approach across different experimental conditions and validated its suitability for practical deployment.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This phase established the first comprehensive framework for using optical gas imaging combined with deep learning for livestock methane quantification across different dietary treatments. The work provided quantitative evidence that visual plume characteristics could reliably indicate both the presence and relative concentration of methane emissions, while simultaneously demonstrating the potential for dietary interventions to significantly reduce livestock methane production.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Read Full Paper
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Access CD Dataset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 3: Real-World Application */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl text-purple-800 mb-3">Phase 3: Real-World Application - GasTwinFormer (2025)</CardTitle>
                    <p className="text-xl text-purple-700">Integrated Segmentation and Dietary Classification</p>
                  </div>
                  <Badge className="bg-purple-600 text-white text-lg px-4 py-2">2025</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="research-phase prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The culmination of our research program involved transitioning from controlled laboratory environments to real-world livestock operations, presenting an entirely new set of challenges and opportunities. The third phase focused on developing a unified framework capable of not only detecting and segmenting methane emissions but also simultaneously classifying the dietary treatments that produced them. This dual-task approach represented a significant advancement in practical utility, as it would enable farmers and researchers to obtain immediate feedback on the effectiveness of different feeding strategies for emission reduction.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The development of GasTwinFormer required substantial architectural innovation to address the complexities of real livestock environments. The new hybrid encoder design alternates between efficient multi-head attention and locally-grouped self-attention mechanisms, providing an optimal balance between global context understanding and fine-grained local feature detection. This hybrid approach proved essential for handling the increased variability in real-world scenarios, where factors such as animal movement, changing environmental conditions, and natural variations in emission patterns create significantly more challenging detection scenarios than controlled laboratory settings.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The transition to live animal studies necessitated careful attention to animal welfare and experimental ethics. Our research protocol, approved under IACUC guidelines, involved 12 postpartum beef cows maintained under controlled feeding conditions for 30 days. The animals were divided into three dietary treatment groups: high forage animals receiving 100% hay, mixed diet animals receiving 50% hay and 50% grain, and high grain animals receiving 20% hay and 80% grain. This experimental design allowed us to investigate emission patterns across the full spectrum of typical livestock feeding regimens while maintaining rigorous scientific controls.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The data collection process involved the use of a FLIR Gx320 optical gas imaging camera positioned approximately four feet from each animal during 20-minute recording sessions. Unlike the static laboratory setup used in previous phases, this configuration required accommodation of natural animal behavior while maintaining optimal imaging conditions. The resulting dataset contains 11,694 manually annotated frames extracted from 19 thermal recordings, representing one of the largest collections of real livestock methane emission data ever assembled.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The annotation process for this dataset presented unique challenges due to the dynamic nature of bovine eructation patterns and the need to distinguish methane plumes from other thermal signatures in the complex farm environment. The distribution of annotated frames across dietary treatments reflects both biological emission differences and practical collection constraints: 4,658 frames from mixed diet animals (39.8%), 4,306 frames from high grain animals (36.8%), and 2,730 frames from high forage animals (23.4%).
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The introduction of dual-task learning represented a significant methodological advancement, requiring the development of novel loss functions and training procedures. The Gaussian Plume Weighted Dice Loss incorporated physical principles of gas dispersion behavior into the optimization process, resulting in improved boundary delineation compared to standard segmentation losses. This physics-informed approach demonstrated how domain knowledge could be effectively integrated into deep learning frameworks to achieve superior performance on specialized applications.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The results from this phase exceeded expectations across multiple dimensions. GasTwinFormer achieved 74.47% mIoU for methane segmentation while simultaneously maintaining perfect 100% accuracy for dietary classification across all test samples. The computational efficiency remained impressive at 114.9 frames per second with only 3.348 million parameters, demonstrating that the additional complexity of dual-task learning could be achieved without compromising real-time performance requirements.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perhaps most significantly, this phase demonstrated the practical viability of deploying AI-based methane monitoring systems in actual farming environments. The ability to simultaneously detect emissions and classify dietary treatments provides immediate actionable information for farm management decisions. Farmers can now obtain real-time feedback on the effectiveness of different feeding strategies, enabling adaptive management approaches that optimize both productivity and environmental impact.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The success of this phase establishes a foundation for widespread deployment of intelligent livestock monitoring systems. The combination of high accuracy, computational efficiency, and practical utility positions this technology for integration into commercial farming operations, potentially revolutionizing how the agricultural industry approaches emission monitoring and mitigation.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Read Full Paper
                    </Button>
                    <Button variant="outline">
                      <Code className="h-4 w-4 mr-2" />
                      Access Code
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Dataset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Evolution & Future Directions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Evolution &amp; Future Directions</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The progression of our research program demonstrates a carefully orchestrated evolution from fundamental algorithmic development to practical real-world application. The technical advancement across the three phases reflects not only improvements in model architecture and performance but also a deepening understanding of the complex relationships between dietary composition, rumen fermentation, and methane emission patterns.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The architectural evolution from single-task convolutional approaches through transformer-based methods to hybrid attention mechanisms and finally to dual-task learning frameworks represents a microcosm of broader trends in computer vision and artificial intelligence. Each advancement was driven by specific limitations encountered in the previous phase, resulting in targeted innovations that addressed real-world deployment challenges while advancing the state of the art in agricultural AI applications.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The dataset complexity progression from controlled laboratory conditions through in vitro fermentation simulations to live animal studies reflects the methodical approach necessary for developing robust AI systems for agricultural applications. Each phase provided validation of the previous work while introducing new challenges that drove further innovation. The cumulative dataset now represents the most comprehensive collection of annotated livestock methane emission data available to the research community.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our work has established several important precedents for the field of agricultural artificial intelligence. The development of the first transformer architecture specifically designed for livestock methane detection has opened new avenues for applying advanced AI techniques to agricultural monitoring challenges. The creation of the largest annotated dataset for agricultural gas emission analysis provides a foundation for future research by other groups. The novel dual-task framework combining detection and classification demonstrates how AI systems can provide multiple types of actionable information simultaneously, increasing their practical value for end users.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The comprehensive validation against analytical chemistry standards has established new benchmarks for rigor in agricultural AI research, demonstrating that computer vision approaches can achieve accuracy levels suitable for scientific and regulatory applications. The successful real-world deployment capability proven in Phase 3 provides a roadmap for transitioning other agricultural AI research from laboratory demonstrations to practical farming applications.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Current research directions building on this foundation include extension to multi-gas detection systems capable of simultaneously monitoring methane, carbon dioxide, and nitrous oxide emissions. The development of continuous monitoring systems for 24/7 automated farm surveillance represents another natural progression, potentially enabling the collection of longitudinal emission data that could reveal diurnal patterns and seasonal variations. AI-driven dietary recommendation systems that optimize feed composition for both productivity and environmental impact represent an exciting application of machine learning to agricultural decision support.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The global deployment potential for this technology is substantial, with ongoing work focused on adaptation to different livestock systems worldwide. Regional variations in feed composition, animal breeds, and farming practices require customization of both the AI models and the data collection protocols, presenting interesting research challenges in transfer learning and domain adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications &amp; Recognition</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                The research program has resulted in a strong publication record that reflects both the technical innovation and practical impact of the work. &quot;Gasformer: A Transformer-based Architecture for Segmenting Methane Emissions from Livestock in Optical Gas Imaging&quot; was presented at the CVPR Workshop on Computer Vision for Agriculture in 2024, where it received significant attention from both computer vision and agricultural research communities.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                The comprehensive validation study &quot;Optical gas imaging and deep learning for quantifying enteric methane emissions from rumen fermentation in vitro&quot; was published in IET Image Processing in 2025, providing detailed methodological information that enables replication and extension by other research groups. This publication has been particularly valuable for establishing the scientific credibility of optical gas imaging approaches in the agricultural research community.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                The culminating work &quot;GasTwinFormer: A Hybrid Vision Transformer for Livestock Methane Emission Segmentation and Dietary Classification in Optical Gas Imaging&quot; has been submitted to the International Conference on Computer Vision for 2025, representing the transition to high-impact computer vision venues and recognition of agricultural AI as a legitimate area for technical innovation.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                The research program has been supported by USDA NIFA Award 2022-70001-37404 and the SIU Office of Vice Chancellor for Research, reflecting confidence in both the technical approach and the potential for practical impact. This funding support has been essential for conducting the comprehensive experimental work required to validate the approach across multiple phases and conditions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The work represents a significant advancement in agricultural AI applications, providing practical tools for climate-smart livestock management while contributing to global methane emission reduction efforts. The combination of rigorous scientific validation, technical innovation, and demonstrated practical utility positions this research program as a model for how artificial intelligence can address pressing environmental challenges in agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Explore More Research</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/research">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Research Overview
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
                <Link href="/resources">
                  <Download className="mr-2 h-5 w-5" />
                  Access Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 