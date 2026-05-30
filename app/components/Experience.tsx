"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  technologies?: string[]
  location?: string
  type?: string
  achievements?: string[]
}

export default function Experience() {
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })

  const experiences: Experience[] = [
    {
      id: "1",
      role: "Core Team Member – IoT Division",
      company: "SKEPSIS, Sister Nivedita University",
      period: "2024 – Present",
      description:
        "Selected as part of the university's official IoT team, built and demonstrated IoT prototypes at workshops and campus expos, and guided juniors in developing IoT systems using sensors and microcontrollers.",
      technologies: ["IoT", "Sensors", "Microcontrollers", "Prototypes"],
      location: "Kolkata, India",
      type: "Core Team",
      achievements: [
        "Selected as part of the university's official IoT team.",
        "Built and demonstrated IoT prototypes at workshops and campus expos.",
        "Guided juniors in developing IoT systems using sensors and microcontrollers.",
      ],
    },
    {
      id: "2",
      role: "Web Developer Intern",
      company: "Zidio Development",
      period: "June 2024 – Present",
      description:
        "Contributing to full-stack projects using React, Express.js, Firebase, and MongoDB. Helped develop secure user authentication and dynamic web dashboards, and improved performance and responsiveness across deployed applications.",
      technologies: ["React", "Express.js", "Firebase", "MongoDB", "Full-Stack Development"],
      location: "Remote",
      type: "Internship",
      achievements: [
        "Contributing to full-stack projects using React, Express.js, Firebase, and MongoDB.",
        "Helped develop secure user authentication and dynamic web dashboards.",
        "Improved performance and responsiveness across deployed applications.",
      ],
    },
    {
      id: "3",
      role: "HackQuest Advocate",
      company: "HackerRank Program",
      period: "2024",
      description:
        "Promoted HackQuest events and learning resources in university tech communities. Helped peers get started with DSA, GitHub, and open-source contributions, and represented the brand during technical fests and online campaigns.",
      technologies: ["DSA", "GitHub", "Open Source", "Community Building"],
      location: "Remote",
      type: "Advocate",
      achievements: [
        "Promoted HackQuest events and learning resources in university tech communities.",
        "Helped peers get started with DSA, GitHub, and open-source contributions.",
        "Represented the brand during technical fests and online campaigns.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {experiences?.map((experience, index) => {
          const cardRef = useRef(null)
          const isCardInView = useInView(cardRef, { once: true, amount: 0.2 })

          return (
            <motion.div
              key={experience.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />

              <motion.div
                whileHover={{ y: -4, boxShadow: "0 0 25px rgba(142, 68, 173, 0.6)" }}
                className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-purple-300">{experience.role}</h3>
                  <span className="text-sm text-gray-400 mt-1 sm:mt-0">{experience.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h4 className="text-lg text-gray-300">{experience.company}</h4>
                  {experience.location && (
                    <>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{experience.location}</span>
                    </>
                  )}
                  {experience.type && (
                    <>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-sm bg-purple-600/20 px-2 py-0.5 rounded-full text-purple-300">
                        {experience.type}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(experience.technologies || []).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {(experience.technologies || []).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-700/50 text-purple-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
