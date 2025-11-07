"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme
    const html = document.documentElement
    setIsDark(html.classList.contains("dark"))

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"))
    })

    observer.observe(html, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const gradientColor = isDark
    ? "from-background via-[#1a1a2e] to-[#16213e]"
    : "from-background via-blue-50 to-gray-100"

  const gridOpacity = isDark ? "opacity-10" : "opacity-5"
  const gridColor = isDark ? "currentColor" : "rgb(100, 100, 100)"

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor}`} />

      <svg className={`absolute inset-0 w-full h-full ${gridOpacity}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridColor} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated red orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <motion.line
            x1="0"
            y1="400"
            x2="1200"
            y2="400"
            stroke="rgb(239,68,68)"
            strokeWidth="1"
            opacity={isDark ? "0.2" : "0.1"}
            animate={{ opacity: isDark ? [0.1, 0.4, 0.1] : [0.05, 0.2, 0.05] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.circle
            cx="600"
            cy="400"
            r="150"
            fill="none"
            stroke="rgb(239,68,68)"
            strokeWidth="1"
            opacity={isDark ? "0.15" : "0.08"}
            animate={{ r: [150, 200, 150] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${isDark ? "bg-red-600" : "bg-red-500"}`}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: isDark ? 0.3 : 0.15,
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: isDark ? [0.3, 0.8, 0.3] : [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
