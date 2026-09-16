"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
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
  ArrowUpRight,
  Menu,
  X,
  Briefcase,
  ArrowUp,
  Building2,
  Laptop,
  FileCheck2,
  ScrollText,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
} from "lucide-react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [touchedCard, setTouchedCard] = useState<string | null>("exp-0")
  const [activeSkillCategory, setActiveSkillCategory] = useState("all")
  const [activeHeroCta, setActiveHeroCta] = useState<string | null>(null)
  const [ieeeExpanded, setIeeeExpanded] = useState(false)
  const [certViewMode, setCertViewMode] = useState<"grid" | "swipe">("swipe")
  const [certCurrentIndex, setCertCurrentIndex] = useState(0)
  const [certScrollSnaps, setCertScrollSnaps] = useState<number[]>([])

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
    // If the user was swiping/dragging, ignore click navigation
    if (certDragMoved.current) {
      certDragMoved.current = false
      return
    }

    // Buttons/links inside the card must work normally and NOT trigger the carousel
    const target = e.target as HTMLElement
    if (target.closest("a") || target.closest("button")) {
      return
    }

    // Entire card area click/tap moves to the next card
    scrollCertNext()
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
    `w-full h-11 px-2.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-2xs ${
      activeHeroCta === id
        ? "bg-[#0f2b5c] text-white border border-[#0f2b5c] shadow-xs"
        : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-200 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white"
    }`

  // Exact factual experiences: Dell (primary prominent), Toshiba, DRDO CAIR
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

  // Exact 4 projects: Ransomware, AI Resume Screener, Smart Complaint Portal, CyberSafe AI
  const projectsData = [
    {
      id: "proj-0",
      title: "AI-Powered Ransomware Recovery Prioritizer",
      tagline: "Agentic AI · NetworkX · Llama 3.1 · Ollama · Dynamic Risk Scoring",
      badge: "Winner — Agentic AI Hackathon",
      date: "January 2026",
      summary:
        "Agentic AI decision-support system combining graph network analysis with dynamic risk scoring to prioritize recovery of critical enterprise assets.",
      bullets: [
        "Built interactive NetworkX attack graphs modeling infection paths, asset dependencies, and potential blast radius.",
        "Integrated Llama 3.1 via Ollama to generate context-aware recovery plans for isolation, reimaging, and restore.",
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
    {
      id: "proj-1",
      title: "AI Resume Screener Web Application",
      tagline: "Multi-Agent RAG · Next.js · TypeScript · Groq · Semantic Search",
      badge: null,
      date: "September 2026",
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
      id: "proj-2",
      title: "Smart Complaint Management Portal",
      tagline: "Java · Spring Boot · Hibernate · MySQL · React.js · Spring Security",
      badge: null,
      date: "September 2026",
      summary:
        "Enterprise complaint management portal featuring role-based access control, modular RESTful APIs, and relational database persistence.",
      bullets: [
        "Architected role-based authentication and secure session management using Spring Security and modular REST integration.",
        "Engineered clean repository-pattern REST services with Hibernate ORM, MySQL database, and responsive React.js dashboards.",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Hibernate ORM",
        "Spring Security",
        "React.js",
        "MySQL",
      ],
      demoUrl: null,
      githubUrl: "https://github.com/Harini410/Fullstack-complaint-portal",
      certificate: null,
      isGoldHighlight: false,
    },
    {
      id: "proj-3",
      title: "CyberSafe AI — Cyberbullying Detection Platform",
      tagline: "Autonomous 7-Agent DAG · RoBERTa · Dense Vector RAG · Affective NLP · FastAPI",
      badge: "M.Tech Thesis Project",
      date: "Sep 2026",
      summary:
        "Privacy-preserving autonomous multi-agent cyberbullying detection and conversational safety support platform powered by RoBERTa and dense RAG.",
      bullets: [
        "Orchestrated 7-agent autonomous DAG pipeline (Detection, Emotion, Context, Risk, RAG, Explanation, Response) with <105ms latency.",
        "Integrated fine-tuned RoBERTa sequence inference, MiniLM dense RAG across 6 safety domains, and context-aware Copilot chatbot.",
      ],
      tech: [
        "RoBERTa",
        "Multi-Agent DAG",
        "Dense RAG (MiniLM)",
        "FastAPI",
        "Affective NLP",
        "Next.js 16 (React 19)",
      ],
      demoUrl: "https://cyberbullying-detection-eta.vercel.app/",
      githubUrl: "https://github.com/Harini410/Cyberbullying-detection",
      certificate: null,
      isGoldHighlight: false,
    },
  ]

  // Technical Skills - Streamlined ~27 highly relevant skills across 5 categories
  const skillGroups = [
    {
      category: "ai",
      title: "AI & AI-Assisted Engineering",
      skills: [
        "Agentic AI",
        "LLM Applications",
        "Claude Code & Coding Agents",
        "Spec-Driven Development (SDD)",
        "Multi-Agent RAG",
        "NLP (RoBERTa)",
        "AI-Assisted Engineering",
      ],
    },
    {
      category: "programming",
      title: "Programming",
      skills: ["C#", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "software",
      title: "Software Engineering",
      skills: [
        ".NET Core",
        "Spring Boot",
        "React.js",
        "Next.js",
        "REST APIs",
      ],
    },
    {
      category: "systems",
      title: "Systems & Automation",
      skills: [
        "PowerShell Automation",
        "WinPE / WinRE",
        "DISM & WIM Deployment",
        "Windows Internals",
        "Batch Scripting",
      ],
    },
    {
      category: "tools",
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "MongoDB",
        "Git / GitHub",
        "Jira",
        "Figma",
      ],
    },
  ]

  const filteredSkillGroups =
    activeSkillCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeSkillCategory)

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
      title: "Student Intern Japanese Trainee Certification",
      org: "Toshiba Software India Pvt. Ltd.",
      date: "Jun 2025 – Jul 2025",
      desc: "Software engineering principles, AI, PMBOK project estimation, and agile delivery.",
      link: "https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing",
    },
    {
      id: "cert-2",
      title: "Research Internship Trainee Certification",
      org: "DRDO — Centre for Artificial Intelligence and Robotics (CAIR)",
      date: "Jan 2025 – Jun 2025",
      desc: "Component development and RESTful data integration for institutional AI evaluation systems.",
      link: "https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=sharing",
    },
    {
      id: "cert-3",
      title: "Software Testing Certification",
      org: "NPTEL National Accreditation",
      date: "Jul 2024 – Oct 2024",
      desc: "Software testing methodologies, quality assurance frameworks, and verification testing.",
      link: "https://drive.google.com/file/d/1TZyZvl5HiDj390lw11bnyDYVS1gplW17/view?usp=drive_link",
    },
    {
      id: "cert-4",
      title: "Full Stack Java Development",
      org: "JSpiders Training Center",
      date: "Apr 2022 – Mar 2023",
      desc: "Enterprise engineering program covering Core Java, Spring Boot, Hibernate ORM, and SQL.",
      link: "https://drive.google.com/file/d/1RTtCGOrI2vyXH6j_xHPgi3w3-1oqNjTv/view?usp=drive_link",
    },
  ]

  // Render individual project card
  const renderProjectCard = (project: (typeof projectsData)[0]) => {
    const isTouched = touchedCard === project.id
    return (
      <Card
        key={project.id}
        onClick={() => setTouchedCard(project.id)}
        className={`w-full h-full flex flex-col justify-between transition-all duration-300 cursor-pointer bg-card ${
          isTouched
            ? "border-[#0f2b5c] shadow-[0_0_25px_rgba(15,43,92,0.16)] bg-gradient-to-br from-[#0f2b5c]/[0.03] via-card to-card ring-1 ring-[#0f2b5c]/30"
            : "border-border hover:border-[#0f2b5c]/60 hover:shadow-md active:border-[#0f2b5c]"
        }`}
      >
        <div className="flex flex-col flex-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-2 mb-2">
              {project.badge ? (
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                    project.isGoldHighlight
                      ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-extrabold"
                      : "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300 border border-[#0f2b5c]/20"
                  }`}
                >
                  {project.badge}
                </span>
              ) : (
                <span className="text-[11px] font-bold text-[#0f2b5c] dark:text-sky-400">
                  Featured Project
                </span>
              )}
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{project.date}</span>
            </div>

            <CardTitle
              className={`text-lg font-bold transition-colors min-h-[3.25rem] flex items-center ${
                isTouched ? "text-[#0f2b5c] dark:text-sky-400" : "text-foreground"
              }`}
            >
              {project.title}
            </CardTitle>

            <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1 line-clamp-1">
              {project.tagline}
            </div>

            <CardDescription className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2 font-normal leading-relaxed min-h-[2.8rem]">
              {project.summary}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0 pb-4 flex flex-col flex-1 justify-between">
            <ul className="space-y-2 mb-4 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0f2b5c] dark:text-sky-400 font-bold mt-0.5 shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border mt-auto">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className={`text-[11px] font-medium ${
                    isTouched
                      ? "bg-[#0f2b5c]/15 text-[#0f2b5c] dark:text-sky-200 border-[#0f2b5c]/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-border"
                  }`}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>

        <div className="px-6 pb-5 pt-3 border-t border-border flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/30 rounded-b-xl min-h-[56px] mt-auto">
          {project.demoUrl && (
            <Button
              size="sm"
              className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white text-xs font-semibold rounded-lg h-8 px-3"
              asChild
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-8 px-3"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Code</span>
              </a>
            </Button>
          )}

          {project.certificate && (
            <Button
              size="sm"
              variant="outline"
              className="border-amber-500/40 text-amber-900 dark:text-amber-300 hover:bg-amber-500/10 text-xs font-bold rounded-lg h-8 px-3"
              asChild
            >
              <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Award className="h-3.5 w-3.5 text-amber-600" />
                <span>Certificate</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </Card>
    )
  }

  // Render the ending GitHub all projects card
  const renderGithubOverviewCard = () => (
    <Card className="w-full h-full flex flex-col justify-between border-2 border-dashed border-[#0f2b5c]/35 hover:border-[#0f2b5c] bg-gradient-to-br from-[#0f2b5c]/[0.03] via-card to-card p-6 rounded-2xl transition-all shadow-xs group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#0f2b5c] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Github className="h-6 w-6" />
          </div>
          <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300 border border-[#0f2b5c]/25">
            GitHub
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-foreground">
          Explore All GitHub Repositories
        </h3>
        <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 mt-1">
          github.com/Harini410
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-3 leading-relaxed">
          Access complete source code repositories, open-source utilities, enterprise full-stack implementations, automated recovery workflows, and ongoing software experiments.
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <Button
          className="w-full bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 shadow-xs"
          asChild
        >
          <a
            href="https://github.com/Harini410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </Card>
  )

  const certSlideLabels = [
    "Agentic AI Hackathon Winner",
    "Toshiba Software Trainee",
    "DRDO CAIR Research Trainee",
    "NPTEL Software Testing",
    "JSpiders Full Stack Java",
    "Complete Certificate Archive",
  ]
  const totalCertSlides = 6

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#0f2b5c]/20 selection:text-[#0f2b5c] dark:selection:text-sky-300">
      {/* Ambient subtle deep navy glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-72 bg-[radial-gradient(ellipse_60%_35%_at_50%_0%,rgba(15,43,92,0.08),transparent)] pointer-events-none z-0" />

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Name Branding */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#0f2b5c] text-white font-extrabold text-sm flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                HL
              </div>
              <span className="font-extrabold text-base tracking-tight text-foreground group-hover:text-[#0f2b5c] dark:group-hover:text-sky-400 transition-colors">
                Harini L
              </span>
            </a>

            {/* Desktop Navigation in Exact Required Section Sequence */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <a href="#experience" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Education</a>
              <a href="#achievements" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-[#0f2b5c] dark:hover:text-sky-400 transition-colors">Contact</a>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                asChild
                className="hidden sm:inline-flex rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-400 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white h-8 text-xs font-semibold"
              >
                <a
                  href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume</span>
                </a>
              </Button>

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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2">
            <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Education
              </a>
              <a
                href="#achievements"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Achievements &amp; Certifications
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c]"
              >
                Contact
              </a>
              <div className="pt-2 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg h-9 text-xs font-semibold"
                >
                  <a
                    href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <FileText className="h-3.5 w-3.5" /> Download Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* 1. HERO SECTION — PROFESSIONAL TWO-COLUMN DESKTOP HERO (40% PHOTO / 60% CONTENT) */}
        <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-[1220px]">
            {/* DESKTOP LAYOUT (>= 1024px): 40% Left Photo, 60% Right Introduction */}
            <div className="hidden lg:flex items-center justify-between gap-10 xl:gap-14">
              {/* LEFT COLUMN: Large Sharp Professional Photo (~40%) */}
              <div className="w-[38%] flex justify-center shrink-0">
                <div className="relative">
                  <div className="relative w-[320px] h-[320px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-4 border-[#0f2b5c] shadow-xl ring-4 ring-[#0f2b5c]/15 bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/Harini.png"
                      alt="Harini L - Software Engineer"
                      width={380}
                      height={380}
                      priority
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Complete Professional Introduction (~60%) */}
              <div className="w-[62%] flex flex-col items-start text-left">
                {/* Status Indicator Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#0f2b5c] animate-pulse" />
                  <span className="text-xs font-bold tracking-wide uppercase text-[#0f2b5c] dark:text-sky-300">
                    ACTIVELY SEEKING OPPORTUNITIES
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground mb-1">
                  HARINI L
                </h1>

                {/* Role Title */}
                <h2 className="text-2xl font-bold text-[#0f2b5c] dark:text-sky-400 mb-1.5">
                  Software Engineer
                </h2>

                {/* Supporting Positioning Line */}
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">
                  AI-Native Software Development • Agentic AI • Full-Stack Engineering
                </div>

                {/* Concise Professional Summary */}
                <p className="text-[14.5px] text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-xl mb-4">
                  Software Engineer building production software and AI-powered systems, leveraging coding agents, Agentic AI, LLMs, and Spec-Driven Development across modern software development workflows.
                </p>

                {/* Education Credential Chip */}
                <a
                  href="#education"
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-border hover:border-[#0f2b5c]/50 transition-all mb-4.5 group cursor-pointer"
                >
                  <GraduationCap className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                    M.Tech CSE (IT) — UVCE Bengaluru
                  </span>
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    CGPA: 8.70 / 10
                  </span>
                </a>

                {/* Two Compact Visual Highlight Groups */}
                <div className="w-full max-w-xl space-y-2 mb-5">
                  {/* Highlight 1: Software Engineering */}
                  <div className="p-2.5 rounded-lg bg-card border border-border/80 text-left shadow-2xs">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-1 flex items-center gap-1.5">
                      <Code2 className="h-3 w-3" />
                      <span>SOFTWARE ENGINEERING</span>
                    </div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                      C#/.NET · Java/Spring Boot · React · Python · REST APIs · Application Development
                    </div>
                  </div>

                  {/* Highlight 2: AI-Native Development */}
                  <div className="p-2.5 rounded-lg bg-card border border-[#0f2b5c]/25 dark:border-sky-500/30 text-left bg-gradient-to-r from-[#0f2b5c]/[0.03] to-transparent shadow-2xs">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-1 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      <span>AI-NATIVE DEVELOPMENT</span>
                    </div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                      Claude Code · Coding Agents · Agentic AI · LLM Applications · RAG · Spec-Driven Development
                    </div>
                  </div>
                </div>

                {/* Main Action CTAs — Clean Professional 2-row × 4-column Grid (Visually matching Technical Skills tabs) */}
                <div className="w-full max-w-xl grid grid-cols-4 gap-2.5">
                  {/* Row 1: Email | Phone | LinkedIn | GitHub */}
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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">{copiedEmail ? "Copied!" : "Email"}</span>
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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">{copiedPhone ? "Copied!" : "Phone"}</span>
                    </a>
                  </Button>

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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Linkedin className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">LinkedIn</span>
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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Github className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">GitHub</span>
                    </a>
                  </Button>

                  {/* Row 2: Experience | Projects | Resume | Bengaluru, India */}
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => setActiveHeroCta("experience")}
                    className={getHeroCtaClass("experience")}
                  >
                    <a
                      href="#experience"
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">Experience</span>
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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <Code2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">Projects</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    onClick={() => setActiveHeroCta("resume")}
                    className={getHeroCtaClass("resume")}
                  >
                    <a
                      href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <FileText className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">Resume</span>
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
                      className="flex items-center justify-center gap-1.5 w-full h-full"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">Bengaluru, India</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE & TABLET LAYOUT (< 1024px): Seamless, natural top-to-bottom sequence */}
            <div className="lg:hidden flex flex-col items-center text-center">
              {/* 1. Status Indicator Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 mb-3.5">
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

              {/* 5. AI-Native Positioning */}
              <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">
                AI-Native Software Development • Agentic AI • Full-Stack Engineering
              </div>

              {/* 6. Professional Summary */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-lg mb-3.5">
                Software Engineer building production software and AI-powered systems, leveraging coding agents, Agentic AI, LLMs, and Spec-Driven Development across modern software development workflows.
              </p>

              {/* 7. Education */}
              <a
                href="#education"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-border hover:border-[#0f2b5c]/50 transition-all mb-4 group cursor-pointer"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
                  M.Tech CSE (IT) — UVCE Bengaluru
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  CGPA: 8.70 / 10
                </span>
              </a>

              {/* 8. Software Engineering / AI Highlights */}
              <div className="w-full max-w-md space-y-2 mb-4.5">
                <div className="p-2.5 rounded-lg bg-card border border-border/80 text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-1 flex items-center gap-1.5">
                    <Code2 className="h-3 w-3" />
                    <span>SOFTWARE ENGINEERING</span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    C#/.NET · Java/Spring Boot · React · Python · REST APIs · Application Development
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-card border border-[#0f2b5c]/25 dark:border-sky-500/30 text-left bg-gradient-to-r from-[#0f2b5c]/[0.03] to-transparent">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    <span>AI-NATIVE DEVELOPMENT</span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    Claude Code · Coding Agents · Agentic AI · LLM Applications · RAG · Spec-Driven Development
                  </div>
                </div>
              </div>

              {/* 9. Action CTAs — Clean Professional 4-row × 2-column Grid (Visually matching Technical Skills tabs) */}
              <div className="w-full max-w-md grid grid-cols-2 gap-2.5">
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">{copiedEmail ? "Copied!" : "Email"}</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">{copiedPhone ? "Copied!" : "Phone"}</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Linkedin className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">LinkedIn</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Github className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">GitHub</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Briefcase className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">Experience</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <Code2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">Projects</span>
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
                    href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">Resume</span>
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
                    className="flex items-center justify-center gap-1.5 w-full h-full"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="leading-none">Bengaluru, India</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPERIENCE SECTION — WITH RIGHT-SIDE CAREER JOURNEY TIMELINE */}
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

            {/* Experience Layout with Left-Side Career Journey Timeline Track */}
            <div className="relative">
              {/* Vertical Journey Line on Left Side */}
              <div className="absolute left-4 sm:left-5 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#0f2b5c] via-[#0f2b5c]/60 to-[#0f2b5c]/25 pointer-events-none" />

              <div className="space-y-6 pl-8 sm:pl-10">
                {experiences.map((exp) => {
                  const isTouched = touchedCard === exp.id
                  return (
                    <div key={exp.id} className="relative">
                      {/* Timeline Dot on Left Vertical Rail (No step numbers) */}
                      <div className="absolute -left-8 sm:-left-10 top-6 w-8 sm:w-10 flex items-center justify-center z-10 pointer-events-none">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-3 flex items-center justify-center transition-all ${
                            isTouched
                              ? "bg-[#0f2b5c] border-white shadow-md ring-2 ring-[#0f2b5c]"
                              : "bg-white dark:bg-slate-900 border-[#0f2b5c]"
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0f2b5c] dark:bg-sky-400" />
                        </div>
                      </div>

                      <Card
                        onClick={() => setTouchedCard(exp.id)}
                        className={`transition-all duration-300 cursor-pointer bg-card ${
                          exp.isProminent
                            ? isTouched
                              ? "border-2 border-[#0f2b5c] shadow-[0_0_30px_rgba(15,43,92,0.18)] ring-1 ring-[#0f2b5c]/40"
                              : "border-2 border-[#0f2b5c]/70 shadow-md hover:border-[#0f2b5c]"
                            : isTouched
                            ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                            : "border border-border hover:border-[#0f2b5c]/50"
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="flex items-start gap-3.5">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs mt-0.5 ${
                                  exp.isProminent
                                    ? "bg-[#0f2b5c] text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-[#0f2b5c] dark:text-sky-400 border border-border"
                                }`}
                              >
                                {exp.isProminent ? (
                                  <Building2 className="h-5 w-5" />
                                ) : (
                                  <Briefcase className="h-5 w-5" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="text-lg sm:text-xl font-black text-foreground">
                                    {exp.company}
                                  </h3>
                                </div>
                                <div className="text-sm sm:text-base font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                                  {exp.role}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 pl-13 sm:pl-0">
                              <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-border">
                                <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                <MapPin className="h-3 w-3" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          {/* Highlights Bullets */}
                          <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-[#0f2b5c] dark:text-sky-400 font-bold mt-0.5">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Skills and Tags */}
                          <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap gap-1.5">
                              {exp.skills.map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className={`text-[11px] font-medium ${
                                    isTouched
                                      ? "bg-[#0f2b5c]/15 text-[#0f2b5c] dark:text-sky-200 border-[#0f2b5c]/30"
                                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-border"
                                  }`}
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>

                            {exp.certificate && (
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 hover:text-[#0f2b5c] hover:bg-[#0f2b5c]/10 active:bg-[#0f2b5c] active:text-white h-7 ml-auto"
                                asChild
                              >
                                <a
                                  href={exp.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1"
                                >
                                  <span>Certificate</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION — GRID VIEW ONLY */}
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

            {/* Projects Grid View (4 Projects in balanced 2x2 grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {projectsData.map((project) => renderProjectCard(project))}
            </div>

            {/* GitHub Overview Spotlight Card */}
            <div className="mt-6">
              {renderGithubOverviewCard()}
            </div>

            {/* Bottom GitHub CTA Button */}
            <div className="mt-8 sm:mt-10 text-center">
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/40 text-[#0f2b5c] dark:text-sky-400 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white h-10 px-5 text-xs font-bold"
                asChild
              >
                <a
                  href="https://github.com/Harini410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>View More Projects on GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SKILLS — 5 CATEGORIZED MATRICES (WPF REMOVED) */}
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

            {/* Filter Buttons */}
            <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto scrollbar-none pb-1">
              {[
                { id: "all", label: "All Skills" },
                { id: "ai", label: "AI & AI-Assisted" },
                { id: "programming", label: "Programming" },
                { id: "software", label: "Software Engineering" },
                { id: "systems", label: "Systems & Automation" },
                { id: "tools", label: "Databases & Tools" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveSkillCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeSkillCategory === c.id
                      ? "bg-[#0f2b5c] text-white shadow-xs"
                      : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Categorized Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkillGroups.map((group) => (
                <Card
                  key={group.category}
                  className="border border-border hover:border-[#0f2b5c]/50 transition-all bg-card p-4 rounded-xl"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-2.5 flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5" />
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EDUCATION SECTION — COMPACT WITH MINIMAL COLLAPSIBLE IEEE CONFERENCES */}
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
              <Card
                onClick={() => setTouchedCard("edu-mtech")}
                className={`border transition-all duration-300 cursor-pointer bg-card ${
                  touchedCard === "edu-mtech"
                    ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                    : "border-border hover:border-[#0f2b5c]/60"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#0f2b5c] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-extrabold text-foreground">
                          Master of Technology — Computer Science &amp; Engineering (Information Technology)
                        </CardTitle>
                        <CardDescription className="text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                          University Visvesvaraya College of Engineering (UVCE), Bengaluru
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0 pl-13 sm:pl-0">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">CGPA:</span>
                        <span className="text-sm sm:text-base font-black text-amber-800 dark:text-amber-300">
                          8.70 / 10
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400" />
                        <span>Feb 2024 – Jan 2026</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {/* Collapsible IEEE Conferences under M.Tech entry */}
                <div className="px-6 pb-4 pt-1 border-t border-border/60">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIeeeExpanded(!ieeeExpanded)
                    }}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all cursor-pointer text-xs font-bold ${
                      ieeeExpanded
                        ? "bg-[#0f2b5c] text-white border border-[#0f2b5c]"
                        : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-400 hover:border-[#0f2b5c] hover:bg-[#0f2b5c]/10"
                    }`}
                    aria-expanded={ieeeExpanded}
                  >
                    <FileCheck2 className="h-3.5 w-3.5" />
                    <span>IEEE Conferences</span>
                    <span className="font-extrabold text-sm ml-1">{ieeeExpanded ? "−" : "+"}</span>
                  </button>

                  {/* Expanded View: Exactly 2 Verified IEEE Papers */}
                  {ieeeExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-3.5 animate-in fade-in duration-200">
                      {/* Paper 1: Cyberbullying Framework */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-border flex flex-col justify-between">
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
                            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-semibold h-7 px-2.5"
                            asChild
                          >
                            <a
                              href={ieeePapers[0].paperLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>View Paper</span>
                              <ExternalLink className="h-3 w-3 text-white" />
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5"
                            asChild
                          >
                            <a
                              href={ieeePapers[0].certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5"
                            asChild
                          >
                            <a
                              href={ieeePapers[0].demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Paper 2: Network Intrusion Detection */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-border flex flex-col justify-between">
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
                            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-semibold h-7 px-2.5"
                            asChild
                          >
                            <a
                              href={ieeePapers[1].paperLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>View Paper</span>
                              <ExternalLink className="h-3 w-3 text-white" />
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-7 px-2.5"
                            asChild
                          >
                            <a
                              href={ieeePapers[1].certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* B.E. Degree Card */}
              <Card
                onClick={() => setTouchedCard("edu-be")}
                className={`border transition-all duration-300 cursor-pointer bg-card ${
                  touchedCard === "edu-be"
                    ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                    : "border-border hover:border-[#0f2b5c]/60"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-[#0f2b5c] dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-extrabold text-foreground">
                          Bachelor of Engineering — Information Science &amp; Engineering
                        </CardTitle>
                        <CardDescription className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                          East West Institute of Technology, Bengaluru
                        </CardDescription>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1.5 shrink-0 pl-13 sm:pl-0">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-border">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CGPA:</span>
                        <span className="text-sm sm:text-base font-bold text-foreground">
                          7.2 / 10
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400" />
                        <span>Aug 2017 – Aug 2021</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section id="achievements" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30">
          <div className="container mx-auto max-w-4xl">
            {/* Section Header with View Toggle Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Achievements &amp; Certifications
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                  Engineering honors, industry hackathon awards, and professional accreditations
                </p>
              </div>

              {/* Swipe Cards vs Grid View Switcher */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-border self-start sm:self-auto shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setCertViewMode("swipe")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    certViewMode === "swipe"
                      ? "bg-[#0f2b5c] text-white shadow-xs"
                      : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                  }`}
                  aria-label="Switch to Swipe Card View"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Swipe Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCertViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    certViewMode === "grid"
                      ? "bg-[#0f2b5c] text-white shadow-xs"
                      : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
                  }`}
                  aria-label="Switch to Grid View"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span>Grid View</span>
                </button>
              </div>
            </div>

            {/* MODE 1: GRID VIEW */}
            {certViewMode === "grid" && (
              <div className="animate-in fade-in duration-200">
                {/* Featured Hackathon Winner Card */}
                <Card className="border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.04] via-card to-card p-5 sm:p-6 rounded-2xl shadow-sm mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0">
                        <Award className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-500/30 mb-1.5">
                          <span>Winner</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-foreground">
                          Winner — Agentic AI Hackathon, Dell Technologies
                        </h3>
                        <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                          Dell Technologies (AI Academy &amp; India Innovation Forum) · Jan 2026
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2 leading-relaxed">
                          Awarded Winner for architecting an autonomous ransomware recovery decision-support system integrating Agentic AI with network graph analysis for enterprise dependency mapping.
                        </p>
                      </div>
                    </div>

                    <div className="sm:shrink-0 pl-16 sm:pl-0">
                      <Button
                        size="sm"
                        className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 px-4 shadow-xs"
                        asChild
                      >
                        <a
                          href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Supported Professional Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {professionalCertifications.map((item) => (
                    <Card
                      key={item.id}
                      className="border border-border hover:border-[#0f2b5c]/50 transition-all bg-card flex flex-col justify-between p-4"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <Award className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.date}</span>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-foreground">
                          {item.title}
                        </div>
                        <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                          {item.org}
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-normal mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/60 mt-3 flex items-center justify-between">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0f2b5c] dark:text-sky-400 hover:underline"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="https://drive.google.com/drive/folders/1FmX4R-KtWO3z30mpmEgomEKlCCxiFkxl?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f2b5c] dark:text-sky-400 hover:underline"
                  >
                    <span>View Complete Certificate Archive on Google Drive</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}

            {/* MODE 2: SWIPE CARDS VIEW (Interactive Touch/Swipe + Arrow Buttons) */}
            {certViewMode === "swipe" && (
              <div className="max-w-2xl mx-auto animate-in fade-in duration-200">
                {/* Carousel Controls Header */}
                <div className="flex items-center justify-between gap-2 mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400">
                      {certSlideLabels[certCurrentIndex]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={scrollCertPrev}
                      className="h-8 w-8 rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white cursor-pointer"
                      aria-label="Previous certification slide"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={scrollCertNext}
                      className="h-8 w-8 rounded-lg bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white cursor-pointer"
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
                            Winner — Agentic AI Hackathon, Dell Technologies
                          </h3>
                          <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                            Dell Technologies (AI Academy &amp; India Innovation Forum)
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2.5 leading-relaxed">
                            Awarded Winner for architecting an autonomous ransomware recovery decision-support system integrating Agentic AI with network graph analysis for enterprise dependency mapping.
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Official Honor</span>
                          <Button
                            size="sm"
                            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-8 px-3.5 shadow-xs"
                            asChild
                          >
                            <a
                              href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Certificate</span>
                              <ExternalLink className="h-3.5 w-3.5" />
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

                          <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Verified Certificate</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white rounded-lg text-xs font-bold h-8 px-3.5"
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
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </div>
                        </Card>
                      </div>
                    ))}

                    {/* Slide 6: Google Drive Complete Archive */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                      <Card
                        onClick={handleCertCardClick}
                        onPointerDown={handleCertPointerDown}
                        onPointerMove={handleCertPointerMove}
                        onTouchStart={handleCertTouchStart}
                        onTouchMove={handleCertTouchMove}
                        className="border border-[#0f2b5c]/30 bg-gradient-to-br from-[#0f2b5c]/[0.04] via-card to-card p-5 sm:p-6 rounded-2xl shadow-sm min-h-[250px] flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 text-xs font-bold border border-[#0f2b5c]/20">
                              <FolderGit2 className="h-3.5 w-3.5" />
                              <span>Full Archive</span>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">All Credentials</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                            Complete Certificate Archive on Google Drive
                          </h3>
                          <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                            Verified Certifications &amp; Accreditations Repository
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-2.5 leading-relaxed">
                            Access the complete drive repository containing all official internship completion certificates, hackathon award honors, NPTEL course verification documents, and technical training accreditations.
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Google Drive Repository</span>
                          <Button
                            size="sm"
                            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-8 px-3.5 shadow-xs"
                            asChild
                          >
                            <a
                              href="https://drive.google.com/drive/folders/1FmX4R-KtWO3z30mpmEgomEKlCCxiFkxl?usp=drive_link"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Open Full Archive</span>
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </div>
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
              <div
                onClick={() => {
                  setTouchedCard("c-email")
                  copyEmail()
                }}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer ${
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
              </div>

              {/* Phone */}
              <div
                onClick={() => {
                  setTouchedCard("c-phone")
                  copyPhone()
                }}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer ${
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
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harini-lakshmanan-04/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTouchedCard("c-linkedin")}
                className={`p-4 rounded-xl bg-card border-2 transition-all cursor-pointer block ${
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
              </a>
            </div>

            {/* Quick Resume Download Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <div className="text-sm font-black text-foreground">
                  Looking for my full resume?
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  Download the latest Software Engineer resume covering Dell Technologies, education, and technical projects.
                </div>
              </div>
              <Button
                className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 px-4 shrink-0 shadow-xs"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/119PTgpH2C7tSg0N7bxQ1oVl-bUBFa5NX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Download Resume PDF</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-card text-xs text-slate-500 dark:text-slate-400">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Harini L. Built with Next.js, React &amp; Tailwind CSS.</div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="#experience" className="hover:text-[#0f2b5c] dark:hover:text-sky-400">Experience</a>
            <a href="#projects" className="hover:text-[#0f2b5c] dark:hover:text-sky-400">Projects</a>
            <a href="#skills" className="hover:text-[#0f2b5c] dark:hover:text-sky-400">Skills</a>
            <a href="#education" className="hover:text-[#0f2b5c] dark:hover:text-sky-400">Education</a>
            <a href="#achievements" className="hover:text-[#0f2b5c] dark:hover:text-sky-400">Achievements</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1.5 rounded-md hover:bg-[#0f2b5c]/10 hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
