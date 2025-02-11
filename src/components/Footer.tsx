
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="content-grid py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Responsible AI</h3>
            <p className="text-sm text-muted-foreground">
              Educating the next generation about AI ethics and responsible use.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#principles" className="text-muted-foreground hover:text-foreground">
                  Principles
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#resources" className="text-muted-foreground hover:text-foreground">
                  Resources
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Responsible AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
