import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate Computer Science student at Toronto Metropolitan University, currently on the Dean's List and pursuing my BSc in Computer Science through the Co-op program. I have experience in leadership roles, having served as Computer Science Director for the Undergraduate Science Society and as a Volunteer Coordinator for TerraHacks Hackathon.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I enjoy building innovative solutions that solve real-world problems, from finance automation tools to application tracking systems. My technical expertise spans multiple programming languages and frameworks, with a focus on creating scalable, user-friendly applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
