"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft, Shield, Clock, Zap, Users, Award, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"

export default function AlarmInstallationPage() {
  const { language } = useLanguage()
  const content = translations[language].servicePages.alarm

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardHover = {
    y: -10,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  // Enhanced content with SEO data
  const seoContent = {
    fr: {
      title: "Installation d'Alarmes de Sécurité - Solutions Professionnelles Syniax",
      subtitle: "Protection complète de votre propriété avec nos systèmes d'alarme haute technologie",
      description: "Syniax propose des solutions d'alarme sur mesure avec technologies IA, surveillance 24/7 et installation professionnelle. Protégez votre entreprise ou résidence avec nos systèmes certifiés.",
      features: [
        "Détection de mouvement intelligente avec IA",
        "Contrôle à distance via application mobile",
        "Alertes instantanées sur smartphone",
        "Integration avec systèmes existants",
        "Maintenance préventive incluse",
        "Certification européenne de sécurité",
        "Batterie de secours 72h",
        "Support technique 24/7"
      ],
      process: [
        {
          title: "Audit de Sécurité",
          description: "Analyse complète de vos besoins et vulnérabilités",
          icon: Shield
        },
        {
          title: "Solution Sur Mesure",
          description: "Conception d'un système adapté à votre propriété",
          icon: Zap
        },
        {
          title: "Installation Professionnelle",
          description: "Mise en place par nos techniciens certifiés",
          icon: Users
        },
        {
          title: "Formation & Support",
          description: "Prise en main complète et support continu",
          icon: Award
        }
      ],
      stats: [
        { value: "99.9%", label: "Taux de Fiabilité", icon: Shield },
        { value: "24/7", label: "Surveillance", icon: Clock },
        { value: "2h", label: "Temps d'Intervention", icon: Zap },
        { value: "500+", label: "Systèmes Installés", icon: Users }
      ],
      benefits: [
        "Réduction des primes d'assurance jusqu'à 30%",
        "Conformité aux normes de sécurité françaises",
        "Rapports détaillés d'activité mensuels",
        "Mises à jour logicielles automatiques",
        "Garantie 3 ans sur l'équipement",
        "Extension facile du système"
      ]
    },
    en: {
      title: "Security Alarm Installation - Professional Solutions by Syniax",
      subtitle: "Complete property protection with our high-tech alarm systems",
      description: "Syniax offers custom alarm solutions with AI technology, 24/7 monitoring and professional installation. Protect your business or residence with our certified systems.",
      features: [
        "Smart motion detection with AI",
        "Remote control via mobile app",
        "Instant alerts on smartphone",
        "Integration with existing systems",
        "Preventive maintenance included",
        "European security certification",
        "72-hour backup battery",
        "24/7 technical support"
      ],
      process: [
        {
          title: "Security Audit",
          description: "Complete analysis of your needs and vulnerabilities",
          icon: Shield
        },
        {
          title: "Custom Solution",
          description: "Design of a system adapted to your property",
          icon: Zap
        },
        {
          title: "Professional Installation",
          description: "Setup by our certified technicians",
          icon: Users
        },
        {
          title: "Training & Support",
          description: "Complete onboarding and continuous support",
          icon: Award
        }
      ],
      stats: [
        { value: "99.9%", label: "Reliability Rate", icon: Shield },
        { value: "24/7", label: "Monitoring", icon: Clock },
        { value: "2h", label: "Response Time", icon: Zap },
        { value: "500+", label: "Systems Installed", icon: Users }
      ],
      benefits: [
        "Insurance premium reduction up to 30%",
        "Compliance with French security standards",
        "Detailed monthly activity reports",
        "Automatic software updates",
        "3-year equipment warranty",
        "Easy system expansion"
      ]
    }
  }

  const t = seoContent[language]

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
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={20} />
            </motion.div>
            {language === "fr" ? "Retour à l'accueil" : "Back to home"}
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <Shield className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-600 dark:text-red-400">
                {language === "fr" ? "Installation Professionnelle" : "Professional Installation"}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-red-600 dark:from-white dark:via-white dark:to-red-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-foreground/70 leading-relaxed"
            >
              {t.subtitle}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/60 leading-relaxed"
            >
              {t.description}
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {t.stats.map((stat, i) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-600/10">
                      <IconComponent className="w-5 h-5 text-red-600 dark:text-red-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {language === "fr" ? "Demander un Devis Gratuit" : "Request Free Quote"}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card hover:bg-card/80 text-foreground rounded-lg font-semibold border border-border transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === "fr" ? "Nous Contacter" : "Contact Us"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Alarm System Dashboard Mockup */}
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 relative">
                <div className="absolute inset-6 bg-gray-800 rounded-lg p-6">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-semibold">SYNIAX ALARM</div>
                  </div>
                  
                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="bg-red-500/20 rounded-lg p-4 border border-red-500/30"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(239, 68, 68, 0)",
                          "0 0 15px rgba(239, 68, 68, 0.5)",
                          "0 0 0px rgba(239, 68, 68, 0)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="text-white text-sm font-bold">SYSTÈME ACTIF</div>
                      <div className="text-white/60 text-xs">Protection 24/7</div>
                    </motion.div>
                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                      <div className="text-white text-sm font-bold">ZONES SURVEILLÉES</div>
                      <div className="text-white/60 text-xs">8/8 Sécurisées</div>
                    </div>
                  </div>
                  
                  {/* Activity Graph */}
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="text-white text-sm mb-3">Activité Récente</div>
                    <div className="flex gap-1 h-16 items-end">
                      {[4, 8, 6, 12, 8, 10, 14, 8].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-green-500/50 rounded-t"
                          style={{ height: `${height * 4}px` }}
                          animate={{ height: [`${height * 4}px`, `${(height + 2) * 4}px`, `${height * 4}px`] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    {["Arm", "Disarm", "Alert"].map((action, i) => (
                      <motion.button
                        key={action}
                        className="py-2 rounded bg-gray-600 text-white text-xs font-medium hover:bg-gray-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {action}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center"
                  animate={floatingAnimation}
                >
                  <Shield className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Fonctionnalités Avancées" : "Advanced Features"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Découvrez les technologies de pointe qui rendent nos systèmes d'alarme incomparables"
                : "Discover the cutting-edge technologies that make our alarm systems unmatched"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                className="flex gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-600/30 transition-all duration-300 group"
              >
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <CheckCircle className="text-red-600" size={24} />
                </motion.div>
                <div>
                  <p className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Notre Processus en 4 Étapes" : "Our 4-Step Process"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Une approche structurée pour une sécurité optimale"
                : "A structured approach for optimal security"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-600/30 transition-all duration-300 group"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-600/10 mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-red-600 dark:text-red-500" />
                  </motion.div>
                  <div className="text-lg font-semibold mb-2 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {step.title}
                  </div>
                  <p className="text-foreground/60 text-sm">
                    {step.description}
                  </p>
                  <motion.div 
                    className="mt-4 text-2xl font-bold text-foreground/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "fr" ? "Avantages Supplémentaires" : "Additional Benefits"}
              </h2>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Benefits Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {language === "fr" ? "Protection Totale" : "Complete Protection"}
                  </h3>
                  <p className="text-foreground/60">
                    {language === "fr" 
                      ? "Sécurité 360° pour votre tranquillité d'esprit"
                      : "360° security for your peace of mind"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {language === "fr" ? "Prêt à sécuriser votre propriété ?" : "Ready to secure your property?"}
          </motion.h2>
          
          <motion.p 
            className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === "fr"
              ? "Contactez nos experts pour une consultation gratuite et un devis personnalisé adapté à vos besoins."
              : "Contact our experts for a free consultation and personalized quote tailored to your needs."}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {language === "fr" ? "Obtenir un Devis Gratuit" : "Get Free Quote"}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-foreground rounded-lg font-semibold border border-foreground/20 transition-all duration-300 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              {language === "fr" ? "Visite sur Site" : "Site Visit"}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}