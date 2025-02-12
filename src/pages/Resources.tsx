import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  FileText, 
  Wrench,
  GraduationCap, 
  ExternalLink 
} from "lucide-react";

const resourceCategories = [
  {
    title: "Educational Materials",
    icon: GraduationCap,
    resources: [
      {
        title: "Understanding Deepfakes",
        description: "A comprehensive guide to understanding and detecting AI-generated media.",
        link: "https://example.com/deepfake-guide",
      },
      {
        title: "AI Ethics Course",
        description: "Learn about the ethical implications of AI in modern media.",
        link: "https://example.com/ai-ethics",
      },
    ],
  },
  {
    title: "Research & Papers",
    icon: FileText,
    resources: [
      {
        title: "Latest Deepfake Detection Research",
        description: "Recent academic papers on deepfake detection techniques.",
        link: "https://example.com/research",
      },
      {
        title: "AI Media Impact Study",
        description: "Research on how AI-generated content affects society.",
        link: "https://example.com/impact-study",
      },
    ],
  },
  {
    title: "Detection Tools",
    icon: Wrench,
    resources: [
      {
        title: "Deepfake Detector",
        description: "Open-source tool for analyzing potentially AI-generated media.",
        link: "https://example.com/detector",
      },
      {
        title: "Media Authenticity Checker",
        description: "Professional tool for verifying media authenticity.",
        link: "https://example.com/checker",
      },
    ],
  },
  {
    title: "Best Practices",
    icon: BookOpen,
    resources: [
      {
        title: "Media Verification Guidelines",
        description: "Step-by-step guide for verifying digital media content.",
        link: "https://example.com/guidelines",
      },
      {
        title: "Ethical AI Usage Guide",
        description: "Best practices for responsible AI implementation.",
        link: "https://example.com/best-practices",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main>
        <section className="min-h-screen pt-24">
          <div className="content-grid">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium mb-4">
                Learning Resources
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text mb-6">
                AI Media Resources
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our curated collection of resources to deepen your understanding
                of AI in media and responsible technology use.
              </p>
            </div>

            <div className="grid gap-12">
              {resourceCategories.map((category, index) => (
                <div key={index} className="animate-in" style={{ '--enter-delay': `${index * 100}ms` } as React.CSSProperties}>
                  <div className="flex items-center gap-2 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card 
                        key={resourceIndex} 
                        className="p-6 hover:scale-[1.02] transition-transform backdrop-blur-sm"
                      >
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="space-y-4"
                        >
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            {resource.title}
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          </h3>
                          <p className="text-muted-foreground">{resource.description}</p>
                        </a>
                      </Card>
                    ))}
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

export default Resources; 