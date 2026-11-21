"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, FileCheck2, Maximize2, ChevronLeft, ChevronRight, X, Sparkles, Building2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// 3 Core Highlight Photos: Dell Hackathon Team, Toshiba Recognition, JSS IEEE Conference Presentation
const ALL_PHOTOS = [
  {
    src: "/hackathon-group.jpg",
    title: "Agentic AI Hackathon — Winning Team",
    subtitle: "Dell Technologies · Grand Finale Stage",
    caption: "Grand Finale winning team on stage at Dell Technologies Bengaluru.",
    category: "Industry Recognition",
  },
  {
    src: "/toshiba-recognition.jpg",
    title: "Toshiba Recognition",
    subtitle: "Recognition at Toshiba Software India",
    caption: "Official certificate presentation ceremony upon completing the Japanese Trainee Program.",
    category: "Industry Recognition",
  },
  {
    src: "/technical-speaking.jpg",
    title: "IEEE Conference Presentation",
    subtitle: "JSS Science & Technology University · ICETEG 2025",
    caption: "Presented research paper on ensemble network intrusion detection at the IEEE ICETEG 2025 conference (published in IEEE Xplore).",
    category: "IEEE Conference & Research",
  },
]

export function BeyondCodeSection() {
  const [activeLightboxIdx, setActiveLightboxIdx] = React.useState<number | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Lock body scroll and handle keyboard navigation when lightbox is open
  React.useEffect(() => {
    if (activeLightboxIdx === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIdx(null)
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIdx((prev) => (prev !== null ? (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null))
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIdx((prev) => (prev !== null ? (prev + 1) % ALL_PHOTOS.length : null))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeLightboxIdx])

  const openPhotoLightbox = (idx: number) => {
    setActiveLightboxIdx(idx)
  }

  return (
    <section
      id="beyond-code"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-slate-50/50 dark:bg-slate-900/30 relative"
      aria-labelledby="beyond-code-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f2b5c]/10 border border-[#0f2b5c]/20 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Beyond Code</span>
          </div>
          <h2
            id="beyond-code-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
          >
            Moments that tested more than just my code.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1.5 leading-relaxed max-w-xl mx-auto">
            Presenting research from an IEEE podium, winning through the night at a hackathon finale, and delivering when stakes and deadlines were real.
          </p>
        </div>

        <div className="space-y-12">
          {/* TIER 1: FIRST & PROMINENT — INDUSTRY RECOGNITION (DELL & TOSHIBA) */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Industry Recognition &amp; Hackathon Delivery
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* 1. Dell Technologies — Agentic AI Hackathon Grand Finale */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45 }}
                className="flex flex-col"
              >
                <div
                  onClick={() => openPhotoLightbox(0)}
                  className="group relative flex flex-col h-full rounded-2xl bg-card border-2 border-amber-500/40 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-amber-500/20 cursor-pointer"
                >
                  {/* Team Stage Photo */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950/20">
                    <Image
                      src="/hackathon-group.jpg"
                      alt="Grand Finale winning team on stage at Dell Technologies Bengaluru"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 text-amber-950 text-[11px] font-extrabold shadow-md">
                        <Award className="h-3 w-3" />
                        <span>Dell · Grand Finale Winner</span>
                      </div>
                    </div>

                    {/* Expand Indicator (Bottom Right) */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md transition-all duration-200 group-hover:bg-[#0f2b5c] group-hover:border-sky-400/50">
                        <Maximize2 className="h-3 w-3" />
                        <span className="hidden sm:inline">Enlarge</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-card">
                    <div>
                      <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                        Dell Technologies · AI Academy
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                        Agentic AI Hackathon
                      </h3>
                      <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                        Grand Finale
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        Grand Finale Winner for architecting an Agentic AI ransomware recovery system with dependency graph algorithms and local Llama 3.1 runbooks.
                      </p>
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-border/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Bengaluru · Jan 2026</span>
                      <span className="text-amber-700 dark:text-amber-400 font-bold group-hover:underline">
                        View team photo full size →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Toshiba Software — Recognition Ceremony */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="flex flex-col"
              >
                <div
                  onClick={() => openPhotoLightbox(1)}
                  className="group relative flex flex-col h-full rounded-2xl bg-card border-2 border-border hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Photo Area */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950/20">
                    <Image
                      src="/toshiba-recognition.jpg"
                      alt="Harini L receiving certificate at Toshiba Software India"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0f2b5c] text-white text-[11px] font-bold shadow-md">
                        <Building2 className="h-3 w-3 text-sky-300" />
                        <span>Toshiba Software</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md transition-all duration-200 group-hover:bg-[#0f2b5c] group-hover:border-sky-400/50">
                        <Maximize2 className="h-3 w-3" />
                        <span className="hidden sm:inline">Enlarge</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-card">
                    <div>
                      <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 uppercase tracking-wider mb-1">
                        Toshiba Software India
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                        Toshiba Recognition
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        Recognition at Toshiba
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        Conferred official certificate of completion and recognition by executive leadership upon concluding the Japanese Trainee Program.
                      </p>
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-border/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Bengaluru · July 2025</span>
                      <span className="text-[#0f2b5c] dark:text-sky-400 font-semibold group-hover:underline">
                        View full size →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* TIER 2: DISTINCT DEDICATED SPACE — IEEE CONFERENCE PRESENTATION */}
          <div className="pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-4 px-1">
              <FileCheck2 className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                IEEE Conference Presentation
              </span>
            </div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div
                onClick={() => openPhotoLightbox(2)}
                className="group relative rounded-2xl bg-card border border-border hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col md:flex-row items-stretch"
              >
                {/* Photo with Natural Aspect Ratio */}
                <div className="relative aspect-[16/10] md:w-[48%] shrink-0 overflow-hidden bg-slate-950/20">
                  <Image
                    src="/technical-speaking.jpg"
                    alt="Harini L presenting research paper at the IEEE Conference (ICETEG 2025) at JSS Science & Technology University"
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                      <FileCheck2 className="h-3 w-3 text-sky-300" />
                      <span>IEEE Conference · ICETEG 2025</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md transition-all duration-200 group-hover:bg-[#0f2b5c] group-hover:border-sky-400/50">
                      <Maximize2 className="h-3 w-3" />
                      <span className="hidden sm:inline">Enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 uppercase tracking-wider mb-1">
                      JSS Science &amp; Technology University · IEEE Conference
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                      IEEE Conference Presentation
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      ICETEG 2025 · IEEE Xplore Published Research
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed max-w-xl">
                      Presented research paper on ensemble network intrusion detection at the IEEE ICETEG 2025 international conference at JSS Science &amp; Technology University, published in IEEE Xplore.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <a
                      href="https://ieeexplore.ieee.org/document/11472951"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#0f2b5c] dark:text-sky-400 font-semibold hover:underline"
                    >
                      <span>IEEE Xplore Paper</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <span className="text-[#0f2b5c] dark:text-sky-400 font-semibold group-hover:underline">
                      View conference photo full size →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      <AnimatePresence>
        {activeLightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setActiveLightboxIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-card border border-border shadow-2xl overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-card/95 z-10 shrink-0">
                <div className="min-w-0 pr-4">
                  <div className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                    {ALL_PHOTOS[activeLightboxIdx].category}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-foreground truncate">
                    {ALL_PHOTOS[activeLightboxIdx].title}
                  </h4>
                  <p className="text-xs text-[#0f2b5c] dark:text-sky-400 font-semibold truncate">
                    {ALL_PHOTOS[activeLightboxIdx].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline mr-2">
                    {activeLightboxIdx + 1} of {ALL_PHOTOS.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveLightboxIdx(null)}
                    className="h-8 w-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground"
                    aria-label="Close photo lightbox"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Modal Image Display Area */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] max-h-[68vh] bg-black/90 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <Image
                  src={ALL_PHOTOS[activeLightboxIdx].src}
                  alt={ALL_PHOTOS[activeLightboxIdx].title}
                  width={1400}
                  height={950}
                  priority
                  className="max-h-[64vh] w-auto h-auto object-contain rounded-md"
                />

                {/* Left Arrow Navigation */}
                <Button
                  size="icon"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveLightboxIdx((prev) => (prev !== null ? (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : 0))
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 border-white/20 text-white hover:bg-black/90 hover:text-white"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Right Arrow Navigation */}
                <Button
                  size="icon"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveLightboxIdx((prev) => (prev !== null ? (prev + 1) % ALL_PHOTOS.length : 0))
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 border-white/20 text-white hover:bg-black/90 hover:text-white"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Modal Bottom Caption Bar */}
              <div className="px-4 sm:px-6 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-t border-border shrink-0 flex items-center justify-between">
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {ALL_PHOTOS[activeLightboxIdx].caption}
                </p>
                <div className="flex items-center gap-1.5 shrink-0 ml-4">
                  {ALL_PHOTOS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveLightboxIdx(dotIdx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeLightboxIdx === dotIdx ? "w-5 bg-[#0f2b5c] dark:bg-sky-400" : "w-1.5 bg-slate-300 dark:bg-slate-700"
                      }`}
                      aria-label={`Jump to photo ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
