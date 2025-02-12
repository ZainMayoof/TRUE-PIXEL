import { Card } from "@/components/ui/card";
import { ExternalLink, AlertTriangle, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    icon: Shield,
    title: "Getty Images vs. Stability AI",
    subtitle: "Copyright Issues in AI Training",
    description:
      "Getty Images sued Stability AI for using millions of copyrighted images without permission to train Stable Diffusion.",
    harms: [
      "AI models producing copyrighted work without consent",
      "Artists losing income and recognition",
      "Reduced demand for human-made art",
    ],
    solutions: [
      "Require AI companies to license training data",
      "Ensure transparency about data sources",
      "Implement watermarking for AI-generated images",
    ],
    link: "https://www.bakerlaw.com/getty-images-v-stability-ai/",
  },
  {
    icon: AlertTriangle,
    title: "YouTube's AI Moderation",
    subtitle: "Bias & Fairness Issues",
    description:
      "YouTube's AI moderation system incorrectly flags artistic or educational content while missing harmful content, affecting small creators.",
    harms: [
      "Unjust takedowns limit creative freedom",
      "Independent creators lose revenue",
      "AI bias affects certain content types",
    ],
    solutions: [
      "Improve AI accuracy with human oversight",
      "Provide clear appeal processes",
      "Consider context before enforcing penalties",
    ],
    link: "https://www.theverge.com/2020/9/21/21448916/youtube-automated-moderation-ai-machine-learning-increased-errors-takedowns",
  },
  {
    icon: Lightbulb,
    title: "OpenAI's DALL·E",
    subtitle: "Ethical AI in Image Creation",
    description:
      "DALL·E's image generation capabilities raised concerns over bias, misinformation, and potential misuse of deepfakes.",
    harms: [
      "AI reinforcing racial or cultural biases",
      "Spread of fake or misleading media",
      "Fear of AI replacing human creativity",
    ],
    solutions: [
      "Continuously refine AI to reduce bias",
      "Implement clear ethical guidelines",
      "Watermark AI-generated images",
    ],
    link: "https://www.researchgate.net/publication/368741775_The_Ethical_Implications_of_DALL-E_Opportunities_and_Challenges",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 content-grid">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 neon-text">
          Real-World AI Ethics Cases
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Examining actual cases where AI implementation raised ethical concerns
          and how they were addressed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {caseStudies.map((study, index) => (
          <Card
            key={index}
            className="p-8 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm border-primary/20"
          >
            <div className="grid md:grid-cols-[1fr,2fr,2fr] gap-8">
              {/* Left Column - Icon and Title */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="p-4 rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <study.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold neon-text">
                  {study.title}
                </h3>
                <p className="text-sm text-primary/80">{study.subtitle}</p>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Middle Column - Description and Harms */}
              <div className="space-y-4">
                <p className="text-muted-foreground">{study.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Potential Harms:
                  </h4>
                  <ul className="space-y-2">
                    {study.harms.map((harm, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="mr-2 text-primary">•</span>
                        {harm}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Solutions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  How to Reduce These Harms:
                </h4>
                <ul className="space-y-2">
                  {study.solutions.map((solution, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <span className="mr-2 text-primary">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
