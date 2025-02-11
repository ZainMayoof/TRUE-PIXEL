
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToGame = () => {
    const gameSection = document.getElementById("game");
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="content-grid text-center relative z-10">
        <div className="animate-in space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium mb-4">
            Interactive AI Learning
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
            Decoding AI in Media:
            <br />
            Can You Spot the Truth?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore AI-generated media, deepfake detection, and ethical AI principles
            through an interactive experience.
          </p>
          <Button
            onClick={scrollToGame}
            size="lg"
            className="rounded-full gradient-hover animate-pulse"
          >
            Play the Game
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
