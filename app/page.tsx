"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedButton } from "@/components/animated-button";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const projects = [
  {
    title: "LessonTrack-API",
    description:
      "A documented REST API backend for lesson tracking functionality (tested using Jest).",
    image: "/lessonTracker.png",
    link: "https://lessontrack-api.onrender.com/docs/",
    githubLink: "https://github.com/MUGISHA-Pascal/LessonTrack-API",
    tags: ["Node.js", "Express", "Jest"],
    category: "Backend",
  },
  {
    title: "Umurava-Challenge-API",
    description:
      "A documented REST API backend for lesson tracking functionality (tested using Jest).",
    image: "/umuravaback.png",
    link: "https://skills-challenge.onrender.com/api",
    githubLink: "https://github.com/MUGISHA-Pascal/Umurava-Challenge-API",
    tags: ["Node.js", "NestJs"],
    category: "Backend",
  },
  {
    title: "Farm2Global",
    description: "A web-based app to support agriculture.",
    image: "/Farm.png",
    link: "https://farm2-global-frontend.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/Farm2Global",
    tags: ["React", "Next.js", "Agriculture"],
    category: "Frontend",
  },
  {
    title: "Umurava-Challenge-Frontend",
    description: "A web-based app to support challenge taking.",
    image: "/umuravaFront.png",
    link: "https://tal-manage.netlify.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/Umurava-Challenge-Frontend",
    tags: ["React", "Next.js", "challenge"],
    category: "Frontend",
  },
  {
    title: "TaskTrack",
    description: "A web-based app to keep track of tasks.",
    image: "/TaskTrack.png",
    link: "https://task-track-peach.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/TaskTrack",
    tags: ["React", "Task Management"],
    category: "Frontend",
  },
  {
    title: "AutoPart Design",
    description: "Design for autopart design",
    image: "/autopart.png",
    link: "https://www.figma.com/design/1g2TDIpywUQMzYzvqLLUQ5/my-auto-part-design?t=XMYAZPONVNEFyuie-0",
    tags: ["figma", "Design"],
    category: "Design",
  },
  {
    title: "UserHub",
    description: "A web-based application to control users.",
    image: "/UserHub.png",
    link: "https://userhub-one.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/UserHub",
    tags: ["React", "User Management"],
    category: "Frontend",
  },
  {
    title: "AgriGrowth",
    description:
      "A web-based application that deals with insurance claim functionalities.",
    image: "/AgriGrowth.png",
    link: "https://agri-growth.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/AgriGrowth",
    tags: ["React", "Insurance", "Agriculture"],
    category: "Frontend",
  },
  {
    title: "LessonTracker",
    description: "A web-based application for lesson tracking functionality.",
    image: "/Lesson.png",
    link: "https://github.com/MUGISHA-Pascal/LessonTracking-frontend",
    githubLink: "https://github.com/MUGISHA-Pascal/LessonTracking-frontend",
    tags: ["React", "Education"],
    category: "Frontend",
  },
  {
    title: "TaskFlow",
    description:
      "A web-based task management system with Google authentication.",
    image: "/TaskFlow.png",
    link: "https://task-flow-chi.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/TaskFlow",
    tags: ["React", "Task Management", "Google Auth"],
    category: "Frontend",
  },
  {
    title: "Connectify",
    description: "A web-based chat app.",
    image: "/Connectify.png",
    link: "https://connectify-sand.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/Connectify",
    tags: ["React", "Chat App"],
    category: "Frontend",
  },
  {
    title: "FaceConnect",
    description:
      "A web-based application that ensures a two-way video chat between two computers.",
    image: "/FaceConnect.png",
    link: "https://face-connect.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/FaceConnect",
    tags: ["React", "WebRTC", "Video Chat"],
    category: "Frontend",
  },
  {
    title: "Librax",
    description: "A web-based library management application.",
    image: "/Librax.png",
    link: "https://github.com/MUGISHA-Pascal/Librax",
    githubLink: "https://github.com/MUGISHA-Pascal/Librax",
    tags: ["PHP", "Library Management"],
    category: "Backend",
  },
  {
    title: "BlogNest",
    description: "A web-based blogging platform.",
    image: "/BlogNest.png",
    link: "https://blog-nest-rose.vercel.app/",
    githubLink: "https://github.com/MUGISHA-Pascal/BlogNest",
    tags: ["React", "Next.js", "Blogging"],
    category: "Frontend",
  },
  {
    title: "Machine Learning Projects",
    description: "A collection of machine learning-based projects.",
    image: "/ML.png",
    link: "https://github.com/MUGISHA-Pascal/machine-learning",
    githubLink: "https://github.com/MUGISHA-Pascal/machine-learning",
    tags: ["Python", "Machine Learning", "AI"],
    category: "Machine Learning",
  },
  {
    title: "Credit Scoring Model",
    description:
      "A credit scoring model to predict the creditworthiness of individuals based on historical financial data.",
    image: "/creditModel.png",
    link: "https://github.com/MUGISHA-Pascal/credit-scoring-model",
    githubLink: "https://github.com/MUGISHA-Pascal/credit-scoring-model",
    tags: ["Python", "AI", "Finance"],
    category: "Machine Learning",
  },
];

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Massachusetts Institute of Technology",
    year: "2016 - 2020",
    description: "Minor in Data Science",
  },
];

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    year: "2022 - Present",
    description:
      "Lead developer for cloud-based enterprise solutions, focusing on scalability and performance optimization.",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Ventures",
    year: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL.",
  },
  {
    title: "Software Engineering Intern",
    company: "Big Tech Co.",
    year: "Summer 2019",
    description:
      "Contributed to the development of internal tools and assisted in the redesign of the company's main product.",
  },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useScrollToSection();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Pascal.dev
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                href="#education"
                className="transition-colors hover:text-foreground/80"
              >
                Education
              </Link>
              <Link
                href="#experience"
                className="transition-colors hover:text-foreground/80"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </nav>
          </div>
          <AnimatedButton variant="outline">Resume</AnimatedButton>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <motion.section
          id="about"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div className="w-48 h-48 relative overflow-hidden rounded-full">
                <Image
                  src="/pascalProfile.jpg"
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Pascal
                </h1>
                <p className="text-xl font-semibold">Full Stack Developer</p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused
                  on creating elegant solutions to complex problems.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <AnimatedButton
                    variant="outline"
                    size="icon"
                    href="https://github.com"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    size="icon"
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    size="icon"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </AnimatedButton>
                  <AnimatedButton
                    variant="outline"
                    size="icon"
                    href="mailto:hello@example.com"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              {[
                "All",
                "Frontend",
                "Backend",
                "Mobile",
                "Machine Learning",
                "Design",
              ].map((category) => (
                <AnimatedButton
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </AnimatedButton>
              ))}
            </div>
            <AnimatePresence>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    githubLink={project.githubLink}
                    tags={project.tags}
                    category={project.category}
                  />
                ))}
              </div>
            </AnimatePresence>
            <div className="flex justify-center mt-8">
              {Array.from(
                {
                  length: Math.ceil(filteredProjects.length / projectsPerPage),
                },
                (_, i) => (
                  <AnimatedButton
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    className="mx-1"
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </AnimatedButton>
                )
              )}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Education
            </h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <p className="mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-primary pl-4"
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.year}</p>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
