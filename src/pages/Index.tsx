import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import DeepfakeGame from "@/components/DeepfakeGame";
import PrinciplesSection from "@/components/PrinciplesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="deepfake-game">
          <DeepfakeGame />
        </div>
        <FloatingRobot />
        <div id="principles">
          <PrinciplesSection />
        </div>
        <div id="case-studies">
          <CaseStudiesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
