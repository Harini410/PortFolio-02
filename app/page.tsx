"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Phone,
  FileText,
  Sparkles,
  Code2,
  Menu,
  X,
  Briefcase,
  ArrowUp,
  Building2,
  Laptop,
  FileCheck2,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { ScrollProgressBar } from "@/components/interactive/scroll-progress"
import { Magnetic } from "@/components/interactive/magnetic"
import { TiltCard } from "@/components/interactive/tilt-card"
import { HeroAmbientBackground } from "@/components/interactive/hero-ambient"
import { TextReveal } from "@/components/interactive/text-reveal"
import { InteractiveSkills } from "@/components/interactive/skills-interactive"
import { ExperienceTimeline } from "@/components/interactive/experience-timeline"
import { triggerWinnerConfetti } from "@/components/interactive/confetti"
import { ProjectCard } from "@/components/interactive/project-card"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [touchedCard, setTouchedCard] = useState<string | null>("exp-0")
  const [activeSkillCategory, setActiveSkillCategory] = useState("all")
  const [activeHeroCta, setActiveHeroCta] = useState<string | null>(null)
  const [ieeeExpanded, setIeeeExpanded] = useState(false)
  const [certViewMode, setCertViewMode] = useState<"grid" | "swipe">("swipe")
  const [certCurrentIndex, setCertCurrentIndex] = useState(0)
  const [certScrollSnaps, setCertScrollSnaps] = useState<number[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const [certEmblaRef, certEmblaApi] = useEmblaCarousel({
    loop: true,
  })

  const onCertSelect = useCallback(() => {
    if (!certEmblaApi) return
    setCertCurrentIndex(certEmblaApi.selectedScrollSnap())
  }, [certEmblaApi])

  useEffect(() => {
    if (!certEmblaApi) return
    onCertSelect()
    setCertScrollSnaps(certEmblaApi.scrollSnapList())
    certEmblaApi.on("select", onCertSelect)
    certEmblaApi.on("reInit", onCertSelect)
    return () => {
      certEmblaApi.off("select", onCertSelect)
      certEmblaApi.off("reInit", onCertSelect)
    }
  }, [certEmblaApi, onCertSelect])

  const scrollCertPrev = useCallback(() => {
    if (certEmblaApi) certEmblaApi.scrollPrev()
  }, [certEmblaApi])

  const scrollCertNext = useCallback(() => {
    if (certEmblaApi) certEmblaApi.scrollNext()
  }, [certEmblaApi])

  const scrollCertTo = useCallback(
    (index: number) => {
      if (certEmblaApi) certEmblaApi.scrollTo(index)
    },
    [certEmblaApi]
  )

  const certDragMoved = React.useRef(false)
  const certPointerStart = React.useRef<{ x: number; y: number } | null>(null)

  const handleCertPointerDown = (e: React.PointerEvent) => {
    certPointerStart.current = { x: e.clientX, y: e.clientY }
    certDragMoved.current = false
  }

  const handleCertPointerMove = (e: React.PointerEvent) => {
    if (!certPointerStart.current) return
    const dx = Math.abs(e.clientX - certPointerStart.current.x)
    const dy = Math.abs(e.clientY - certPointerStart.current.y)
    if (dx > 10 || dy > 10) {
      certDragMoved.current = true
    }
  }

  const handleCertTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      certPointerStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      certDragMoved.current = false
    }
  }

  const handleCertTouchMove = (e: React.TouchEvent) => {
    if (!certPointerStart.current || e.touches.length === 0) return
    const dx = Math.abs(e.touches[0].clientX - certPointerStart.current.x)
    const dy = Math.abs(e.touches[0].clientY - certPointerStart.current.y)
    if (dx > 10 || dy > 10) {
      certDragMoved.current = true
    }
  }

  const handleCertCardClick = (e: React.MouseEvent) => {
    if (certDragMoved.current) {
      certDragMoved.current = false
      return
    }
    const target = e.target as HTMLElement
    if (target.closest("a") || target.closest("button")) {
      return
    }
    scrollCertNext()
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section scroll spy
  useEffect(() => {
    const sections = ["experience", "projects", "skills", "education", "achievements", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("harini.lts8@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText("+918884916059")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  // Hero CTA styling visually matching Technical Skills tabs
  const getHeroCtaClass = (id: string) =>
    `w-full h-11 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-2xs select-none min-w-0 ${
      activeHeroCta === id
        ? "bg-[#0f2b5c] text-white border border-[#0f2b5c] shadow-xs scale-[0.99]"
        : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-200 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white"
    }`

  // Main Software Engineering Experience: Dell (primary prominent), Toshiba, DRDO CAIR
  const experiences = [
    {
      id: "exp-0",
      company: "Dell Technologies",
      role: "Software Engineer",
      duration: "Nov 2025 – Sep 2026",
      location: "Bengaluru, India",
      isProminent: true,
      bullets: [
        "Architected and developed C#/.NET Windows recovery applications supporting critical Hardware Scan, Repair, Reset, Backup, and Disk Cloning workflows.",
        "Engineered robust system automation utilizing PowerShell, Batch scripting, WIM, WinPE, WinRE, and DISM for deployment and automated ISO generation.",
        "Led end-to-end debugging, root-cause analysis, regression testing, and performance validation across core recovery features to guarantee enterprise stability.",
        "Employed AI-assisted engineering workflows leveraging Claude Code, Coding Agents, and Spec-Driven Development (SDD) for rapid codebase exploration, implementation, refactoring, and test generation.",
      ],
      skills: [
        "C#/.NET",
        "PowerShell",
        "WinPE / WinRE",
        "DISM / WIM",
        "Windows Recovery",
        "Claude Code",
        "Coding Agents",
        "Spec-Driven Development (SDD)",
        "Testing & Validation",
        "Git / GitHub",
        "Jira",
      ],
      certificate: null,
    },
    {
      id: "exp-1",
      company: "Toshiba Software India Pvt. Ltd.",
      role: "Student Intern — Japanese Trainee Program",
      duration: "Jun 2025 – Jul 2025",
      location: "Bengaluru, India",
      isProminent: false,
      bullets: [
        "Completed enterprise Japanese software engineering program covering core Software Engineering principles, Artificial Intelligence, and Agile delivery.",
        "Delivered project-based assignments applying PMBOK project management frameworks for sprint planning, effort estimation, and technical documentation.",
      ],
      skills: [
        "Software Engineering",
        "Artificial Intelligence",
        "Agile Methodology",
        "PMBOK / Project Management",
        "Planning & Estimation",
      ],
      certificate: "https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing",
    },
    {
      id: "exp-2",
      company: "DRDO — Centre for Artificial Intelligence and Robotics (CAIR)",
      role: "Student Intern Trainee",
      duration: "Jan 2025 – Jun 2025",
      location: "Bengaluru, India",
      isProminent: false,
      bullets: [
        "Engineered modular frontend components and intuitive user interfaces using React.js and Figma for an institutional AI-based evaluation platform.",
        "Integrated client-side components with Spring Boot REST APIs and MongoDB backend database for real-time evaluation data persistence and validation.",
      ],
      skills: [
        "React.js",
        "Figma",
        "Spring Boot",
        "REST APIs",
        "MongoDB",
        "Frontend/Backend Integration",
      ],
      certificate: "https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=sharing",
    },
  ]

  // Earlier Experience & Training preserved under compact expandable subsection
  const earlierExperiences = [
    {
      id: "earlier-0",
      company: "JSpiders — Training & Development Center",
      role: "Trainee",
      duration: "Mar 2022 – Mar 2023",
      location: "India",
      isProminent: false,
      bullets: [
        "Completed professional training covering Core Java, J2EE, Spring Boot, Spring MVC, Hibernate, SQL, Web technologies and Web Services.",
        "Built foundational knowledge in Java-based application development and database-driven applications.",
      ],
      skills: [
        "Core Java",
        "J2EE",
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "SQL",
        "Web Technologies",
        "Web Services",
      ],
      certificate: "https://drive.google.com/file/d/1RTtCGOrI2vyXH6j_xHPgi3w3-1oqNjTv/view?usp=sharing",
    },
    {
      id: "earlier-1",
      company: "Gloify",
      role: "Associate Data Scientist — Machine Learning Intern",
      duration: "Sep 2021 – Oct 2021",
      location: "India",
      isProminent: false,
      bullets: [
        "Completed an 8-week Machine Learning internship as an Associate Data Scientist.",
        "Worked on machine-learning tasks and practical data science workflows.",
      ],
      skills: [
        "Machine Learning",
        "Data Science",
      ],
      certificate: "https://drive.google.com/file/d/1HUf5xs7Rev2AaUFj64330AUcTSptBSh9/view?usp=sharing",
    },
    {
      id: "earlier-2",
      company: "Tech Fortune Technologies",
      role: "Web Development Intern",
      duration: "Jul 2020 – Sep 2020",
      location: "Bengaluru, Karnataka, India",
      isProminent: false,
      bullets: [
        "Completed a 6-week Web Development internship.",
        "Worked with HTML, CSS, JavaScript, WordPress and Elementor.",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "Elementor",
        "Web Development",
      ],
      certificate: "https://drive.google.com/file/d/1Vg5edPaByYTOOaS5LJzBqh0jtqgX97JJ/view?usp=drive_link",
    },
  ]

  // Exact 4 projects: 1. Ransomware (Winner), 2. Smart Complaint (Enterprise Java), 3. Resume Screener, 4. CyberSafe AI
  const projectsData = [
    {
      id: "proj-0",
      title: "AI-Powered Ransomware Recovery Prioritizer",
      tagline: "Agentic AI · NetworkX · Llama 3.1 · Ollama · Dynamic Risk Scoring",
      badge: "Winner — Agentic AI Hackathon",
      date: "Jan 2026",
      summary:
        "Agentic AI decision-support system combining graph network analysis with dynamic risk scoring to prioritize recovery of critical enterprise assets.",
      bullets: [
        "Built interactive NetworkX attack graphs modeling infection paths, asset dependencies, and blast radius to prioritize critical recovery workflows.",
        "Integrated Llama 3.1 via Ollama to generate context-aware recovery playbooks for automated host isolation, reimaging, and restore.",
      ],
      tech: [
        "Agentic AI",
        "Python",
        "NetworkX",
        "Llama 3.1",
        "Ollama",
        "Dynamic Risk Scoring",
      ],
      certificate: "https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing",
      demoUrl: null,
      githubUrl: null,
      isGoldHighlight: true,
    },
    ```tsx
{
  id: "proj-2",
  title: "Smart Complaint Management Portal",
  tagline: "Java 17 · Spring Boot 3 · PostgreSQL · Kafka · Redis · React · Docker",
  badge: null,
  date: "Sep 2026",
  summary:
    "Event-driven complaint management system with JWT authentication, role-based access control, audit trails, and asynchronous event processing.",
  bullets: [
    "Built secure REST APIs using Spring Boot, Spring Security, JWT authentication, and role-based access control.",
    "Implemented Kafka event integration, Redis caching, 64 automated tests, GitHub Actions CI/CD, and cloud deployment on Render.",
  ],
  tech: [
    "Java 17",
    "Spring Boot 3",
    "PostgreSQL",
    "Apache Kafka",
    "Redis",
    "React",
    "Docker",
    "GitHub Actions",
  ],
  demoUrl: null,
  githubUrl: "https://github.com/Harini410/Fullstack-complaint-portal",
  certificate: null,
  isGoldHighlight: false,
  isProminentJava: false,
},
```
    {
      id: "proj-1",
      title: "AI Resume Screener Web Application",
      tagline: "Multi-Agent RAG · Next.js · TypeScript · Groq · Semantic Search",
      badge: null,
      date: "Sep 2026",
      summary:
        "Production multi-agent RAG pipeline using Next.js, TypeScript, Groq LLMs, and dense semantic embeddings for automated resume-to-job matching.",
      bullets: [
        "Engineered atomic requirement extraction and semantic retrieval to match candidate evidence directly against job criteria.",
        "Built deterministic scoring and automated evaluation suites, passing 13/13 unit tests and 10/10 evaluation benchmarks.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Groq LLMs",
        "Multi-Agent RAG",
        "Semantic Search",
        "Deterministic Scoring",
      ],
      demoUrl: "https://v0-ai-resume-screener-smoky.vercel.app/",
      githubUrl: "https://github.com/Harini410/AI-Resume-Screener",
      certificate: null,
      isGoldHighlight: false,
    },
    {
      id: "proj-3",
      title: "CyberSafe AI — Cyberbullying Detection Platform",
      tagline: "Autonomous 7-Agent DAG · RoBERTa · Dense Vector RAG · Affective NLP · FastAPI",
      date: "Sep 2026",
      summary:
        "Privacy-preserving autonomous multi-agent cyberbullying detection and conversational safety support platform powered by RoBERTa and dense RAG.",
      bullets: [
        "Orchestrated 7-agent autonomous DAG pipeline (Detection, Emotion, Context, Risk, RAG, Explanation, Response) executing with <105ms latency.",
        "Integrated fine-tuned RoBERTa sequence inference, MiniLM dense vector RAG across 6 safety domains, and context-aware Copilot chatbot.",
      ],
      tech: [
        "7-Agent DAG",
        "RoBERTa",
        "Dense RAG",
        "FastAPI",
        "Affective NLP",
        "Next.js 16",
      ],
      demoUrl: "https://cyberbullying-detection-eta.vercel.app/",
      githubUrl: "https://github.com/Harini410/Cyberbullying-detection",
      certificate: null,
      isGoldHighlight: false,
    },
  ]

  // Technical Skills - 4 compact, recruiter-friendly categories
  const skillGroups = [
    {
      category: "software",
      title: "Primary Software Engineering",
      skills: [
        "Java",
        "Spring Boot",
        "C#/.NET",
        "REST APIs",
        "React.js",
        "Next.js",
      ],
    },
    {
      category: "backend",
      title: "Backend & Database",
      skills: [
        "SQL",
        "MySQL",
        "MongoDB",
        "Hibernate / JPA",
      ],
    },
    {
      category: "systems",
      title: "Systems & Enterprise",
      skills: [
        "PowerShell",
        "WinPE / WinRE",
        "DISM & WIM",
        "Windows Internals",
        "Git / GitHub",
        "Jira",
      ],
    },
    {
      category: "ai",
      title: "AI Engineering",
      skills: [
        "Agentic AI",
        "LLM Applications",
        "Multi-Agent RAG",
        "Python",
        "Claude Code",
        "Spec-Driven Development (SDD)",
        "RoBERTa",
      ],
    },
  ]

  // Exactly 2 IEEE Papers under M.Tech
  const ieeePapers = [
    {
      id: "ieee-1",
      title: "A Deep Learning-Based Framework for Detecting Cyberbullying on Social Media Platforms",
      conference: "Second IEEE International Conference on New Frontiers in Communication, Automation, Management and Security",
      venueDate: "Presidency University, Bengaluru · 11–12 July 2025",
      paperLink: "https://ieeexplore.ieee.org/document/11234157",
      certificateLink: "https://drive.google.com/file/d/1awP9khfIb3BWgK2ALano5ieLvKHNS8mf/view?usp=sharing",
      demoLink: "https://cyberbullying-detection-eta.vercel.app/",
    },
    {
      id: "ieee-2",
      title: "Optimized Hybrid Model for Network Intrusion Detection Using Ensemble Learning",
      conference: "International Conference on Emerging Technologies in Electronics and Green Energy (ICETEG 2025)",
      venueDate: "JSS Science and Technology University, Mysuru · 10–11 October 2025",
      paperLink: "https://ieeexplore.ieee.org/document/11472951",
      certificateLink: "https://drive.google.com/file/d/1kbbiDFJwMAWBHz6p9iqfkS9CpHLzFPpG/view?usp=sharing",
    },
  ]

  // Supported Professional Certifications (Resume-backed)
  const professionalCertifications = [
    {
      id: "cert-1",
      title: "Student Intern — Japanese Trainee Program",
      org: "Toshiba Software India Pvt. Ltd.",
      date: "Jun 2025 – Jul 2025",
      desc: "Software engineering, AI, Agile and PMBOK-based project management.",
      link: "https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing",
    },
    {
      id: "cert-2",
      title: "Student Intern Trainee",
      org: "DRDO — Centre for Artificial Intelligence and Robotics (CAIR)",
      date: "Jan 2025 – Jun 2025",
      desc: "React.js, Spring Boot REST APIs and MongoDB integration for an evaluation platform.",
      link: "https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=sharing",
    },
    {
      id: "cert-3",
      title: "Software Testing Certification",
      org: "NPTEL",
      date: "Jul 2024 – Oct 2024",
      desc: "Software testing and verification methodologies.",
      link: "https://drive.google.com/file/d/1TZyZvl5HiDj390lw11bnyDYVS1gplW17/view?usp=drive_link",
    },
    {
      id: "cert-4",
      title: "Full Stack Java Development",
      org: "JSpiders Training Center",
      date: "Apr 2022 – Mar 2023",
      desc: "Core Java, Spring Boot, Hibernate and SQL.",
      link: "https://drive.google.com/file/d/1RTtCGOrI2vyXH6j_xHPgi3w3-1oqNjTv/view?usp=drive_link",
    },
  ]


  const certSlideLabels = [
    "Agentic AI Hackathon Winner",
    "Toshiba Software Trainee",
    "DRDO CAIR Research Trainee",
    "NPTEL Software Testing",
    "JSpiders Full Stack Java",
  ]
  const totalCertSlides = 5

  const navItems = [
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#open-source", id: "open-source", label: "Open Source" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#education", id: "education", label: "Education" },
    { href: "#achievements", id: "achievements", label: "Achievements" },
    { href: "#contact", id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#0f2b5c]/20 selection:text-[#0f2b5c] dark:selection:text-sky-300 relative w-full max-w-full overflow-x-clip">
      {/* Scroll Progress Bar at very top of screen */}
      <ScrollProgressBar />

      {/* Layered Interactive Hero Ambient Motion */}
      <HeroAmbientBackground />

      {/* Sticky Header with Glassmorphism and Scrollspy Indicator */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Name Branding with tactile hover */}
            <Magnetic strength={0.2}>
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#0f2b5c] text-white font-extrabold text-sm flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  HL
                </div>
                <span className="font-extrabold text-base tracking-tight text-foreground group-hover:text-[#0f2b5c] dark:group-hover:text-sky-400 transition-colors">
                  Harini L
                </span>
              </a>
            </Magnetic>

            {/* Desktop Navigation with Active Section Gliding Pill */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? "text-[#0f2b5c] dark:text-sky-400 font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:text-[#0f2b5c] dark:hover:text-sky-400"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0f2b5c] dark:bg-sky-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2">
              <Magnetic strength={0.25}>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="hidden sm:inline-flex rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-400 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white h-8 text-xs font-semibold shadow-2xs group"
                >
                  <a
                    href="https://drive.google.com/file/d/11n55o4Jv-XjekSa-5bqwOb9VtXmsL4WV/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <FileText className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                    <span>Resume</span>
                  </a>
                </Button>
              </Magnetic>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-9 w-9 text-foreground hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 font-bold"
                        : "hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg h-9 text-xs font-semibold"
                  >
                    <a
                      href="https://drive.google.com/file/d/11n55o4Jv-XjekSa-5bqwOb9VtXmsL4WV/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <FileText className="h-3.5 w-3.5" /> Download Resume
                    </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* 1. HERO SECTION — PROFESSIONAL TWO-COLUMN DESKTOP HERO (40% PHOTO / 60% CONTENT) */}
        <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-[1220px]">
            {/* DESKTOP LAYOUT (>= 1024px): 40% Left Photo, 60% Right Introduction */}
            <div className="hidden lg:flex items-center justify-between gap-10 xl:gap-14">
              {/* LEFT COLUMN: Large Sharp Professional Photo (~40%) */}
              <div className="w-[38%] flex justify-center shrink-0">
                <div className="relative group">
                  {/* Photo Frame with subtle hover scale - Photo + static circular frame ONLY */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="relative w-[320px] h-[320px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-4 border-[#0f2b5c] shadow-2xl ring-4 ring-[#0f2b5c]/15 bg-slate-100 dark:bg-slate-800 cursor-pointer"
                  >
                    <Image
                      src="/Harini.png"
                      alt="Harini L - Software Engineer"
                      width={380}
                      height={380}
                      priority
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              </div>

              {/* RIGHT COLUMN: Complete Professional Introduction (~60%) */}
              <div className="w-[62%] flex flex-col items-start text-left">
                {/* Status Indicator Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-3 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0f2b5c] animate-pulse" />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#0f2b5c] dark:text-sky-300">
                    ACTIVELY SEEKING OPPORTUNITIES
                  </span>
                </motion.div>

                {/* Name Reveal */}
                <TextReveal
                  text="HARINI L"
                  as="h1"
                  delay={0.1}
                  className="text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground mb-1"
                />

                {/* Role Title Reveal */}
                <TextReveal
                  text="Software Engineer"
                  as="h2"
                  delay={0.25}
                  className="text-2xl font-bold text-[#0f2b5c] dark:text-sky-400 mb-1.5"
                />

                {/* Supporting Positioning Line */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300 mb-3 tracking-wide"
                >
                  Java/Spring Boot • C#/.NET • AI Engineering
                </motion.div>

                {/* Concise Professional Summary */}
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  className="text-[14.5px] text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-xl mb-4"
                >
                  Software Engineer with enterprise experience at Dell Technologies, building C#/.NET applications and automation, with hands-on Java/Spring Boot, full-stack development, and AI/LLM engineering experience.
                </motion.p>

                {/* Education Credential Chip with Spring Hover */}
                <motion.a
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  href="#education"
                  className="inline-grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-border hover:border-[#0f2b5c]/50 transition-all mb-6 group cursor-pointer shadow-2xs"
                >
                  <GraduationCap className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                    M.Tech CSE (IT) — UVCE Bengaluru
                  </span>
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                    CGPA: 8.70 / 10
                  </span>
                </motion.a>

                {/* Main Action CTAs — Clean Professional 2-row × 4-column Grid with Magnetic Pull */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.75 }}
                  className="w-full max-w-xl grid grid-cols-4 gap-2.5"
                >
                  {/* Row 1: Email | Phone | LinkedIn | GitHub */}
                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => {
                        setActiveHeroCta("email")
                        copyEmail()
                      }}
                      className={getHeroCtaClass("email")}
                    >
                      <a
                        href="mailto:harini.lts8@gmail.com"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">{copiedEmail ? "Copied!" : "Email"}</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => {
                        setActiveHeroCta("phone")
                        copyPhone()
                      }}
                      className={getHeroCtaClass("phone")}
                    >
                      <a
                        href="tel:+918884916059"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">{copiedPhone ? "Copied!" : "Phone"}</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("linkedin")}
                      className={getHeroCtaClass("linkedin")}
                    >
                      <a
                        href="https://www.linkedin.com/in/harini-lakshmanan-04/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Linkedin className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">LinkedIn</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("github")}
                      className={getHeroCtaClass("github")}
                    >
                      <a
                        href="https://github.com/Harini410"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Github className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">GitHub</span>
                      </a>
                    </Button>
                  </Magnetic>

                  {/* Row 2: Experience | Projects | Resume | Bengaluru, India */}
                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("experience")}
                      className={getHeroCtaClass("experience")}
                    >
                      <a
                        href="#experience"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Briefcase className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">Experience</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("projects")}
                      className={getHeroCtaClass("projects")}
                    >
                      <a
                        href="#projects"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <Code2 className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">Projects</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("resume")}
                      className={getHeroCtaClass("resume")}
                    >
                      <a
                        href="https://drive.google.com/file/d/11n55o4Jv-XjekSa-5bqwOb9VtXmsL4WV/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <FileText className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">Resume</span>
                      </a>
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      variant="outline"
                      onClick={() => setActiveHeroCta("location")}
                      className={getHeroCtaClass("location")}
                    >
                      <a
                        href="#contact"
                        className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="leading-none truncate">Bengaluru, India</span>
                      </a>
                    </Button>
                  </Magnetic>
                </motion.div>
              </div>
            </div>

            {/* MOBILE & TABLET LAYOUT (< 1024px): Seamless, natural top-to-bottom sequence */}
            <div className="lg:hidden flex flex-col items-center text-center">
              {/* 1. Status Indicator Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-3.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0f2b5c] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wide uppercase text-[#0f2b5c] dark:text-sky-300">
                  ACTIVELY SEEKING OPPORTUNITIES
                </span>
              </div>

              {/* 2. Photo: Large and sharp circular portrait */}
              <div className="relative mb-3.5">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#0f2b5c] shadow-lg ring-4 ring-[#0f2b5c]/15 bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/Harini.png"
                    alt="Harini L - Software Engineer"
                    width={280}
                    height={280}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* 3. Name */}
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-1">
                HARINI L
              </h1>

              {/* 4. Software Engineer */}
              <h2 className="text-lg sm:text-xl font-bold text-[#0f2b5c] dark:text-sky-400 mb-1.5">
                Software Engineer
              </h2>

              {/* 5. Positioning Line */}
              <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3 tracking-wide">
                Java/Spring Boot • C#/.NET • AI Engineering
              </div>

              {/* 6. Professional Summary */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-lg mb-4">
                Software Engineer with enterprise experience at Dell Technologies, building C#/.NET applications and automation, with hands-on Java/Spring Boot, full-stack development, and AI/LLM engineering experience.
              </p>

              {/* 7. Education */}
              <a
                href="#education"
                className="w-full max-w-[360px] sm:max-w-md mx-auto mb-5 group cursor-pointer block"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-border hover:border-[#0f2b5c]/50 transition-all shadow-2xs">
                  <GraduationCap className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 text-left leading-snug">
                    M.Tech CSE (IT) — UVCE Bengaluru
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 sm:px-2.5 py-0.5 rounded-full shrink-0 whitespace-nowrap text-center">
                    CGPA: 8.70 / 10
                  </span>
                </div>
              </a>

              {/* 9. Action CTAs — Clean Professional 4-row × 2-column Grid */}
              <div className="w-full max-w-md grid grid-cols-2 gap-2 sm:gap-2.5">
                {/* Row 1: Email | Phone */}
                <Button
                  asChild
                  variant="outline"
                  onClick={() => {
                    setActiveHeroCta("email")
                    copyEmail()
                  }}
                  className={getHeroCtaClass("email")}
                >
                  <a
                    href="mailto:harini.lts8@gmail.com"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">{copiedEmail ? "Copied!" : "Email"}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  onClick={() => {
                    setActiveHeroCta("phone")
                    copyPhone()
                  }}
                  className={getHeroCtaClass("phone")}
                >
                  <a
                    href="tel:+918884916059"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">{copiedPhone ? "Copied!" : "Phone"}</span>
                  </a>
                </Button>

                {/* Row 2: LinkedIn | GitHub */}
                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("linkedin")}
                  className={getHeroCtaClass("linkedin")}
                >
                  <a
                    href="https://www.linkedin.com/in/harini-lakshmanan-04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Linkedin className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">LinkedIn</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("github")}
                  className={getHeroCtaClass("github")}
                >
                  <a
                    href="https://github.com/Harini410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Github className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">GitHub</span>
                  </a>
                </Button>

                {/* Row 3: Experience | Projects */}
                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("experience")}
                  className={getHeroCtaClass("experience")}
                >
                  <a
                    href="#experience"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Briefcase className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">Experience</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("projects")}
                  className={getHeroCtaClass("projects")}
                >
                  <a
                    href="#projects"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <Code2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">Projects</span>
                  </a>
                </Button>

                {/* Row 4: Resume | Bengaluru, India */}
                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("resume")}
                  className={getHeroCtaClass("resume")}
                >
                  <a
                    href="https://drive.google.com/file/d/11n55o4Jv-XjekSa-5bqwOb9VtXmsL4WV/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">Resume</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  onClick={() => setActiveHeroCta("location")}
                  className={getHeroCtaClass("location")}
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-1.5 w-full h-full min-w-0"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none truncate">Bengaluru, India</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE SECTION — WITH ANIMATED SCROLL-LINKED TIMELINE */}
        <section id="experience" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                Software engineering, systems automation, and AI-assisted enterprise development
              </p>
            </div>

            {/* Experience Interactive Animated Timeline Track */}
            <ExperienceTimeline
              experiences={experiences}
              earlierExperiences={earlierExperiences}
              touchedCard={touchedCard}
              setTouchedCard={setTouchedCard}
            />
          </div>
        </section>

        {/* 3. PROJECTS SECTION — 3D TILT CARDS & SPOTLIGHT */}
        <section id="projects" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                Featured engineering applications spanning Agentic AI, multi-agent RAG, NLP, and enterprise full-stack systems
              </p>
            </div>

            {/* Projects Grid View (4 Projects in balanced 2x2 grid with 3D tilt) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isTouched={touchedCard === project.id}
                  onSelect={setTouchedCard}
                />
              ))}
            </div>
          </div>
        </section>
{/*4. OPEN-SOURCE CONTRIBUTIONS */}
<section
  id="open-source"
  className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border"
