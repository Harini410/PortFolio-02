"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
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
import { BeyondCodeSection } from "@/components/interactive/beyond-code"
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
  const [ciscoPrsExpanded, setCiscoPrsExpanded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section scroll spy
  useEffect(() => {
    const sections = ["experience", "open-source", "projects", "beyond-code", "skills", "education", "achievements", "contact"]
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
      duration: "November 2025 – September 2026",
      location: "Bengaluru, India",
      isProminent: true,
      summaryQuote: "I worked across Windows recovery applications and OSRI image builds—contributing to fixes, requirements, debugging, and validation.",
      caseStudy: {
        title: "Tracking down a Windows recovery failure",
        problem: "A BSOD crash occurred during hardware diagnostics and system recovery on Windows test images.",
        investigation: "Reproduced the crash in test environments, captured diagnostic logs and memory snapshots, and traced execution using Helix Data Collector and Analyzer.",
        findings: "Isolated a string/integer type mismatch in the recovery service's exception handler.",
        validation: "Validated recovery workflows across multiple hardware profiles, tracking test results and regression coverage in GitHub and Jira.",
      },
      bullets: [
        "Maintained an existing C#/.NET Windows recovery application covering hardware scans, repair, reset, backup, and disk cloning.",
        "Built Windows 11 ARM64 OSRI build workflows using PowerShell, Batch, DISM, WIM, WinPE, and WinRE for scripting, image operations, and validation.",
      ],
      closingQuote: "The interesting part isn't just seeing something fail. It's finding enough evidence to understand what went wrong.",
      skills: [
        "C#",
        ".NET",
        "PowerShell",
        "Batch",
        "DISM",
        "WIM",
        "WinPE",
        "WinRE",
        "Helix Data Collector",
        "Helix Data Analyzer",
        "debugging",
        "regression testing",
        "Git",
        "GitHub",
        "Jira",
      ],
      certificate: null,
    },
    {
      id: "exp-1",
      company: "Toshiba Software India Pvt. Ltd.",
      role: "Student Intern — Japanese Trainee Program",
      duration: "June – July 2025",
      location: "Bengaluru, India",
      isProminent: false,
      bullets: [
        "Completed training in software engineering, AI, and Agile practices, achieving project milestones with planning, effort estimation, and technical documentation.",
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
      duration: "January – June 2025",
      location: "Bengaluru, India",
      isProminent: false,
      bullets: [
        "Engineered React UI components for an AI evaluation platform, integrating the frontend with Spring Boot REST APIs and MongoDB.",
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

  // Core Engineering Projects: 1. Smart Complaint, 2. Ransomware Recovery, 3. AI Resume Screener, 4. CyberSafe AI
  const projectsData = [
    {
      id: "proj-2",
      title: "Smart Complaint Management Portal",
      tagline: "Java 17 · Spring Boot 3 · Kafka · Redis · PostgreSQL · Docker · React",
      badge: "64 Automated Tests",
      date: "Sep 2026",
      hook: "What happens when a complaint system gets more work than it can handle?",
      summary:
        "Asynchronous complaint portal built with Spring Boot. Decoupled intake from downstream notifications and analytics using Kafka, with Redis cache-aside lookups and PostgreSQL persistence.",
      bullets: [
        "Decoupled Kafka consumer groups ensure independent analytics and notification scaling; verified with 64 unit and integration tests using Testcontainers and MockMvc.",
      ],
      tech: [
        "Java 17",
        "Spring Boot 3",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Docker",
        "React",
      ],
      demoUrl: null,
      githubUrl: "https://github.com/Harini410/Fullstack-complaint-portal",
      certificate: null,
      isGoldHighlight: false,
      isProminentJava: true,
    },
    {
      id: "proj-0",
      title: "AI-Powered Ransomware Recovery Prioritizer",
      tagline: "Python · NetworkX · Graph Algorithms · Llama 3.1 · Ollama",
      badge: "Winner · Dell Agentic AI Hackathon",
      date: "Jan 2026",
      hook: "If several systems depend on each other, what should recover first?",
      summary:
        "Decision-support engine modeling infrastructure dependencies as directed graphs. Uses NetworkX heuristic risk scoring to calculate optimal recovery sequences under attack.",
      bullets: [
        "Integrated local Llama 3.1 via Ollama to generate offline runbooks without external network dependencies. Grand Finale Winner at Dell Technologies.",
      ],
      tech: [
        "Python",
        "NetworkX",
        "Graph Algorithms",
        "Llama 3.1",
        "Ollama",
      ],
      certificate: "https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing",
      demoUrl: null,
      githubUrl: null,
      isGoldHighlight: true,
    },
    {
      id: "proj-1",
      title: "AI Resume Screener",
      tagline: "Next.js · TypeScript · Semantic Retrieval · Groq LLMs · Automated Testing",
      badge: "13/13 Unit Tests · 10/10 Benchmarks",
      date: "Sep 2026",
      hook: "A matching score is only useful if you can explain it.",
      summary:
        "Audit-ready resume evaluator pairing semantic retrieval with structured criteria scoring. Separates requirement extraction from evaluation to ensure consistent scoring.",
      bullets: [
        "Automated evaluation suite reports 13/13 unit tests and 10/10 benchmark evaluations across edge-case candidate profiles.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Semantic Retrieval",
        "Groq LLMs",
        "Automated Testing",
      ],
      demoUrl: "https://v0-ai-resume-screener-smoky.vercel.app/",
      githubUrl: "https://github.com/Harini410/AI-Resume-Screener",
      certificate: null,
      isGoldHighlight: false,
    },
    {
      id: "proj-3",
      title: "CyberSafe AI",
      tagline: "Python · RoBERTa · RAG · FastAPI · Next.js",
      badge: "IEEE Publication Companion",
      date: "Sep 2026",
      hook: "Understanding harmful language takes more than spotting a keyword.",
      summary:
        "Conversational safety platform combining transformer classification with dense retrieval and multi-agent reasoning for context-aware de-escalation.",
      bullets: [
        "Implemented with fine-tuned RoBERTa, a seven-agent DAG, dense RAG, FastAPI backend, and Next.js frontend. Companion prototype to published IEEE Xplore research.",
      ],
      tech: [
        "Python",
        "RoBERTa",
        "RAG",
        "FastAPI",
        "Next.js",
      ],
      demoUrl: "https://cyberbullying-detection-eta.vercel.app/",
      githubUrl: "https://github.com/Harini410/Cyberbullying-detection",
      certificate: null,
      isGoldHighlight: false,
    },
  ]

  // Technical Skills - Developer Toolkit (6 categories)
  const skillGroups = [
    {
      category: "languages",
      title: "Languages",
      skills: ["Java", "C#", "Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "app-dev",
      title: "Application Development",
      skills: ["Spring Boot", "REST APIs", "React", "Next.js"],
    },
    {
      category: "databases",
      title: "Data and Messaging",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Kafka", "Redis"],
    },
    {
      category: "tools",
      title: "Engineering Practices",
      skills: ["Git", "GitHub", "Docker", "CI/CD", "debugging", "regression testing"],
    },
    {
      category: "windows",
      title: "Windows Development",
      skills: [".NET", "PowerShell", "Batch", "DISM", "WIM", "WinPE", "WinRE"],
    },
    {
      category: "additional",
      title: "Additional Work",
      skills: ["LLM applications", "RAG", "NetworkX", "RoBERTa"],
    },
  ]

  // 7 Merged PRs on Cisco Catalyst WAN SDK (#245–#251)
  const ciscoMergedPrs = [
    {
      num: "PR #251",
      title: "Device-health endpoint pagination",
      desc: "Implemented pagination for device-health endpoints to reliably query large-scale enterprise network device inventories.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/251",
      tag: "Pagination & Telemetry",
    },
    {
      num: "PR #250",
      title: "Enterprise Root CA certificate upload",
      desc: "Added enterprise Root CA certificate upload endpoints for automated TLS trust-chain management.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/250",
      tag: "PKI / TLS Security",
    },
    {
      num: "PR #249",
      title: "Certificate-editing HTTP methods & test suite",
      desc: "Corrected certificate-editing HTTP methods (PUT vs POST/PATCH) and added comprehensive test coverage.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/249",
      tag: "REST APIs & Testing",
    },
    {
      num: "PR #248",
      title: "API Gateway session token reuse",
      desc: "Enabled API Gateway sessions utilizing existing authentication tokens, avoiding redundant auth roundtrips.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/248",
      tag: "Auth & Gateway Sessions",
    },
    {
      num: "PR #247",
      title: "UUID serialization & BGP model registration",
      desc: "Fixed UUID serialization and registered missing BGP routing template models for SD-WAN device templates.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/247",
      tag: "Serialization & BGP",
    },
    {
      num: "PR #246",
      title: "ConfigGroup ID handling & validation",
      desc: "Fixed ConfigGroup ID handling and payload validation across configuration group management APIs.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/246",
      tag: "Config & Validation",
    },
    {
      num: "PR #245",
      title: "Standard progress bar & CLI test automation",
      desc: "Modernized CLI tooling by replacing deprecated external clint dependency with Python standard-library progress indicators and automated unit tests.",
      url: "https://github.com/cisco-en-programmability/catalystwan-sdk/pull/245",
      tag: "CLI Tooling & Tests",
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

  const navItems = [
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#open-source", id: "open-source", label: "Open Source" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#beyond-code", id: "beyond-code", label: "Beyond Code" },
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
                    href="https://drive.google.com/file/d/1rMpX8K0gKItHWAZkrOcR85zgT1smw4TO/view?usp=sharing"
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
                      href="https://drive.google.com/file/d/1rMpX8K0gKItHWAZkrOcR85zgT1smw4TO/view?usp=sharing"
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
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-3 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#0f2b5c] dark:text-sky-300">
                    SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES
                  </span>
                </motion.div>

                {/* Name Reveal */}
                <TextReveal
                  text="HARINI L"
                  as="h1"
                  delay={0.1}
                  className="text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground mb-1"
                />

                {/* Headline Reveal */}
                <TextReveal
                  text="Good software starts with asking the right questions."
                  as="h2"
                  delay={0.2}
                  className="text-2xl sm:text-3xl xl:text-[34px] font-extrabold text-[#0f2b5c] dark:text-sky-400 mb-2 tracking-tight leading-tight max-w-xl text-balance"
                />

                {/* Supporting Line & Hero Paragraph */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="space-y-2 mb-3 max-w-xl text-left"
                >
                  <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
                    Because before I write the fix, I want to understand what&apos;s broken.
                  </p>
                  <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    I&apos;ve worked on Windows recovery software at Dell, tracked down bugs in existing systems, and contributed fixes to codebases at AWS, Apache, and Cisco. I also build things of my own — because there&apos;s always something new to figure out.
                  </p>
                </motion.div>

                {/* Technical Proof Line */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.42 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-[13px] font-medium text-slate-800 dark:text-slate-200 mb-3.5"
                >
                  <span>Dell Technologies · Software Development · Java &amp; C#/.NET · 9 Merged Open-Source PRs</span>
                </motion.div>

                {/* Recruiter Quick-Scan High-Signal Proof Pills (Desktop) */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.48 }}
                  className="w-full max-w-xl grid grid-cols-2 gap-2 mb-5"
                >
                  <a
                    href="#experience"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-[#0f2b5c]/50 transition-all cursor-pointer shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#0f2b5c] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-slate-900 dark:text-white truncate">Dell Technologies</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Software Engineering &amp; Application Development</div>
                    </div>
                  </a>

                  <a
                    href="#open-source"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/[0.08] dark:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-emerald-800 dark:text-emerald-300 truncate">9 Merged Open Source PRs</div>
                      <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 truncate">AWS · Apache · Cisco</div>
                    </div>
                  </a>

                  <a
                    href="#achievements"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-500/[0.08] dark:bg-amber-950/30 border border-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-amber-800 dark:text-amber-300 truncate">Hackathon Winner</div>
                      <div className="text-[11px] text-amber-700/80 dark:text-amber-400/80 truncate">Dell Agentic AI Hackathon</div>
                    </div>
                  </a>

                  <a
                    href="#education"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-[#0f2b5c]/50 transition-all cursor-pointer shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#0f2b5c]/10 text-[#0f2b5c] dark:bg-sky-400/10 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-slate-900 dark:text-white truncate">M.Tech CSE · 8.70 CGPA</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">UVCE · 2 IEEE Publications</div>
                    </div>
                  </a>
                </motion.div>

                {/* Main Action CTAs — Clean Professional Layout with Magnetic Pull */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.75 }}
                  className="w-full max-w-xl space-y-2.5"
                >
                  {/* Primary Row: Explore my work + Let's talk */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <Magnetic strength={0.2}>
                      <Button
                        asChild
                        onClick={() => setActiveHeroCta("experience")}
                        className="w-full h-11 px-3 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shadow-xs select-none min-w-0 bg-[#0f2b5c] text-white hover:bg-[#0a1c38] active:bg-[#08152b]"
                      >
                        <a
                          href="#experience"
                          className="flex items-center justify-center gap-2 w-full h-full min-w-0"
                        >
                          <Briefcase className="h-4 w-4 shrink-0" />
                          <span className="leading-none truncate">Explore my work</span>
                        </a>
                      </Button>
                    </Magnetic>

                    <Magnetic strength={0.2}>
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setActiveHeroCta("contact")}
                        className="w-full h-11 px-3 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shadow-xs select-none min-w-0 border-2 border-[#0f2b5c] text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10"
                      >
                        <a
                          href="#contact"
                          className="flex items-center justify-center gap-2 w-full h-full min-w-0"
                        >
                          <Mail className="h-4 w-4 shrink-0" />
                          <span className="leading-none truncate">Let&apos;s talk</span>
                        </a>
                      </Button>
                    </Magnetic>
                  </div>

                  {/* Secondary Row: View Resume | GitHub | LinkedIn | Email */}
                  <div className="grid grid-cols-4 gap-2">
                    <Magnetic strength={0.2}>
                      <Button
                        asChild
                        variant="outline"
                        onClick={() => setActiveHeroCta("resume")}
                        className={getHeroCtaClass("resume")}
                      >
                        <a
                          href="https://drive.google.com/file/d/1rMpX8K0gKItHWAZkrOcR85zgT1smw4TO/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 w-full h-full min-w-0 text-xs font-semibold"
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
                        onClick={() => setActiveHeroCta("github")}
                        className={getHeroCtaClass("github")}
                      >
                        <a
                          href="https://github.com/Harini410"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 w-full h-full min-w-0 text-xs font-semibold"
                        >
                          <Github className="h-3.5 w-3.5 shrink-0" />
                          <span className="leading-none truncate">GitHub</span>
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
                          className="flex items-center justify-center gap-1.5 w-full h-full min-w-0 text-xs font-semibold"
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
                        onClick={() => {
                          setActiveHeroCta("email")
                          copyEmail()
                        }}
                        className={getHeroCtaClass("email")}
                      >
                        <a
                          href="mailto:harini.lts8@gmail.com"
                          className="flex items-center justify-center gap-1.5 w-full h-full min-w-0 text-xs font-semibold"
                        >
                          <Mail className="h-3.5 w-3.5 shrink-0" />
                          <span className="leading-none truncate">{copiedEmail ? "Copied!" : "Email"}</span>
                        </a>
                      </Button>
                    </Magnetic>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* MOBILE & TABLET LAYOUT (< 1024px): Clean, compact, mobile-first sequence (320px, 375px, 390px, 430px) */}
            <div className="lg:hidden flex flex-col items-center text-center">
              {/* 1. Status Indicator Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-2.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wide uppercase text-[#0f2b5c] dark:text-sky-300">
                  SOFTWARE ENGINEER · OPEN TO OPPORTUNITIES
                </span>
              </div>

              {/* 2. Photo: Crisp, compact portrait designed for mobile viewports */}
              <div className="relative mb-2.5">
                <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-3 border-[#0f2b5c] shadow-md ring-3 ring-[#0f2b5c]/15 bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/Harini.png"
                    alt="Harini L - Software Engineer"
                    width={160}
                    height={160}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* 3. Name */}
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-0.5">
                HARINI L
              </h1>

              {/* 4. Headline */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f2b5c] dark:text-sky-400 mb-1.5 tracking-tight leading-snug px-2 text-balance max-w-sm">
                Good software starts with asking the right questions.
              </h2>

              {/* 5. Supporting line & Hero paragraph */}
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-1 leading-snug px-2">
                Because before I write the fix, I want to understand what&apos;s broken.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mb-2.5 leading-relaxed px-2">
                I&apos;ve worked on Windows recovery software at Dell, tracked down bugs in existing systems, and contributed fixes to codebases at AWS, Apache, and Cisco. I also build things of my own — because there&apos;s always something new to figure out.
              </p>

              {/* Technical Proof Line (Mobile) */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-[10.5px] font-medium text-slate-800 dark:text-slate-200 mb-2.5 max-w-sm">
                <span>Dell Technologies · Software Development · Java &amp; C#/.NET · 9 Merged Open-Source PRs</span>
              </div>

              {/* Recruiter Quick-Scan High-Signal Proof Pills (Mobile) */}
              <div className="w-full max-w-sm sm:max-w-md grid grid-cols-2 gap-1.5 sm:gap-2 mb-3 text-left">
                <a
                  href="#experience"
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-[#0f2b5c]/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-[#0f2b5c] text-white flex items-center justify-center shrink-0">
                    <Building2 className="h-3 w-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white truncate">Dell Technologies</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">Software Engineering &amp; Application Development</div>
                  </div>
                </a>

                <a
                  href="#open-source"
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-emerald-500/[0.08] dark:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Code2 className="h-3 w-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-bold text-emerald-800 dark:text-emerald-300 truncate">9 Merged Open Source</div>
                    <div className="text-[9px] sm:text-[10px] text-emerald-700/80 dark:text-emerald-400/80 truncate">AWS · Apache · Cisco</div>
                  </div>
                </a>

                <a
                  href="#achievements"
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-amber-500/[0.08] dark:bg-amber-950/30 border border-amber-500/20 hover:border-amber-500/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <Award className="h-3 w-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-bold text-amber-800 dark:text-amber-300 truncate">Hackathon Winner</div>
                    <div className="text-[9px] sm:text-[10px] text-amber-700/80 dark:text-amber-400/80 truncate">Dell Agentic AI</div>
                  </div>
                </a>

                <a
                  href="#education"
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-[#0f2b5c]/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-[#0f2b5c]/10 text-[#0f2b5c] dark:bg-sky-400/10 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-3 w-3" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white truncate">M.Tech · 8.70 CGPA</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">UVCE · 2 IEEE Papers</div>
                  </div>
                </a>
              </div>

              {/* 8. Action CTAs on Mobile — Clean Primary Row + Secondary Row */}
              <div className="w-full max-w-sm sm:max-w-md space-y-2 mb-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    className="bg-[#0f2b5c] hover:bg-[#0a1c38] text-white rounded-lg h-9 text-xs font-semibold shadow-xs"
                  >
                    <a
                      href="#experience"
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      <span>Explore my work</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-[#0f2b5c] text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 rounded-lg h-9 text-xs font-semibold shadow-xs"
                  >
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      <span>Let&apos;s talk</span>
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-lg border-border hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10 text-foreground h-8 text-[11px] font-semibold shadow-2xs"
                  >
                    <a
                      href="https://drive.google.com/file/d/1rMpX8K0gKItHWAZkrOcR85zgT1smw4TO/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 w-full h-full"
                    >
                      <FileText className="h-3 w-3 shrink-0" />
                      <span>Resume</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-lg border-border hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10 text-foreground h-8 text-[11px] font-semibold shadow-2xs"
                  >
                    <a
                      href="https://github.com/Harini410"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 w-full h-full"
                    >
                      <Github className="h-3 w-3 shrink-0" />
                      <span>GitHub</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-lg border-border hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10 text-foreground h-8 text-[11px] font-semibold shadow-2xs"
                  >
                    <a
                      href="https://www.linkedin.com/in/harini-lakshmanan-04/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 w-full h-full"
                    >
                      <Linkedin className="h-3 w-3 shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {
                      setActiveHeroCta("email")
                      copyEmail()
                    }}
                    className="rounded-lg border-border hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10 text-foreground h-8 text-[11px] font-semibold shadow-2xs"
                  >
                    <a
                      href="mailto:harini.lts8@gmail.com"
                      className="flex items-center justify-center gap-1 w-full h-full"
                    >
                      <Mail className="h-3 w-3 shrink-0" />
                      <span>{copiedEmail ? "Copied!" : "Email"}</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* 9. Mobile Section Jump Links Strip */}
              <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <a href="#experience" className="px-1.5 py-0.5 rounded hover:text-[#0f2b5c] dark:hover:text-sky-300">Experience</a>
                <span>·</span>
                <a href="#open-source" className="px-1.5 py-0.5 rounded hover:text-[#0f2b5c] dark:hover:text-sky-300">Open Source</a>
                <span>·</span>
                <a href="#projects" className="px-1.5 py-0.5 rounded hover:text-[#0f2b5c] dark:hover:text-sky-300">Projects</a>
                <span>·</span>
                <a href="#beyond-code" className="px-1.5 py-0.5 rounded hover:text-[#0f2b5c] dark:hover:text-sky-300 font-semibold text-[#0f2b5c] dark:text-sky-400">Beyond Code</a>
                <span>·</span>
                <a href="#skills" className="px-1.5 py-0.5 rounded hover:text-[#0f2b5c] dark:hover:text-sky-300">Skills</a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE SECTION — WITH ANIMATED SCROLL-LINKED TIMELINE */}
        <section id="experience" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Work Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                When software breaks, I want to know why.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                Not every engineering problem starts with a blank screen. Sometimes the challenge is understanding a system that already exists, reproducing a failure you can&apos;t easily explain, and narrowing it down until the evidence makes sense.
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

        {/* 3. OPEN-SOURCE CONTRIBUTIONS — 9 MERGED PRs ACROSS AWS, APACHE, AND CISCO */}
        <section
          id="open-source"
          className="relative border-t border-border bg-slate-50/50 py-12 sm:py-14 px-4 sm:px-6 lg:px-8 dark:bg-slate-900/30"
        >
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <Code2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>9 Merged Pull Requests</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0f2b5c] dark:text-sky-400 sm:text-3xl">
                Code doesn&apos;t stop at my own projects.
              </h2>
              <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm leading-relaxed">
                I wanted to contribute beyond code I wrote myself. That meant reading unfamiliar repositories, understanding their conventions, working through edge cases, and submitting changes that could stand up to review. Nine of my pull requests have been merged across AWS, Apache, and Cisco.
              </p>

              {/* Quick Summary Badges across 3 Projects */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold">
                <a
                  href="https://github.com/aws/aws-durable-execution-sdk-java/pull/785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-card border border-border hover:border-[#0f2b5c]/50 text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
                >
                  <span className="font-bold text-[#0f2b5c] dark:text-sky-400">AWS:</span>
                  <span>1 Merged PR (#785)</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
                <a
                  href="https://github.com/apache/incubator-xtable/pull/967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-card border border-border hover:border-[#0f2b5c]/50 text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
                >
                  <span className="font-bold text-[#0f2b5c] dark:text-sky-400">Apache:</span>
                  <span>1 Merged PR (#967)</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
                <a
                  href="https://github.com/cisco-en-programmability/catalystwan-sdk/pulls?q=is%3Apr+author%3AHarini410+is%3Amerged"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-card border border-border hover:border-[#0f2b5c]/50 text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
                >
                  <span className="font-bold text-[#0f2b5c] dark:text-sky-400">Cisco:</span>
                  <span>7 Merged PRs (#245–#251)</span>
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* 3 Core Organization Cards Grid */}
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {/* Card 1: AWS Durable Execution SDK for Java */}
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 hover:shadow-lg">
                <div className="h-1.5 w-full bg-[#0f2b5c]" />
                <CardHeader className="pb-3 p-5 sm:p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0f2b5c]/10 text-[#0f2b5c] dark:bg-sky-400/10 dark:text-sky-400 font-extrabold text-xs">
                      AWS
                    </div>
                    <Badge
                      variant="outline"
                      className="shrink-0 rounded-full border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300"
                    >
                      PR #785 · Merged
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight text-[#0f2b5c] dark:text-slate-100">
                    Getting failure handling right.
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    AWS Durable Execution SDK for Java
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Contributed durable-execution suspension and error handling to the AWS Durable Execution SDK for Java, covering retryable errors, awaited-operation diagnostics, and regression tests to guarantee serverless workflows resume safely.
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-border text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                      <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                        <span>PR #785 · Merged</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ Merged Upstream</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Ensures correct error classification and suspension semantics for serverless workflows.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {["Java", "Maven", "JUnit", "AWS Lambda", "Lifecycle Tests"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 rounded-lg bg-[#0f2b5c] px-3.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#173f7a]"
                    >
                      <a
                        href="https://github.com/aws/aws-durable-execution-sdk-java/pull/785"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        View PR #785
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Official AWS SDK</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Apache XTable (Incubating) — Matching borders, spacing and visual weight */}
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 hover:shadow-lg">
                <div className="h-1.5 w-full bg-[#0f2b5c]" />
                <CardHeader className="pb-3 p-5 sm:p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0f2b5c]/10 text-[#0f2b5c] dark:bg-sky-400/10 dark:text-sky-400 font-extrabold text-xs">
                      Apache
                    </div>
                    <Badge
                      variant="outline"
                      className="shrink-0 rounded-full border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300"
                    >
                      PR #967 · Merged
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight text-[#0f2b5c] dark:text-slate-100">
                    Fixing a compatibility edge case.
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Apache XTable (Hudi Partition Validation)
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Resolved a Guava runtime compatibility issue in Apache Hudi partition-path validation using explicit argument validation and lazy error construction, ensuring safe cross-table translation between Hudi, Delta Lake, and Iceberg.
                    </p>
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-border text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                      <div className="font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                        <span>PR #967 · Merged</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ Merged Upstream</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Ensures safe cross-table partition translation between Apache Hudi, Delta Lake, and Apache Iceberg.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {["Java", "Apache Hudi", "Guava", "Lakehouse Interop", "API Validation"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 rounded-lg bg-[#0f2b5c] px-3.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#173f7a]"
                    >
                      <a
                        href="https://github.com/apache/incubator-xtable/pull/967"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        View PR #967
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Apache Foundation</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Cisco Catalyst WAN SDK (7 Merged PRs) */}
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 hover:shadow-lg">
                <div className="h-1.5 w-full bg-[#0f2b5c]" />
                <CardHeader className="pb-3 p-5 sm:p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0f2b5c]/10 text-[#0f2b5c] dark:bg-sky-400/10 dark:text-sky-400 font-extrabold text-xs">
                      Cisco
                    </div>
                    <Badge
                      variant="outline"
                      className="shrink-0 rounded-full border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300"
                    >
                      PRs #245–#251 · Merged
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight text-[#0f2b5c] dark:text-slate-100">
                    Making API behavior more reliable.
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    Cisco Catalyst WAN SDK (7 Merged PRs)
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Contributed 7 merged PRs across device-health pagination, Root CA certificate management, HTTP method correctness (PUT vs POST/PATCH), session token reuse, UUID serialization, and test automation in an enterprise networking SDK.
                    </p>

                    {/* Interactive Collapsible / Tabbed View for all 7 Cisco PRs */}
                    <div className="rounded-xl border border-border bg-slate-50/80 dark:bg-slate-800/60 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                          Merged Pull Requests ({ciscoMergedPrs.length})
                        </span>
                        <button
                          type="button"
                          onClick={() => setCiscoPrsExpanded(!ciscoPrsExpanded)}
                          className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded bg-[#0f2b5c]/10 dark:bg-[#0f2b5c]/25 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/20 transition-colors cursor-pointer"
                        >
                          {ciscoPrsExpanded ? "Show Top 3 PRs" : "View all 7 PRs"}
                        </button>
                      </div>

                      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                        {(ciscoPrsExpanded ? ciscoMergedPrs : ciscoMergedPrs.slice(0, 3)).map((pr) => (
                          <a
                            key={pr.num}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/pr flex items-start justify-between gap-2 p-1.5 rounded-md bg-white dark:bg-card border border-border/80 hover:border-[#0f2b5c]/50 transition-colors"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                                  {pr.num}
                                </span>
                                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 truncate group-hover/pr:text-[#0f2b5c] dark:group-hover/pr:text-sky-400">
                                  {pr.title}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {pr.desc}
                              </p>
                            </div>
                            <ExternalLink className="h-3 w-3 text-slate-400 group-hover/pr:text-[#0f2b5c] shrink-0 mt-0.5" />
                          </a>
                        ))}
                      </div>

                      {!ciscoPrsExpanded && (
                        <button
                          type="button"
                          onClick={() => setCiscoPrsExpanded(true)}
                          className="w-full text-center text-[10px] text-slate-500 dark:text-slate-400 hover:text-[#0f2b5c] dark:hover:text-sky-400 mt-2 cursor-pointer font-medium"
                        >
                          + 4 more merged PRs (#248, #247, #246, #245) · click to view all
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {["Python", "REST APIs", "API Gateway", "PKI / TLS", "BGP Models", "Pytest"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Differentiated In-Progress note */}
                    <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>In Review: PR #78 (Catalyst Center)</span>
                      <a
                        href="https://github.com/cisco-en-programmability/catalystcentersdk/pull/78"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0f2b5c] dark:text-sky-400 hover:underline font-semibold text-[10.5px]"
                      >
                        <span>Open · Checks passing</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between">
                    <Button
                      asChild
                      size="sm"
                      className="h-8 rounded-lg bg-[#0f2b5c] px-3.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#173f7a]"
                    >
                      <a
                        href="https://github.com/cisco-en-programmability/catalystwan-sdk/pulls?q=is%3Apr+author%3AHarini410+is%3Amerged"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        All 7 Cisco PRs
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Cisco Systems</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Closing Reflection Note */}
            <p className="text-center text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-8 leading-relaxed italic">
              “These contributions taught me to work with code I didn&apos;t start, understand the assumptions behind it, and make changes that fit the project rather than just my own approach.”
            </p>
          </div>
        </section>

        {/* 4. PROJECTS SECTION — 3D TILT CARDS & SPOTLIGHT */}
        <section id="projects" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="container mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <Laptop className="h-3.5 w-3.5" />
                <span>Featured Engineering Projects</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Problems I&apos;ve chosen to work on.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                My projects are where I get to explore an idea end to end: understand the problem, choose an approach, build it, and test whether the result holds up.
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

        {/* 5. BEYOND CODE SECTION — EDITORIAL IMAGE GALLERY & LIGHTBOX */}
        <BeyondCodeSection />

        {/* 6. TECHNICAL SKILLS — INTERACTIVE RELATIONSHIPS & FILTER TRANSITIONS */}
        <section id="skills" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <Code2 className="h-3.5 w-3.5" />
                <span>Developer Toolkit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                The tools I use to solve problems.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                I choose tools based on the problem in front of me. These are the languages, frameworks, and systems I&apos;ve worked with across professional experience, open-source contributions, and projects.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Academic Foundation &amp; Research</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Where I built the fundamentals.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                Computer science taught me how to break complex systems down to first principles—from OS internals and distributed systems to published research.
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
                  <CardHeader className="pb-2.5 p-3.5 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0f2b5c] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <GraduationCap className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-sm sm:text-base md:text-lg font-extrabold text-foreground break-words">
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
                  <div className="px-3.5 sm:px-5 pb-3.5 pt-1 border-t border-border/60">
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
                  <CardHeader className="p-3.5 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-[#0f2b5c] dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                          <GraduationCap className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-sm sm:text-base md:text-lg font-extrabold text-foreground break-words">
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

        {/* 6. ACHIEVEMENTS & CERTIFICATIONS SECTION — SHORT, IMPACTFUL, NON-REPETITIVE */}
        <section id="achievements" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-4xl">
            {/* Section Header */}
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
                <Award className="h-3.5 w-3.5" />
                <span>Milestones &amp; Honors</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                Milestones that pushed me forward.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                Moments where digging deeper, staying persistent, and tackling hard problems paid off.
              </p>
            </div>

            {/* Exactly 3 Featured Prominent Milestone Cards with Consistent Border-2 Styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-stretch">
              {/* 1. Hackathon */}
              <div className="p-4 sm:p-5 rounded-2xl bg-card border-2 border-border/85 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold uppercase tracking-wide">
                      <Award className="h-3.5 w-3.5" />
                      <span>Hackathon</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Jan 2026</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                    Grand Finale Winner
                  </h3>
                  <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                    Dell Technologies · AI Academy
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-border/70 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Ransomware Recovery System
                </div>
              </div>

              {/* 2. Open Source */}
              <div className="p-4 sm:p-5 rounded-2xl bg-card border-2 border-border/85 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-extrabold uppercase tracking-wide">
                      <Code2 className="h-3.5 w-3.5" />
                      <span>Open Source</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 font-bold">Merged</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                    9 Merged Pull Requests
                  </h3>
                  <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                    AWS · Apache · Cisco
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-border/70 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Upstream Production Codebases
                </div>
              </div>

              {/* 3. Postgraduate Education Milestone: M.Tech */}
              <div className="p-4 sm:p-5 rounded-2xl bg-card border-2 border-border/85 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-800 dark:text-indigo-300 text-[11px] font-extrabold uppercase tracking-wide">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span>M.Tech</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">2023 – 2025</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                    Computer Science
                  </h3>
                  <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                    UVCE · CGPA 8.70
                  </div>
                </div>
                <div className="pt-3 mt-3 border-t border-border/70 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  University Visvesvaraya College of Engineering
                </div>
              </div>
            </div>

            {/* 4 Professional Certifications in a Compact Responsive Swipeable Row on Mobile */}
            <div className="pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 px-1 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400" />
                  <span>Professional Certifications</span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 sm:hidden">Swipe to explore →</span>
              </div>

              {/* Horizontal scroll on mobile, 4-column grid on desktop */}
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 pt-0.5 -mx-4 px-4 sm:mx-0 sm:px-0">
                {professionalCertifications.map((item) => (
                  <Card
                    key={item.id}
                    tabIndex={0}
                    className="min-w-[260px] sm:min-w-0 max-w-[280px] sm:max-w-none shrink-0 snap-start border border-border/90 bg-card hover:border-[#0f2b5c]/50 transition-all p-3.5 rounded-xl shadow-2xs flex flex-col justify-between focus:ring-2 focus:ring-[#0f2b5c]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-bold text-[#0f2b5c] dark:text-sky-400 truncate">
                          {item.org}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-border/60 flex items-center justify-between">
                      <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400">Verified</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white rounded-lg text-[11px] font-bold h-7 px-2.5 group shadow-2xs"
                        asChild
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Mail className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
              Have a problem worth solving?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
              I&apos;m looking for my next Software Engineer opportunity where I can write solid code, debug hard problems, and contribute to a demanding team. If my work resonates with you, let&apos;s connect.
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

            {/* Resume Download */}
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 text-left">
  <div>
    <h3 className="text-sm font-bold text-foreground">
      Want to know more about my experience?
    </h3>
    <p className="mt-1 text-xs text-muted-foreground">
      Explore my resume for my professional experience, education, and technical skills.
    </p>
  </div>

  <Button
    asChild
    className="shrink-0 rounded-lg bg-[#0f2b5c] px-4 text-white hover:bg-[#0a1c38]"
  >
    <a
      href="https://drive.google.com/file/d/1rMpX8K0gKItHWAZkrOcR85zgT1smw4TO/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <FileText className="h-4 w-4" />
      View Resume
    </a>
  </Button>
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
