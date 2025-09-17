import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const { ref, controls } = useScrollAnimation();

  const projects = [
    {
      title: "Python Finance Automation Tool",
      description: "Interactive financial dashboard with automated reconciliation workflows, built using Python, Streamlit, and Plotly. Features containerized deployment with Docker and comprehensive unit testing.",
      technologies: ["Python", "Streamlit", "Plotly", "Docker"],
      category: "Finance • Dashboard",
      githubUrl: "https://github.com/abd3lbasith/automate-finances-python"
    },
    {
      title: "Job Application Tracker",
      description: "Centralized tracking system with interactive dashboards for monitoring job applications. Features automated exports, validation, and reduced manual work by 40% through efficient workflows.",
      technologies: ["Python", "Streamlit", "SQLite", "Git"],
      category: "Productivity • Tracker",
      githubUrl: "https://github.com/abd3lbasith/job-application-tracker"
    },
    {
      title: "To-Do List Application",
      description: "Clean and intuitive task management application with modern UI/UX design. Features task creation, editing, deletion, and progress tracking with responsive design principles.",
      technologies: ["JavaScript", "HTML/CSS", "Responsive"],
      category: "Web App • UI/UX",
      githubUrl: "https://github.com/abd3lbasith/To-Do-List"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and modern development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="project-card bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/20 text-primary hover:bg-primary/30"
                        data-testid={`badge-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-semibold flex items-center gap-1"
                      data-testid={`link-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
