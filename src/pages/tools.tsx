import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Upload, Scan, Bot, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import PixelGrid from "@/components/PixelGrid";

const ToolsPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      startAnalysis();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFile(file);
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResults(true);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>AI Tools | True Pixel</title>
      </Helmet>
      <NavigationBar />
      <main className="relative pt-24 pb-12">
        <div className="content-grid">
          <div className="max-w-4xl mx-auto space-y-16">
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="neon-text">AI Transparency Checker</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Upload an image to analyze its AI-generated characteristics
                </p>
              </div>

              <div
                className="relative p-12 rounded-xl backdrop-blur-sm border border-primary/10 bg-background/50"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileUpload}
                />

                {!file && !isAnalyzing && !showResults && (
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center gap-4 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-full bg-primary/10"
                    >
                      <Upload className="w-12 h-12 text-primary" />
                    </motion.div>
                    <p className="text-lg text-muted-foreground">
                      Drop your image here or click to upload
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: JPEG, PNG
                    </p>
                  </label>
                )}

                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="p-6 rounded-full bg-primary/10"
                      >
                        <Scan className="w-12 h-12 text-primary" />
                      </motion.div>
                    </div>
                    <p className="text-center text-lg text-primary animate-pulse">
                      Analyzing image transparency...
                    </p>
                    <Progress value={progress} className="w-full" />
                  </motion.div>
                )}

                {showResults && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-center neon-text">
                        Analysis Results
                      </h3>
                      <div className="flex justify-center items-center gap-4">
                        <Progress value={80} className="w-64" />
                        <span className="text-xl font-semibold text-primary">
                          80%
                        </span>
                      </div>
                      <p className="text-center text-lg text-primary font-semibold">
                        Highly Transparent: Likely AI-Generated
                      </p>
                    </div>

                    <div className="p-6 rounded-lg bg-primary/5 space-y-4">
                      <p className="text-muted-foreground">
                        AI-generated images often exhibit certain
                        characteristics:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Unrealistic textures in certain areas</li>
                        <li>Inconsistent lighting and shadows</li>
                        <li>Unusually smooth edges and transitions</li>
                        <li>Symmetry or pattern repetition</li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-4 p-6 rounded-lg bg-primary/5">
                      <Bot className="w-8 h-8 text-primary" />
                      <p className="text-muted-foreground">
                        "This image looks quite real, but AI tools are getting
                        better every day!"
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={() => {
                          setFile(null);
                          setShowResults(false);
                        }}
                        className="rounded-full hover:scale-105 transition-transform"
                      >
                        Analyze Another Image
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="neon-text">Pixel Art Creator</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Create pixel art patterns with our interactive grid
                </p>
              </div>

              <div className="relative p-12 rounded-xl backdrop-blur-sm border border-primary/10 bg-background/50">
                <div className="flex flex-col items-center gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-full bg-primary/10"
                  >
                    <Palette className="w-12 h-12 text-primary" />
                  </motion.div>
                  <div className="flex justify-center w-full">
                    <PixelGrid />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Click on any cell to cycle through colors and create your
                    pixel art
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
