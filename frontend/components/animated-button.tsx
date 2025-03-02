import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
  target?: string;
}

export function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  target,
  href,
  ...props
}: AnimatedButtonProps) {
  const MotionWrapper = motion.div;

  const ButtonContent = (
    <Button variant={variant} size={size} {...props}>
      {children}
    </Button>
  );

  return (
    <MotionWrapper
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {href ? (
        <Link href={href} target={target}>
          {ButtonContent}
        </Link>
      ) : (
        ButtonContent
      )}
    </MotionWrapper>
  );
}
