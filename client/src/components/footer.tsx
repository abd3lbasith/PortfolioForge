import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/basith-abdul-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/abd3lbasith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:basith.abdul@torontomu.ca"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-muted-foreground mb-2">© 2024 Basith Abdul. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with passion using React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
