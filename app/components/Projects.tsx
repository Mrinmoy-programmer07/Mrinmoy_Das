"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ProjectCard from "./ProjectCard"

// No projectVariants object needed as animations are applied directly.

export default function Projects({ projects }) {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        My Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects?.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
} 