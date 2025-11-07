"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, ChevronDown, Menu, X, Shield, Camera, Lock, Zap } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "./language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newDarkMode = !isDark

    if (newDarkMode) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    setIsDark(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  const t = translations[language].navbar
  const services = translations[language].services

  const serviceItems = [
    {
      href: "/services/alarm-installation",
      icon: Shield,
      title: services.alarm,
      description: language === "fr" ? "Systèmes d'alarme intelligents" : "Smart alarm systems"
    },
    {
      href: "/services/access-control",
      icon: Lock,
      title: services.access,
      description: language === "fr" ? "Contrôle d'accès sécurisé" : "Secure access control"
    },
    {
      href: "/services/video-surveillance",
      icon: Camera,
      title: services.surveillance,
      description: language === "fr" ? "Surveillance vidéo IA" : "AI video surveillance"
    },
    {
      href: "/services/ev-charging",
      icon: Zap,
      title: services.charging,
      description: language === "fr" ? "Bornes de recharge VE" : "EV charging stations"
    }
  ]

  const closeAllMenus = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60 supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link href="/" onClick={closeAllMenus}>
              <motion.div
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Replace with your actual image path */}
                <Image
                  src="/logo.png" // Update this path to your logo image
                  alt="SYNIAX Security"
                  width={100}
                  height={100}
                  className="rounded-xl"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {t.home}
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {t.services}
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-2 w-80 bg-card border border-border/50 rounded-xl shadow-2xl shadow-black/20 p-4"
                  >
                    <div className="grid gap-2">
                      {serviceItems.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 group"
                              onClick={closeAllMenus}
                            >
                              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-600/10 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors">
                                <IconComponent className="w-4 h-4 text-red-600 dark:text-red-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-foreground group-hover:text-red-600 transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-sm text-foreground/60 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/features"
                className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {t.features}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground/80 hover:text-red-600 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {t.contact}
              </Link>
            </motion.div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {mounted && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground transition-all duration-300 hover:scale-110 border border-border/50"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-500" />}
              </motion.button>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-red-600/20"
                >
                  {t.getStarted}
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground transition-all duration-300 border border-border/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/50 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/"
                    className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-200"
                    onClick={closeAllMenus}
                  >
                    {t.home}
                  </Link>
                </motion.div>

                {/* Mobile Services Dropdown */}
                <div className="px-4">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between px-0 py-3 text-base font-medium text-foreground/80 hover:text-red-600 transition-colors duration-200"
                  >
                    <span>{t.services}</span>
                    <motion.div
                      animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 space-y-2 border-l border-border/30 pl-4 mt-2"
                      >
                        {serviceItems.map((item, index) => {
                          const IconComponent = item.icon
                          return (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm text-foreground/70 hover:text-red-600 rounded-lg transition-colors duration-200 group"
                                onClick={closeAllMenus}
                              >
                                <div className="p-1.5 rounded-md bg-red-100 dark:bg-red-600/10 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors">
                                  <IconComponent className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                                </div>
                                <span>{item.title}</span>
                              </Link>
                            </motion.div>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/features"
                    className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-200"
                    onClick={closeAllMenus}
                  >
                    {t.features}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-200"
                    onClick={closeAllMenus}
                  >
                    {t.contact}
                  </Link>
                </motion.div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 pt-4"
                >
                  <Link href="/contact" onClick={closeAllMenus}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-red-600/20 text-center"
                    >
                      {t.getStarted}
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}