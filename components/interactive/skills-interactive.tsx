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
  "Java": { usedIn: "AWS Durable Execution SDK, Apache XTable & Smart Complaint Portal", type: "project" },
  "C#": { usedIn: "Dell Technologies (Windows recovery applications & diagnostics)", type: "experience" },
  "Python": { usedIn: "Cisco Catalyst WAN SDK & Ransomware Prioritizer", type: "project" },
  "TypeScript": { usedIn: "AI Resume Screener & interactive portfolio UI", type: "project" },
  "JavaScript": { usedIn: "Frontend applications & interactive UI components", type: "project" },
  "SQL": { usedIn: "Relational database schema design & persistence queries", type: "project" },
  "Spring Boot": { usedIn: "Smart Complaint Portal REST APIs & DRDO CAIR", type: "project" },
  "REST APIs": { usedIn: "DRDO CAIR, Cisco SDK & Complaint Portal integration", type: "experience" },
  "React": { usedIn: "DRDO CAIR evaluation platform & Complaint Portal frontend", type: "experience" },
  "Next.js": { usedIn: "AI Resume Screener & production portfolio", type: "project" },
  "PostgreSQL": { usedIn: "Smart Complaint Portal persistence & audit logging", type: "project" },
  "MySQL": { usedIn: "Relational database development & structured queries", type: "project" },
  "MongoDB": { usedIn: "DRDO CAIR AI evaluation platform database", type: "experience" },
  "Kafka": { usedIn: "Smart Complaint Portal asynchronous event streaming", type: "project" },
  "Redis": { usedIn: "Smart Complaint Portal distributed caching & sessions", type: "project" },
  "Git": { usedIn: "Version control across Dell, DRDO & open-source projects", type: "experience" },
  "GitHub": { usedIn: "9 merged PRs across AWS, Apache & Cisco repositories", type: "project" },
  "Docker": { usedIn: "Containerization for microservices & local testing", type: "project" },
  "CI/CD": { usedIn: "Automated test & build pipelines with GitHub Actions", type: "project" },
  "debugging": { usedIn: "BSOD triage, Helix diagnostics & defect reproduction at Dell", type: "experience" },
  "regression testing": { usedIn: "Automated test suites for Dell recovery workflows & SDK PRs", type: "experience" },
  ".NET": { usedIn: "Dell Technologies recovery applications, repair & disk cloning", type: "experience" },
  "PowerShell": { usedIn: "Windows 11 ARM64 OSRI build automation & ISO generation", type: "experience" },
  "Batch": { usedIn: "Dell deployment scripts & recovery image servicing", type: "experience" },
  "DISM": { usedIn: "OSRI image servicing, driver injection & build workflows", type: "experience" },
  "WIM": { usedIn: "Windows imaging & deployment automation", type: "experience" },
  "WinPE": { usedIn: "Bare-metal recovery preinstallation environment", type: "experience" },
  "WinRE": { usedIn: "Windows recovery environment diagnostic workflows", type: "experience" },
  "LLM applications": { usedIn: "Ransomware Recovery Prioritizer & AI Resume Screener", type: "project" },
  "RAG": { usedIn: "AI Resume Screener & CyberSafe AI safety retrieval", type: "project" },
  "NetworkX": { usedIn: "Ransomware Prioritizer (graph dependency & blast-radius modeling)", type: "project" },
  "RoBERTa": { usedIn: "CyberSafe AI sequence classification & IEEE paper", type: "research" },
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
    { id: "languages", label: "Languages" },
    { id: "app-dev", label: "App Development" },
    { id: "databases", label: "Databases & Messaging" },
    { id: "tools", label: "Testing & Tools" },
    { id: "windows", label: "Windows Development" },
    { id: "additional", label: "Additional Work" },
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
                {activeUsage.usedIn}
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
              <span>Hover or tap any skill to see where it was used</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 6 Developer Toolkit Groups Grid (2 or 3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
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
