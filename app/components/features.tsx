"use client"
import { motion } from "framer-motion"
import { CheckCircle2, Shield, Zap, Clock, Settings, BarChart3, Smartphone, Download, Users, Award, Lock, Eye } from "lucide-react"
import { useLanguage } from "./language-context"
import Image from "next/image"

export default function Features() {
  const { language } = useLanguage()

  const translations = {
    fr: {
      title: "Pourquoi Choisir Syniax?",
      subtitle: "L'excellence en sécurité électronique",
      description: "Découvrez les fonctionnalités avancées qui font de Syniax le leader en solutions de sécurité électronique intelligentes et fiables.",
      features: [
        {
          title: "Intelligence Artificielle Intégrée",
          description: "Notre IA analyse les menaces en temps réel avec une précision de 99.7% pour une protection proactive.",
          icon: Zap,
          stats: "99.7%",
          statsLabel: "Précision IA"
        },
        {
          title: "Support Client 24/7",
          description: "Notre équipe d'experts est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins en sécurité.",
          icon: Clock,
          stats: "2min",
          statsLabel: "Temps de réponse"
        },
        {
          title: "Installation Rapide et Discrète",
          description: "Installation professionnelle en moins de 48h sans perturber vos activités quotidiennes.",
          icon: Settings,
          stats: "48h",
          statsLabel: "Installation"
        },
        {
          title: "Dashboard Intuitif et Puissant",
          description: "Interface utilisateur moderne avec analytics en temps réel et rapports personnalisables.",
          icon: BarChart3,
          stats: "100%",
          statsLabel: "Satisfaction UI"
        },
        {
          title: "Conformité RGPD Garantie",
          description: "Respect total des réglementations de protection des données avec audit de conformité inclus.",
          icon: Shield,
          stats: "100%",
          statsLabel: "Conformité"
        },
        {
          title: "Mises à Jour Automatiques",
          description: "Système toujours à jour avec les dernières protections contre les nouvelles menaces.",
          icon: Download,
          stats: "Auto",
          statsLabel: "Mises à jour"
        },
        {
          title: "Intégration Multi-Appareils",
          description: "Compatibilité totale avec tous vos appareils et systèmes existants.",
          icon: Smartphone,
          stats: "50+",
          statsLabel: "Appareils"
        },
        {
          title: "Rapports d'Analyse Détaillés",
          description: "Rapports mensuels complets avec insights actionnables et recommandations.",
          icon: BarChart3,
          stats: "30+",
          statsLabel: "Métriques"
        }
      ],
      stats: {
        clients: "Clients Satisfaits",
        protection: "Taux de Protection",
        uptime: "Disponibilité",
        response: "Temps de Réponse"
      },
      cta: {
        primary: "Démarrer Maintenant",
        secondary: "Voir la Démo",
        description: "Rejoignez les 500+ entreprises qui nous font confiance"
      },
      benefits: {
        title: "Avantages Exclusifs",
        items: [
          "Essai gratuit de 30 jours",
          "Formation complète incluse",
          "Certification internationale",
          "Support prioritaire 24/7",
          "Audit de sécurité gratuit",
          "Garantie de résultat"
        ]
      },
      testimonial: {
        quote: "Syniax a révolutionné notre approche de la sécurité. Leur système IA a détecté des menaces que nous n'avions même pas envisagées.",
        author: "Pierre Martin",
        position: "Directeur Sécurité, Groupe Axa"
      }
    },
    en: {
      title: "Why Choose Syniax?",
      subtitle: "Excellence in Electronic Security",
      description: "Discover the advanced features that make Syniax the leader in intelligent and reliable electronic security solutions.",
      features: [
        {
          title: "Integrated Artificial Intelligence",
          description: "Our AI analyzes threats in real-time with 99.7% accuracy for proactive protection.",
          icon: Zap,
          stats: "99.7%",
          statsLabel: "AI Accuracy"
        },
        {
          title: "24/7 Customer Support",
          description: "Our team of experts is available 24/7 to address all your security needs.",
          icon: Clock,
          stats: "2min",
          statsLabel: "Response Time"
        },
        {
          title: "Quick and Discreet Installation",
          description: "Professional installation in under 48 hours without disrupting your daily operations.",
          icon: Settings,
          stats: "48h",
          statsLabel: "Installation"
        },
        {
          title: "Intuitive and Powerful Dashboard",
          description: "Modern user interface with real-time analytics and customizable reports.",
          icon: BarChart3,
          stats: "100%",
          statsLabel: "UI Satisfaction"
        },
        {
          title: "GDPR Compliance Guaranteed",
          description: "Full compliance with data protection regulations including compliance audit.",
          icon: Shield,
          stats: "100%",
          statsLabel: "Compliance"
        },
        {
          title: "Automatic System Updates",
          description: "Always up-to-date system with latest protections against new threats.",
          icon: Download,
          stats: "Auto",
          statsLabel: "Updates"
        },
        {
          title: "Multi-Device Integration",
          description: "Full compatibility with all your existing devices and systems.",
          icon: Smartphone,
          stats: "50+",
          statsLabel: "Devices"
        },
        {
          title: "Detailed Analysis Reports",
          description: "Comprehensive monthly reports with actionable insights and recommendations.",
          icon: BarChart3,
          stats: "30+",
          statsLabel: "Metrics"
        }
      ],
      stats: {
        clients: "Satisfied Clients",
        protection: "Protection Rate",
        uptime: "Uptime",
        response: "Response Time"
      },
      cta: {
        primary: "Get Started Now",
        secondary: "View Demo",
        description: "Join 500+ businesses that trust us"
      },
      benefits: {
        title: "Exclusive Benefits",
        items: [
          "30-day free trial",
          "Complete training included",
          "International certification",
          "24/7 priority support",
          "Free security audit",
          "Results guarantee"
        ]
      },
      testimonial: {
        quote: "Syniax revolutionized our security approach. Their AI system detected threats we hadn't even considered.",
        author: "Pierre Martin",
        position: "Security Director, Axa Group"
      }
    },
  }

  const t = translations[language]

  // Fixed variants with proper TypeScript typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  }

  // Fixed cardHover with proper typing
  const cardHover = {
    y: -10,
    scale: 1.02,
    transition: { 
      type: "spring" as const, 
      stiffness: 300 
    }
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <Award className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 dark:text-red-400">{t.subtitle}</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-red-600 dark:from-white dark:via-white dark:to-red-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t.description}
          </motion.p>

          {/* Stats Overview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "500+", label: t.stats.clients, icon: Users },
              { value: "99.9%", label: t.stats.protection, icon: Shield },
              { value: "99.99%", label: t.stats.uptime, icon: Zap },
              { value: "<2min", label: t.stats.response, icon: Clock },
            ].map((stat, i) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={i}
                
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-500/30 transition-all duration-300"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 dark:bg-red-600/10 mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-6 h-6 text-red-600 dark:text-red-500" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {t.features.map((feature, i) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={i}
               
                whileHover={cardHover}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
              >
                {/* Feature Header */}
                <motion.div 
                  className="flex items-start justify-between mb-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-3 rounded-xl bg-red-100 dark:bg-red-600/10 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-6 h-6 text-red-600 dark:text-red-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-600/10 border border-green-500/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{feature.stats}</span>
                  </motion.div>
                </motion.div>

                {/* Description */}
                <p className="text-foreground/60 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Label */}
                <div className="text-xs text-foreground/40 font-medium">
                  {feature.statsLabel}
                </div>

                {/* Animated Check Circle */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.7 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </motion.div>
                  <span>{language === "fr" ? "Inclus dans tous les plans" : "Included in all plans"}</span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Section with Benefits and Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {t.benefits.title}
            </h3>
            
            <div className="space-y-4">
              {t.benefits.items.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-red-500/30 transition-all duration-300 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-600/10 flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500" />
                  </motion.div>
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Lock className="w-5 h-5" />
                {t.cta.primary}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card hover:bg-card/80 text-foreground rounded-lg font-semibold border border-border transition-all duration-300 flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                {t.cta.secondary}
              </motion.button>
            </motion.div>

            <motion.p 
              className="text-foreground/60 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {t.cta.description}
            </motion.p>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-8 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
              </div>

              {/* Quote Icon */}
              <motion.div
                className="text-6xl text-red-400 mb-4 opacity-50"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                "
              </motion.div>

              <motion.blockquote
                className="text-xl mb-6 relative z-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {t.testimonial.quote}
              </motion.blockquote>

              <motion.div
                className="flex items-center gap-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  PM
                </div>
                <div>
                  <div className="font-semibold">{t.testimonial.author}</div>
                  <div className="text-red-200 text-sm">{t.testimonial.position}</div>
                </div>
              </motion.div>

              {/* Floating Security Icons */}
              <motion.div
                className="absolute top-4 right-4 opacity-20"
                animate={floatingAnimation}
              >
                <Shield className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="absolute bottom-4 left-4 opacity-20"
                animate={floatingAnimation}
                transition={{ delay: 2 }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}