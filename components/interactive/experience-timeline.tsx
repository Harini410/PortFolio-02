"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Briefcase, Calendar, MapPin, ExternalLink, ChevronDown } from "lucide-react"

export interface ExperienceCaseStudy {
  title: string
  problem: string
  investigation: string
  findings: string
  validation: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  duration: string
  location: string
  isProminent: boolean
  summaryQuote?: string
  closingQuote?: string
  caseStudy?: ExperienceCaseStudy
  bullets: string[]
  skills: string[]
  certificate: string | null
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[]
  earlierExperiences?: ExperienceItem[]
  touchedCard: string | null
  setTouchedCard: (id: string) => void
}

export function ExperienceTimeline({
  experiences,
  earlierExperiences = [],
  touchedCard,
  setTouchedCard,
}: ExperienceTimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [earlierExpanded, setEarlierExpanded] = React.useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={containerRef} className="relative">
      {/* Background Static Track Line */}
      <div className="absolute left-4 sm:left-5 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 pointer-events-none" />

      {/* Animated Active Progress Line (drawing down with scroll) */}
      <motion.div
        className="absolute left-4 sm:left-5 top-8 bottom-8 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-[#0f2b5c] via-[#1e4b8f] to-[#0f2b5c] pointer-events-none z-0"
        style={{ scaleY: prefersReducedMotion ? 1 : scaleY }}
      />

      <div className="space-y-8 pl-8 sm:pl-10">
        {/* Primary Real Software Engineering Experiences */}
        {experiences.map((exp, index) => {
          const isTouched = touchedCard === exp.id
          return (
            <motion.div
              key={exp.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Node on Left Rail */}
              <div className="absolute -left-8 sm:-left-10 top-6 w-8 sm:w-10 flex items-center justify-center z-10 pointer-events-none">
                <motion.div
                  animate={
                    isTouched
                      ? { scale: [1, 1.25, 1.1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                  className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-3 flex items-center justify-center transition-all ${
                    isTouched
                      ? "bg-[#0f2b5c] border-white shadow-md ring-4 ring-[#0f2b5c]/25"
                      : "bg-white dark:bg-slate-900 border-[#0f2b5c]"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f2b5c] dark:bg-sky-400" />
                  {exp.isProminent && (
                    <span className="absolute -inset-1 rounded-full border border-[#0f2b5c]/40 animate-ping opacity-75" />
                  )}
                </motion.div>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-full min-w-0"
              >
                <Card
                  onClick={() => setTouchedCard(exp.id)}
                  className={`transition-all duration-300 cursor-pointer bg-card overflow-hidden w-full min-w-0 ${
                    exp.isProminent
                      ? isTouched
                        ? "border-2 border-[#0f2b5c] shadow-[0_8px_30px_rgba(15,43,92,0.18)] ring-1 ring-[#0f2b5c]/40"
                        : "border-2 border-[#0f2b5c]/80 shadow-md hover:border-[#0f2b5c] hover:shadow-lg"
                      : isTouched
                      ? "border-[#0f2b5c] shadow-md ring-1 ring-[#0f2b5c]/30"
                      : "border border-border hover:border-[#0f2b5c]/50 hover:shadow-sm"
                  }`}
                >
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs mt-0.5 transition-transform ${
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
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg sm:text-xl font-black text-foreground break-words">
                              {exp.company}
                            </h3>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-[#0f2b5c] dark:text-sky-400 mt-0.5 break-words">
                            {exp.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 sm:gap-1 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                        <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-border shrink-0">
                          <Calendar className="h-3 w-3 text-[#0f2b5c] dark:text-sky-400 shrink-0" />
                          <span className="whitespace-nowrap">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    {exp.summaryQuote && (
                      <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-border/80 mb-3.5">
                        “{exp.summaryQuote}”
                      </p>
                    )}

                    {/* Problem → Investigation → Change → Validation Case Study Breakdown */}
                    {exp.caseStudy && (
                      <div className="mb-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/50 p-3.5 sm:p-4">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-300">
                              Engineering Case Study: {exp.caseStudy.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                            The Problem → What I Investigated → What the Investigation Revealed → Validation
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                          {/* 1. The Problem */}
                          <div className="p-3 rounded-lg bg-white dark:bg-card border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                                The Problem
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {exp.caseStudy.problem}
                            </p>
                          </div>

                          {/* 2. What I Investigated */}
                          <div className="p-3 rounded-lg bg-white dark:bg-card border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                What I Investigated
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {exp.caseStudy.investigation}
                            </p>
                          </div>

                          {/* 3. What the Investigation Revealed */}
                          <div className="p-3 rounded-lg bg-white dark:bg-card border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                                What the Investigation Revealed
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {exp.caseStudy.findings}
                            </p>
                          </div>

                          {/* 4. Validation */}
                          <div className="p-3 rounded-lg bg-white dark:bg-card border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                Validation
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {exp.caseStudy.validation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Other Engineering Work Bullets */}
                    <div className="mb-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Other engineering work
                      </div>
                      <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        {exp.bullets.map((b, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: 0.1 + bIdx * 0.08 }}
                            className="flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-[#0f2b5c] dark:text-sky-400 font-bold mt-0.5 shrink-0">•</span>
                            <span>{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Closing Line */}
                    {exp.closingQuote && (
                      <p className="text-xs sm:text-[13px] italic font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-l-3 border-[#0f2b5c] dark:border-sky-400 px-3 py-2 rounded-r-lg mb-4">
                        “{exp.closingQuote}”
                      </p>
                    )}

                    {/* Skills and Tags with spring hover */}
                    <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <motion.div
                            key={s}
                            whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`text-[11px] font-medium transition-colors ${
                                isTouched
                                  ? "bg-[#0f2b5c]/15 text-[#0f2b5c] dark:text-sky-200 border-[#0f2b5c]/30"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-border hover:border-[#0f2b5c]/40"
                              }`}
                            >
                              {s}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {exp.certificate && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-bold rounded-lg h-7 px-2.5 ml-auto group shadow-2xs"
                          asChild
                        >
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Certificate</span>
                            <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )
        })}

        {/* Compact Expandable Section: Earlier Experience & Training */}
        {earlierExperiences.length > 0 && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setEarlierExpanded(!earlierExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border hover:border-[#0f2b5c]/60 bg-card hover:bg-slate-50 dark:hover:bg-slate-900/40 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-2xs group"
              aria-expanded={earlierExpanded}
            >
              <Briefcase className="h-3.5 w-3.5 text-[#0f2b5c] dark:text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Earlier Experience &amp; Training ({earlierExperiences.length})</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  earlierExpanded ? "rotate-180 text-[#0f2b5c] dark:text-sky-400" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {earlierExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden pt-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full items-stretch">
                    {earlierExperiences.map((item) => (
                      <Card
                        key={item.id}
                        className="border border-border/80 bg-card hover:border-[#0f2b5c]/40 rounded-xl shadow-2xs transition-colors w-full min-w-0 p-4 flex flex-col justify-between"
                      >
                          <div>
                            {/* Header: Company, Role, Location, Duration */}
                            <div className="mb-2.5">
                              <h4 className="text-sm font-bold text-foreground leading-snug">{item.company}</h4>
                              <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 mt-0.5">
                                {item.role}
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
                                <span>{item.location}</span>
                                <span>·</span>
                                <span className="text-slate-600 dark:text-slate-300">{item.duration}</span>
                              </div>
                            </div>

                            {/* Bullets: Clean, tight leading */}
                            <ul className="space-y-1.5 mb-3 text-xs text-slate-700 dark:text-slate-200">
                              {item.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                                  <span className="text-[#0f2b5c] dark:text-sky-400 font-bold shrink-0">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills & Certificate Footer */}
                          <div className="pt-2.5 border-t border-border/60 flex flex-col gap-2.5 mt-auto">
                            <div className="flex flex-wrap gap-1">
                              {item.skills.map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className="text-[10px] py-0 px-2 font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-border/60"
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>
                            {item.certificate && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-[11px] font-bold rounded-lg h-7 px-2.5 shadow-2xs w-fit"
                                asChild
                              >
                                <a
                                  href={item.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1"
                                >
                                  <span>View Certificate</span>
                                  <ExternalLink className="h-2.5 w-2.5" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </Card>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
