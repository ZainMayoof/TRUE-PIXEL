import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import DeepfakeGame from "@/components/DeepfakeGame";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";
import RainbowDrips from "@/components/RainbowDrips";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <RainbowDrips />
      <NavigationBar />
      <main className="relative">
        <section id="hero" className="min-h-[100vh]">
          <Hero />
        </section>

        {/* True Pixel Introduction Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="content-grid relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              {/* Main Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight neon-text">
                  True Pixel
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
                  <p>
                    AI is transforming the creative world—but how can we use it
                    responsibly?
                  </p>
                  <p>
                    True Pixel is an interactive web experience designed for
                    artists, designers, and multimedia students to explore the
                    role of AI in digital creativity. Our goal is to educate
                    users about responsible AI through engaging tools and
                    hands-on learning.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    Disclaimer
                  </h3>
                  <div className="text-muted-foreground">
                    <p>
                      All content on True Pixel—including text, images, and
                      interactive tools—was created with AI tools such as Claude
                      AI, GitHub Copilot, Canva Magic AI, and Adobe Firefly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deepfake-game" className="min-h-[100vh]">
          <DeepfakeGame />
        </section>
        <FloatingRobot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
