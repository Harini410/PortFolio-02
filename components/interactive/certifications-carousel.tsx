"use client"

import * as React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Award, ExternalLink, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface CertificationItem {
  id: string
  title: string
  org: string
  date: string
  desc: string
  link: string
}

interface CertificationsCarouselProps {
  items: CertificationItem[]
}

export function CertificationsCarousel({ items }: CertificationsCarouselProps) {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Scroll smoothly to a specific card index
  const scrollToIndex = useCallback(
    (index: number) => {
      const targetIdx = (index + items.length) % items.length
      setActiveIndex(targetIdx)
      const cardEl = cardRefs.current[targetIdx]
      if (cardEl && containerRef.current) {
        const container = containerRef.current
        const cardLeft = cardEl.offsetLeft
        const cardWidth = cardEl.offsetWidth
        const containerWidth = container.offsetWidth
        // Center the active card nicely in view
        const scrollPos = cardLeft - (containerWidth - cardWidth) / 2
        container.scrollTo({
          left: Math.max(0, scrollPos),
          behavior: "smooth",
        })
      }
    },
    [items.length]
  )

  // Next / Prev handlers with looping
  const handleNext = useCallback(() => {
    scrollToIndex(activeIndex + 1)
  }, [activeIndex, scrollToIndex])

  const handlePrev = useCallback(() => {
    scrollToIndex(activeIndex - 1)
  }, [activeIndex, scrollToIndex])

  // Clicking a card advances to the next card (except on buttons/links)
  const handleCardClick = (index: number) => {
    if (viewMode === "carousel") {
      scrollToIndex(index + 1)
    }
  }

  // Detect which card is currently centered/active during manual touch swipe
  const handleScroll = useCallback(() => {
    if (!containerRef.current || viewMode !== "carousel") return
    const container = containerRef.current
    const centerPoint = container.scrollLeft + container.offsetWidth / 2

    let closestIdx = 0
    let minDistance = Infinity

    cardRefs.current.forEach((card, idx) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(centerPoint - cardCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIdx = idx
      }
    })

    setActiveIndex(closestIdx)
  }, [viewMode])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (viewMode !== "carousel") return
    if (e.key === "ArrowRight") {
      e.preventDefault()
      handleNext()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      handlePrev()
    } else if (e.key === "Enter" || e.key === " ") {
      if ((e.target as HTMLElement).tagName !== "A" && (e.target as HTMLElement).tagName !== "BUTTON") {
        e.preventDefault()
        handleCardClick(index)
      }
    }
  }

  return (
    <div className="pt-2">
      {/* Header Bar: Section Title + Controls (View Toggle & Arrow Buttons) */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 px-1">
        <div className="flex items-center gap-2">
          <Award className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Professional Certifications
          </span>
          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
            ({items.length})
          </span>
        </div>

        {/* View Toggle & Navigation Controls */}
        <div className="flex items-center gap-2">
          {/* Carousel / Grid View Toggle */}
          <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 border border-border text-[11px] font-bold shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "carousel"
                  ? "bg-white dark:bg-card text-[#0f2b5c] dark:text-sky-400 shadow-2xs font-extrabold"
                  : "text-slate-600 dark:text-slate-400 hover:text-foreground"
              }`}
              aria-label="Switch to Carousel view"
              aria-pressed={viewMode === "carousel"}
            >
              <SlidersHorizontal className="h-3 w-3" />
              <span className="hidden sm:inline">Carousel</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white dark:bg-card text-[#0f2b5c] dark:text-sky-400 shadow-2xs font-extrabold"
                  : "text-slate-600 dark:text-slate-400 hover:text-foreground"
              }`}
              aria-label="Switch to Grid view"
              aria-pressed={viewMode === "grid"}
            >
              <LayoutGrid className="h-3 w-3" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>

          {/* Left/Right Arrows (in Carousel View) */}
          {viewMode === "carousel" && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="h-7 w-7 rounded-lg border border-border bg-white dark:bg-card hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] dark:hover:border-sky-400 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all shadow-2xs cursor-pointer focus:ring-2 focus:ring-[#0f2b5c] active:scale-95"
                aria-label="Previous certification"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="h-7 w-7 rounded-lg border border-border bg-white dark:bg-card hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] dark:hover:border-sky-400 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all shadow-2xs cursor-pointer focus:ring-2 focus:ring-[#0f2b5c] active:scale-95"
                aria-label="Next certification"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CAROUSEL VIEW */}
      {viewMode === "carousel" && (
        <div className="relative">
          {/* Horizontal Swipeable Container with Scroll Snapping & Card Peek */}
          <div
            ref={containerRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
            tabIndex={0}
            role="region"
            aria-label="Certifications carousel"
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  onClick={() => handleCardClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${items.length}: ${item.title}`}
                  className={`w-[82vw] sm:w-[320px] lg:w-[280px] shrink-0 snap-center rounded-xl border p-4 transition-all duration-200 cursor-pointer select-none flex flex-col justify-between shadow-2xs focus:ring-2 focus:ring-[#0f2b5c] focus:outline-none ${
                    isActive
                      ? "border-[#0f2b5c]/80 dark:border-sky-400/80 bg-white dark:bg-card shadow-md scale-[1.01]"
                      : "border-border/90 bg-card/90 hover:border-[#0f2b5c]/50 hover:bg-card"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[11px] font-bold text-[#0f2b5c] dark:text-sky-400 truncate">
                        {item.org}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-400 shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
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
                </div>
              )
            })}
          </div>

          {/* Carousel Navigation Footer: Indicator Dots + Click Hint */}
          <div className="flex items-center justify-between px-1 pt-1.5 text-[11px] text-slate-400 dark:text-slate-500">
            <span className="text-[10.5px] font-medium hidden sm:inline">
              Click any card or use arrows to slide · {activeIndex + 1} of {items.length}
            </span>
            <span className="text-[10.5px] font-medium sm:hidden">
              Swipe or tap card · {activeIndex + 1}/{items.length}
            </span>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 ml-auto">
              {items.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === activeIndex
                      ? "w-5 bg-[#0f2b5c] dark:bg-sky-400"
                      : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {items.map((item) => (
            <Card
              key={item.id}
              className="border border-border/90 bg-card hover:border-[#0f2b5c]/50 transition-all p-3.5 rounded-xl shadow-2xs flex flex-col justify-between"
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
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Verified</span>
                </span>
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
      )}
    </div>
  )
}
