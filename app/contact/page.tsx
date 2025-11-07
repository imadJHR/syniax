"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
  const content = translations[language].contactPage
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Header />

      {/* Back Button */}
      <div className="pt-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
            {language === "fr" ? "Retour" : "Back"}
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            {content.title}
          </h1>
          <p className="text-xl text-foreground/70">{content.subtitle}</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {content.formLabels.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder={content.formLabels.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {content.formLabels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder={content.formLabels.email}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {content.formLabels.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder={content.formLabels.phone}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {content.formLabels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder={content.formLabels.subject}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {content.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder={content.formLabels.message}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
              >
                {content.formLabels.submit}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-600/20 border border-green-600/30 text-green-600"
                >
                  {content.successMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <Phone className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">{content.contactInfo.phone}</h3>
                <p className="text-foreground/60">{content.contactDetails.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">{content.contactInfo.email}</h3>
                <p className="text-foreground/60">{content.contactDetails.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">{content.contactInfo.address}</h3>
                <p className="text-foreground/60">{content.contactDetails.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">{content.contactInfo.hours}</h3>
                <p className="text-foreground/60">{content.contactDetails.hours}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
