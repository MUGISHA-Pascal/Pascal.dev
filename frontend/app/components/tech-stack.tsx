import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "GraphQL",
    ],
  },
  {
    category: "Backend",
    skills: [
      "NestJs",
      "Spring-Boot",
      "Express",
      "Django",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
  {
    category: "Machine Learning",
    skills: ["TensolFlow", "Pytorch", "Computer Vision", "MediaPipe"],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card key={tech.category} className="p-6">
            <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
