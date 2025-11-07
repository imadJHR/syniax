"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Shield, Zap, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Award, Users, CheckCircle } from "lucide-react"
import { useLanguage } from "./language-context"
import Image from "next/image"

export default function Footer() {
  const { language } = useLanguage()

  const translations = {
    fr: {
      company: "SYNIAX",
      tagline: "Votre partenaire de confiance en sécurité électronique",
      description: "Solutions de sécurité innovantes combinant intelligence artificielle et expertise humaine pour protéger votre entreprise 24h/24 et 7j/7.",
      quickLinks: "Liens Rapides",
      services: "Nos Services",
      contact: "Contact",
      legal: "Légal",
      newsletter: "Newsletter",
      newsletterDesc: "Restez informé des dernières innovations en sécurité",
      newsletterPlaceholder: "Votre email",
      subscribe: "S'abonner",
      certified: "Certifié et Approuvé",
      links: {
        about: "À Propos",
        services: "Services",
        pricing: "Tarification",
        blog: "Blog",
        careers: "Carrières",
        support: "Support",
        demo: "Démo Gratuite",
      },
      services_links: {
        monitoring: "Surveillance 24/7",
        video: "Vidéosurveillance IA",
        access: "Contrôle d'Accès",
        network: "Sécurité Réseau",
        mobile: "Alertes Mobiles",
        audit: "Audit de Sécurité",
      },
      contactInfo: {
        email: "contact@syniax.com",
        phone: "+33 (0) 1 23 45 67 89",
        address: "123 Avenue de la Sécurité, 75015 Paris, France",
        hours: "Lun - Ven: 8h - 18h",
        emergency: "Urgence 24/7: +33 (0) 1 23 45 67 90",
      },
      legal_links: {
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        cookies: "Politique des Cookies",
        gdpr: "Conformité RGPD",
        compliance: "Certifications",
      },
      social: {
        follow: "Suivez-nous",
        join: "Rejoignez la communauté",
      },
      trust: {
        title: "Ils nous font confiance",
        clients: "500+ Entreprises",
        uptime: "99.9% Disponibilité",
        response: "Support 24/7",
      },
      rights: "© 2025 Syniax. Tous droits réservés.",
      madeWith: "Fabriqué avec ❤️ en France",
    },
    en: {
      company: "SYNIAX",
      tagline: "Your trusted partner in electronic security",
      description: "Innovative security solutions combining artificial intelligence and human expertise to protect your business 24/7.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact",
      legal: "Legal",
      newsletter: "Newsletter",
      newsletterDesc: "Stay updated with the latest security innovations",
      newsletterPlaceholder: "Your email",
      subscribe: "Subscribe",
      certified: "Certified & Approved",
      links: {
        about: "About",
        services: "Services",
        pricing: "Pricing",
        blog: "Blog",
        careers: "Careers",
        support: "Support",
        demo: "Free Demo",
      },
      services_links: {
        monitoring: "24/7 Monitoring",
        video: "AI Video Surveillance",
        access: "Access Control",
        network: "Network Security",
        mobile: "Mobile Alerts",
        audit: "Security Audit",
      },
      contactInfo: {
        email: "contact@syniax.com",
        phone: "+33 (0) 1 23 45 67 89",
        address: "123 Security Avenue, 75015 Paris, France",
        hours: "Mon - Fri: 8AM - 6PM",
        emergency: "24/7 Emergency: +33 (0) 1 23 45 67 90",
      },
      legal_links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        cookies: "Cookie Policy",
        gdpr: "GDPR Compliance",
        compliance: "Certifications",
      },
      social: {
        follow: "Follow us",
        join: "Join the community",
      },
      trust: {
        title: "Trusted by",
        clients: "500+ Companies",
        uptime: "99.9% Uptime",
        response: "24/7 Support",
      },
      rights: "© 2025 Syniax. All rights reserved.",
      madeWith: "Made with ❤️ in France",
    },
  }

  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
      },
    },
  }

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const certifications = [
    { name: "ISO 27001", color: "from-blue-500 to-blue-600" },
    { name: "GDPR", color: "from-green-500 to-green-600" },
    { name: "ANSSI", color: "from-red-500 to-red-600" },
    { name: "CyberEssentials", color: "from-purple-500 to-purple-600" },
  ]

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12"
        >
          {/* Company Info - 2 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo and Company Info */}
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{t.company}</h3>
                <p className="text-foreground/60 text-sm">{t.tagline}</p>
              </div>
            </motion.div>

            <p className="text-foreground/70 text-sm leading-relaxed">
              {t.description}
            </p>

            {/* Trust Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { value: "500+", label: t.trust.clients, icon: Users },
                { value: "99.9%", label: t.trust.uptime, icon: Zap },
                { value: "24/7", label: t.trust.response, icon: Clock },
              ].map((stat, i) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="text-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-border"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <IconComponent className="w-4 h-4 text-red-500 mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-foreground/60">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="font-semibold text-foreground mb-3 text-sm">{t.social.follow}</h4>
              <div className="flex gap-3">
                {socialIcons.map((social, i) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-border flex items-center justify-center text-foreground/60 hover:text-red-500 hover:border-red-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4 text-lg">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, link], i) => (
                <motion.li key={key} whileHover={{ x: 5 }}>
                  <a 
                    href={`#${key}`} 
                    className="flex items-center gap-2 text-foreground/70 hover:text-red-500 transition-colors text-sm group"
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4 text-lg">{t.services}</h4>
            <ul className="space-y-3">
              {Object.entries(t.services_links).map(([key, service], i) => (
                <motion.li key={key} whileHover={{ x: 5 }}>
                  <a 
                    href={`#${key}`} 
                    className="flex items-center gap-2 text-foreground/70 hover:text-red-500 transition-colors text-sm group"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-foreground mb-4 text-lg">{t.contact}</h4>
            
            <motion.a 
              href={`mailto:${t.contactInfo.email}`}
              className="flex items-center gap-3 text-foreground/70 hover:text-red-500 transition-colors group"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-4 h-4 text-red-500" />
              </motion.div>
              <div>
                <div className="text-sm font-medium">{t.contactInfo.email}</div>
                <div className="text-xs text-foreground/50">{language === "fr" ? "Email" : "Email"}</div>
              </div>
            </motion.a>

            <motion.a 
              href={`tel:${t.contactInfo.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-3 text-foreground/70 hover:text-red-500 transition-colors group"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Phone className="w-4 h-4 text-blue-500" />
              </motion.div>
              <div>
                <div className="text-sm font-medium">{t.contactInfo.phone}</div>
                <div className="text-xs text-foreground/50">{t.contactInfo.hours}</div>
              </div>
            </motion.a>

            <motion.a 
              href={`tel:${t.contactInfo.emergency.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-3 text-foreground/70 hover:text-red-500 transition-colors group"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-4 h-4 text-orange-500" />
              </motion.div>
              <div>
                <div className="text-sm font-medium">{t.contactInfo.emergency}</div>
                <div className="text-xs text-foreground/50">{language === "fr" ? "Urgence" : "Emergency"}</div>
              </div>
            </motion.a>

            <motion.div 
              className="flex items-center gap-3 text-foreground/70 pt-2"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <MapPin className="w-4 h-4 text-green-500" />
              </motion.div>
              <div>
                <div className="text-sm font-medium">{t.contactInfo.address}</div>
                <div className="text-xs text-foreground/50">{language === "fr" ? "Adresse" : "Address"}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-4 text-lg">{t.newsletter}</h4>
            <p className="text-foreground/60 text-sm mb-4">{t.newsletterDesc}</p>
            
            <motion.form 
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-gray-800 text-foreground placeholder-foreground/40 text-sm focus:outline-none focus:border-red-500 transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t.subscribe}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.form>

            {/* Certifications */}
            <motion.div 
              className="mt-6 pt-6 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h5 className="font-semibold text-foreground mb-3 text-sm">{t.certified}</h5>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <motion.span
                    key={cert.name}
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-medium`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Legal Links and Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {Object.entries(t.legal_links).map(([key, link]) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className="text-foreground/60 hover:text-red-500 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-foreground/60 text-sm">
                {t.rights}
              </p>
              <p className="text-foreground/40 text-xs mt-1">
                {t.madeWith}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Security Elements */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-10"
        animate={floatingAnimation}
      >
        <Shield className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute top-4 left-4 opacity-10"
        animate={floatingAnimation}
        transition={{ delay: 2 }}
      >
        <Zap className="w-6 h-6" />
      </motion.div>
    </footer>
  )
}