
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="content-grid">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-xl font-bold"
              style={{
                background: `linear-gradient(45deg, 
                  #FFFFFF 0%,
                  #6C7BFF 25%,
                  #FF00D6 50%,
                  #0500FF 75%,
                  #6AB8FF 100%
                )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "gradient 3s linear infinite",
                textShadow: "0 0 10px rgba(108, 123, 255, 0.3)",
                fontFamily: "'Press Start 2P', cursive",
                letterSpacing: "1px"
              }}
            >
              Responsible AI
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#principles" className="hover:text-primary/80 transition-colors">
              Principles
            </a>
            <a href="#case-studies" className="hover:text-primary/80 transition-colors">
              Case Studies
            </a>
            <a href="#resources" className="hover:text-primary/80 transition-colors">
              Resources
            </a>
            <a href="#about" className="hover:text-primary/80 transition-colors">
              About
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-transparent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#principles"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Principles
              </a>
              <a
                href="#case-studies"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Resources
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                About
              </a>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
