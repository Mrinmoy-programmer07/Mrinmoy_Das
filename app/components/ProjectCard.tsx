"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    githubUrl?: string
    liveUrl?: string
    technologies?: string[]
    image?: string
    stars?: number
    forks?: number
    type?: string
  }
  index: number // To retain staggered animation delay
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      key={project.id}
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 0 20px rgba(142, 68, 173, 0.5)", transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-800 hover:border-purple-500/50 transition-all duration-300 max-w-xs mx-auto"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={project.image || '/project-placeholder.png'}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-2xl object-cover"
          onError={(e) => {
            e.currentTarget.src = '/project-placeholder.png'
          }}
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-base font-semibold mb-1 text-purple-300">{project.name}</h3>
        <p className="text-gray-400 text-xs mb-2 flex-grow">{project.description || 'No description available'}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {(project.technologies || []).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-1.5 py-0.5 bg-purple-700/50 text-purple-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-0.5 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-xs transition-colors duration-300"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-0.5 border border-purple-600 text-purple-300 rounded-md hover:bg-purple-600/20 text-xs transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 