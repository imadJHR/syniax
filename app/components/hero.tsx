"use client"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Play, Star, CheckCircle, Zap, Lock, Eye } from "lucide-react"
import { useLanguage } from "@/app/components/language-context"
import { translations } from "@/lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].navbar || translations[language]

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

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  const pulseGlow = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 20px rgba(239, 68, 68, 0.1)",
      "0 0 40px rgba(239, 68, 68, 0.2)",
      "0 0 20px rgba(239, 68, 68, 0.1)"
    ],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  // Background particles component
  const FloatingParticles = () => (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500/10"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  )

  // Hero translations
  const heroTranslations = {
    fr: {
      title: "Sécurité Électronique Avancée",
      subtitle: "Solutions innovantes pour protéger votre entreprise",
      description:
        "Syniax offre des solutions de sécurité électronique de pointe, combinant intelligence artificielle et surveillance en temps réel pour une protection complète de vos actifs numériques et physiques.",
      cta: "Découvrir nos services",
      demo: "Regarder la démo",
      badge: "Protection 24/7",
      clients: "Clients",
      incidents: "Incidents Stoppés",
      uptime: "Disponibilité",
      features: "Caractéristiques principales",
      trusted: "Entreprises qui nous font confiance",
      rating: "Évaluation par nos clients",
      years: "Années d'expérience",
      feature1: "Surveillance IA 24/7",
      feature2: "Détection de menaces en temps réel",
      feature3: "Rapports détaillés",
      feature4: "Support technique dédié",
      feature5: "Mises à jour automatiques",
      feature6: "Conformité aux normes",
      testimonial: "Solutions de sécurité qui redéfinissent l'industrie",
      learnMore: "En savoir plus",
      getStarted: "Commencer",
      securityScore: "Score de sécurité garanti",
      responseTime: "Temps de réponse",
    },
    en: {
      title: "Advanced Electronic Security",
      subtitle: "Innovative solutions to protect your business",
      description:
        "Syniax provides cutting-edge electronic security solutions, combining artificial intelligence and real-time monitoring for comprehensive protection of your digital and physical assets.",
      cta: "Discover our services",
      demo: "Watch demo",
      badge: "Protection 24/7",
      clients: "Clients",
      incidents: "Incidents Stopped",
      uptime: "Uptime",
      features: "Key Features",
      trusted: "Trusted by companies",
      rating: "Customer rating",
      years: "Years of experience",
      feature1: "24/7 AI Monitoring",
      feature2: "Real-time Threat Detection",
      feature3: "Detailed Reporting",
      feature4: "Dedicated Technical Support",
      feature5: "Automatic Updates",
      feature6: "Compliance Standards",
      testimonial: "Security solutions that redefine the industry",
      learnMore: "Learn more",
      getStarted: "Get started",
      securityScore: "Guaranteed security score",
      responseTime: "Response time",
    },
  }

  const hero = heroTranslations[language]

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <FloatingParticles />
        <motion.div
          className="absolute top-40 right-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 left-40 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge and Rating */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={pulseGlow}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Shield className="w-4 h-4 text-red-500" />
                </motion.div>
                <span className="text-sm text-red-600 dark:text-red-400">{hero.badge}</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1 text-yellow-500"
                variants={itemVariants}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </motion.div>
                ))}
                <motion.span 
                  className="text-sm text-foreground/60 ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {hero.rating} 4.9/5
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={slideInFromLeft}>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                variants={staggerChildren}
              >
                {hero.title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2 bg-gradient-to-r from-foreground via-foreground to-red-600 dark:from-white dark:via-white dark:to-red-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground/60"
            >
              {hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/50 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-2 gap-3 py-4"
            >
              {[
                { icon: Eye, text: hero.feature1 },
                { icon: Zap, text: hero.feature2 },
                { icon: CheckCircle, text: hero.feature3 },
                { icon: Shield, text: hero.feature4 },
                { icon: ArrowRight, text: hero.feature5 },
                { icon: Lock, text: hero.feature6 },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  variants={featureItem}
                  className="flex items-center gap-2 text-sm text-foreground/70 p-2 rounded-lg hover:bg-card/50 transition-colors"
                  whileHover={{ 
                    x: 5, 
                    scale: 1.02,
                    backgroundColor: "rgba(239, 68, 68, 0.05)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                  </motion.div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
                {hero.getStarted}
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "hsl(var(--card))"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-card hover:bg-card/80 text-foreground rounded-lg font-semibold border border-border transition-all duration-300 flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                {hero.demo}
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 text-foreground/70 hover:text-foreground transition-colors duration-300 flex items-center gap-1"
              >
                {hero.learnMore}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border"
            >
              {[
                { label: hero.clients, value: "500+", subtext: hero.trusted },
                { label: hero.incidents, value: "50K+", subtext: hero.securityScore },
                { label: hero.uptime, value: "99.9%", subtext: hero.responseTime },
                { label: hero.years, value: "10+", subtext: hero.features },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    backgroundColor: "rgba(239, 68, 68, 0.05)"
                  }} 
                  className="text-center p-4 rounded-lg hover:bg-card/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-red-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-red-500 mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-semibold text-foreground/80 mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground/50">{stat.subtext}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Hero Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 relative">
                {/* Security Dashboard Mockup */}
                <div className="absolute inset-4 bg-gray-800 rounded-lg p-4">
                  <div className="flex gap-2 mb-4">
                    <motion.div 
                      className="w-3 h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <motion.div 
                    className="grid grid-cols-2 gap-3 mb-4"
                    variants={staggerChildren}
                  >
                    <motion.div 
                      className="bg-red-500/20 rounded p-2 border border-red-500/30"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(239, 68, 68, 0)",
                          "0 0 10px rgba(239, 68, 68, 0.5)",
                          "0 0 0px rgba(239, 68, 68, 0)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="text-white text-xs font-bold">ALERT</div>
                      <div className="text-white/60 text-xs">Threat Detected</div>
                    </motion.div>
                    <motion.div 
                      className="bg-green-500/20 rounded p-2 border border-green-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-white text-xs font-bold">SECURE</div>
                      <div className="text-white/60 text-xs">Systems Online</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-700 rounded p-3 mb-3"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    <div className="flex justify-between text-xs text-white/80 mb-2">
                      <span>Network Security</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div 
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-700 rounded p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="text-xs text-white/80 mb-2">Active Monitoring</div>
                    <div className="flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="flex-1 bg-green-500/30 rounded h-6"
                          animate={{ 
                            height: [6, 24, 6],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 1.5 + i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center"
                  animate={floatingAnimation}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Shield className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 left-8 w-12 h-12 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-2xl border border-border max-w-xs"
              whileHover={{ 
                scale: 1.05,
                rotate: [-1, 1, -1],
              }}
              transition={{ 
                rotate: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
                scale: { type: "spring", stiffness: 300 }
              }}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.3 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p 
                className="text-sm text-foreground/80 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                "{hero.testimonial}"
              </motion.p>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.7 }}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <span className="text-xs text-foreground/60">Security Director</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}