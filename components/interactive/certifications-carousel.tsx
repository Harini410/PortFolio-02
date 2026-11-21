"use client"

import * as React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import {
  Award,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react"
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
  const [certViewMode, setCertViewMode] = useState<"swipe" | "grid">("swipe")
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

  const certDragMoved = useRef(false)
  const certPointerStart = useRef<{ x: number; y: number } | null>(null)

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

  return (
    <div className="pt-2">
      {/* Header Row: Section Label + Swipe Cards vs Grid View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 w-full px-1">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-[#0f2b5c] dark:text-sky-400" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Professional Certifications
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300">
            {items.length}
          </span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 animate-in fade-in duration-200">
          {items.map((item) => (
            <Card
              key={item.id}
              className="border border-border/90 bg-card hover:border-[#0f2b5c]/50 transition-all p-4 rounded-xl shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
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
            </Card>
          ))}
        </div>
      )}

      {/* MODE 2: SWIPE CARDS VIEW (Interactive Touch/Swipe + Arrow Buttons) */}
      {certViewMode === "swipe" && (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-200">
          {/* Carousel Controls Header */}
          <div className="flex items-center justify-between gap-2 mb-3 px-1 w-full min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 truncate">
                {items[certCurrentIndex]?.org} · Slide {certCurrentIndex + 1} of {items.length}
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
              {items.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-1 sm:px-2">
                  <Card
                    onClick={handleCertCardClick}
                    onPointerDown={handleCertPointerDown}
                    onPointerMove={handleCertPointerMove}
                    onTouchStart={handleCertTouchStart}
                    onTouchMove={handleCertTouchMove}
                    className="border-2 border-border/85 hover:border-[#0f2b5c]/60 dark:hover:border-sky-500/60 transition-all bg-card p-5 sm:p-6 rounded-2xl shadow-sm min-h-[200px] flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 text-xs font-bold border border-[#0f2b5c]/20">
                          <Award className="h-3.5 w-3.5" />
                          <span>Professional Certification</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mt-1">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                        {item.org}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Verified Certificate</span>
                      </span>
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
          <div className="flex items-center justify-center gap-2 mt-5">
            {(certScrollSnaps.length > 0 ? certScrollSnaps : items.map((_, i) => i)).map((_, idx) => (
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
  )
}
