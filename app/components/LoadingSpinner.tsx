"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="w-12 h-12 border-4 border-purple-600/30 border-t-purple-600 rounded-full"></div>
        <div
          className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-purple-400 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "0.75s" }}
        ></div>
      </motion.div>
    </div>
  )
}
