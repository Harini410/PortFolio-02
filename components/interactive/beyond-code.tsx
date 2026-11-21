"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Mic, Maximize2, ChevronLeft, ChevronRight, X, Users, Sparkles, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BeyondCodeItem {
  id: string
  title: string
  subtitle: string
  caption: string
  primaryImage: string
  secondaryImage?: string
  alt: string
  secondaryAlt?: string
  tag: string
  isFeatured?: boolean
  hasGallery?: boolean
}

const BEYOND_CODE_ITEMS: BeyondCodeItem[] = [
  {
    id: "technical-speaking",
    title: "Technical Speaking",
    subtitle: "JSS College · IEEE Conference",
    caption: "Presented and communicated technical ideas at an IEEE conference.",
    primaryImage: "/technical-speaking.jpg",
    alt: "Harini L presenting technical research at the podium at the JSS College IEEE Conference",
    tag: "Conference Presentation",
    isFeatured: true,
  },
  {
    id: "hackathon-grand-finale",
    title: "Agentic AI Hackathon",
    subtitle: "Grand Finale",
    caption: "Winner at the Dell Technologies Grand Finale ceremony.",
    primaryImage: "/hackathon-individual.jpg",
    secondaryImage: "/hackathon-group.jpg",
    alt: "Harini L holding the Winner certificate at the Dell Technologies Agentic AI Hackathon Grand Finale",
    secondaryAlt: "Grand Finale Winner team with certificates on stage at Dell Technologies",
    tag: "Grand Finale Winner",
    hasGallery: true,
  },
  {
    id: "toshiba-recognition",
    title: "Toshiba Recognition",
    subtitle: "Recognition at Toshiba",
    caption: "Recognition ceremony at Toshiba Software India upon concluding the Japanese Trainee Program.",
    primaryImage: "/toshiba-recognition.jpg",
    alt: "Harini L receiving official Certificate of Recognition at Toshiba Software India",
    tag: "Corporate Recognition",
  },
]

// All photos available for full lightbox viewing
const ALL_PHOTOS = [
  {
    src: "/technical-speaking.jpg",
    title: "Technical Speaking",
    subtitle: "JSS College · IEEE Conference",
    caption: "Presented and communicated technical ideas at an IEEE conference.",
  },
  {
    src: "/hackathon-individual.jpg",
    title: "Agentic AI Hackathon — Certificate",
    subtitle: "Grand Finale Winner",
    caption: "Harini L holding the Winner certificate at the Dell Technologies Grand Finale.",
  },
  {
    src: "/hackathon-group.jpg",
    title: "Agentic AI Hackathon — Team Celebration",
    subtitle: "Grand Finale Stage",
    caption: "Winning cross-functional team on stage at Dell Technologies Bengaluru.",
  },
  {
    src: "/toshiba-recognition.jpg",
    title: "Toshiba Recognition",
    subtitle: "Recognition at Toshiba",
    caption: "Recognition ceremony at Toshiba Software India headquarters.",
  },
]

