"use client"

import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      requestRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, [role="button"], .cursor-hover, input, textarea')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, [role="button"], .cursor-hover, input, textarea')) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main cursor */}
      <div
        className="absolute w-3 h-3 rounded-full bg-white will-change-transform"
        style={{
          // Center the cursor perfectly (w-3 = 12px)
          transform: `translate3d(calc(${position.x}px - 6px), calc(${position.y}px - 6px), 0) scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute w-8 h-8 rounded-full border border-white/30 will-change-transform"
        style={{
          // Center the ring perfectly (w-8 = 32px)
          transform: `translate3d(calc(${position.x}px - 16px), calc(${position.y}px - 16px), 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Hover effect */}
      <div
        className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm will-change-transform"
        style={{
          // Center the hover effect (w-16 = 64px)
          transform: `translate3d(calc(${position.x}px - 32px), calc(${position.y}px - 32px), 0) scale(${isHovering ? 1 : 0})`,
          opacity: isHovering ? 0.3 : 0,
        }}
      />

      {/* Click effect */}
      <div
        className="absolute w-24 h-24 rounded-full bg-white/20 will-change-transform"
        style={{
          // Center the click effect (w-24 = 96px)
          transform: `translate3d(calc(${position.x}px - 48px), calc(${position.y}px - 48px), 0) scale(${isClicking ? 1 : 0})`,
          opacity: isClicking ? 0.2 : 0,
        }}
      />
    </div>
  )
}
