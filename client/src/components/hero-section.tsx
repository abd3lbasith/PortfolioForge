import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Basith_Abdul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Basith</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Student & Developer
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BSc Computer Science, Co-op at Toronto Metropolitan University | Dean's List (2023 - present)
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="px-8 py-4 border-border text-foreground font-semibold hover:bg-secondary"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="https://www.linkedin.com/in/basith-abdul-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/abd3lbasith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:basith.abdul@torontomu.ca"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-muted-foreground text-xl" />
      </motion.div>
    </section>
  );
}
