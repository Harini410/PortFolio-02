"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Trophy, ExternalLink, Maximize2, ChevronLeft, ChevronRight, X, Building2, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltCard } from "./tilt-card"
import { triggerWinnerConfetti } from "./confetti"

export interface AchievementItem {
  id: string
  company: "Dell Technologies" | "Toshiba Software India"
  orgTag: string
  roleOrProgram: string
  date: string
  badge: string
  badgeVariant: "amber" | "navy"
  title: string
  caption: string
  extendedDescription: string
  imageSrc: string
  imageAlt: string
  certificateUrl: string
  tags: string[]
  confetti?: boolean
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "dell-agentic-ai-hackathon",
    company: "Dell Technologies",
    orgTag: "Dell Technologies · AI Academy & India Innovation Forum",
    roleOrProgram: "Agentic AI Hackathon Grand Finale",
    date: "January 2026",
    badge: "Grand Finale Winner",
    badgeVariant: "amber",
    title: "Winner — Agentic AI Hackathon Grand Finale",
    caption:
      "Awarded Grand Finale Winner across competitive cross-functional teams for architecting an Agentic AI ransomware recovery decision-support system utilizing dependency graph algorithms and local LLM runbooks.",
    extendedDescription:
      "Captured on stage during the Grand Finale ceremony at Dell Technologies Bengaluru. The system modeled critical IT services as directed acyclic graphs to compute optimal recovery sequences under failure cascading, paired with an offline Ollama Llama-3.1 engine to generate step-by-step remediation runbooks.",
    imageSrc: "/dell-recognition.jpg",
    imageAlt:
      "Harini L and teammates receiving the Grand Finale Winner award at the Dell Technologies Agentic AI Hackathon",
    certificateUrl:
      "https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing",
    tags: ["Agentic AI", "Graph Algorithms", "Decision Support", "Llama 3.1", "Hackathon Winner"],
    confetti: true,
  },
  {
    id: "toshiba-japanese-trainee-program",
    company: "Toshiba Software India",
    orgTag: "Toshiba Software India Pvt. Ltd. · Trainee Excellence",
    roleOrProgram: "Student Intern — Japanese Trainee Program",
    date: "July 2025",
    badge: "Trainee Honors & Program Award",
    badgeVariant: "navy",
    title: "Trainee Excellence & Program Honors",
    caption:
      "Conferred official certificate of completion and trainee honors by senior executive leadership at Toshiba Software India upon concluding the rigorous Japanese Trainee Program.",
    extendedDescription:
      "Conferred during the official recognition ceremony at Toshiba Software India headquarters. Completed rigorous training in core software engineering, AI methodologies, Agile delivery, and PMBOK standards, reflecting strong technical aptitude and high cross-cultural engineering discipline.",
    imageSrc: "/toshiba-recognition.jpg",
    imageAlt:
      "Harini L receiving the official Certificate of Completion and Recognition from executive leadership at Toshiba Software India",
    certificateUrl:
      "https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing",
    tags: ["Software Engineering", "AI Methodologies", "PMBOK Agile", "Trainee Honors"],
    confetti: false,
  },
]

