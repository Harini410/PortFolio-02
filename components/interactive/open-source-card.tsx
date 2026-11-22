"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export interface OpenSourceCardProps {
  brand: "aws" | "apache" | "cisco"
  logoText: string
  badgeText: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  buttonHref: string
  buttonLabel: string
  footerOrg: string
  children?: React.ReactNode
  extraFooter?: React.ReactNode
}

const BRAND_CONFIG = {
  aws: {
    accentGradient: "bg-[#0f2b5c] dark:bg-sky-400",
    logoBadge: "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 border-[#0f2b5c]/20",
    hoverBorder: "hover:border-[#0f2b5c]/50 dark:hover:border-sky-400/40",
    buttonClass: "bg-[#0f2b5c] hover:bg-[#173f7a] text-white",
  },
  apache: {
    accentGradient: "bg-[#0f2b5c] dark:bg-sky-400",
    logoBadge: "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 border-[#0f2b5c]/20",
    hoverBorder: "hover:border-[#0f2b5c]/50 dark:hover:border-sky-400/40",
    buttonClass: "bg-[#0f2b5c] hover:bg-[#173f7a] text-white",
  },
  cisco: {
    accentGradient: "bg-[#0f2b5c] dark:bg-sky-400",
    logoBadge: "bg-[#0f2b5c]/10 text-[#0f2b5c] dark:text-sky-400 border-[#0f2b5c]/20",
    hoverBorder: "hover:border-[#0f2b5c]/50 dark:hover:border-sky-400/40",
    buttonClass: "bg-[#0f2b5c] hover:bg-[#173f7a] text-white",
  },
}

export function OpenSourceCard({
  brand,
  logoText,
  badgeText,
  title,
  subtitle,
  description,
  tags,
  buttonHref,
  buttonLabel,
  footerOrg,
  children,
  extraFooter,
}: OpenSourceCardProps) {
  const cfg = BRAND_CONFIG[brand] || BRAND_CONFIG.aws

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-card/90 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${cfg.hoverBorder}`}
    >
      {/* Top Sleek Brand Gradient Stripe */}
      <div className={`h-[3px] w-full ${cfg.accentGradient} shrink-0`} />

      {/* Compact Inset Content */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div className="space-y-2.5">
          {/* Header Row: Logo Pill & Merged PR Badge */}
          <div className="flex items-center justify-between gap-2">
            <div
              className={`flex items-center justify-center px-2.5 py-1 rounded-lg border font-extrabold text-xs tracking-wide shrink-0 ${cfg.logoBadge}`}
            >
              {logoText}
            </div>
            <Badge
              variant="outline"
              className="shrink-0 rounded-full border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
            >
              {badgeText}
            </Badge>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#0f2b5c] dark:text-sky-400 leading-snug">
              {title}
            </h3>
            <p className="text-xs sm:text-[13px] font-semibold text-slate-500 dark:text-slate-400 mt-1">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>

          {/* Children Highlight / Callout / Accordion */}
          {children}

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-border/60"
              >
                {t}
              </span>
            ))}
          </div>

          {extraFooter}
        </div>

        {/* Compact Footer Action & Organization Label */}
        <div className="pt-2.5 mt-3 border-t border-border/70 flex items-center justify-between">
          <Button
            asChild
            size="sm"
            className={`h-8 rounded-lg px-3.5 text-xs font-semibold shadow-2xs ${cfg.buttonClass}`}
          >
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              {buttonLabel}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {footerOrg}
          </span>
        </div>
      </div>
    </div>
  )
}
