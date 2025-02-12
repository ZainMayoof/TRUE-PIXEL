import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import DeepfakeGame from "@/components/DeepfakeGame";
import PrinciplesSection from "@/components/PrinciplesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main>
        <Hero />
        <DeepfakeGame />
        <PrinciplesSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
