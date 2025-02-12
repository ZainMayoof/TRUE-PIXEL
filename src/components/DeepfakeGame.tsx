import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface GameImage {
  id: number;
  src: string;
  isReal: boolean;
  description: string;
}

const GAME_IMAGES: GameImage[][] = [
  [
    {
      id: 1,
      src: "/images/1_Human.jpeg",
      isReal: true,
      description: "Professional headshot of a woman smiling",
    },
    {
      id: 2,
      src: "/images/1_AI.jpg",
      isReal: false,
      description: "AI-generated portrait of a woman",
    },
  ],
  [
    {
      id: 3,
      src: "/images/2_Human.jpg",
      isReal: true,
      description: "Natural photo of a person in casual setting",
    },
    {
      id: 4,
      src: "/images/2_AI.jpg",
      isReal: false,
      description: "AI-generated casual portrait",
    },
  ],
  [
    {
      id: 5,
      src: "/images/3_Human.jpg",
      isReal: true,
      description: "Professional studio photograph",
    },
    {
      id: 6,
      src: "/images/3_AI.jpg",
      isReal: false,
      description: "AI-generated studio style portrait",
    },
  ],
];

const DeepfakeGame = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const handleImageSelect = (imageId: number) => {
    if (!showResult) {
      setSelectedImage(imageId);
    }
  };

  const checkAnswer = () => {
    if (selectedImage === null) return;

    const currentImages = GAME_IMAGES[currentRound];
    const selectedImageData = currentImages.find(
      (img) => img.id === selectedImage
    );

    if (selectedImageData && !selectedImageData.isReal) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentRound < GAME_IMAGES.length - 1) {
        setCurrentRound(currentRound + 1);
        setSelectedImage(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const restartGame = () => {
    setCurrentRound(0);
    setScore(0);
    setSelectedImage(null);
    setShowResult(false);
    setGameComplete(false);
  };

  const currentImages = GAME_IMAGES[currentRound];

  return (
    <section id="game" className="py-24 content-grid">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 neon-text">
          Can You Spot the AI Generated Image?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Select the image you think is AI Generated. Current score: {score}/
          {GAME_IMAGES.length}
        </p>

        {!gameComplete ? (
          <>
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
                    alt={image.description}
                    className="w-full h-[400px] object-cover"
                  />
                  {showResult && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm ${
                        !image.isReal ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <div className="text-center">
                        {!image.isReal ? (
                          <>
                            <Check className="h-16 w-16 mx-auto mb-2" />
                            <p className="text-lg font-semibold">
                              Correct! This is AI Generated
                            </p>
                          </>
                        ) : (
                          <>
                            <X className="h-16 w-16 mx-auto mb-2" />
                            <p className="text-lg font-semibold">
                              This is a Real Image
                            </p>
                          </>
                        )}
                      </div>
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
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Game Complete! Final Score: {score}/{GAME_IMAGES.length}
            </h3>
            <p className="text-muted-foreground mb-8">
              {score === GAME_IMAGES.length
                ? "Perfect score! You're an expert at spotting AI generated images!"
                : score >= GAME_IMAGES.length / 2
                ? "Good job! You've got a keen eye for AI-generated content."
                : "Keep practicing! AI images can be tricky to spot."}
            </p>
            <Button onClick={restartGame} size="lg" className="rounded-full">
              Play Again
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeepfakeGame;
