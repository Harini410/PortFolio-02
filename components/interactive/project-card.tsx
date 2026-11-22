"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Award } from "lucide-react"
import { TiltCard } from "./tilt-card"
import { triggerWinnerConfetti } from "./confetti"

export interface ProjectData {
  id: string
  title: string
  tagline: string
  badge?: string | null
  date: string
  hook?: string
  summary: string
  bullets: string[]
  tech: string[]
  certificate: string | null
  demoUrl: string | null
  githubUrl: string | null
  isGoldHighlight: boolean
  isProminentJava?: boolean
}

interface ProjectCardProps {
  project: ProjectData
  isTouched: boolean
  onSelect: (id: string) => void
}

export function ProjectCard({ project, isTouched, onSelect }: ProjectCardProps) {
  return (
    <TiltCard
      onClick={() => onSelect(project.id)}
      highlightColor={project.isGoldHighlight ? "gold" : "navy"}
      className={`w-full h-full flex flex-col justify-between transition-all duration-300 cursor-pointer bg-card border ${
        isTouched
          ? "border-[#0f2b5c] shadow-[0_12px_32px_rgba(15,43,92,0.18)] ring-1 ring-[#0f2b5c]/30"
          : project.isProminentJava
          ? "border-2 border-[#0f2b5c]/80 shadow-md hover:border-[#0f2b5c] hover:shadow-lg ring-1 ring-[#0f2b5c]/20"
          : project.isGoldHighlight
          ? "border-amber-500/40 hover:border-amber-500 hover:shadow-lg shadow-sm"
          : "border-border hover:border-[#0f2b5c]/60 hover:shadow-md"
      }`}
    >
      {/* CARD TOP PADDING & CONTENT BODY */}
      <div className="flex flex-col flex-1 p-5 sm:p-7 pb-0">
        {/* ROW 1: BADGE <-> DATE */}
        <div className="flex items-center justify-between gap-3 min-h-[28px]">
          {project.badge ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                if (project.isGoldHighlight) triggerWinnerConfetti()
              }}
              className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                project.isProminentJava
                  ? "bg-[#0f2b5c] text-white border border-[#0f2b5c] font-extrabold shadow-2xs hover:scale-105"
                  : project.isGoldHighlight
                  ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-extrabold hover:scale-105 shadow-2xs"
                  : "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-300 border border-[#0f2b5c]/20"
              }`}
            >
              {project.badge}
            </button>
          ) : (
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400">
              Featured Project
            </span>
          )}
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            {project.date}
          </span>
        </div>

        {/* COMFORTABLE GAP */}
        <div className="h-4 sm:h-5" />

        {/* ROW 2: PROJECT TITLE */}
        <h3
          className={`text-lg sm:text-xl font-bold tracking-tight transition-colors line-clamp-2 leading-snug min-h-[3rem] flex items-center break-words ${
            isTouched ? "text-[#0f2b5c] dark:text-sky-400" : "text-foreground"
          }`}
        >
          {project.title}
        </h3>

        {/* COMFORTABLE GAP */}
        <div className="h-3 sm:h-3.5" />

        {/* ROW 3: TECHNOLOGY TAGLINE */}
        <div className="text-xs font-semibold text-[#0f2b5c] dark:text-sky-400 line-clamp-1 mb-2.5">
          {project.tagline}
        </div>

        {/* Intro Hook */}
        {project.hook && (
          <p className="text-xs sm:text-[13px] font-semibold text-[#0f2b5c] dark:text-sky-300 italic mb-2 leading-snug">
            “{project.hook}”
          </p>
        )}

        {/* Narrative Summary */}
        <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed mb-3.5">
          {project.summary}
        </p>

        {/* Engineering Highlights */}
        <div className="space-y-2 mb-4">
          {project.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 leading-relaxed text-xs sm:text-[13px] text-slate-700 dark:text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f2b5c] dark:bg-sky-400 mt-1.5 shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-border mt-auto mb-4">
          {project.tech.map((t) => (
            <motion.div
              key={t}
              whileHover={{ scale: 1.06, y: -2 }}
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
                {t}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS BAR */}
      <div className="px-5 sm:px-7 pb-4 sm:pb-5 pt-3 border-t border-border flex flex-wrap items-center gap-2 bg-slate-50/50 dark:bg-slate-900/30 rounded-b-xl min-h-[56px] mt-auto">
        {project.demoUrl && (
          <Button
            size="sm"
            className="bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white text-xs font-semibold rounded-lg h-8 px-3 group shadow-2xs"
            asChild
          >
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        )}

        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-sky-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c] active:bg-[#0f2b5c] active:text-white text-xs font-semibold rounded-lg h-8 px-3 group shadow-2xs"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
              <span>Code</span>
            </a>
          </Button>
        )}

        {project.certificate && (
          <Button
            size="sm"
            variant="outline"
            className="border-amber-500/40 text-amber-900 dark:text-amber-300 hover:bg-amber-500/10 text-xs font-bold rounded-lg h-8 px-3 group shadow-2xs"
            asChild
          >
            <a
              href={project.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation()
                triggerWinnerConfetti()
              }}
            >
              <Award className="h-3.5 w-3.5 text-amber-600 group-hover:rotate-12 transition-transform" />
              <span>View Certificate</span>
              <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </TiltCard>
  )
}

export function GithubOverviewCard() {
  return (
    <TiltCard
      className="w-full h-full flex flex-col justify-between border-2 border-dashed border-[#0f2b5c]/35 hover:border-[#0f2b5c] bg-gradient-to-br from-[#0f2b5c]/[0.03] via-card to-card p-6 sm:p-7 rounded-2xl transition-all shadow-xs group"
    >
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
          className="w-full bg-[#0f2b5c] hover:bg-[#0a1c38] active:bg-[#08152b] text-white rounded-lg text-xs font-bold h-9 shadow-xs group"
          asChild
        >
          <a
            href="https://github.com/Harini410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Button>
      </div>
    </TiltCard>
  )
}