export function AchievementsRecognition() {
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Lock scroll when lightbox modal is open and handle keyboard events
  React.useEffect(() => {
    if (selectedIdx === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + ACHIEVEMENTS_DATA.length) % ACHIEVEMENTS_DATA.length : null))
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % ACHIEVEMENTS_DATA.length : null))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIdx])

  const openLightbox = (idx: number, triggerConfettiIfWinner = false) => {
    setSelectedIdx(idx)
    if (triggerConfettiIfWinner && ACHIEVEMENTS_DATA[idx]?.confetti) {
      triggerWinnerConfetti()
    }
  }

  const activeItem = selectedIdx !== null ? ACHIEVEMENTS_DATA[selectedIdx] : null

  return (
    <section
      id="recognition"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30 relative"
      aria-labelledby="recognition-heading"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            <span>Achievements &amp; Recognition</span>
          </div>
          <h2
            id="recognition-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
          >
            Engineering Milestones in Action.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1.5 leading-relaxed">
            Verified recognition and award ceremonies from Dell Technologies and Toshiba Software India celebrating technical innovation, leadership, and engineering delivery.
          </p>
        </div>

        {/* 2-Column Responsive Card Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const isWinner = item.badgeVariant === "amber"
            return (
              <motion.div
                key={item.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full flex"
              >
                <TiltCard
                  highlightColor={isWinner ? "gold" : "navy"}
                  onClick={() => openLightbox(idx, true)}
                  className={`group h-full w-full flex flex-col justify-between rounded-2xl bg-card border transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${
                    isWinner
                      ? "border-amber-500/40 hover:border-amber-500/80 ring-1 ring-amber-500/20"
                      : "border-border hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 ring-1 ring-[#0f2b5c]/10"
                  }`}
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900/10 dark:bg-slate-950/40 border-b border-border/60">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Legibility & Visual Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                    {/* Company Pill Badge (Top Left) */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                        <Building2 className="h-3 w-3 text-sky-300" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    {/* Expand Zoom Indicator (Bottom Right) */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md transition-all duration-200 group-hover:bg-[#0f2b5c]/90 group-hover:border-sky-400/50">
                        <Maximize2 className="h-3 w-3" />
                        <span className="hidden sm:inline">Expand photo</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                    <div>
                      {/* Badge & Date Row */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                            isWinner
                              ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30"
                              : "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300 border-[#0f2b5c]/20"
                          }`}
                        >
                          {isWinner ? (
                            <Trophy className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                          ) : (
                            <Award className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400" />
                          )}
                          <span>{item.badge}</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.date}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[#0f2b5c] dark:group-hover:text-sky-400">
                        {item.title}
                      </h3>

                      {/* Organization Subtitle */}
                      <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 mt-1">
                        {item.orgTag}
                      </div>

                      {/* Concise Caption */}
                      <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mt-2.5">
                        {item.caption}
                      </p>

                      {/* Key Highlight Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 mt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2.5">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          openLightbox(idx, true)
                        }}
                        className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 hover:bg-[#0f2b5c]/10 h-8 px-2.5 gap-1.5 cursor-pointer"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        <span>View Photo</span>
                      </Button>

                      <Button
                        size="sm"
                        className={`rounded-lg text-xs font-bold h-8 px-3 shadow-xs group cursor-pointer ${
                          isWinner
                            ? "bg-[#0f2b5c] hover:bg-[#0a1c38] text-white"
                            : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c]"
                        }`}
                        asChild
                      >
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (isWinner) triggerWinnerConfetti()
                          }}
                          className="inline-flex items-center gap-1.5"
                        >
                          <span>Official Certificate</span>
                          <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && activeItem && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <motion.div
              key={`lightbox-card-${activeItem.id}`}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/70">
                <div className="flex items-center gap-2.5 min-w-0 pr-3">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0f2b5c] text-white text-[11px] font-bold border border-sky-400/30 shrink-0">
                    <Building2 className="h-3 w-3 text-sky-300" />
                    <span>{activeItem.company}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 truncate">
                    {activeItem.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline mr-1">
                    {selectedIdx + 1} of {ACHIEVEMENTS_DATA.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedIdx(null)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal (Esc)"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport with Previous & Next Controls */}
              <div className="relative flex-1 min-h-[220px] max-h-[58vh] sm:max-h-[62vh] bg-black flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full min-h-[260px] sm:min-h-[360px] md:min-h-[420px]">
                  <Image
                    src={activeItem.imageSrc}
                    alt={activeItem.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain"
                  />
                </div>

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIdx((prev) => (prev !== null ? (prev - 1 + ACHIEVEMENTS_DATA.length) % ACHIEVEMENTS_DATA.length : null))
                  }}
                  className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 cursor-pointer shadow-lg z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % ACHIEVEMENTS_DATA.length : null))
                  }}
                  className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 cursor-pointer shadow-lg z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Lightbox Footer: Caption & Verified Certificate Link */}
              <div className="px-4 sm:px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-sky-400">
                      {activeItem.orgTag}
                    </span>
                    <span className="text-[11px] text-slate-400">· {activeItem.date}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {activeItem.extendedDescription}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0 border-t border-slate-800/80 sm:border-0">
                  <Button
                    size="sm"
                    className="bg-[#0f2b5c] hover:bg-[#163c7e] text-white rounded-lg text-xs font-bold h-8 px-3.5 shadow-sm group w-full sm:w-auto justify-center cursor-pointer"
                    asChild
                  >
                    <a
                      href={activeItem.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (activeItem.confetti) triggerWinnerConfetti()
                      }}
                      className="inline-flex items-center gap-1.5"
                    >
                      <span>View Official Certificate</span>
                      <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
