"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"
import {
  ArrowLeft, Shield, Zap, Camera, Lock, Smartphone, Users,
  Eye, CheckCircle, Award, Clock, Wifi, Star, ArrowRight
} from "lucide-react"

export default function FeaturesPage() {
  const { language } = useLanguage()
  const content = translations[language].featuresPage

  // ✅ Motion Variants
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

  // ✅ Fixed easing type (TypeScript-safe)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  }

  const cardHover = {
    y: -10,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  }

  // ✅ SEO & Content in Two Languages
  const seoContent = {
    fr: {
      title: "Fonctionnalités Avancées - Solutions de Sécurité Syniax",
      subtitle: "Découvrez nos technologies de pointe pour une protection complète et intelligente",
      description:
        "Syniax intègre les dernières innovations en sécurité électronique : IA, surveillance 24/7, contrôles d'accès intelligents et bien plus encore.",
      features: [
        {
          icon: Shield,
          title: "Surveillance 24/7 Intelligente",
          description:
            "Monitoring continu avec analyse IA pour détecter les menaces en temps réel et interventions automatiques.",
          stats: "99.9% de disponibilité",
          benefits: ["Détection automatique", "Alertes instantanées", "Archivage 30 jours"],
        },
        {
          icon: Camera,
          title: "Vidéosurveillance IA 4K",
          description:
            "Caméras haute définition avec reconnaissance faciale, analyse comportementale et vision nocturne avancée.",
          stats: "4K Ultra HD",
          benefits: ["Reconnaissance faciale", "Vision nocturne", "Analyse comportementale"],
        },
        {
          icon: Lock,
          title: "Contrôle d'Accès Multi-Technologies",
          description:
            "Systèmes d'authentification biométrique, badges sécurisés et gestion centralisée des permissions.",
          stats: "5 technologies d'authentification",
          benefits: ["Biométrie", "Badges NFC", "Gestion centralisée"],
        },
        {
          icon: Zap,
          title: "Alimentation de Secours Intelligente",
          description:
            "Systèmes UPS avec autonomie prolongée et basculement automatique pour une protection sans interruption.",
          stats: "72h d'autonomie",
          benefits: ["Basculement automatique", "Monitoring batterie", "Alertes maintenance"],
        },
        {
          icon: Smartphone,
          title: "Gestion Mobile Complète",
          description:
            "Application mobile sécurisée pour contrôler tous vos systèmes de sécurité depuis n'importe où.",
          stats: "iOS & Android",
          benefits: ["Contrôle à distance", "Alertes push", "Interface intuitive"],
        },
        {
          icon: Users,
          title: "Support Expert 24/7",
          description:
            "Équipe de spécialistes disponible en permanence pour assistance technique et interventions d'urgence.",
          stats: "15min de temps de réponse",
          benefits: ["Experts certifiés", "Intervention rapide", "Support multilingue"],
        },
        {
          icon: Eye,
          title: "Analytics Prédictifs",
          description:
            "Intelligence artificielle avancée pour anticiper les risques et optimiser votre sécurité proactive.",
          stats: "95% de précision",
          benefits: ["Analyse prédictive", "Rapports intelligents", "Recommandations IA"],
        },
        {
          icon: Wifi,
          title: "Réseau Sécurisé Redondant",
          description:
            "Infrastructure réseau cryptée avec connexions redondantes pour une fiabilité maximale.",
          stats: "99.99% uptime",
          benefits: ["Chiffrement AES-256", "Réseau redondant", "Monitoring continu"],
        },
        {
          icon: Award,
          title: "Certifications Internationales",
          description:
            "Systèmes conformes aux normes les plus strictes : ISO 27001, GDPR, ANSSI et certifications européennes.",
          stats: "10+ certifications",
          benefits: ["Conformité RGPD", "Normes ISO", "Certifications UE"],
        },
      ],
      stats: [
        { value: "2000+", label: "Systèmes Déployés", icon: Shield },
        { value: "99.9%", label: "Taux de Satisfaction", icon: Star },
        { value: "24/7", label: "Support Client", icon: Clock },
        { value: "15min", label: "Temps de Réponse", icon: Zap },
      ],
      benefits: {
        title: "Pourquoi Choisir Nos Solutions ?",
        items: [
          "Réduction de 85% des incidents de sécurité",
          "Retour sur investissement en moins de 12 mois",
          "Conformité réglementaire garantie",
          "Maintenance proactive incluse",
          "Évolutivité illimitée",
          "Formation complète offerte",
        ],
      },
      technologies: [
        { name: "Intelligence Artificielle", description: "Algorithmes d'IA propriétaires pour une détection avancée des menaces" },
        { name: "Cloud Sécurisé", description: "Infrastructure cloud certifiée avec chiffrement de bout en bout" },
        { name: "IoT Sécurisé", description: "Appareils connectés avec protocoles de sécurité avancés" },
        { name: "Blockchain", description: "Technologie blockchain pour l'intégrité des données et audits" },
      ],
    },

    // English Version
    en: {
      title: "Advanced Features - Syniax Security Solutions",
      subtitle: "Discover our cutting-edge technologies for complete and intelligent protection",
      description:
        "Syniax integrates the latest innovations in electronic security: AI, 24/7 monitoring, smart access controls and much more.",
      features: [
        {
          icon: Shield,
          title: "Intelligent 24/7 Monitoring",
          description:
            "Continuous monitoring with AI analysis to detect threats in real-time and automatic interventions.",
          stats: "99.9% availability",
          benefits: ["Automatic detection", "Instant alerts", "30-day archiving"],
        },
        {
          icon: Camera,
          title: "AI Video Surveillance 4K",
          description:
            "High-definition cameras with facial recognition, behavioral analysis and advanced night vision.",
          stats: "4K Ultra HD",
          benefits: ["Facial recognition", "Night vision", "Behavioral analysis"],
        },
        {
          icon: Lock,
          title: "Multi-Technology Access Control",
          description:
            "Biometric authentication systems, secure badges and centralized permission management.",
          stats: "5 authentication technologies",
          benefits: ["Biometrics", "NFC badges", "Centralized management"],
        },
        {
          icon: Zap,
          title: "Smart Backup Power",
          description:
            "UPS systems with extended autonomy and automatic switching for uninterrupted protection.",
          stats: "72h autonomy",
          benefits: ["Automatic switching", "Battery monitoring", "Maintenance alerts"],
        },
        {
          icon: Smartphone,
          title: "Complete Mobile Management",
          description:
            "Secure mobile application to control all your security systems from anywhere.",
          stats: "iOS & Android",
          benefits: ["Remote control", "Push alerts", "Intuitive interface"],
        },
        {
          icon: Users,
          title: "24/7 Expert Support",
          description:
            "Team of specialists available permanently for technical assistance and emergency interventions.",
          stats: "15min response time",
          benefits: ["Certified experts", "Rapid intervention", "Multilingual support"],
        },
        {
          icon: Eye,
          title: "Predictive Analytics",
          description:
            "Advanced artificial intelligence to anticipate risks and optimize your proactive security.",
          stats: "95% accuracy",
          benefits: ["Predictive analysis", "Smart reports", "AI recommendations"],
        },
        {
          icon: Wifi,
          title: "Redundant Secure Network",
          description:
            "Encrypted network infrastructure with redundant connections for maximum reliability.",
          stats: "99.99% uptime",
          benefits: ["AES-256 encryption", "Redundant network", "Continuous monitoring"],
        },
        {
          icon: Award,
          title: "International Certifications",
          description:
            "Systems compliant with the strictest standards: ISO 27001, GDPR, ANSSI and European certifications.",
          stats: "10+ certifications",
          benefits: ["GDPR compliance", "ISO standards", "EU certifications"],
        },
      ],
      stats: [
        { value: "2000+", label: "Systems Deployed", icon: Shield },
        { value: "99.9%", label: "Satisfaction Rate", icon: Star },
        { value: "24/7", label: "Customer Support", icon: Clock },
        { value: "15min", label: "Response Time", icon: Zap },
      ],
      benefits: {
        title: "Why Choose Our Solutions?",
        items: [
          "85% reduction in security incidents",
          "Return on investment in less than 12 months",
          "Guaranteed regulatory compliance",
          "Proactive maintenance included",
          "Unlimited scalability",
          "Complete training provided",
        ],
      },
      technologies: [
        { name: "Artificial Intelligence", description: "Proprietary AI algorithms for advanced threat detection" },
        { name: "Secure Cloud", description: "Certified cloud infrastructure with end-to-end encryption" },
        { name: "Secure IoT", description: "Connected devices with advanced security protocols" },
        { name: "Blockchain", description: "Blockchain technology for data integrity and audits" },
      ],
    },
  }

  const t = seoContent[language]

  // ✅ JSX
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Header />

      {/* Back Button */}
      <div className="pt-24 container mx-auto px-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Link href="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group">
            <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <ArrowLeft size={20} />
            </motion.div>
            {language === "fr" ? "Retour à l'accueil" : "Back to home"}
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center container mx-auto px-4 py-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl text-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 dark:text-red-400">
              {language === "fr" ? "Technologies Avancées" : "Advanced Technologies"}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-red-600 dark:from-white dark:via-white dark:to-red-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {t.stats.map((stat, i) => {
              const IconComponent = stat.icon
              return (
                <motion.div key={i} className="text-center p-4" whileHover={{ scale: 1.05, y: -5 }}>
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 dark:bg-red-600/10 mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-6 h-6 text-red-600 dark:text-red-500" />
                  </motion.div>
                  <div className="text-2xl font-bold text-red-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Nos Fonctionnalités Principales" : "Our Key Features"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" ? "Des solutions complètes pour tous vos besoins de sécurité" : "Complete solutions for all your security needs"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <motion.div className="flex items-start justify-between mb-4" whileHover={{ x: 5 }}>
                    <motion.div className="p-3 rounded-xl bg-red-100 dark:bg-red-600/10 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors" whileHover={{ scale: 1.1, rotate: 5 }}>
                      <IconComponent className="w-6 h-6 text-red-600 dark:text-red-500" />
                    </motion.div>
                    <motion.div
                      className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-600/10 border border-green-500/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">{feature.stats}</span>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 mb-4 leading-relaxed">{feature.description}</p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Technologies Innovantes" : "Innovative Technologies"}
            </h2>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr"
                ? "Au cœur de nos solutions de sécurité avancées"
                : "At the heart of our advanced security solutions"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-border hover:border-red-600/30 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-foreground/60">{tech.description}</p>
              </motion.div>
            ))}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column (text) */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.benefits.title}
              </h2>
              <div className="space-y-4">
                {t.benefits.items.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-600/30 transition-all duration-300 group"
                  >
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-600/10 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-500" />
                    </motion.div>
                    <span className="text-foreground/80 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right column (visual card) */}
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
                  <h3 className="text-2xl font-bold mb-2">
                    {language === "fr" ? "Sécurité Totale" : "Complete Security"}
                  </h3>
                  <p className="text-foreground/60 mb-4">
                    {language === "fr"
                      ? "Protection 360° avec les dernières technologies"
                      : "360° protection with the latest technologies"}
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    {language === "fr" ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center"
                animate={floatingAnimation}
              >
                <Zap className="w-4 h-4 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center"
                animate={floatingAnimation}
                transition={{ delay: 2 }}
              >
                <CheckCircle className="w-3 h-3 text-green-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 p-12 text-center relative overflow-hidden"
        >
          {/* Subtle background bubbles */}
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
            {language === "fr"
              ? "Prêt à renforcer votre sécurité ?"
              : "Ready to enhance your security?"}
          </motion.h2>

          <motion.p
            className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === "fr"
              ? "Découvrez comment nos fonctionnalités avancées peuvent transformer votre approche de la sécurité. Consultation gratuite et démonstration sur mesure."
              : "Discover how our advanced features can transform your security approach. Free consultation and personalized demonstration."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Free Demo Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239,68,68,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <Link href="/contact">
                {language === "fr" ? "Démo Gratuite" : "Free Demo"}
              </Link>
            </motion.button>

            {/* View Services Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-foreground rounded-lg font-semibold border border-foreground/20 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              <Link href="/services">
                {language === "fr" ? "Voir nos Services" : "View Services"}
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

