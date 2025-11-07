"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"

export default function VideoSurveillancePage() {
  const { language } = useLanguage()
  const content = translations[language].servicePages.surveillance

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Header />

      <div className="pt-24 container mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft size={20} />
          <Link href="/">{language === "fr" ? "Retour" : "Back"}</Link>
        </motion.button>
      </div>

      <section className="min-h-screen flex items-center justify-center container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            {content.title}
          </h1>
          <p className="text-xl text-foreground/70 mb-8">{content.subtitle}</p>
          <p className="text-lg text-foreground/60 mb-12">{content.description}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
          >
            {language === "fr" ? "Demander un Devis" : "Request Quote"}
          </motion.button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-red-600/30 transition-all"
            >
              <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-foreground/80">{feature}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            {language === "fr" ? "Prêt à améliorer votre surveillance ?" : "Ready to enhance your surveillance?"}
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez nos experts pour une consultation gratuite et un devis personnalisé."
              : "Contact our experts for a free consultation and personalized quote."}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
          >
            {language === "fr" ? "Nous Contacter" : "Contact Us"}
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
