"use client"

import confetti from "canvas-confetti"

export function triggerWinnerConfetti(originX = 0.5, originY = 0.6) {
  // Gracefully handle server-side or reduced-motion
  if (typeof window === "undefined") return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  // Sophisticated two-stage particle burst matching the palette: #0f2b5c, #d97706, #38bdf8
  const colors = ["#0f2b5c", "#1e3a8a", "#d97706", "#f59e0b", "#38bdf8"]

  confetti({
    particleCount: 45,
    spread: 60,
    origin: { x: originX, y: originY },
    colors,
    ticks: 180,
    gravity: 1.1,
    scalar: 0.85,
    disableForReducedMotion: true,
  })

  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: Math.max(0.1, originX - 0.15), y: originY },
      colors,
      ticks: 160,
      gravity: 1.2,
      scalar: 0.75,
      disableForReducedMotion: true,
    })
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: Math.min(0.9, originX + 0.15), y: originY },
      colors,
      ticks: 160,
      gravity: 1.2,
      scalar: 0.75,
      disableForReducedMotion: true,
    })
  }, 140)
}
