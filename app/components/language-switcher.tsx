"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-2 bg-white/5 rounded-lg p-1 border border-white/10 backdrop-blur-sm"
    >
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
            language === lang
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50"
              : "text-foreground/60 hover:text-foreground/80"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </motion.div>
  )
}
