import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
const fullStackProjects = [
  {
    title: "Smart Complaint Management Portal",
    timeline: "Jan 2024 - Mar 2024",
    description:
      "Deployed a full-stack portal using Spring Boot, Hibernate, React.js, and MySQL. Implemented secure authentication and centralized tracking, improving system reliability by 25%.",
    tech: ["Spring Boot", "Hibernate", "React.js", "MySQL", "Full-Stack"],
    github: "https://github.com/Harini410/Fullstack-complaint-portal"
  },
  {
    title: "E-commerce Application",
    timeline: "Apr 2024 - Jun 2024",
    description:
      "Built a scalable e-commerce application with optimized REST APIs and database queries. Developed product catalog, shopping cart, order tracking, and secure checkout.",
    tech: ["Spring Boot", "REST API", "MySQL", "Performance Optimization", "Scalability"],
    github: "https://github.com/Harini410/E-commerce-application-using-Spring-Boot"
  }
]

const aiProjects = [
  {
    title: "Cyberbullying Detection in Social Media",
    timeline: "Aug 2024 - Jun 2025",
    description:
      "Built a federated RoBERTa model integrating emotion-based and contextual embeddings for 95% accuracy, ensuring data privacy.",
    tech: ["Python", "RoBERTa", "Federated Learning", "NLP", "PyTorch"],
    github: "https://github.com/Harini410/Cyberbullying-detection",
    live: "https://cyberbullying-detection-eta.vercel.app/"
  },
  {
    title: "AI Resume Screener Web App",
    timeline: "Apr 2025 - Jul 2025",
    description:
      "Next.js 14 app that extracts text from resumes and job descriptions to calculate AI-powered match scores (70% semantic + 30% keyword), visualized with gauges and skill chips.",
    tech: ["Next.js 14", "Tailwind CSS", "TensorFlow.js", "React", "Semantic Analysis"],
    github: "https://github.com/Harini410/AI-Resume-Screener",
    live: "https://v0-ai-resume-screener-smoky.vercel.app/"
  }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("fullstack")

  const projectsToShow = activeTab === "fullstack" ? fullStackProjects : aiProjects

  return (
