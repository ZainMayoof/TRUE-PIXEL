import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
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
<<<<<<< HEAD
            <Link to="/" className="text-xl font-semibold">
=======
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "hero")}
              className="text-xl font-semibold"
            >
>>>>>>> 97103616b0ea7f66aedbbe6e03b9a3256e83668c
              Responsible AI
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
            <a href="/#principles" className="hover:text-primary/80 transition-colors">
              Principles
            </a>
            <a href="/#case-studies" className="hover:text-primary/80 transition-colors">
              Case Studies
            </a>
            <Link to="/resources" className="hover:text-primary/80 transition-colors">
              Resources
            </Link>
            <Link to="/about" className="hover:text-primary/80 transition-colors">
=======
            <a
              href="#principles"
              onClick={(e) => handleNavClick(e, "principles")}
              className="hover:text-primary/80 transition-colors"
            >
              Principles
            </a>
            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, "case-studies")}
              className="hover:text-primary/80 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#resources"
              onClick={(e) => handleNavClick(e, "resources")}
              className="hover:text-primary/80 transition-colors"
            >
              Resources
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-primary/80 transition-colors"
            >
>>>>>>> 97103616b0ea7f66aedbbe6e03b9a3256e83668c
              About
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
              <a
<<<<<<< HEAD
                href="/#principles"
=======
                href="#principles"
                onClick={(e) => handleNavClick(e, "principles")}
>>>>>>> 97103616b0ea7f66aedbbe6e03b9a3256e83668c
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Principles
              </a>
              <a
<<<<<<< HEAD
                href="/#case-studies"
=======
                href="#case-studies"
                onClick={(e) => handleNavClick(e, "case-studies")}
>>>>>>> 97103616b0ea7f66aedbbe6e03b9a3256e83668c
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Case Studies
              </a>
<<<<<<< HEAD
              <Link
                to="/resources"
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Resources
              </Link>
              <Link
                to="/about"
=======
              <a
                href="#resources"
                onClick={(e) => handleNavClick(e, "resources")}
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Resources
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
>>>>>>> 97103616b0ea7f66aedbbe6e03b9a3256e83668c
                className="block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                About
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
