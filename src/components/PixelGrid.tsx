import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Upload, Heart, Eraser, Image, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const COLORS = [
  "#4B5563",
  "#000000",
  "#FFFFFF",
  "#EF4444",
  "#3B82F6",
  "#EAB308",
  "#22C55E",
];

const PixelGrid = () => {
  const [grid, setGrid] = useState(Array(100).fill(0));
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [exportedImage, setExportedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleClick = (index: number) => {
    setGrid((current) => {
      const newGrid = [...current];
      newGrid[index] = (newGrid[index] + 1) % COLORS.length;
      return newGrid;
    });
  };

  const makeHeart = () => {
    const heartPattern = Array(100).fill(0);
    const heartPixels = [
      13,
      14,
      16,
      17, // Row 2
      22,
      23,
      24,
      25,
      26,
      27, // Row 3
      32,
      33,
      34,
      35,
      36,
      37, // Row 4
      42,
      43,
      44,
      45,
      46,
      47, // Row 5
      53,
      54,
      55,
      56, // Row 6
      64,
      65, // Row 7
      74, // Row 8
    ];

    heartPixels.forEach((index) => {
      heartPattern[index] = 3; // Red color
    });

    setGrid(heartPattern);
  };

  const clearGrid = () => {
    setGrid(Array(100).fill(0));
    setPreviewImage(null);
    setExportedImage(null);
  };

  const processImage = async () => {
    setIsProcessing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match the grid size
    canvas.width = 1000;
    canvas.height = 1000;

    // Calculate cell size
    const cellSize = 1000 / 10;

    // Draw grid
    grid.forEach((colorIndex, i) => {
      const x = (i % 10) * cellSize;
      const y = Math.floor(i / 10) * cellSize;

      ctx.fillStyle = COLORS[colorIndex];
      ctx.fillRect(x, y, cellSize, cellSize);
    });

    // Convert to image for preview
    const imageUrl = canvas.toDataURL("image/png");
    setPreviewImage(imageUrl);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Set the exported image to the heart PNG
    try {
      const response = await fetch("/images/heartAI.png");
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setExportedImage(imageUrl);
    } catch (error) {
      console.error("Error loading PNG:", error);
    }

    setIsProcessing(false);
  };

  return (
    <div className="space-y-8">
      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
          onClick={makeHeart}
        >
          <Heart className="w-5 h-5 text-red-500" />
          Make Heart
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
          onClick={clearGrid}
        >
          <Eraser className="w-5 h-5" />
          Clear
        </Button>
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="aspect-square">
          <div className="grid grid-cols-10 gap-[3px] w-full h-full bg-gray-700 p-[3px] rounded-lg">
            {grid.map((colorIndex, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                className="aspect-square transition-colors duration-200"
                style={{ backgroundColor: COLORS[colorIndex] }}
                onClick={() => handleClick(i)}
                aria-label={`Grid cell ${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Export/Import Buttons */}
      <div className="flex flex-col items-center gap-4">
        {/* Commented out Import/Export buttons
        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
            onClick={() => console.log("Export clicked")}
          >
            <Download className="w-5 h-5" />
            Export
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
            onClick={() => console.log("Import clicked")}
          >
            <Upload className="w-5 h-5" />
            Import
          </Button>
        </div>
        */}
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
          onClick={processImage}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Image className="w-5 h-5" />
          )}
          {isProcessing ? "Processing..." : "Process Image"}
        </Button>
      </div>

      {/* Image Placeholders */}
      <div className="grid grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="w-full aspect-square bg-primary/5 rounded-lg flex items-center justify-center border border-primary/10">
            {previewImage ? (
              <div className="w-full h-full relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover p-2"
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Preview Image</p>
            )}
          </div>
          <span className="text-sm text-muted-foreground">Preview</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-full aspect-square bg-primary/5 rounded-lg flex items-center justify-center border border-primary/10">
            {isProcessing ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Processing...</p>
              </div>
            ) : exportedImage ? (
              <div className="w-full h-full relative">
                <img
                  src={exportedImage}
                  alt="Exported"
                  className="absolute inset-0 w-full h-full object-cover p-2"
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Exported Image</p>
            )}
          </div>
          <span className="text-sm text-muted-foreground">Exported</span>
        </div>
      </div>
    </div>
  );
};

export default PixelGrid;
