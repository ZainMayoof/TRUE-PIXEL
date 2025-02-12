import { Card } from "@/components/ui/card";
import {
  Palette,
  Pencil,
  Video,
  Layout,
  Copyright,
  AlertTriangle,
  FileWarning,
  Paintbrush,
  Scale,
  Computer,
  Binary,
  Share2,
} from "lucide-react";
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

const ethicalConcerns = [
  {
    icon: Copyright,
    title: "Copyright & IP",
    content:
      "AI-generated works raise critical questions around ownership. Who owns the rights to a piece created by an algorithm? As artists and creators use AI, it's important to understand how copyright law applies to machine-made art.",
  },
  {
    icon: AlertTriangle,
    title: "Bias in AI Art",
    content:
      "AI systems are trained on data, and if the data is biased, the AI output can reflect those biases. In the context of art, this means AI could perpetuate stereotypes and limit diversity in creative expression.",
  },
  {
    icon: FileWarning,
    title: "Deepfakes & Misinformation",
    content:
      "Deepfakes created by AI can distort reality, making it difficult to distinguish between genuine and fake content. This is particularly concerning in media, where AI-generated images, videos, and audio can be used to spread misinformation.",
  },
];

const flipCards = [
  {
    id: 1,
    frontIcon: [Paintbrush, Computer],
    frontTitle: "AI-Generated Art & Copyright",
    backTitle: "Ownership & Rights",
    backContent:
      "AI's ability to create artwork raises important questions about authorship and intellectual property. Who owns a work made by a machine? Should the AI's creator or the AI itself hold the copyright?",
  },
  {
    id: 2,
    frontIcon: [Scale],
    frontTitle: "Bias in AI",
    backTitle: "Training Data Bias",
    backContent:
      "AI systems are only as good as the data they are trained on. If the training data is biased, the AI's creations will be too. This can lead to harmful stereotypes in art, design, and even user interfaces.",
  },
  {
    id: 3,
    frontIcon: [Video],
    frontTitle: "Deepfakes & Misinformation",
    backTitle: "Digital Trust",
    backContent:
      "AI-powered deepfakes can manipulate video, audio, and images, making it harder to trust digital content. This technology raises concerns about privacy, security, and the spread of fake news.",
  },
  {
    id: 4,
    frontIcon: [Layout],
    frontTitle: "AI in UX/UI Ethics",
    backTitle: "Design Ethics",
    backContent:
      "AI in design raises questions about user autonomy, dark patterns, and manipulation. How do we ensure AI-driven interfaces respect user choice and promote transparency?",
  },
  {
    id: 5,
    frontIcon: [Binary],
    frontTitle: "AI Transparency",
    backTitle: "Algorithm Transparency",
    backContent:
      "Understanding how AI makes creative decisions is crucial. How can we make AI systems more transparent while protecting intellectual property?",
  },
  {
    id: 6,
    frontIcon: [Share2],
    frontTitle: "Impact on Traditional Media",
    backTitle: "Media Evolution",
    backContent:
      "AI is reshaping traditional media creation and consumption. How do we preserve artistic traditions while embracing AI innovation?",
  },
];

const PrinciplesSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-background to-background/80">
      <div className="content-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-gradient">
            Responsible AI in Multimedia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the impact of AI across different creative fields
          </p>
        </motion.div>

        {/* AI in Design & Multimedia Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

        {/* Ethical Concerns Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Ethical Concerns
          </h2>
          <div className="space-y-4">
            {ethicalConcerns.map((concern, index) => (
              <Card
                key={index}
                className="p-6 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <concern.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {concern.title}
                    </h3>
                    <p className="text-muted-foreground">{concern.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Flip Cards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Explore AI Ethics
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Hover over the cards to learn more about ethical challenges in AI multimedia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flipCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.id * 0.1 }}
                className="flip-card"
              >
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <Card className="flip-card-front p-8 flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-br from-background/80 to-background/40 border-primary/10">
                    <div className="flex gap-2">
                      {card.frontIcon.map((Icon, index) => (
                        <div key={index} className="p-4 rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold gradient-text">
                      {card.frontTitle}
                    </h3>
                  </Card>

                  {/* Back of Card */}
                  <Card className="flip-card-back p-8 flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-br from-background/80 to-background/40 border-primary/10">
                    <h4 className="text-xl font-semibold gradient-text">
                      {card.backTitle}
                    </h4>
                    <p className="text-muted-foreground">
                      {card.backContent}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">
            Key Takeaways
          </h2>
          <p className="text-muted-foreground text-lg">
            AI is an incredibly powerful tool for designers and artists, but
            it's important to use it responsibly. By considering the ethical
            implications and being mindful of bias, copyright, and
            misinformation, you can harness the power of AI to create impactful,
            meaningful work that benefits everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
