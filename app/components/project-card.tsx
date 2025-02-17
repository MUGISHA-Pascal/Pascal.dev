import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/animated-button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  tags: string[];
  category: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  githubLink,
  tags,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <AnimatedButton
            variant="outline"
            size="sm"
            href={link}
            target="_blank"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </AnimatedButton>
          {githubLink && (
            <AnimatedButton
              variant="outline"
              size="sm"
              href={githubLink}
              target="_blank"
            >
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </AnimatedButton>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
