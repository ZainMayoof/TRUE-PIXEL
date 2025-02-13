import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
  faMicroscope,
  faPaintbrush,
  faScaleBalanced,
  faAtom,
  faBrain,
  faGraduationCap,
  faRobot,
  faPalette,
  faFileSignature,
  faMagnifyingGlassChart,
  faDatabase,
  faShieldHalved,
  faAward,
  faCompass,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
const aiBrainImage = "/images/ai-brain.jpg";
const aiResaImage = "/images/ai-resa.jpg";
const aiEduImage = "/images/ai-edu.jpg";

const resourceCategories = [
  {
    title: "Research & Papers",
    icon: faMicroscope,
    resources: [
      {
        title: "Responsible AI in the Arts",
        description:
          "How Creative Disciplines are Shaping AI Developments Everywhere - An exploration of AI's impact on creative fields.",
        link: "https://www.responsible.ai/responsible-ai-in-the-arts-how-creative-disciplines-are-shaping-ai-developments-everywhere/",
        icon: faPaintbrush,
      },
      {
        title: "Ethical & Legal Implications",
        description:
          "Research on the ethical and legal implications of AI in arts and creative industries.",
        link: "https://dl.acm.org/doi/abs/10.1145/3597512.3597528",
        icon: faScaleBalanced,
      },
      {
        title: "Rethinking the A in STEAM",
        description:
          "Insights from and for AI Literacy Education - Exploring the integration of arts into STEM education for AI literacy.",
        link: "https://arxiv.org/abs/2405.18179",
        icon: faAtom,
      },
    ],
  },
  {
    title: "Educational Materials",
    icon: faGraduationCap,
    resources: [
      {
        title: "Art and AI Workshop",
        description:
          "MIT RAISE workshop exploring AI in creative learning, covering generative models and ethical implications.",
        link: "https://raise.mit.edu/art-and-ai-workshop/",
        icon: faRobot,
      },
      {
        title: "Making AI Art Responsibly",
        description:
          "A comprehensive field guide for creating AI art with ethical considerations.",
        link: "https://www.liacoleman.com/the-responsible-ai-art-field-guide",
        icon: faPalette,
      },
      {
        title: "NAEA Position Statement",
        description:
          "Official position on AI and AI-generated imagery in visual arts education.",
        link: "https://www.arteducators.org/advocacy-policy/articles/1303-naea-position-statement-on-use-of-artificial-intelligence-ai-and-ai-generated-imagery-in-visual-arts-education",
        icon: faFileSignature,
      },
    ],
  },
  {
    title: "Best Practices",
    icon: faAward,
    resources: [
      {
        title: "Avid's Guide for Creative Professionals",
        description:
          "Guidelines for responsible AI use in creative fields, emphasizing safety, privacy, and human oversight.",
        link: "https://connect.avid.com/rs/486-EVU-559/images/Responsible-AI-for-Creative-Professionals.pdf",
        icon: faCompass,
      },
      {
        title: "Documentary AI Guidelines",
        description:
          "Ethical guidelines by the Archival Producers Alliance for using AI in nonfiction filmmaking.",
        link: "https://www.theguardian.com/film/2024/sep/13/documentary-ai-guidelines",
        icon: faFilm,
      },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>AI Media Resources | True Pixel</title>
      </Helmet>
      <NavigationBar />
      <main>
        <section className="min-h-screen pt-24 pb-12 relative overflow-hidden">
          <div className="content-grid relative z-10">
            <div className="animate-in space-y-12">
              <div className="text-center space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
                  Learning Resources
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="neon-text">AI Media Resources</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore our curated collection of resources to deepen your
                  understanding of AI in media and responsible technology use.
                </p>
              </div>

              {resourceCategories.map((category, index) => (
                <div
                  key={index}
                  className="animate-in"
                  style={
                    {
                      "--enter-delay": `${index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                      category.title.includes("Educational")
                        ? ""
                        : "lg:grid-flow-col"
                    }`}
                  >
                    <div
                      className={`h-full ${
                        category.title.includes("Educational")
                          ? "lg:order-first"
                          : "lg:order-last"
                      }`}
                    >
                      <div className="sticky top-24 rounded-xl overflow-hidden bg-gradient-to-br from-background/80 to-background/40 border border-primary/10 backdrop-blur-sm p-6 h-full">
                        {category.title === "Best Practices" ? (
                          <div className="h-full">
                            <img
                              src={aiBrainImage}
                              alt="AI Brain Visualization"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ) : category.title === "Research & Papers" ? (
                          <div className="h-full">
                            <img
                              src={aiResaImage}
                              alt="AI Research Visualization"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ) : category.title === "Educational Materials" ? (
                          <div className="h-full">
                            <img
                              src={aiEduImage}
                              alt="AI Education Visualization"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center min-h-[300px]">
                            <div className="text-center space-y-4">
                              <FontAwesomeIcon
                                icon={category.icon}
                                className="text-primary text-6xl opacity-50"
                              />
                              <p className="text-muted-foreground text-xl">
                                {category.title} Visualization
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`space-y-6 ${
                        category.title.includes("Educational")
                          ? "lg:order-last"
                          : "lg:order-first"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <FontAwesomeIcon
                          icon={category.icon}
                          className="text-primary text-2xl"
                        />
                        <h2 className="text-2xl font-semibold">
                          {category.title}
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {category.resources.map((resource, resourceIndex) => (
                          <Card
                            key={resourceIndex}
                            className="group hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                          >
                            <div className="p-6 flex gap-4">
                              <div className="flex-shrink-0">
                                <FontAwesomeIcon
                                  icon={resource.icon}
                                  className="text-primary text-2xl"
                                />
                              </div>
                              <div className="space-y-4">
                                <a
                                  href={resource.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="space-y-2"
                                >
                                  <h3 className="text-xl font-semibold flex items-center gap-2">
                                    {resource.title}
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                  </h3>
                                  <p className="text-muted-foreground">
                                    {resource.description}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
