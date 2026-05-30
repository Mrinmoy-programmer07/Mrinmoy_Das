"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
  description: string
  achievements?: string[]
}

export default function Education() {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  const educationEntries: EducationEntry[] = [
    {
      id: "1",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Sister Nivedita University, Kolkata",
      period: "2023 – Present",
      description:
        "Pursuing a degree in Computer Science & Engineering with a strong interest in Web Development, Blockchain, and AI. Actively involved in university tech events, the IoT division, and project-based learning.",
      achievements: [
        "Pursuing a degree in CSE with a strong interest in Web Development, Blockchain, and AI.",
        "Active in university tech events, IoT division, and project-based learning.",
      ],
    },
    {
      id: "2",
      degree: "Higher Secondary (Science Stream)",
      institution: "Raiganj Coronation High School",
      period: "Graduated: 2023",
      description:
        "Focused on Physics, Chemistry, Mathematics, and Computer Science. Scored 85.8% in the West Bengal Council of Higher Secondary Examination (WBCHSE).",
      achievements: [
        "Scored 85.8% in West Bengal Council of Higher Secondary Examination (WBCHSE).",
        "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {educationEntries.map((entry, index) => {
          const cardRef = useRef(null)
          const isCardInView = useInView(cardRef, { once: true, amount: 0.2 })

          return (
            <motion.div
              key={entry.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== educationEntries.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />

              <motion.div
                whileHover={{ y: -4, boxShadow: "0 0 25px rgba(142, 68, 173, 0.6)" }}
                className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-300">{entry.degree}</h3>
                  <span className="text-sm text-gray-400 mt-1 sm:mt-0">{entry.period}</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">{entry.institution}</h4>
                <p className="text-gray-400 mb-4">{entry.description}</p>
                
                {entry.achievements && entry.achievements.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">Highlights:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {entry.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
} 