import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navigationItems = [
  { path: "/", label: "Home", color: "from-white/20 to-white/10" },
  {
    path: "/principles",
    label: "Principles",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    path: "/case-studies",
    label: "Case Studies",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    path: "/resources",
    label: "Resources",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    path: "/about",
    label: "About",
    color: "from-orange-500/20 to-orange-600/10",
  },
  { path: "/tools", label: "Tools", color: "from-red-500/20 to-red-600/10" },
];

const BrushIndicator = () => (
  <svg
    width="40"
    height="24"
    viewBox="0 0 40 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rotate-45"
  >
    <path
      d="M1 12C1 12 8 4 20 4C32 4 39 12 39 12C39 12 32 20 20 20C8 20 1 12 1 12Z"
      className="stroke-primary"
      strokeWidth="2"
    />
    <path
      d="M8 12C8 12 12 8 20 8C28 8 32 12 32 12C32 12 28 16 20 16C12 16 8 12 8 12Z"
      className="fill-primary/20"
    />
    <path
      d="M39 12C39 12 35 4 20 4C5 4 1 12 1 12"
      className="stroke-primary"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

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
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="True Pixel Logo"
                className="h-14 w-auto"
              />
              <span className="text-xl font-semibold">True Pixel</span>
            </Link>
          </div>

          {/* Paint Palette Navigation */}
          <div className="hidden md:flex items-center relative">
            <div className="flex space-x-1 p-2 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
              {navigationItems.map((item, index) => (
                <Link key={index} to={item.path} className="relative">
                  <div
                    className={`
                      w-24 h-12 rounded-lg transition-all duration-300
                      bg-gradient-to-br ${item.color}
                      hover:scale-105 hover:shadow-lg
                      flex items-center justify-center
                      ${
                        location.pathname === item.path
                          ? "ring-2 ring-primary shadow-lg"
                          : "hover:ring-1 hover:ring-primary/50"
                      }
                    `}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="brush"
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    >
                      <div className="relative">
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-primary/0" />
                        <BrushIndicator />
                      </div>
                    </motion.div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`
                    block px-3 py-2 rounded-md transition-all duration-300
                    bg-gradient-to-br ${item.color}
                    ${
                      location.pathname === item.path
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 hover:ring-primary/50"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
