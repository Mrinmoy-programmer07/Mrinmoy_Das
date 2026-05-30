"use client"

import { useEffect, useState, useRef } from "react"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Experience from "./Experience"
import Education from "./Education"
import Navbar from "./Navbar"
import { motion, AnimatePresence, useInView } from "framer-motion"

interface PortfolioClientProps {
  projects: any[]
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs for sections - moved outside conditional rendering
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  // Intersection observers for each section - moved outside conditional rendering
  const homeInView = useInView(homeRef, { margin: "-50% 0px" })
  const aboutInView = useInView(aboutRef, { margin: "-50% 0px" })
  const projectsInView = useInView(projectsRef, { margin: "-50% 0px" })
  const experienceInView = useInView(experienceRef, { margin: "-50% 0px" })
  const educationInView = useInView(educationRef, { margin: "-50% 0px" })
  const contactInView = useInView(contactRef, { margin: "-50% 0px" })

  // Update active section based on scroll position - moved outside conditional rendering
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (aboutInView) setActiveSection("about")
    else if (projectsInView) setActiveSection("projects")
    else if (experienceInView) setActiveSection("experience")
    else if (educationInView) setActiveSection("education")
    else if (contactInView) setActiveSection("contact")
  }, [homeInView, aboutInView, projectsInView, experienceInView, educationInView, contactInView])

  // Handle scroll events - moved outside conditional rendering
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolling(currentScrollY > lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Scroll to section - moved outside conditional rendering
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <main className="min-h-screen text-white">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [0.9, 1.05, 0.9],
                transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            >
              MRINMOY DAS
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar
              activeSection={activeSection}
              isScrolling={isScrolling}
              scrollToSection={scrollToSection}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
            <div className="relative pt-16">
              <section id="home" ref={homeRef} className="min-h-screen">
                <Hero />
              </section>
              <section id="about" ref={aboutRef} className="min-h-screen">
                <About />
              </section>
              <section id="projects" ref={projectsRef} className="min-h-screen">
                <Projects projects={projects} />
              </section>
              <section id="experience" ref={experienceRef} className="min-h-screen">
                <Experience />
              </section>
              <section id="education" ref={educationRef} className="min-h-screen">
                <Education />
              </section>
              <section id="contact" ref={contactRef} className="min-h-screen">
                <Contact />
              </section>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
} 