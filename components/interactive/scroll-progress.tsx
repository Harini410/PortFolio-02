"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent max-w-full overflow-hidden">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#0f2b5c] via-[#1e4b8f] to-[#d97706]"
        style={{ scaleX }}
      />
    </div>
  )
}