export function BeyondCodeSection() {
  const [activeLightboxIdx, setActiveLightboxIdx] = React.useState<number | null>(null)
  const [hackathonView, setHackathonView] = React.useState<"individual" | "group">("individual")
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Lock body scroll and keyboard navigation when lightbox is open
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
            A few moments beyond building software.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1.5 leading-relaxed max-w-xl mx-auto">
            Technical speaking at IEEE conferences, hackathon delivery under pressure, and professional recognition.
          </p>
        </div>

        {/* Editorial Responsive Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* 1. JSS IEEE Conference — Technical Speaking (Featured Editorial Card: 7 Cols on Desktop) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45 }}
            className="md:col-span-7 flex flex-col"
          >
            <div
              onClick={() => openPhotoLightbox(0)}
              className="group relative flex flex-col h-full rounded-2xl bg-card border border-border hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Photo Container with Natural 3:2 Aspect Ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-950/20">
                <Image
                  src="/technical-speaking.jpg"
                  alt="Harini L presenting technical ideas at the podium at JSS College IEEE Conference"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                />

                {/* Subtle Gradient for Bottom Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                    <Mic className="h-3 w-3 text-sky-300" />
                    <span>Conference Speaking</span>
                  </div>
                </div>

                {/* Expand Indicator (Bottom Right) */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-md transition-all duration-200 group-hover:bg-[#0f2b5c] group-hover:border-sky-400/50">
                    <Maximize2 className="h-3 w-3" />
                    <span className="hidden sm:inline">View photo</span>
                  </div>
                </div>
              </div>

              {/* Editorial Description Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-card">
                <div>
                  <div className="text-xs font-bold text-[#0f2b5c] dark:text-sky-400 uppercase tracking-wider mb-1">
                    JSS College · IEEE Conference
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                    Technical Speaking
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Presented and communicated technical ideas at an IEEE conference.
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-border/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>In-person technical talk</span>
                  <span className="text-[#0f2b5c] dark:text-sky-400 font-semibold group-hover:underline">
                    Click to enlarge →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Agentic AI Hackathon — Grand Finale (Right Column: 5 Cols on Desktop) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="md:col-span-5 flex flex-col"
          >
            <div className="group relative flex flex-col h-full rounded-2xl bg-card border border-amber-500/40 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-amber-500/20">
              {/* Photo Area with Primary/Secondary View Toggle */}
              <div
                onClick={() => openPhotoLightbox(hackathonView === "individual" ? 1 : 2)}
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950/20 cursor-pointer"
              >
                <Image
                  src={hackathonView === "individual" ? "/hackathon-individual.jpg" : "/hackathon-group.jpg"}
                  alt={
                    hackathonView === "individual"
                      ? "Harini L in red top with Winner certificate at Agentic AI Hackathon Grand Finale"
                      : "Grand Finale winning team on stage at Dell Technologies"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className={`transition-transform duration-500 ease-out group-hover:scale-103 ${
                    hackathonView === "individual" ? "object-cover object-top" : "object-cover object-center"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/90 backdrop-blur-md text-amber-950 text-[11px] font-extrabold shadow-md">
                    <Award className="h-3 w-3" />
                    <span>Grand Finale Winner</span>
                  </div>
                </div>

                {/* Photo Switcher Pill (Top Right) */}
                <div
                  className="absolute top-3.5 right-3.5 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="inline-flex items-center p-0.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold shadow-md">
                    <button
                      type="button"
                      onClick={() => setHackathonView("individual")}
                      className={`px-2 py-1 rounded transition-colors ${
                        hackathonView === "individual"
                          ? "bg-amber-500 text-amber-950 font-bold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Certificate
                    </button>
                    <button
                      type="button"
                      onClick={() => setHackathonView("group")}
                      className={`px-2 py-1 rounded transition-colors ${
                        hackathonView === "group"
                          ? "bg-amber-500 text-amber-950 font-bold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Team
                    </button>
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
                    Grand Finale
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                    Agentic AI Hackathon
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    Grand Finale ceremony at Dell Technologies. Individual certificate &amp; winning team stage photo.
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-border/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Dell Technologies Bengaluru</span>
                  <button
                    type="button"
                    onClick={() => openPhotoLightbox(1)}
                    className="text-amber-700 dark:text-amber-400 font-bold hover:underline"
                  >
                    View gallery (2 photos) →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Toshiba Recognition (Clean Horizontal Strip / Card: 12 Cols) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="md:col-span-12"
          >
            <div
              onClick={() => openPhotoLightbox(3)}
              className="group relative rounded-2xl bg-card border border-border hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col sm:flex-row items-stretch"
            >
              {/* Photo with natural aspect ratio */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] sm:w-[48%] md:w-[44%] shrink-0 overflow-hidden bg-slate-950/20">
                <Image
                  src="/toshiba-recognition.jpg"
                  alt="Recognition at Toshiba Software India"
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-md">
                    <Building2 className="h-3 w-3 text-sky-300" />
                    <span>Toshiba Software</span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 z-10 sm:hidden">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md text-white text-[11px]">
                    <Maximize2 className="h-3 w-3" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300 text-xs font-bold border border-[#0f2b5c]/20 mb-2">
                    <span>Corporate Trainee Recognition</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                    Toshiba Recognition
                  </h3>
                  <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-1">
                    Recognition at Toshiba
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed max-w-xl">
                    Official certificate presentation and recognition ceremony at Toshiba Software India headquarters upon completing the Japanese Trainee Program.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Toshiba Software India · Bengaluru</span>
                  <span className="text-[#0f2b5c] dark:text-sky-400 font-semibold group-hover:underline">
                    View full size →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
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
            {/* Modal Dialog Content Container */}
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

              {/* Modal Image Display Area (Natural Aspect Ratio) */}
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
