"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import TypingAnimation from "./TypingAnimation"
import { ArrowDown, Mail } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none"></div>

      <motion.div
        className="text-center z-20 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        {/* Profile Image */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
        >
          Mrinmoy Das
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={fadeInUp} className="mb-8">
          <TypingAnimation
            texts={["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"]}
            className="text-xl md:text-2xl text-purple-300 h-8"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting digital experiences with modern technologies and creative solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <a
            href="mailto:mrinmoyddas1@gmail.com"
            className="group px-8 py-4 border-2 border-purple-600 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 flex items-center gap-2 justify-center"
          >
            <Mail size={18} className="group-hover:animate-bounce" />
            Hire Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={fadeInUp} className="animate-bounce cursor-pointer" onClick={scrollToProjects}>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
