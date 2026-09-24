"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2, Sparkles, Info } from "lucide-react"

export interface SkillGroup {
  category: string
  title: string
  skills: string[]
}

const skillUsageMap: Record<string, { usedIn: string; type: "experience" | "project" | "research" }> = {
  "Java": { usedIn: "Smart Complaint Portal & DRDO CAIR Platform", type: "project" },
  "Spring Boot": { usedIn: "Smart Complaint Portal & DRDO REST Microservices", type: "project" },
  "C#/.NET": { usedIn: "Dell Technologies (Windows Recovery & Disk Cloning)", type: "experience" },
  "REST APIs": { usedIn: "DRDO CAIR & Smart Complaint Portal", type: "experience" },
  "React.js": { usedIn: "DRDO CAIR, CyberSafe AI & Complaint Portal", type: "experience" },
  "Next.js": { usedIn: "AI Resume Screener & Portfolio", type: "project" },
  "SQL": { usedIn: "Smart Complaint Portal & Enterprise Relational DBs", type: "project" },
  "MySQL": { usedIn: "Smart Complaint Portal Relational DB", type: "project" },
  "MongoDB": { usedIn: "DRDO CAIR Evaluation Platform", type: "experience" },
  "Hibernate / JPA": { usedIn: "Smart Complaint Management Portal", type: "project" },
  "PowerShell": { usedIn: "Dell Technologies (WinPE/WinRE & ISO Automation)", type: "experience" },
  "WinPE / WinRE": { usedIn: "Dell Technologies (Windows Recovery Environment)", type: "experience" },
  "DISM & WIM": { usedIn: "Dell Technologies (Automated System Imaging)", type: "experience" },
  "Windows Internals": { usedIn: "Dell Technologies (Hardware Scan & Repair Systems)", type: "experience" },
  "Batch Scripting": { usedIn: "Dell Technologies (Deployment Automation)", type: "experience" },
  "Git / GitHub": { usedIn: "Version control across Dell, DRDO & Open Source", type: "experience" },
  "Jira": { usedIn: "Dell Technologies Agile Sprint Delivery", type: "experience" },
  "Agentic AI": { usedIn: "Ransomware Recovery Prioritizer (Dell Hackathon Winner)", type: "project" },
  "LLM Applications": { usedIn: "Ransomware Prioritizer & AI Resume Screener", type: "project" },
  "Multi-Agent RAG": { usedIn: "AI Resume Screener & CyberSafe AI", type: "project" },
  "Python": { usedIn: "Ransomware Recovery Prioritizer & CyberSafe AI", type: "project" },
  "Claude Code": { usedIn: "Dell Technologies (AI-assisted engineering workflows)", type: "experience" },
  "Spec-Driven Development (SDD)": { usedIn: "Dell Technologies (Enterprise SDD Workflows)", type: "experience" },
  "RoBERTa": { usedIn: "CyberSafe AI Platform & IEEE Research Publication", type: "research" },
}

interface InteractiveSkillsProps {
  skillGroups: SkillGroup[]
  activeCategory: string
  onSelectCategory: (cat: string) => void
}

export function InteractiveSkills({
  skillGroups,
  activeCategory,
  onSelectCategory,
}: InteractiveSkillsProps) {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "software", label: "Software Engineering" },
    { id: "backend", label: "Backend & Database" },
    { id: "systems", label: "Systems & Enterprise" },
    { id: "ai", label: "AI Engineering" },
  ]

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory)

  const activeUsage = hoveredSkill ? skillUsageMap[hoveredSkill] : null

  return (
    <div className="w-full max-w-full">
      {/* Category Filter Tabs - Responsive wrapping on mobile, centered single row on desktop */}
      <div className="w-full max-w-full mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-0">
        {categories.map((c) => {
          const isActive = activeCategory === c.id
          return (
            <motion.button
              key={c.id}
              onClick={() => onSelectCategory(c.id)}
              whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`relative px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap transition-colors cursor-pointer select-none ${
                isActive
                  ? "bg-[#0f2b5c] text-white shadow-xs"
                  : "bg-white dark:bg-card border border-[#0f2b5c]/30 text-[#0f2b5c] dark:text-slate-300 hover:bg-[#0f2b5c]/10 hover:border-[#0f2b5c] hover:text-[#0f2b5c]"
              }`}
            >
              {c.label}
            </motion.button>
          )
        })}
      </div>

      {/* Interactive Technology Relationship Callout Banner */}
      <div className="h-10 mb-5 flex items-center justify-center px-2 w-full max-w-full">
        <AnimatePresence mode="wait">
          {hoveredSkill && activeUsage ? (
            <motion.div
              key={hoveredSkill}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f2b5c]/10 dark:bg-[#0f2b5c]/25 border border-[#0f2b5c]/30 text-xs font-semibold text-[#0f2b5c] dark:text-sky-300 shadow-2xs max-w-full min-w-0"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#0f2b5c] dark:text-sky-400" />
              <span className="font-bold shrink-0">{hoveredSkill}:</span>
              <span className="text-slate-700 dark:text-slate-200 truncate">
                Used in {activeUsage.usedIn}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400"
            >
              <Info className="h-3 w-3 shrink-0" />
              <span>Hover or tap any technology to reveal where it was engineered</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4 Compact Categories Grid (2x2 on md/lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {filteredGroups.map((group, gIdx) => (
          <motion.div
            key={group.category}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.45,
              delay: prefersReducedMotion ? 0 : gIdx * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="h-full w-full min-w-0"
          >
            <Card className="h-full border border-border hover:border-[#0f2b5c]/60 transition-all duration-300 bg-card p-4 sm:p-5 rounded-xl shadow-2xs hover:shadow-md flex flex-col justify-between overflow-hidden w-full">
              <div>
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : gIdx * 0.08 + 0.1 }}
                  className="text-xs font-bold uppercase tracking-wider text-[#0f2b5c] dark:text-sky-400 mb-3 flex items-center gap-1.5"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>{group.title}</span>
                </motion.div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => {
                    const isSkillHovered = hoveredSkill === skill
                    return (
                      <motion.button
                        key={skill}
                        type="button"
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 24,
                          delay: prefersReducedMotion ? 0 : gIdx * 0.06 + sIdx * 0.025,
                        }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
                        whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.05 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md border transition-all cursor-pointer text-left ${
                          isSkillHovered
                            ? "bg-[#0f2b5c] text-white border-[#0f2b5c] shadow-xs"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-border hover:border-[#0f2b5c]/40 hover:bg-slate-200/80 dark:hover:bg-slate-700/80"
                        }`}
                      >
                        {skill}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