>
  <div className="container mx-auto max-w-5xl">
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold">
        Open-Source Contributions
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
        Contributing bug fixes and validation improvements to open-source projects.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Apache XTable</CardTitle>
          <CardDescription>Java · Guava · Hudi</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            Fixed a Guava compatibility issue in Hudi partition-path validation,
            preserving lazy error-message construction.
          </p>
          <a
            href="https://github.com/apache/incubator-xtable/pull/967"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View Pull Request #967 ↗
          </a>
          <Badge variant="outline">Open · Awaiting review</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cisco Catalyst Center SDK</CardTitle>
          <CardDescription>Python · Schema Validation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            Added and registered the v3.2.3.0 banner schema validator for
            request-body validation.
          </p>
          <a
            href="https://github.com/cisco-en-programmability/catalystcentersdk/pull/78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View Pull Request #78 ↗
          </a>
          <Badge variant="outline">Open · Checks passed</Badge>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
        {/* 4. TECHNICAL SKILLS — INTERACTIVE RELATIONSHIPS & FILTER TRANSITIONS */}
        <section id="skills" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Technical Skills
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                Engineering proficiencies spanning AI-assisted workflows, languages, systems, and enterprise stacks
              </p>
            </div>

            {/* Interactive Skills with Technology Relationship Mapper */}
            <InteractiveSkills
              skillGroups={skillGroups}
              activeCategory={activeSkillCategory}
              onSelectCategory={setActiveSkillCategory}
            />
          </div>
        </section>

        {/* 5. EDUCATION SECTION — COMPACT WITH SMOOTH ACCORDION IEEE CONFERENCES */}
        <section id="education" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Education
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                Academic qualifications, university honors, and IEEE international conference research
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {/* M.Tech Degree Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <Card
                  onClick={() => setTouchedCard("edu-mtech")}
                  className={`border transition-all duration-300 cursor-pointer bg-card ${
                    touchedCard === "edu-mtech"
                      ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                      : "border-border hover:border-[#0f2b5c]/60 hover:shadow-sm"
                  }`}
                >
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#0f2b5c] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-base sm:text-lg md:text-xl font-extrabold text-foreground break-words">
                            Master of Technology — Computer Science &amp; Engineering (Information Technology)
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5 break-words">
                            University Visvesvaraya College of Engineering (UVCE), Bengaluru
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 sm:gap-1.5 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 shrink-0">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">CGPA:</span>
                          <span className="text-sm sm:text-base font-black text-amber-800 dark:text-amber-300">
                            8.70 / 10
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                          <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400 shrink-0" />
                          <span>Feb 2024 – Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Collapsible IEEE Conferences under M.Tech entry with smooth AnimatePresence height */}
                  <div className="px-4 sm:px-6 pb-4 pt-1 border-t border-border/60">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIeeeExpanded(!ieeeExpanded)
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all cursor-pointer text-xs font-bold shadow-2xs ${
                        ieeeExpanded
                          ? "bg-[#0f2b5c] text-white border border-[#0f2b5c]"
                          : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-400 hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10"
                      }`}
                      aria-expanded={ieeeExpanded}
                    >
                      <FileCheck2 className="h-3.5 w-3.5" />
                      <span>IEEE Publications — 2</span>
                      <span className="font-extrabold text-sm ml-1">{ieeeExpanded ? "−" : "+"}</span>
                    </button>

                    {/* Smooth AnimatePresence Accordion View: Exactly 2 Verified IEEE Papers */}
                    <AnimatePresence>
                      {ieeeExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-3.5">
                            {/* Paper 1: Cyberbullying Framework */}
                            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-border flex flex-col justify-between hover:border-[#0f2b5c]/40 transition-colors">
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                                  A Deep Learning-Based Framework for Detecting Cyberbullying on Social Media Platforms
                                </div>
                                <div className="text-[11px] font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                                  Second IEEE International Conference on New Frontiers in Communication, Automation, Management and Security
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                  Presidency University, Bengaluru · 11–12 July 2025
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 pt-3 mt-3 border-t border-border/60">
                                <Button
                                  size="sm"
                                  className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-semibold h-7 px-2.5 group shadow-2xs"
                                  asChild
                                >
                                  <a
                                    href={ieeePapers[0].paperLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <span>View Paper</span>
                                    <ExternalLink className="h-3 w-3 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </a>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5 group shadow-2xs"
                                  asChild
                                >
                                  <a
                                    href={ieeePapers[0].certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <span>View Certificate</span>
                                    <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </a>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5 group shadow-2xs"
                                  asChild
                                >
                                  <a
                                    href={ieeePapers[0].demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <span>Live Demo</span>
                                    <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </a>
                                </Button>
                              </div>
                            </div>

                            {/* Paper 2: Network Intrusion Detection */}
                            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-border flex flex-col justify-between hover:border-[#0f2b5c]/40 transition-colors">
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                                  Optimized Hybrid Model for Network Intrusion Detection Using Ensemble Learning
                                </div>
                                <div className="text-[11px] font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                                  International Conference on Emerging Technologies in Electronics and Green Energy (ICETEG 2025)
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                  JSS Science and Technology University, Mysuru · 10–11 October 2025
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 pt-3 mt-3 border-t border-border/60">
                                <Button
                                  size="sm"
                                  className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-semibold h-7 px-2.5 group shadow-2xs"
                                  asChild
                                >
                                  <a
                                    href={ieeePapers[1].paperLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <span>View Paper</span>
                                    <ExternalLink className="h-3 w-3 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </a>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5 group shadow-2xs"
                                  asChild
                                >
                                  <a
                                    href={ieeePapers[1].certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <span>View Certificate</span>
                                    <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>

              {/* B.E. Degree Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <Card
                  onClick={() => setTouchedCard("edu-be")}
                  className={`border transition-all duration-300 cursor-pointer bg-card ${
                    touchedCard === "edu-be"
                      ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                      : "border-border hover:border-[#0f2b5c]/60 hover:shadow-sm"
                  }`}
                >
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-[#0f2b5c] dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-base sm:text-lg md:text-xl font-extrabold text-foreground break-words">
                            Bachelor of Engineering — Information Science &amp; Engineering
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5 break-words">
                            East West Institute of Technology, Bengaluru
                          </CardDescription>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 sm:gap-1.5 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-border shrink-0">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CGPA:</span>
                          <span className="text-sm sm:text-base font-bold text-foreground">
                            7.2 / 10
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                          <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400 shrink-0" />
                          <span>Aug 2017 – Aug 2021</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section id="achievements" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-4xl">
            {/* Section Header with View Toggle Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 w-full">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground break-words">
                  Achievements &amp; Certifications
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                  Engineering honors, industry hackathon awards, and professional accreditations
                </p>
              </div>

              {/* Swipe Cards vs Grid View Switcher */}
              <div className="w-full sm:w-auto inline-flex items-center justify-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-border shrink-0 shadow-2xs max-w-full">
                <button
                  type="button"
                  onClick={() => setCertViewMode("swipe")}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none min-h-[36px] ${
                    certViewMode === "swipe"
                      ? "bg-[#0f2b5c] text-white shadow-xs"
                      : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                  }`}
                  aria-label="Switch to Swipe Card View"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Swipe Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCertViewMode("grid")}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none min-h-[36px] ${
                    certViewMode === "grid"
                      ? "bg-[#0f2b5c] text-white shadow-xs"
                      : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                  }`}
                  aria-label="Switch to Grid View"
                >
                  <LayoutGrid className="h-3.5 w-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Grid View</span>
                </button>
              </div>
            </div>

            {/* MODE 1: GRID VIEW */}
            {certViewMode === "grid" && (
              <div className="animate-in fade-in duration-200">
                {/* Featured Hackathon Winner Card with 3D Tilt, Staggered Reveal and Celebration Confetti */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={prefersReducedMotion ? {} : { y: -3 }}
                >
                  <TiltCard
                    highlightColor="gold"
                    onClick={() => triggerWinnerConfetti()}
                    className="border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.04] via-card to-card p-5 sm:p-6 rounded-2xl shadow-sm mb-8 hover:shadow-lg cursor-pointer transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.12 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0"
                        >
                          <Award className="h-7 w-7" />
                        </motion.div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-500/30 mb-1.5">
                            <span>Winner</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-foreground">
                            Winner — Agentic AI Hackathon
                          </h3>
                          <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                            Dell Technologies · AI Academy &amp; India Innovation Forum · Jan 2026
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2 leading-relaxed">
                            Awarded Winner for architecting an Agentic AI ransomware recovery decision-support system.
                          </p>
                        </div>
                      </div>

                      <div className="sm:shrink-0 w-full sm:w-auto pt-2 sm:pt-0">
                        <Button
                          size="sm"
                          className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 px-4 shadow-xs group w-full sm:w-auto justify-center"
                          asChild
                        >
                          <a
                            href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5"
                            onClick={(e) => {
                              e.stopPropagation()
                              triggerWinnerConfetti()
                            }}
                          >
                            <span>View Certificate</span>
                            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Supported Professional Certifications Grid with Staggered Scroll Reveal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {professionalCertifications.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        duration: 0.45,
                        delay: prefersReducedMotion ? 0 : idx * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      whileHover={prefersReducedMotion ? {} : { y: -4 }}
                      className="h-full"
                    >
                      <TiltCard
                        className="h-full border border-border hover:border-[#0f2b5c]/60 transition-all bg-card flex flex-col justify-between p-5 rounded-xl shadow-2xs hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <motion.div
                              whileHover={prefersReducedMotion ? {} : { rotate: 12, scale: 1.15 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="flex items-center gap-1.5 text-[#0f2b5c] dark:text-sky-400"
                            >
                              <Award className="h-4 w-4" />
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.date}</span>
                            </motion.div>
                          </div>
                          <div className="text-sm font-bold text-foreground">
                            {item.title}
                          </div>
                          <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                            {item.org}
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 font-normal mt-2.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-3.5 border-t border-border/60 mt-4 flex items-center justify-between">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white rounded-lg text-xs font-bold h-8 px-3 group shadow-2xs"
                            asChild
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* MODE 2: SWIPE CARDS VIEW (Interactive Touch/Swipe + Arrow Buttons) */}
            {certViewMode === "swipe" && (
              <div className="max-w-2xl mx-auto animate-in fade-in duration-200">
                {/* Carousel Controls Header */}
                <div className="flex items-center justify-between gap-2 mb-4 px-1 w-full min-w-0">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 truncate">
                      {certSlideLabels[certCurrentIndex]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={scrollCertPrev}
                      className="h-8 w-8 rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white cursor-pointer shadow-2xs"
                      aria-label="Previous certification slide"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={scrollCertNext}
                      className="h-8 w-8 rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white cursor-pointer shadow-2xs"
                      aria-label="Next certification slide"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Touch-Friendly Swipe Carousel Viewport */}
                <div
                  className="overflow-hidden cursor-grab active:cursor-grabbing select-none rounded-2xl"
                  ref={certEmblaRef}
                >
                  <div className="flex touch-pan-y">
                    {/* Slide 1: Featured Hackathon Winner Card */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                      <Card
                        onClick={handleCertCardClick}
                        onPointerDown={handleCertPointerDown}
                        onPointerMove={handleCertPointerMove}
                        onTouchStart={handleCertTouchStart}
                        onTouchMove={handleCertTouchMove}
                        className="border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.04] via-card to-card p-5 sm:p-6 rounded-2xl shadow-sm min-h-[250px] flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-500/30">
                              <Award className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />
                              <span>Winner · Dell Technologies Hackathon</span>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Jan 2026</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-foreground mt-1">
                            Winner — Agentic AI Hackathon
                          </h3>
                          <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                            Dell Technologies · AI Academy &amp; India Innovation Forum
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2.5 leading-relaxed">
                            Awarded Winner for architecting an Agentic AI ransomware recovery decision-support system.
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/60 mt-4 flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Official Honor</span>
                          <Button
                            size="sm"
                            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-8 px-3.5 shadow-xs group"
                            asChild
                          >
                            <a
                              href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5"
                              onClick={(e) => {
                                e.stopPropagation()
                                triggerWinnerConfetti()
                              }}
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </div>

                    {/* Slides 2 to 5: Professional Certifications */}
                    {professionalCertifications.map((item) => (
                      <div key={item.id} className="flex-[0_0_100%] min-w-0 px-2">
                        <Card
                          onClick={handleCertCardClick}
                          onPointerDown={handleCertPointerDown}
                          onPointerMove={handleCertPointerMove}
                          onTouchStart={handleCertTouchStart}
                          onTouchMove={handleCertTouchMove}
                          className="border border-border hover:border-[#0f2b5c]/50 transition-all bg-card p-5 sm:p-6 rounded-2xl shadow-sm min-h-[250px] flex flex-col justify-between cursor-pointer"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 text-xs font-bold border border-[#0f2b5c]/20">
                                <Award className="h-3.5 w-3.5" />
                                <span>Professional Certification</span>
                              </div>
                              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.date}</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                              {item.title}
                            </h3>
                            <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                              {item.org}
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal mt-2.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-border/60 mt-4 flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Verified Certificate</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white rounded-lg text-xs font-bold h-8 px-3.5 group shadow-2xs"
                              asChild
                            >
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>View Certificate</span>
                                <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </a>
                            </Button>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Swipe Slide Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {(certScrollSnaps.length > 0 ? certScrollSnaps : Array.from({ length: totalCertSlides })).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollCertTo(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        certCurrentIndex === idx
                          ? "w-8 bg-[#0f2b5c] dark:bg-sky-400"
                          : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to certification slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Swipe Hint */}
                <p className="text-center text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-2">
                  Tap card to advance · Swipe or use &lt; &gt; arrows to navigate
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
              Open to Software Engineer opportunities. Reach out directly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left mb-8">
              {/* Email */}
              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setTouchedCard("c-email")
                  copyEmail()
                }}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer shadow-2xs ${
                  touchedCard === "c-email" ? "border-[#0f2b5c] bg-[#0f2b5c]/[0.04]" : "border-border hover:border-[#0f2b5c]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Mail className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
                  <span className="text-[11px] font-bold text-[#0f2b5c] dark:text-sky-400">
                    {copiedEmail ? "Copied!" : "Click to Copy"}
                  </span>
                </div>
                <div className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Email
                </div>
                <div className="text-xs sm:text-sm font-black text-foreground break-all mt-0.5">
                  harini.lts8@gmail.com
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setTouchedCard("c-phone")
                  copyPhone()
                }}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer shadow-2xs ${
                  touchedCard === "c-phone" ? "border-[#0f2b5c] bg-[#0f2b5c]/[0.06]" : "border-[#0f2b5c]/40 hover:border-[#0f2b5c]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Phone className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
                  <span className="text-[11px] font-bold text-[#0f2b5c] dark:text-sky-400">
                    {copiedPhone ? "Copied!" : "Click to Copy"}
                  </span>
                </div>
                <div className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Phone
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mt-0.5">
                  +91 8884916059
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/harini-lakshmanan-04/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTouchedCard("c-linkedin")}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer block shadow-2xs ${
                  touchedCard === "c-linkedin" ? "border-[#0f2b5c] bg-[#0f2b5c]/[0.04]" : "border-border hover:border-[#0f2b5c]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </div>
                <div className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  LinkedIn
                </div>
                <div className="text-xs sm:text-sm font-black text-foreground mt-0.5 truncate">
                  harini-lakshmanan-04
                </div>
              </motion.a>
            </div>

            {/* Quick Resume Download Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-2xs">
              <div>
                <div className="text-sm font-black text-foreground">
                  Looking for my full resume?
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  Download the latest Software Engineer resume covering Dell Technologies, education, and technical projects.
                </div>
              </div>
              <Magnetic strength={0.25}>
                <Button
                  className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 px-4 shrink-0 shadow-xs group"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <FileText className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                    <span>Download Resume PDF</span>
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-card text-xs text-slate-500 dark:text-slate-400 w-full overflow-hidden">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Harini L. Built with Next.js, React &amp; Tailwind CSS.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3.5 sm:gap-x-4 gap-y-2 font-semibold order-1 sm:order-2 w-full sm:w-auto">
            <nav
              className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3.5 sm:gap-x-4 gap-y-2"
              aria-label="Footer navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="whitespace-nowrap hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Magnetic strength={0.3} className="shrink-0 ml-1">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-1.5 rounded-md hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Back to top"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </Magnetic>
          </div>
        </div>
      </footer>
    </div>
  )
}
