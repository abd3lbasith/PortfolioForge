import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const { ref, controls } = useScrollAnimation();

  const experiences = [
    {
      title: "Computer Science Director",
      company: "Undergraduate Science Society, Toronto Metropolitan University",
      period: "April 2024 - May 2025",
      achievements: [
        "Organized workshops and a Networking Night for 100+ students by coordinating logistics and facilitating team discussions, strengthening collaboration and presentation effectiveness.",
        "Partnered with stakeholders to analyze survey data, documenting results into actionable insights that optimized planning and knowledge transfer.",
        "Standardized event delivery by creating reusable playbooks and structured documentation, improving process consistency and supporting future directors."
      ]
    },
    {
      title: "Volunteer Coordinator",
      company: "TerraHacks Hackathon, Toronto Metropolitan University",
      period: "August 2024",
      achievements: [
        "Directed scheduling and assignments for 50+ volunteers by developing Excel-based trackers, balancing workloads and improving operational reporting.",
        "Investigated issues and documented resolutions, applying Agile-style continuous improvement practices to strengthen reliability and accountability.",
        "Delivered daily updates tailored for both technical and non-technical audiences, improving communication clarity and cross-team collaboration."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and project coordination experience in academic and tech environments.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-lg text-primary font-semibold">{experience.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mt-4 lg:mt-0">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start"
                        data-testid={`achievement-${index}-${achievementIndex}`}
                      >
                        <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
