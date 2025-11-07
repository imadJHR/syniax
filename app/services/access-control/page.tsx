"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft, Lock, Users, Clock, Shield, Smartphone, Fingerprint, Key, Eye, Phone, Mail, MapPin, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"

export default function AccessControlPage() {
  const { language } = useLanguage()
  const content = translations[language].servicePages.access

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

  // Enhanced SEO content
  const seoContent = {
    fr: {
      title: "Contrôle d'Accès Intelligent - Solutions Sécurisées Syniax",
      subtitle: "Gérez les accès de votre entreprise avec des systèmes intelligents et sécurisés",
      description: "Syniax propose des solutions de contrôle d'accès avancées avec authentification multi-facteurs, gestion centralisée et surveillance en temps réel. Sécurisez vos locaux avec nos technologies de pointe.",
      features: [
        "Authentification multi-facteurs (MFA)",
        "Gestion centralisée des permissions",
        "Surveillance en temps réel 24/7",
        "Rapports d'accès détaillés",
        "Intégration avec systèmes existants",
        "Alertes instantanées sur mobile",
        "Contrôle d'accès biométrique",
        "Synchronisation cloud sécurisée"
      ],
      technologies: [
        {
          title: "Reconnaissance Biométrique",
          description: "Accès par empreinte digitale, reconnaissance faciale et iris",
          icon: Fingerprint,
          stats: "99.9%",
          statsLabel: "Précision"
        },
        {
          title: "Badges Intelligents",
          description: "Badges NFC cryptés avec traçabilité complète",
          icon: Key,
          stats: "256-bit",
          statsLabel: "Chiffrement"
        },
        {
          title: "Application Mobile",
          description: "Contrôle d'accès depuis votre smartphone",
          icon: Smartphone,
          stats: "iOS/Android",
          statsLabel: "Compatibilité"
        },
        {
          title: "Contrôle Vocal",
          description: "Accès par commandes vocales sécurisées",
          icon: Users,
          stats: "98%",
          statsLabel: "Reconnaissance"
        }
      ],
      benefits: [
        "Réduction de 85% des intrusions non autorisées",
        "Conformité RGPD et normes de sécurité",
        "Audit complet des accès en temps réel",
        "Maintenance proactive incluse",
        "Formation du personnel offerte",
        "Support technique dédié 24/7"
      ],
      process: [
        {
          step: "1",
          title: "Audit de Sécurité",
          description: "Analyse complète de vos besoins et vulnérabilités"
        },
        {
          step: "2",
          title: "Conception Sur Mesure",
          description: "Design d'une solution adaptée à votre infrastructure"
        },
        {
          step: "3",
          title: "Installation Professionnelle",
          description: "Mise en place par nos techniciens certifiés"
        },
        {
          step: "4",
          title: "Formation & Support",
          description: "Formation complète et support continu"
        }
      ],
      stats: [
        { value: "1000+", label: "Systèmes Installés", icon: Lock },
        { value: "99.99%", label: "Disponibilité", icon: Shield },
        { value: "0.2s", label: "Temps d'Authentification", icon: Clock },
        { value: "50+", label: "Types d'Authentification", icon: Fingerprint }
      ],
      useCases: [
        {
          title: "Entreprises & Bureaux",
          description: "Contrôle d'accès sécurisé pour vos collaborateurs et visiteurs"
        },
        {
          title: "Sites Industriels",
          description: "Gestion des zones sensibles et accès restreints"
        },
        {
          title: "Établissements Publics",
          description: "Sécurisation des accès avec traçabilité complète"
        },
        {
          title: "Résidences Privées",
          description: "Systèmes élégants et discrets pour votre domicile"
        }
      ]
    },
    en: {
      title: "Intelligent Access Control - Secure Solutions by Syniax",
      subtitle: "Manage your business access with intelligent and secure systems",
      description: "Syniax offers advanced access control solutions with multi-factor authentication, centralized management and real-time monitoring. Secure your premises with our cutting-edge technologies.",
      features: [
        "Multi-factor authentication (MFA)",
        "Centralized permission management",
        "24/7 real-time monitoring",
        "Detailed access reports",
        "Integration with existing systems",
        "Instant mobile alerts",
        "Biometric access control",
        "Secure cloud synchronization"
      ],
      technologies: [
        {
          title: "Biometric Recognition",
          description: "Access via fingerprint, facial recognition and iris scanning",
          icon: Fingerprint,
          stats: "99.9%",
          statsLabel: "Accuracy"
        },
        {
          title: "Smart Badges",
          description: "Encrypted NFC badges with complete traceability",
          icon: Key,
          stats: "256-bit",
          statsLabel: "Encryption"
        },
        {
          title: "Mobile Application",
          description: "Access control from your smartphone",
          icon: Smartphone,
          stats: "iOS/Android",
          statsLabel: "Compatibility"
        },
        {
          title: "Voice Control",
          description: "Access via secure voice commands",
          icon: Users,
          stats: "98%",
          statsLabel: "Recognition"
        }
      ],
      benefits: [
        "85% reduction in unauthorized intrusions",
        "GDPR compliance and security standards",
        "Complete real-time access audit",
        "Proactive maintenance included",
        "Staff training provided",
        "24/7 dedicated technical support"
      ],
      process: [
        {
          step: "1",
          title: "Security Audit",
          description: "Complete analysis of your needs and vulnerabilities"
        },
        {
          step: "2",
          title: "Custom Design",
          description: "Design of a solution adapted to your infrastructure"
        },
        {
          step: "3",
          title: "Professional Installation",
          description: "Setup by our certified technicians"
        },
        {
          step: "4",
          title: "Training & Support",
          description: "Complete training and ongoing support"
        }
      ],
      stats: [
        { value: "1000+", label: "Systems Installed", icon: Lock },
        { value: "99.99%", label: "Availability", icon: Shield },
        { value: "0.2s", label: "Authentication Time", icon: Clock },
        { value: "50+", label: "Authentication Types", icon: Fingerprint }
      ],
      useCases: [
        {
          title: "Businesses & Offices",
          description: "Secure access control for your employees and visitors"
        },
        {
          title: "Industrial Sites",
          description: "Management of sensitive areas and restricted access"
        },
        {
          title: "Public Institutions",
          description: "Access security with complete traceability"
        },
        {
          title: "Private Residences",
          description: "Elegant and discreet systems for your home"
        }
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
              <Lock className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-600 dark:text-red-400">
                {language === "fr" ? "Accès Sécurisé" : "Secure Access"}
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
                {language === "fr" ? "Devis Gratuit" : "Free Quote"}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card hover:bg-card/80 text-foreground rounded-lg font-semibold border border-border transition-all duration-300 flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                {language === "fr" ? "Voir la Démo" : "View Demo"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image - Access Control Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative">
                {/* Access Control Dashboard Mockup */}
                <div className="absolute inset-6 bg-gray-800 rounded-lg p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-semibold">SYNIAX ACCESS</div>
                  </div>
                  
                  {/* Access Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="bg-green-500/20 rounded-lg p-4 border border-green-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-sm font-bold">ACCÈS AUTORISÉS</div>
                      <div className="text-white/60 text-xs">42 aujourd'hui</div>
                    </motion.div>
                    <motion.div 
                      className="bg-red-500/20 rounded-lg p-4 border border-red-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-sm font-bold">TENTATIVES BLOQUÉES</div>
                      <div className="text-white/60 text-xs">3 aujourd'hui</div>
                    </motion.div>
                  </div>
                  
                  {/* Active Users */}
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="text-white text-sm mb-3">Utilisateurs Actifs</div>
                    <div className="flex gap-2">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
                          whileHover={{ scale: 1.2, y: -5 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                        >
                          {i + 1}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    {["Porte 1", "Porte 2", "Porte 3"].map((door, i) => (
                      <motion.div
                        key={door}
                        className="py-2 rounded bg-gray-600 text-white text-xs text-center font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "#4ade80" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {door}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center"
                  animate={floatingAnimation}
                >
                  <Fingerprint className="w-6 h-6 text-blue-400" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 w-10 h-10 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center"
                  animate={{
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  <Key className="w-5 h-5 text-green-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              {language === "fr" ? "Technologies Avancées" : "Advanced Technologies"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Découvrez nos solutions d'authentification multi-couches"
                : "Discover our multi-layer authentication solutions"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.technologies.map((tech, index) => {
              const IconComponent = tech.icon
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
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    {tech.description}
                  </p>
                  <motion.div
                    className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-600/10 border border-green-500/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{tech.stats}</span>
                  </motion.div>
                  <div className="text-xs text-foreground/40 mt-2">
                    {tech.statsLabel}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
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
              {language === "fr" ? "Fonctionnalités Complètes" : "Complete Features"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Tout ce dont vous avez besoin pour un contrôle d'accès optimal"
                : "Everything you need for optimal access control"}
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

      {/* Use Cases Section */}
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
              {language === "fr" ? "Cas d'Utilisation" : "Use Cases"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Adapté à tous types d'environnements professionnels"
                : "Suitable for all types of professional environments"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-border hover:border-red-600/30 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-foreground/60">
                  {useCase.description}
                </p>
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "fr" ? "Avantages Clés" : "Key Benefits"}
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
            
            {/* Process Timeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {t.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-foreground/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
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
            {language === "fr" 
              ? "Prêt à moderniser votre contrôle d'accès ?" 
              : "Ready to modernize your access control?"}
          </motion.h2>
          
          <motion.p 
            className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === "fr"
              ? "Contactez nos experts pour une consultation gratuite et un devis personnalisé adapté à vos besoins spécifiques."
              : "Contact our experts for a free consultation and personalized quote tailored to your specific needs."}
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
              {language === "fr" ? "Obtenir un Devis" : "Get Quote"}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-foreground rounded-lg font-semibold border border-foreground/20 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {language === "fr" ? "Demander une Démo" : "Request Demo"}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}