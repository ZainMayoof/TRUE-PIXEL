import React from "react";
import NavigationBar from "@/components/NavigationBar";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";
import FloatingRobot from "@/components/FloatingRobot";
import { Helmet } from "react-helmet";

const CaseStudiesPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>AI Ethics Case Studies | True Pixel</title>
      </Helmet>
      <NavigationBar />
      <main className="relative pt-24">
        <section
          id="case-studies"
          className="min-h-[calc(100vh-6rem)] flex items-center"
        >
          <CaseStudiesSection />
        </section>
        <FloatingRobot />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
