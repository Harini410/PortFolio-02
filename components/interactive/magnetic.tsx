"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  strength?: number
  className?: string
  disabled?: boolean
}

export function Magnetic({
  children,
  strength = 0.25,
  className = "",
  disabled = false,
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || prefersReducedMotion || !ref.current) return

    // Disable magnetic effect on touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
