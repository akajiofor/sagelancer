"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  X,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Smartphone,
  Monitor,
  Palette,
  PenTool,
} from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showMobileForm, setShowMobileForm] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const filters = ["All", "UI/UX Design", "Website Development", "Graphic Design", "FlutterFlow Apps"]

  const projects = [
    {
      id: 1,
      title: "FinTech Trading Platform",
      category: "FlutterFlow Apps",
      client: "TradePro Inc.",
      description:
        "A comprehensive trading app with real-time market data, portfolio management, and secure transactions.",
      longDescription:
        "We developed a sophisticated trading platform that handles millions of transactions daily. The app features real-time market data, advanced charting tools, portfolio management, and bank-level security. Built with FlutterFlow and Firebase, it scales seamlessly and provides native performance across iOS and Android.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FlutterFlow", "Firebase", "Real-time Data", "Security", "Trading"],
      results: ["50K+ active users", "99.9% uptime", "4.8★ rating", "$2M funding raised"],
      duration: "3 months",
      year: "2024",
      testimonial: {
        text: "Sagelancer transformed our vision into a world-class trading platform. Their expertise exceeded our expectations.",
        author: "Sarah Chen, CEO at TradePro Inc.",
      },
      challenges: [
        "Real-time data synchronization across thousands of users",
        "Implementing bank-level security protocols",
        "Creating intuitive UX for complex financial data",
      ],
      solutions: [
        "Custom Firebase architecture with optimized real-time listeners",
        "Multi-layer encryption and biometric authentication",
        "Progressive disclosure and smart data visualization",
      ],
    },
    {
      id: 2,
      title: "E-commerce Web Platform",
      category: "Website Development",
      client: "ShopSmart LLC",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      longDescription:
        "A complete e-commerce solution built with Next.js and modern web technologies. Features include advanced product filtering, seamless payment processing, inventory management, and comprehensive analytics dashboard for business owners.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe", "Admin Panel", "Analytics", "E-commerce"],
      results: ["300% increase in sales", "2s load time", "Mobile-first design", "15K+ products"],
      duration: "2 months",
      year: "2024",
      testimonial: {
        text: "The website increased our sales by 300%. Their design and development skills are exceptional.",
        author: "Marcus Rodriguez, Founder at ShopSmart",
      },
      challenges: [
        "Handling large product catalogs efficiently",
        "Optimizing for mobile commerce",
        "Integrating complex payment workflows",
      ],
      solutions: [
        "Implemented advanced caching and lazy loading",
        "Mobile-first responsive design approach",
        "Custom Stripe integration with multiple payment methods",
      ],
    },
    {
      id: 3,
      title: "Healthcare Brand Identity",
      category: "UI/UX Design",
      client: "MedCare Solutions",
      description:
        "Complete brand redesign for a healthcare startup, including logo, website, and marketing materials.",
      longDescription:
        "A comprehensive brand identity project that established trust and credibility in the healthcare industry. We created a cohesive visual system that communicates professionalism while remaining approachable and human-centered.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Brand Design", "UI/UX", "Healthcare", "Accessibility", "Identity"],
      results: ["40% brand recognition increase", "Professional trust", "HIPAA compliant", "Award-winning design"],
      duration: "6 weeks",
      year: "2023",
      testimonial: {
        text: "Sagelancer helped us establish trust and credibility in healthcare. Highly recommended!",
        author: "Dr. Emily Watson, Founder at MedCare Solutions",
      },
      challenges: [
        "Building trust in a sensitive industry",
        "Ensuring accessibility compliance",
        "Balancing professionalism with approachability",
      ],
      solutions: [
        "Research-driven design with healthcare focus",
        "WCAG 2.1 AA compliance throughout",
        "Human-centered design principles",
      ],
    },
    {
      id: 4,
      title: "SaaS Dashboard Design",
      category: "Graphic Design",
      client: "ProjectFlow",
      description: "Intuitive dashboard design for a project management SaaS with complex data visualization.",
      longDescription:
        "Designed a comprehensive dashboard interface that simplifies complex project data into actionable insights. The design system includes data visualization, workflow management, and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Dashboard", "Data Viz", "SaaS", "User Experience", "Analytics"],
      results: ["60% user engagement increase", "Reduced support tickets", "Improved workflow", "5-star reviews"],
      duration: "4 weeks",
      year: "2024",
      testimonial: {
        text: "The dashboard design transformed how our users interact with complex data. Brilliant work!",
        author: "Alex Johnson, Product Manager at ProjectFlow",
      },
      challenges: [
        "Visualizing complex project data clearly",
        "Creating intuitive navigation for power users",
        "Maintaining performance with large datasets",
      ],
      solutions: [
        "Custom data visualization components",
        "Progressive disclosure and smart defaults",
        "Optimized rendering for large datasets",
      ],
    },
    {
      id: 5,
      title: "Restaurant Mobile App",
      category: "FlutterFlow Apps",
      client: "LocalEats",
      description: "Food delivery app connecting local restaurants with customers, featuring real-time tracking.",
      longDescription:
        "A complete food delivery ecosystem with customer app, restaurant dashboard, and delivery tracking. Built to compete with major players while focusing on local businesses and community connection.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["FlutterFlow", "Food Delivery", "Real-time", "Maps", "Payments"],
      results: ["50+ restaurants onboarded", "15K orders processed", "$500K GMV", "4.7★ rating"],
      duration: "4 months",
      year: "2023",
      testimonial: {
        text: "From napkin sketch to App Store in 4 weeks. Saved us 6 months and $200K in dev costs.",
        author: "Maria Garcia, CEO at LocalEats",
      },
      challenges: [
        "Real-time order tracking and updates",
        "Multi-sided marketplace complexity",
        "Competing with established players",
      ],
      solutions: [
        "Custom real-time architecture with Firebase",
        "Streamlined onboarding for all user types",
        "Focus on local community and unique features",
      ],
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      category: "Website Development",
      client: "TechCorp Industries",
      description: "Modern corporate website with advanced animations and performance optimization.",
      longDescription:
        "Complete redesign of a corporate website focusing on modern aesthetics, performance, and user experience. Implemented advanced animations and micro-interactions while maintaining enterprise-level performance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Corporate", "Performance", "Animations", "SEO", "Modern Design"],
      results: ["85% faster load times", "200% increase in leads", "SEO ranking #1", "Industry recognition"],
      duration: "6 weeks",
      year: "2024",
      testimonial: {
        text: "Our new website perfectly represents our brand and has significantly improved our lead generation.",
        author: "David Kim, Marketing Director at TechCorp",
      },
      challenges: [
        "Modernizing outdated brand perception",
        "Improving site performance significantly",
        "Implementing complex animations smoothly",
      ],
      solutions: [
        "Contemporary design with strategic brand evolution",
        "Advanced optimization and caching strategies",
        "Performance-optimized animation library",
      ],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const categoryIcons = {
    "UI/UX Design": PenTool,
    "Website Development": Monitor,
    "Graphic Design": Palette,
    "FlutterFlow Apps": Smartphone,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-[#2CA35B]/10 text-[#2CA35B] border-[#2CA35B]/20 mb-6">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Portfolio{" "}
              <span className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our latest projects and see how we've helped businesses transform their digital presence with
              innovative solutions.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === filter
                      ? "bg-[#2CA35B] text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#2CA35B] hover:text-[#2CA35B]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="section-container">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons]
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-64 bg-gray-100 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#2CA35B] text-white flex items-center space-x-2">
                          {IconComponent && <IconComponent className="w-4 h-4" />}
                          <span>{project.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold group-hover:text-[#2CA35B] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#2CA35B] flex-shrink-0" />
                            <span className="text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-[#2CA35B] text-white">{selectedProject.category}</Badge>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-4 font-space-grotesk">{selectedProject.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Challenges</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Solutions</h3>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-[#2CA35B] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{selectedProject.testimonial.text}"
                      </blockquote>
                      <cite className="text-[#2CA35B] font-semibold">— {selectedProject.testimonial.author}</cite>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                      <h3 className="font-bold mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Client: {selectedProject.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Duration: {selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Year: {selectedProject.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-4">Results</h3>
                      <div className="space-y-2">
                        {selectedProject.results.map((result: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-[#2CA35B] flex-shrink-0" />
                            <span className="text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#2CA35B] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => setShowMobileForm(true)}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

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
