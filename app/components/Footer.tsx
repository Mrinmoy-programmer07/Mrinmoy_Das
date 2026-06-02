"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-gray-800 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/Mrinmoy-programmer07", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mrinmoy-das07/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mrinmoyddas1@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 bg-gray-900 hover:bg-purple-600/20 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 border border-gray-700 hover:border-purple-500/50 group"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 flex items-center gap-2 justify-center md:justify-end">
              © {currentYear} Mrinmoy Das. Made with
              <Heart size={16} className="text-purple-400 animate-pulse" />
              and code.
            </p>
            <p className="text-sm text-gray-600 mt-1">Crafted with passion and modern technologies</p>
          </div>
        </div>

        {/* Bottom border with gradient */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-50"></div>
        </div>
      </div>
    </footer>
  )
}
