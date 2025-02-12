import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="content-grid">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">
              True Pixel
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/principles"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/principles" ? "text-primary" : ""
              }`}
            >
              Principles
            </Link>
            <Link
              to="/case-studies"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/case-studies" ? "text-primary" : ""
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/resources"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/resources" ? "text-primary" : ""
              }`}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/tools"
              className={`hover:text-primary/80 transition-colors ${
                location.pathname === "/tools" ? "text-primary" : ""
              }`}
            >
              Tools
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-transparent"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/principles"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/principles" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Principles
              </Link>
              <Link
                to="/case-studies"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/case-studies" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/resources"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/resources" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/about" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/tools"
                className={`block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors ${
                  location.pathname === "/tools" ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
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
