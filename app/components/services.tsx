"use client"
import { motion } from "framer-motion"
import { Shield, Camera, Lock, Smartphone, Wifi, Zap, ArrowRight, CheckCircle, Play } from "lucide-react"
import { useLanguage } from "./language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language].services

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
    y: -15,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  // Services translations
  const servicesTranslations = {
    fr: {
      title: "Nos Services de Sécurité",
      description: "Des solutions de sécurité électronique complètes et innovantes pour protéger votre entreprise 24 heures sur 24, 7 jours sur 7.",
      subtitle: "Solutions Intégrées",
      featuredTitle: "Sécurité Sur Mesure",
      featuredDesc: "Nous concevons des systèmes de sécurité adaptés à vos besoins spécifiques avec les dernières technologies IA.",
      cta: "Obtenir un devis gratuit",
      demo: "Voir la démo",
      benefits: "Avantages Clés",
      guarantee: "Garantie 100% Satisfaction",
      support: "Support 24/7",
      integration: "Intégration Complète",
      trusted: "Entreprises de confiance",
      years: "ans d'expérience",
      projects: "projets réalisés",
      clients: "clients satisfaits",
      response: "min de réponse",
      benefit1: "Réduction des risques de 85%",
      benefit2: "Conformité aux normes internationales",
      benefit3: "Rapports détaillés en temps réel",
      benefit4: "Maintenance proactive incluse",
      sectionTitle: "Pourquoi Choisir Syniax?",
      sectionDesc: "Notre expertise en sécurité électronique combine intelligence artificielle, surveillance humaine et technologies de pointe pour une protection optimale.",
      feature1: "Technologie IA Avancée",
      feature2: "Équipe d'Experts Certifiés",
      feature3: "Solutions Évolutives",
      feature4: "Support Technique Dédié"
    },
    en: {
      title: "Our Security Services",
      description: "Comprehensive and innovative electronic security solutions to protect your business 24 hours a day, 7 days a week.",
      subtitle: "Integrated Solutions",
      featuredTitle: "Custom Security Solutions",
      featuredDesc: "We design security systems tailored to your specific needs with the latest AI technologies.",
      cta: "Get a free quote",
      demo: "Watch demo",
      benefits: "Key Benefits",
      guarantee: "100% Satisfaction Guarantee",
      support: "24/7 Support",
      integration: "Full Integration",
      trusted: "Trusted companies",
      years: "years of experience",
      projects: "completed projects",
      clients: "satisfied clients",
      response: "min response time",
      benefit1: "85% risk reduction",
      benefit2: "International standards compliance",
      benefit3: "Real-time detailed reporting",
      benefit4: "Proactive maintenance included",
      sectionTitle: "Why Choose Syniax?",
      sectionDesc: "Our electronic security expertise combines artificial intelligence, human surveillance and cutting-edge technologies for optimal protection.",
      feature1: "Advanced AI Technology",
      feature2: "Team of Certified Experts",
      feature3: "Scalable Solutions",
      feature4: "Dedicated Technical Support"
    },
  }

  const servicesData = [
    {
      icon: Shield,
      titleFr: "Surveillance 24/7",
      titleEn: "24/7 Monitoring",
      descFr: "Monitoring continu de vos installations avec nos centres de surveillance certifiés et équipes d'intervention rapide.",
      descEn: "Continuous monitoring of your facilities with our certified monitoring centers and rapid response teams.",
      image: "/services/monitoring.jpg",
      featuresFr: ["Centres certifiés", "Intervention rapide", "Analyses prédictives", "Rapports détaillés"],
      featuresEn: ["Certified centers", "Rapid response", "Predictive analysis", "Detailed reports"],
      stats: { value: "99.9%", labelFr: "Taux de fiabilité", labelEn: "Reliability rate" }
    },
    {
      icon: Camera,
      titleFr: "Vidéosurveillance IA",
      titleEn: "AI Video Surveillance",
      descFr: "Caméras 4K avec analyse intelligente, reconnaissance faciale et détection de comportements suspects en temps réel.",
      descEn: "4K cameras with intelligent analysis, facial recognition and real-time suspicious behavior detection.",
      image: "/services/camera.jpg",
      featuresFr: ["Caméras 4K", "Reconnaissance faciale", "Détection intelligente", "Stockage cloud sécurisé"],
      featuresEn: ["4K cameras", "Facial recognition", "Smart detection", "Secure cloud storage"],
      stats: { value: "4K", labelFr: "Résolution maximale", labelEn: "Maximum resolution" }
    },
    {
      icon: Lock,
      titleFr: "Contrôle d'accès intelligent",
      titleEn: "Smart Access Control",
      descFr: "Systèmes d'authentification multi-facteurs, badges sécurisés et gestion des permissions en temps réel.",
      descEn: "Multi-factor authentication systems, secure badges and real-time permission management.",
      image: "/services/access.jpg",
      featuresFr: ["Authentification MFA", "Badges sécurisés", "Gestion temps réel", "Audit complet"],
      featuresEn: ["MFA authentication", "Secure badges", "Real-time management", "Complete audit"],
      stats: { value: "0.2s", labelFr: "Temps d'authentification", labelEn: "Authentication time" }
    },
    {
      icon: Smartphone,
      titleFr: "Alertes Mobiles Intelligentes",
      titleEn: "Smart Mobile Alerts",
      descFr: "Notifications push intelligentes, application mobile sécurisée et gestion à distance de votre sécurité.",
      descEn: "Smart push notifications, secure mobile app and remote security management.",
      image: "/services/mobile.jpg",
      featuresFr: ["Notifications push", "App sécurisée", "Gestion à distance", "Alertes contextuelles"],
      featuresEn: ["Push notifications", "Secure app", "Remote management", "Contextual alerts"],
      stats: { value: "2s", labelFr: "Délai d'alerte", labelEn: "Alert delay" }
    },
    {
      icon: Wifi,
      titleFr: "Réseau Cybersécurisé",
      titleEn: "Cybersecure Network",
      descFr: "Infrastructure réseau cryptée, protection contre les cybermenaces et surveillance du trafic en continu.",
      descEn: "Encrypted network infrastructure, protection against cyber threats and continuous traffic monitoring.",
      image: "/services/network.jpg",
      featuresFr: ["Chiffrement AES-256", "Protection DDoS", "Surveillance trafic", "Conformité RGPD"],
      featuresEn: ["AES-256 encryption", "DDoS protection", "Traffic monitoring", "GDPR compliance"],
      stats: { value: "256-bit", labelFr: "Chiffrement", labelEn: "Encryption" }
    },
    {
      icon: Zap,
      titleFr: "Détection d'Intrusion IA",
      titleEn: "AI Intrusion Detection",
      descFr: "Systèmes de détection intelligents avec analyse comportementale et prévention proactive des intrusions.",
      descEn: "Smart detection systems with behavioral analysis and proactive intrusion prevention.",
      image: "/services/intrusion.jpg",
      featuresFr: ["Analyse comportementale", "Prévention proactive", "Capteurs intelligents", "Auto-apprentissage"],
      featuresEn: ["Behavioral analysis", "Proactive prevention", "Smart sensors", "Self-learning"],
      stats: { value: "95%", labelFr: "Précision de détection", labelEn: "Detection accuracy" }
    },
  ]

  const services = servicesTranslations[language]

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 dark:text-red-400">{services.subtitle}</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-red-600 dark:from-white dark:via-white dark:to-red-400 bg-clip-text text-transparent">
              {services.title}
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {services.description}
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "10+", label: services.years },
              { value: "500+", label: services.projects },
              { value: "250+", label: services.clients },
              { value: "2", label: services.response },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {servicesData.map((service, i) => {
            const IconComponent = service.icon
            const title = language === "fr" ? service.titleFr : service.titleEn
            const desc = language === "fr" ? service.descFr : service.descEn
            const features = language === "fr" ? service.featuresFr : service.featuresEn
            const statsLabel = language === "fr" ? service.stats.labelFr : service.stats.labelEn

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={cardHover}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-red-500/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <motion.div 
                    className="md:w-2/5 relative h-48 md:h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-red-900 relative flex items-center justify-center">
                      {/* Service-specific icon animation */}
                      <motion.div
                        className="absolute"
                        animate={floatingAnimation}
                      >
                        <IconComponent className="w-12 h-12 text-white/20" />
                      </motion.div>
                      
                      {/* Stats badge */}
                      <motion.div 
                        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 + 0.5 }}
                      >
                        <div className="text-white font-bold text-sm">{service.stats.value}</div>
                        <div className="text-white/60 text-xs">{statsLabel}</div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6">
                    <motion.div 
                      className="mb-4 inline-flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-600/10 group-hover:bg-red-200 dark:group-hover:bg-red-600/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-red-600 dark:text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {title}
                      </h3>
                    </motion.div>

                    <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                      {desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {features.map((feature, j) => (
                        <motion.div
                          key={j}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + j * 0.1 + 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-semibold group/btn"
                    >
                      {language === "fr" ? "En savoir plus" : "Learn more"}
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <motion.h3 
            className="text-2xl md:text-4xl font-bold mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {services.featuredTitle}
          </motion.h3>
          
          <motion.p 
            className="text-red-100 text-lg mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {services.featuredDesc}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300"
            >
              {services.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold border border-white/30 flex items-center gap-2 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              {services.demo}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}