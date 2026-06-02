"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Code, Database, Globe, Smartphone, Cloud, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Backend",
    icon: Code,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Kubernetes", "CI/CD", "Nginx"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Tools & Others",
    icon: Zap,
    skills: ["Git", "Figma", "Webpack", "Vite", "Jest"],
    color: "from-yellow-500 to-orange-600",
  },
]

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const categoryIndex = Number.parseInt(entry.target.getAttribute("data-category-index") || "0")
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => [...new Set([...prev, categoryIndex])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              ref={(el) => (categoryRefs.current[categoryIndex] = el)}
              data-category-index={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleCategories.includes(categoryIndex) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={visibleCategories.includes(categoryIndex) ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-purple-600/20 text-purple-300 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300 text-center cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
