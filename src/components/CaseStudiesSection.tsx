import { Card } from "@/components/ui/card";
import {
  ExternalLink,
  AlertTriangle,
  Shield,
  Lightbulb,
  Palette,
  Pencil,
  Video,
  Layout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const topics = [
  {
    icon: Palette,
    title: "AI-Generated Art",
    description:
      "AI is changing the landscape of art, allowing creators to explore new techniques and styles that were once impossible. From abstract pieces to hyper-realistic renderings, AI-generated art opens up endless possibilities for artistic expression.",
    effect: "fade-in",
  },
  {
    icon: Pencil,
    title: "AI in Graphic Design",
    description:
      "Graphic designers now have powerful AI tools that assist in everything from color selection to layout design. AI can help automate repetitive tasks, allowing designers to focus on creativity and concept development.",
    effect: "scale-up",
  },
  {
    icon: Video,
    title: "AI in Video & Animation",
    description:
      "AI is revolutionizing video production and animation. Whether it's AI-powered editing tools, automatic scene generation, or the creation of animated characters, AI enhances efficiency and creativity in the production process.",
    effect: "glow",
  },
  {
    icon: Layout,
    title: "AI in UX/UI Design",
    description:
      "In UX/UI design, AI helps to predict user behavior, optimize user interfaces, and create personalized experiences. From smart layouts to adaptive designs, AI empowers designers to create more intuitive and effective digital products.",
    effect: "neon-outline",
  },
];

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
      <div className="animate-in space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="neon-text">Real-World AI Cases in Media</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Examining actual cases where AI implementation raised ethical
            concerns and how they were addressed
          </p>
        </div>
      </div>

      <div className="mb-24">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl font-bold mb-4 neon-text">
            AI in Creative Fields
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how AI is transforming different areas of creative work
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-background/80 to-background/40 border-primary/10 hover:border-primary/30">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <topic.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {topic.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 neon-text">
          Real-World AI Ethics Cases
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Examining actual cases where AI implementation raised ethical concerns
          and how they were addressed.
        </p>
      </div>

      {/* Infographic Style Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

        {/* Cases */}
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-8 mb-16 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Step Number Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
              <span className="text-white font-bold">0{index + 1}</span>
            </div>

            {/* Content Card */}
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <Card className="p-6 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-background/80 to-background/40 border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-full bg-primary/10 ${
                      index % 2 === 0 ? "order-last ml-auto" : ""
                    }`}
                  >
                    <study.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className={index % 2 === 0 ? "ml-auto" : ""}>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-sm text-primary/80">{study.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Issues:
                    </h4>
                    <ul className="space-y-1">
                      {study.harms.map((harm, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{harm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Solutions:
                    </h4>
                    <ul className="space-y-1">
                      {study.solutions.map((solution, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
