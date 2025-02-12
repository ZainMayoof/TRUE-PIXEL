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
