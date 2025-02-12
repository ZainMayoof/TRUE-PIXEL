import { Card } from "@/components/ui/card";
import { Shield, Scale, UserCheck, Lock, Search } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Transparency",
    description:
      "AI systems should be open about their capabilities and limitations.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description:
      "AI should treat all individuals and groups with equal consideration.",
  },
  {
    icon: UserCheck,
    title: "Accountability",
    description:
      "Clear responsibility for AI decisions and their consequences.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Protecting personal data and respecting user privacy rights.",
  },
  {
    icon: Search,
    title: "Bias Mitigation",
    description: "Actively identifying and reducing algorithmic biases.",
  },
];

const PrinciplesSection = () => {
  return (
    <div className="w-full">
      <div className="content-grid">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            AI Ethics Principles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding these core principles is essential for responsible AI
            development and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="p-8 hover:scale-[1.02] transition-transform backdrop-blur-sm bg-gradient-to-br from-background/80 to-background/40 border-primary/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold neon-text">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 neon-text">
            Why These Principles Matter
          </h2>
          <p className="text-muted-foreground text-lg">
            These principles form the foundation of responsible AI development,
            ensuring that artificial intelligence serves humanity while
            respecting individual rights and promoting social good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
