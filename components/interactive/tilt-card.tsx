"use client"

import * as React from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  tiltMaxAngle?: number
  scaleOnHover?: number
  highlightColor?: "navy" | "gold"
}

export function TiltCard({
  children,
  className = "",
  onClick,
  tiltMaxAngle = 7,
  scaleOnHover = 1.015,
  highlightColor = "navy",
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const [coords, setCoords] = React.useState({ rotateX: 0, rotateY: 0, spotX: 150, spotY: 150 })
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  const rafId = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  React.useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return
      if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return

      const clientX = e.clientX
      const clientY = e.clientY

      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        const normX = (x / rect.width) * 2 - 1
        const normY = (y / rect.height) * 2 - 1

        const rotateX = -normY * tiltMaxAngle
        const rotateY = normX * tiltMaxAngle

        setCoords({
          rotateX,
          rotateY,
          spotX: x,
          spotY: y,
        })
      })
    },
    [prefersReducedMotion, tiltMaxAngle]
  )

  const handleMouseEnter = React.useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return
    setIsHovered(true)
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
    }
    setIsHovered(false)
    setCoords((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
    }))
  }, [])

  const glowRgba = highlightColor === "gold" ? "rgba(217, 119, 6, 0.15)" : "rgba(15, 43, 92, 0.12)"
  const spotlightBackground = `radial-gradient(circle 300px at ${coords.spotX}px ${coords.spotY}px, ${glowRgba}, transparent 80%)`

  const transformStyle = prefersReducedMotion
    ? undefined
    : isHovered
    ? `perspective(1000px) rotateX(${coords.rotateX.toFixed(2)}deg) rotateY(${coords.rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`

  return (
    <div style={{ perspective: 1000 }} className="w-full h-full relative">
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.08s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease",
        }}
        className={`relative w-full h-full rounded-2xl transition-shadow duration-300 will-change-transform ${className}`}
      >
        {/* Dynamic Cursor Spotlight Layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
          style={{
            background: spotlightBackground,
            opacity: isHovered && !prefersReducedMotion ? 1 : 0,
          }}
        />

        {/* Card Content with 3D Depth */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  )
}
