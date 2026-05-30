"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-3 bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-full hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div initial={false} animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {isDark ? <Sun size={20} className="text-purple-400" /> : <Moon size={20} className="text-purple-400" />}
      </motion.div>
    </motion.button>
  )
}
