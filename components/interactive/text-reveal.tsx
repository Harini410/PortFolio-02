"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "h1",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: customDelay,
      },
    }),
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 18,
      },
    },
  }

  const Component = motion[as]

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>
  }

  return (
    <Component
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={containerVariants}
      className={`inline-flex flex-wrap gap-x-2 ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={wordVariants}
          className="inline-block will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}
