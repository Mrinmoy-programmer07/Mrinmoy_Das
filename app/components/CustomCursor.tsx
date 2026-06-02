"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  // Raw mouse position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth spring config for the dot (tight — follows quickly)
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.3 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.3 })

  // Softer spring for the ring (lags behind slightly)
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.5 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Dot — snappy, tight follow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] w-2.5 h-2.5 rounded-full bg-white mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Ring — soft lag behind the dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] w-9 h-9 rounded-full border border-purple-400/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
