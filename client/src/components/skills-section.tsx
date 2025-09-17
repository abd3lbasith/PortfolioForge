import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiDocker, SiGit, SiLinux } from "react-icons/si";
import { Database, Code, Hash, FileCode, Terminal, BarChart3, Table, Zap } from "lucide-react";

export default function SkillsSection() {
  const { ref, controls } = useScrollAnimation();

  const languages = [
    { name: "Python", icon: SiPython },
    { name: "Java", icon: Code },
    { name: "JavaScript", icon: SiJavascript },
    { name: "C/C++", icon: FileCode },
    { name: "C#", icon: Hash },
    { name: "SQL", icon: Database },
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Code },
  ];

  const frameworks = [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: ".NET", icon: Code },
    { name: "NumPy", icon: BarChart3 },
    { name: "Pandas", icon: Table },
    { name: "Streamlit", icon: Zap },
  ];

  const tools = [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
    { name: "Bash", icon: Terminal },
    { name: "Power BI", icon: BarChart3 },
    { name: "VS Code", icon: Code },
  ];

  const SkillCard = ({ skill, index }: { skill: { name: string; icon: any }, index: number }) => {
    const IconComponent = skill.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="skill-badge bg-card p-4 rounded-lg text-center border border-border hover:border-primary cursor-default"
        data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      >
        <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
        <p className="font-semibold text-sm">{skill.name}</p>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and developer tools I use to build amazing projects.
          </p>
        </motion.div>

        {/* Programming Languages */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Languages
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {languages.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Frameworks & Libraries
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {frameworks.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Developer Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
