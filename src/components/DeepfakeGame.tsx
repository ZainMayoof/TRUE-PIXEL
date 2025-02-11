
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface GameImage {
  id: number;
  src: string;
  isReal: boolean;
}

const GAME_IMAGES: GameImage[][] = [
  [
    { id: 1, src: "/placeholder.svg", isReal: true },
    { id: 2, src: "/placeholder.svg", isReal: false },
  ],
  [
    { id: 3, src: "/placeholder.svg", isReal: false },
    { id: 4, src: "/placeholder.svg", isReal: true },
  ],
];

const DeepfakeGame = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleImageSelect = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const checkAnswer = () => {
    if (selectedImage === null) return;

    const currentImages = GAME_IMAGES[currentRound];
    const selectedImageData = currentImages.find(
      (img) => img.id === selectedImage
    );

    if (selectedImageData?.isReal) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentRound < GAME_IMAGES.length - 1) {
        setCurrentRound(currentRound + 1);
        setSelectedImage(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const currentImages = GAME_IMAGES[currentRound];

  return (
    <section id="game" className="py-24 content-grid">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Can You Spot the Deepfake?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Select the image you think is real. Current score: {score}/
          {GAME_IMAGES.length}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {currentImages.map((image) => (
            <Card
              key={image.id}
              className={`relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${
                selectedImage === image.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleImageSelect(image.id)}
            >
              <img
                src={image.src}
                alt="Game image"
                className="w-full h-64 object-cover"
              />
              {showResult && (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm ${
                    image.isReal ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {image.isReal ? (
                    <Check className="h-16 w-16" />
                  ) : (
                    <X className="h-16 w-16" />
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={checkAnswer}
            disabled={selectedImage === null || showResult}
            size="lg"
            className="rounded-full"
          >
            Check Answer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeepfakeGame;
