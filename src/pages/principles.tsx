import React from "react";
import NavigationBar from "@/components/NavigationBar";
import PrinciplesSection from "@/components/PrinciplesSection";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";
import { Helmet } from "react-helmet";

const PrinciplesPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>AI Ethics Principles | True Pixel</title>
      </Helmet>
      <NavigationBar />
      <main className="relative pt-24">
        <div className="content-grid relative z-10">
          <div className="animate-in space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
                AI Ethics
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="neon-text">AI Ethics Principles</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding the ethical implications of AI in creative fields
              </p>
            </div>
          </div>
        </div>
        <section
          id="principles"
          className="min-h-[calc(100vh-6rem)] flex items-center"
        >
          <PrinciplesSection />
        </section>
        <FloatingRobot />
      </main>
      <Footer />
    </div>
  );
};

export default PrinciplesPage;
