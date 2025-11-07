"use client"

import Header from "@/app/components/header"
import Hero from "@/app/components/hero"
import Services from "@/app/components/services"
import Features from "@/app/components/features"
import Footer from "@/app/components/footer"
import AnimatedBackground from "@/app/components/animated-background"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Services />
      <Features />
      <Footer />
    </main>
  )
}
