"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft, Zap, Battery, Car, Clock, Shield, Smartphone, Wifi, Users, Phone, Mail, MapPin, Award, Plug, BatteryCharging } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"

export default function EVChargingPage() {
  const { language } = useLanguage()
  const content = translations[language].servicePages.charging

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

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  // Enhanced SEO content
  const seoContent = {
    fr: {
      title: "Solutions de Recharge Véhicules Électriques - Syniax",
      subtitle: "Infrastructures de recharge intelligentes pour particuliers et professionnels",
      description: "Syniax installe des bornes de recharge VE intelligentes avec gestion à distance, paiement sécurisé et monitoring énergétique. Passez à l'électrique avec nos solutions complètes.",
      features: [
        "Installation de bornes de recharge rapide",
        "Gestion à distance via application mobile",
        "Paiement sécurisé et facturation automatique",
        "Monitoring énergétique en temps réel",
        "Intégration avec systèmes solaires",
        "Maintenance prédictive et support 24/7",
        "Conformité aux normes européennes",
        "Rapports d'utilisation détaillés"
      ],
      technologies: [
        {
          title: "Recharge Rapide DC",
          description: "Charge ultra-rapide jusqu'à 350 kW pour véhicules compatibles",
          icon: Zap,
          stats: "350kW",
          statsLabel: "Puissance max"
        },
        {
          title: "Recharge Intelligente",
          description: "Optimisation automatique selon tarifs et consommation",
          icon: BatteryCharging,
          stats: "30%",
          statsLabel: "Économie"
        },
        {
          title: "Gestion Cloud",
          description: "Surveillance et contrôle à distance de vos bornes",
          icon: Wifi,
          stats: "100%",
          statsLabel: "Connectivité"
        },
        {
          title: "Paiement Sécurisé",
          description: "Systèmes de paiement multiples et cryptés",
          icon: Shield,
          stats: "PCI-DSS",
          statsLabel: "Sécurité"
        }
      ],
      benefits: [
        "Jusqu'à 50% d'économies sur les coûts d'installation",
        "Retour sur investissement en 12-24 mois",
        "Subventions gouvernementales disponibles",
        "Augmentation de la valeur immobilière",
        "Attraction de clientèle éco-responsable",
        "Conformité réglementaire garantie"
      ],
      process: [
        {
          step: "1",
          title: "Audit Énergétique",
          description: "Analyse de vos besoins et de votre infrastructure électrique"
        },
        {
          step: "2",
          title: "Conception Sur Mesure",
          description: "Design d'une solution adaptée à votre usage"
        },
        {
          step: "3",
          title: "Installation Professionnelle",
          description: "Mise en place par nos électriciens certifiés"
        },
        {
          step: "4",
          title: "Mise en Service",
          description: "Configuration et formation à l'utilisation"
        }
      ],
      stats: [
        { value: "500+", label: "Bornes Installées", icon: Plug },
        { value: "99.9%", label: "Disponibilité", icon: Shield },
        { value: "30min", label: "Temps de Recharge", icon: Clock },
        { value: "24/7", label: "Support Technique", icon: Users }
      ],
      useCases: [
        {
          title: "Parkings d'Entreprise",
          description: "Recharge pour collaborateurs et visiteurs"
        },
        {
          title: "Centres Commerciaux",
          description: "Service valeur ajoutée pour vos clients"
        },
        {
          title: "Copropriétés",
          description: "Solutions partagées pour résidents"
        },
        {
          title: "Stations Service",
          description: "Infrastructures de recharge rapide"
        }
      ],
      chargerTypes: [
        {
          type: "Wallbox AC",
          power: "7-22 kW",
          time: "4-8 heures",
          price: "À partir de 990€",
          ideal: "Maison/Bureau"
        },
        {
          type: "Borne Rapide DC",
          power: "50-350 kW",
          time: "15-30 minutes",
          price: "À partir de 15 000€",
          ideal: "Stations publiques"
        },
        {
          type: "Borne Double",
          power: "2x 22 kW",
          time: "4-8 heures",
          price: "À partir de 2 500€",
          ideal: "Parkings entreprises"
        }
      ]
    },
    en: {
      title: "Electric Vehicle Charging Solutions - Syniax",
      subtitle: "Smart charging infrastructure for individuals and businesses",
      description: "Syniax installs smart EV charging stations with remote management, secure payment and energy monitoring. Switch to electric with our complete solutions.",
      features: [
        "Fast charging station installation",
        "Remote management via mobile app",
        "Secure payment and automatic billing",
        "Real-time energy monitoring",
        "Integration with solar systems",
        "Predictive maintenance and 24/7 support",
        "Compliance with European standards",
        "Detailed usage reports"
      ],
      technologies: [
        {
          title: "DC Fast Charging",
          description: "Ultra-fast charging up to 350 kW for compatible vehicles",
          icon: Zap,
          stats: "350kW",
          statsLabel: "Max power"
        },
        {
          title: "Smart Charging",
          description: "Automatic optimization based on rates and consumption",
          icon: BatteryCharging,
          stats: "30%",
          statsLabel: "Savings"
        },
        {
          title: "Cloud Management",
          description: "Remote monitoring and control of your stations",
          icon: Wifi,
          stats: "100%",
          statsLabel: "Connectivity"
        },
        {
          title: "Secure Payment",
          description: "Multiple encrypted payment systems",
          icon: Shield,
          stats: "PCI-DSS",
          statsLabel: "Security"
        }
      ],
      benefits: [
        "Up to 50% savings on installation costs",
        "Return on investment in 12-24 months",
        "Available government subsidies",
        "Increased property value",
        "Attraction of eco-responsible customers",
        "Guaranteed regulatory compliance"
      ],
      process: [
        {
          step: "1",
          title: "Energy Audit",
          description: "Analysis of your needs and electrical infrastructure"
        },
        {
          step: "2",
          title: "Custom Design",
          description: "Design of a solution adapted to your usage"
        },
        {
          step: "3",
          title: "Professional Installation",
          description: "Setup by our certified electricians"
        },
        {
          step: "4",
          title: "Commissioning",
          description: "Configuration and user training"
        }
      ],
      stats: [
        { value: "500+", label: "Stations Installed", icon: Plug },
        { value: "99.9%", label: "Availability", icon: Shield },
        { value: "30min", label: "Charging Time", icon: Clock },
        { value: "24/7", label: "Technical Support", icon: Users }
      ],
      useCases: [
        {
          title: "Business Parking",
          description: "Charging for employees and visitors"
        },
        {
          title: "Shopping Centers",
          description: "Value-added service for your customers"
        },
        {
          title: "Residential Buildings",
          description: "Shared solutions for residents"
        },
        {
          title: "Service Stations",
          description: "Fast charging infrastructure"
        }
      ],
      chargerTypes: [
        {
          type: "Wallbox AC",
          power: "7-22 kW",
          time: "4-8 hours",
          price: "From 990€",
          ideal: "Home/Office"
        },
        {
          type: "Fast DC Station",
          power: "50-350 kW",
          time: "15-30 minutes",
          price: "From 15,000€",
          ideal: "Public stations"
        },
        {
          type: "Dual Station",
          power: "2x 22 kW",
          time: "4-8 hours",
          price: "From 2,500€",
          ideal: "Business parking"
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-600 dark:text-green-400">
                {language === "fr" ? "Énergie Verte" : "Green Energy"}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-green-600 dark:from-white dark:via-white dark:to-green-400 bg-clip-text text-transparent">
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
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-600/10">
                      <IconComponent className="w-5 h-5 text-green-600 dark:text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">{stat.value}</div>
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
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {language === "fr" ? "Devis Gratuit" : "Free Quote"}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card hover:bg-card/80 text-foreground rounded-lg font-semibold border border-border transition-all duration-300 flex items-center gap-2"
              >
                <Car className="w-5 h-5" />
                {language === "fr" ? "Simulateur" : "Calculator"}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image - EV Charging Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 relative">
                {/* EV Charging Dashboard Mockup */}
                <div className="absolute inset-6 bg-gray-800 rounded-lg p-6">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-semibold">SYNIAX CHARGE</div>
                  </div>
                  
                  {/* Charging Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="bg-green-500/20 rounded-lg p-4 border border-green-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-sm font-bold">BORNE ACTIVE</div>
                      <div className="text-white/60 text-xs">Charge en cours</div>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-sm font-bold">ÉNERGIE SOLAIRE</div>
                      <div className="text-white/60 text-xs">75% renouvelable</div>
                    </motion.div>
                  </div>
                  
                  {/* Charging Progress */}
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="flex justify-between text-white text-sm mb-3">
                      <span>Progression de charge</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3">
                      <motion.div 
                        className="bg-green-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                    <div className="text-white/60 text-xs mt-2">Temps restant: 15min</div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    {["Pause", "Stop", "Historique"].map((action, i) => (
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
                  className="absolute top-6 right-6 w-12 h-12 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center"
                  animate={floatingAnimation}
                >
                  <BatteryCharging className="w-6 h-6 text-green-400" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 w-10 h-10 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center"
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
                  <Zap className="w-5 h-5 text-blue-400" />
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
              {language === "fr" ? "Technologies de Recharge" : "Charging Technologies"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Des solutions adaptées à tous les besoins de mobilité électrique"
                : "Solutions adapted to all electric mobility needs"}
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
                  className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-green-600/30 transition-all duration-300 group"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-600/10 mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-600/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-green-600 dark:text-green-500" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    {tech.description}
                  </p>
                  <motion.div
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-600/10 border border-blue-500/20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{tech.stats}</span>
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

      {/* Charger Types Section */}
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
              {language === "fr" ? "Types de Bornes" : "Charger Types"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Choisissez la solution qui correspond à vos besoins"
                : "Choose the solution that matches your needs"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.chargerTypes.map((charger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={cardHover}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-border hover:border-green-600/30 transition-all duration-300 group text-center"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-600/10 mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-600/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Plug className="w-8 h-8 text-green-600 dark:text-green-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {charger.type}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">{language === "fr" ? "Puissance:" : "Power:"}</span>
                    <span className="font-semibold">{charger.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">{language === "fr" ? "Temps:" : "Time:"}</span>
                    <span className="font-semibold">{charger.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">{language === "fr" ? "Prix:" : "Price:"}</span>
                    <span className="font-semibold text-green-600">{charger.price}</span>
                  </div>
                </div>
                <div className="text-xs text-foreground/50 bg-foreground/5 rounded-lg p-2">
                  {language === "fr" ? "Idéal pour:" : "Ideal for:"} {charger.ideal}
                </div>
              </motion.div>
            ))}
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
              {language === "fr" ? "Fonctionnalités Intelligentes" : "Smart Features"}
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Une expérience de recharge optimisée et sécurisée"
                : "An optimized and secure charging experience"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                className="flex gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-green-600/30 transition-all duration-300 group"
              >
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <CheckCircle className="text-green-600" size={24} />
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

      {/* Use Cases & Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Use Cases */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "fr" ? "Cas d'Utilisation" : "Use Cases"}
              </h2>
              <div className="space-y-4">
                {t.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-border"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-foreground/60 text-sm">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "fr" ? "Avantages Économiques" : "Economic Benefits"}
              </h2>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Process Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-4"
              >
                <h3 className="font-semibold text-foreground mb-4">
                  {language === "fr" ? "Notre Processus" : "Our Process"}
                </h3>
                {t.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-foreground/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{step.title}</h4>
                      <p className="text-foreground/60 text-xs">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
          className="rounded-2xl bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-600/30 p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {language === "fr" ? "Prêt à passer à l'électrique ?" : "Ready to go electric?"}
          </motion.h2>
          
          <motion.p 
            className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {language === "fr"
              ? "Contactez nos experts pour une étude gratuite de votre projet et un devis personnalisé avec les aides disponibles."
              : "Contact our experts for a free project study and personalized quote with available subsidies."}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {language === "fr" ? "Étude Gratuite" : "Free Study"}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-foreground rounded-lg font-semibold border border-foreground/20 transition-all duration-300 flex items-center gap-2"
            >
              <Car className="w-5 h-5" />
              {language === "fr" ? "Simuler mes Aides" : "Subsidy Calculator"}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}