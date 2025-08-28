"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Star,
  Rocket,
  ArrowRight,
  Play,
  CheckCircle,
  X,
  Palette,
  Monitor,
  Smartphone,
  PenTool,
  Users,
  Award,
  Zap,
  Shield,
  TrendingUp,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function SagelancerLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [showMobileForm, setShowMobileForm] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [currentDemo, setCurrentDemo] = useState(0)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const services = [
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centered designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "High-performance websites built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual identity and branding that makes you stand out",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "FlutterFlow Apps",
      description: "No-code mobile apps that scale with your business",
      features: ["Rapid Development", "Native Performance", "Cross-Platform", "Backend Integration"],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const portfolioProjects = [
    {
      title: "FinTech Trading Platform",
      category: "FlutterFlow Development",
      description:
        "A comprehensive trading app with real-time market data, portfolio management, and secure transactions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FlutterFlow", "Firebase", "Real-time Data", "Security"],
      client: "TradePro Inc.",
      results: ["50K+ active users", "99.9% uptime", "4.8★ rating"],
      link: "#",
    },
    {
      title: "E-commerce Web Platform",
      category: "Website Development",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe", "Admin Panel", "Analytics"],
      client: "ShopSmart LLC",
      results: ["300% increase in sales", "2s load time", "Mobile-first design"],
      link: "#",
    },
    {
      title: "Healthcare Brand Identity",
      category: "UI/UX Design",
      description:
        "Complete brand redesign for a healthcare startup, including logo, website, and marketing materials.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Brand Design", "UI/UX", "Healthcare", "Accessibility"],
      client: "MedCare Solutions",
      results: ["40% brand recognition", "Professional trust", "HIPAA compliant"],
      link: "#",
    },
    {
      title: "SaaS Dashboard Design",
      category: "Graphic Design",
      description: "Intuitive dashboard design for a project management SaaS with complex data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Dashboard", "Data Viz", "SaaS", "User Experience"],
      client: "ProjectFlow",
      results: ["60% user engagement", "Reduced support tickets", "Improved workflow"],
      link: "#",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TradePro Inc.",
      company: "FinTech Startup",
      content:
        "Sagelancer transformed our vision into a world-class trading platform. Their expertise in FlutterFlow and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      results: "50K+ users, $2M funding raised",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, ShopSmart",
      company: "E-commerce Platform",
      content:
        "The website Sagelancer built for us increased our sales by 300%. Their design and development skills are top-notch.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      results: "300% sales increase, 2s load time",
    },
    {
      name: "Dr. Emily Watson",
      role: "Founder, MedCare Solutions",
      company: "Healthcare Startup",
      content:
        "Sagelancer's brand design work helped us establish trust and credibility in the healthcare industry. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      results: "40% brand recognition increase",
    },
  ]

  const faqs = [
    {
      question: "What makes Sagelancer different?",
      answer:
        "We offer end-to-end digital solutions under one roof. From UI/UX design to FlutterFlow development, we handle everything so you don't have to coordinate multiple agencies. Our team combines creativity with technical expertise to deliver exceptional results.",
      icon: Award,
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We follow a rigorous quality assurance process including code reviews, design audits, user testing, and performance optimization. Every project goes through multiple checkpoints before delivery to ensure it meets our high standards.",
      icon: Shield,
    },
    {
      question: "Can you handle complex projects?",
      answer:
        "We've worked on everything from simple websites to complex trading platforms. Our team has the expertise to handle projects of any scale, from MVP development to enterprise-level solutions.",
      icon: TrendingUp,
    },
  ]

  const trustLogos = [
    { name: "TechCrunch", width: 120 },
    { name: "Forbes", width: 100 },
    { name: "Product Hunt", width: 130 },
    { name: "Y Combinator", width: 140 },
    { name: "AngelList", width: 110 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % (testimonials.length + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(44, 163, 91, 0.1) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Software Icons - Design Phase */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-20 z-20"
        >
          <div className="relative">
            <Image src="/figma-logo.png" alt="Figma" width={60} height={60} className="drop-shadow-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-48 left-32 z-20"
        >
          <div className="relative">
            <Image src="/photoshop-logo.png" alt="Photoshop" width={50} height={50} className="drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </motion.div>

        {/* Floating Software Icons - Develop Phase */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-32 z-20"
        >
          <div className="relative">
            <Image src="/webflow-logo.png" alt="Webflow" width={55} height={55} className="drop-shadow-lg" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-56 right-20 z-20"
        >
          <div className="relative">
            <Image src="/flutterflow-logo.png" alt="FlutterFlow" width={48} height={48} className="drop-shadow-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Deploy Phase Icons */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-40 left-24 z-20"
        >
          <div className="relative">
            <Image src="/firebase-logo.png" alt="Firebase" width={52} height={52} className="drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
          </div>
        </motion.div>

        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full z-10" style={{ pointerEvents: "none" }}>
          <motion.path
            d="M 200 300 Q 400 200 600 350"
            stroke="rgba(44, 163, 91, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.path
            d="M 600 350 Q 800 400 1000 300"
            stroke="rgba(44, 163, 91, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        <div className="hero-container relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-[#2CA35B]/10 border border-[#2CA35B]/20 rounded-full px-6 py-3 mb-8"
              >
                <div className="w-2 h-2 bg-[#2CA35B] rounded-full animate-pulse"></div>
                <span className="text-[#2CA35B] font-semibold text-sm">Trusted by 50+ startups worldwide</span>
              </motion.div>

              {/* Revolutionary Typography Layout */}
              <div className="relative">
                {/* Design */}
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-none font-space-grotesk"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="block mb-4">Design.</span>
                </motion.h1>

                {/* Develop - Integrated creatively */}
                <motion.div
                  className="relative my-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Morphing Background Shape */}
                  <motion.div
                    animate={{
                      borderRadius: [
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                        "70% 30% 30% 70% / 70% 70% 30% 30%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                      ],
                      background: [
                        "linear-gradient(45deg, #2CA35B, #1E6F5C)",
                        "linear-gradient(45deg, #1E6F5C, #2CA35B)",
                        "linear-gradient(45deg, #2CA35B, #1E6F5C)",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-0 opacity-10 blur-3xl"
                    style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
                  />

                  <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none font-space-grotesk relative z-10"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #2CA35B, #1E6F5C)",
                        "linear-gradient(45deg, #1E6F5C, #2CA35B)",
                        "linear-gradient(45deg, #2CA35B, #1E6F5C)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Develop.
                  </motion.h1>

                  {/* Floating Code Elements */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-8 -left-16 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-mono text-gray-700 shadow-lg"
                  >
                    {"<FlutterFlow />"}
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-6 -right-20 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-mono text-gray-700 shadow-lg"
                  >
                    {"{ noCode: true }"}
                  </motion.div>
                </motion.div>

                {/* Deploy */}
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-none font-space-grotesk"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span className="block mt-4">Deploy.</span>
                </motion.h1>
              </div>

              {/* Enhanced Subheadline */}
              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                We transform your wildest ideas into{" "}
                <motion.span className="font-semibold text-gray-900 relative" whileHover={{ scale: 1.05 }}>
                  pixel-perfect designs
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                </motion.span>
                ,{" "}
                <motion.span className="font-semibold text-gray-900 relative" whileHover={{ scale: 1.05 }}>
                  lightning-fast websites
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                  />
                </motion.span>
                , and{" "}
                <motion.span className="font-semibold text-gray-900 relative" whileHover={{ scale: 1.05 }}>
                  powerful mobile apps
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 2.5 }}
                  />
                </motion.span>{" "}
                — all without writing a single line of traditional code.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] rounded-2xl blur-lg opacity-30"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <Button
                    size="lg"
                    className="relative bg-[#2CA35B] hover:bg-[#1E6F5C] text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all overflow-hidden group"
                    onClick={() => setShowMobileForm(true)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#1E6F5C] to-[#2CA35B] opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                    <span className="relative z-10 flex items-center">
                      Start Your Project
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-6 text-xl rounded-2xl border-2 border-gray-300 hover:border-[#2CA35B] hover:text-[#2CA35B] hover:bg-[#2CA35B]/5 transition-all backdrop-blur-sm"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Play className="mr-3 w-6 h-6" />
                    </motion.div>
                    View Our Work
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Interactive Workflow Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
            >
              {[
                {
                  phase: "Design",
                  tools: ["Figma", "Photoshop"],
                  color: "from-purple-500 to-pink-500",
                  icon: PenTool,
                  description: "User research, wireframing, prototyping",
                },
                {
                  phase: "Develop",
                  tools: ["FlutterFlow", "Webflow"],
                  color: "from-blue-500 to-cyan-500",
                  icon: Monitor,
                  description: "No-code development, rapid iteration",
                },
                {
                  phase: "Deploy",
                  tools: ["Firebase", "Vercel"],
                  color: "from-green-500 to-emerald-500",
                  icon: Rocket,
                  description: "Cloud hosting, performance optimization",
                },
              ].map((workflow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${workflow.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative z-10 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${workflow.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <workflow.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors">
                      {workflow.phase}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>

                    <div className="flex justify-center space-x-2">
                      {workflow.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "50+", label: "Projects Delivered", icon: CheckCircle, color: "text-green-500" },
                { number: "100%", label: "Client Satisfaction", icon: Star, color: "text-yellow-500" },
                { number: "3x", label: "Faster Development", icon: Zap, color: "text-blue-500" },
                { number: "24/7", label: "Support Available", icon: Users, color: "text-purple-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:shadow-lg transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center relative overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-3 bg-gradient-to-b from-[#2CA35B] to-[#1E6F5C] rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 bg-gray-50/50">
        <div className="section-container">
          <p className="text-center text-gray-500 mb-8 font-medium">Featured in</p>
          <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-60">
            {trustLogos.map((logo, index) => (
              <div key={index} className="h-8 bg-gray-300 rounded" style={{ width: logo.width }}>
                <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Our Services</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete digital solutions to bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="service-card bg-white rounded-3xl p-8 border border-gray-100 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2CA35B] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 lg:py-32 bg-gray-50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Portfolio Showcase</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="portfolio-card bg-white rounded-3xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 bg-gray-100">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#2CA35B] text-white">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Client: {project.client}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#2CA35B] flex-shrink-0" />
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#2CA35B] text-[#2CA35B] hover:bg-[#2CA35B] hover:text-white transition-all rounded-full font-semibold"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sagelancer Section */}
      <section className="py-20 lg:py-32">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Why Sagelancer?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tired of agencies that overpromise and underdeliver? We've got you covered.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* FAQ Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2CA35B]/10 rounded-xl flex items-center justify-center">
                        <faq.icon className="w-6 h-6 text-[#2CA35B]" />
                      </div>
                      <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                    </div>
                    <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-22 text-gray-600 leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Technology Stack</h3>
                <p className="text-gray-600">Cutting-edge tools for exceptional results</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <Image src="/flutterflow-logo.png" alt="FlutterFlow" width={40} height={40} />
                  <div>
                    <h4 className="font-semibold">FlutterFlow</h4>
                    <p className="text-sm text-gray-600">No-code app development</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                  <Image src="/firebase-logo.png" alt="Firebase" width={40} height={40} />
                  <div>
                    <h4 className="font-semibold">Firebase</h4>
                    <p className="text-sm text-gray-600">Backend & hosting</p>
                  </div>
                </div>

                <div className="bg-[#2CA35B]/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#2CA35B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">End-to-End Solutions</h4>
                  <p className="text-gray-600">From design to deployment, we handle everything</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">What Clients Say</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Join 50+ founders who have trusted Sagelancer to bring their digital visions to life
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTestimonial < testimonials.length ? (
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex mb-6">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-6">
                        "{testimonials[activeTestimonial].content}"
                      </blockquote>

                      <div className="flex items-center space-x-4">
                        <Image
                          src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                          alt={testimonials[activeTestimonial].name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
                          <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                          <p className="text-sm text-[#2CA35B] font-semibold">
                            {testimonials[activeTestimonial].company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#2CA35B]/10 to-[#1E6F5C]/10 rounded-2xl p-6 text-center">
                      <Award className="w-12 h-12 text-[#2CA35B] mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">Results</h4>
                      <p className="text-gray-600 font-semibold">{testimonials[activeTestimonial].results}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="ready-to-transform"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] rounded-3xl shadow-2xl p-12 lg:p-16 text-center text-white"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Rocket className="w-16 h-16 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Vision?</h3>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let's discuss your project and create something amazing together.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#2CA35B] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setShowMobileForm(true)}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...testimonials, { name: "Ready to Transform" }].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    activeTestimonial === index ? "bg-[#2CA35B] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-space-grotesk">
              Get a Free Consultation – Let's Build Your Digital Future
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Need a comprehensive digital solution? We've got you covered.
            </p>

            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-8">Start Your Project Today</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  placeholder="Your Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-xl"
                />
              </div>

              <Textarea
                placeholder="Tell us about your project... (What service do you need? What's your timeline?)"
                className="mb-6 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                rows={4}
              />

              <Select>
                <SelectTrigger className="mb-6 bg-white/20 border-white/30 text-white h-12 rounded-xl">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                  <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                  <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                  <SelectItem value="50k+">$50K+</SelectItem>
                </SelectContent>
              </Select>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full bg-white text-[#2CA35B] hover:bg-gray-100 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Free Consultation →
                </Button>
              </motion.div>

              <p className="text-sm opacity-75 mt-4">
                ⚡ Response within 24 hours • 💬 Free consultation call • 📋 Custom project proposal
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-40 shadow-lg">
        <Button
          className="w-full bg-[#2CA35B] hover:bg-[#1E6F5C] text-white py-4 text-lg font-bold rounded-full shadow-lg"
          onClick={() => setShowMobileForm(true)}
        >
          Get Free Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Mobile Form Modal */}
      <AnimatePresence>
        {showMobileForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMobileForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Get Free Consultation</h3>
                  <p className="text-gray-600">Response within 24 hours</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowMobileForm(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="space-y-4">
                <Input placeholder="Your Name" className="h-12 rounded-xl" />
                <Input placeholder="Email Address" type="email" className="h-12 rounded-xl" />
                <Textarea placeholder="Tell us about your project..." rows={3} className="rounded-xl" />
                <Select>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Service Needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="app">FlutterFlow App</SelectItem>
                    <SelectItem value="graphic">Graphic Design</SelectItem>
                    <SelectItem value="all">Complete Solution</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="w-full bg-[#2CA35B] hover:bg-[#1E6F5C] text-white py-3 rounded-xl font-semibold">
                  Submit Request
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Free consultation • Custom proposal • No commitment required
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  )
}
