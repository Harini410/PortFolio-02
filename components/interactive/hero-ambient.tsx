"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

export function HeroAmbientBackground() {
  const prefersReducedMotion = useReducedMotion()
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    if (prefersReducedMotion) return
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 based on viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      setMousePos({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none max-w-full">
      {/* Subtle Engineering Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#0f2b5c 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Primary Ambient Gradient Orb (drifts smoothly with mouse parallax) */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.12 }
            : {
                x: mousePos.x * 0.8,
                y: mousePos.y * 0.8,
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 40, damping: 25 },
          y: { type: "spring", stiffness: 40, damping: 25 },
        }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-[#0f2b5c]/15 via-[#0f2b5c]/8 to-transparent blur-3xl"
      />

      {/* Secondary Ambient Accent Orb (Gold/Amber hint) */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.08 }
            : {
                x: -mousePos.x * 0.5,
                y: -mousePos.y * 0.5,
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          scale: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 },
          x: { type: "spring", stiffness: 35, damping: 25 },
          y: { type: "spring", stiffness: 35, damping: 25 },
        }}
        className="absolute top-20 right-[10%] w-[380px] h-[380px] rounded-full bg-amber-500/[0.05] dark:bg-amber-400/[0.04] blur-3xl"
      />

      {/* Tertiary Left Ambient Orb */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 0.08 }
            : {
                x: mousePos.x * 0.4,
                y: mousePos.y * 0.6,
                scale: [1, 1.1, 1],
              }
        }
        transition={{
          scale: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 },
          x: { type: "spring", stiffness: 30, damping: 20 },
          y: { type: "spring", stiffness: 30, damping: 20 },
        }}
        className="absolute top-36 left-[5%] w-[420px] h-[420px] rounded-full bg-[#1e4b8f]/[0.07] dark:bg-sky-500/[0.05] blur-3xl"
      />

      {/* Subtle Horizontal Perspective Guide Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f2b5c]/10 to-transparent" />
    </div>
  )
}
