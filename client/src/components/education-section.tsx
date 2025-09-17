import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Trophy, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const { ref, controls } = useScrollAnimation();

  const certifications = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      provider: "Dr. Angela Yui - Udemy",
      year: "2024"
    },
    {
      title: "Learn JAVA Programming - Beginner to Master",
      provider: "Abdul Bari - Udemy",
      year: "2024"
    },
    {
      title: "The Modern Python 3 Bootcamp",
      provider: "Colt Steele - Udemy",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic achievements and professional development certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-2">Bachelor of Science - Computer Science</h4>
                  <p className="text-primary font-semibold mb-2">Toronto Metropolitan University, Toronto, ON</p>
                  <p className="text-muted-foreground">Co-op Program | Dean's List (2023 - present)</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <Trophy size={16} />
                  <span>Dean's List Achievement</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={cert.title} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Award className="text-primary mt-1 flex-shrink-0" size={16} />
                      <div>
                        <h4 className="font-bold mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{cert.provider}, {cert.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
