
import { Card } from "@/components/ui/card";
import { Shield, Scale, UserCheck, Lock, Search } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    description: "Clear responsibility for AI decisions and their consequences.",
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
    <section id="principles" className="py-24 content-grid">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 neon-text">5 Key AI Ethics Principles</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hover over each principle to learn more
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((principle, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Card className="p-6 hover:scale-[1.02] transition-transform backdrop-blur-sm cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold neon-text">{principle.title}</h3>
                </div>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 backdrop-blur-xl bg-background/80 z-50">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{principle.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
