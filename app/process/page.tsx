"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  Figma,
  Code,
  Rocket,
  Target,
  Zap,
  Shield,
  Award,
  Settings,
  Eye,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  ChevronDown,
  Play,
  Lightbulb,
  X,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const icons = {
  MessageCircle,
  Figma,
  Code,
  Rocket,
  Target,
  Zap,
  Shield,
  Award,
  Settings,
  Eye,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  ChevronDown,
  Play,
  Lightbulb,
}

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const [showProcessDemo, setShowProcessDemo] = useState(false)
  const [currentDemoStep, setCurrentDemoStep] = useState(0)
  const [demoProgress, setDemoProgress] = useState(0)

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      duration: "1-2 days",
      icon: "MessageCircle",
      color: "from-blue-500 to-cyan-500",
      description: "We start by diving deep into your business goals, target audience, and project requirements.",
      details: [
        "Comprehensive project briefing and goal alignment",
        "Target audience research and persona development",
        "Competitive analysis and market positioning",
        "Technical requirements and feasibility assessment",
        "Project timeline and milestone planning",
      ],
      deliverables: [
        "Project roadmap and timeline",
        "Technical specification document",
        "User personas and journey maps",
        "Competitive analysis report",
      ],
      tools: ["Notion", "Figma", "Miro", "Google Analytics"],
    },
    {
      id: 2,
      title: "Design & Prototyping",
      subtitle: "Bringing Ideas to Life",
      duration: "3-7 days",
      icon: "Figma",
      color: "from-purple-500 to-pink-500",
      description: "We create stunning designs and interactive prototypes that align with your brand and user needs.",
      details: [
        "Wireframing and information architecture",
        "Visual design and brand integration",
        "Interactive prototype development",
        "User experience optimization",
        "Design system creation",
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive clickable prototype",
        "Design system and style guide",
        "Asset library and specifications",
      ],
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
    },
    {
      id: 3,
      title: "Development & Integration",
      subtitle: "Building Your Solution",
      duration: "1-4 weeks",
      icon: "Code",
      color: "from-green-500 to-emerald-500",
      description:
        "Our expert developers bring your designs to life using cutting-edge no-code and traditional technologies.",
      details: [
        "FlutterFlow app development or web development",
        "Backend integration and database setup",
        "Third-party API integrations",
        "Performance optimization",
        "Quality assurance and testing",
      ],
      deliverables: ["Fully functional application", "Backend infrastructure", "API documentation", "Testing reports"],
      tools: ["FlutterFlow", "Firebase", "Next.js", "Webflow"],
    },
    {
      id: 4,
      title: "Testing & Optimization",
      subtitle: "Ensuring Excellence",
      duration: "2-5 days",
      icon: "Settings",
      color: "from-orange-500 to-red-500",
      description: "Rigorous testing and optimization to ensure your solution performs flawlessly across all devices.",
      details: [
        "Cross-device and browser testing",
        "Performance optimization",
        "Security audit and implementation",
        "User acceptance testing",
        "Bug fixes and refinements",
      ],
      deliverables: [
        "Testing documentation",
        "Performance reports",
        "Security audit results",
        "Optimized final product",
      ],
      tools: ["TestFlight", "BrowserStack", "Lighthouse", "Firebase Analytics"],
    },
    {
      id: 5,
      title: "Launch & Deployment",
      subtitle: "Going Live",
      duration: "1-3 days",
      icon: "Rocket",
      color: "from-indigo-500 to-purple-500",
      description: "We handle the complete deployment process and ensure a smooth launch of your digital solution.",
      details: [
        "App Store / Play Store submission",
        "Domain setup and hosting configuration",
        "SSL certificate installation",
        "Analytics and monitoring setup",
        "Launch strategy execution",
      ],
      deliverables: [
        "Live application",
        "Deployment documentation",
        "Analytics dashboard",
        "Launch checklist completion",
      ],
      tools: ["App Store Connect", "Google Play Console", "Vercel", "Firebase Hosting"],
    },
    {
      id: 6,
      title: "Support & Maintenance",
      subtitle: "Ongoing Partnership",
      duration: "Ongoing",
      icon: "Shield",
      color: "from-teal-500 to-green-500",
      description: "Continuous support, updates, and optimization to ensure your solution stays current and effective.",
      details: [
        "24/7 monitoring and support",
        "Regular updates and maintenance",
        "Performance monitoring and optimization",
        "Feature enhancements and additions",
        "Training and documentation updates",
      ],
      deliverables: [
        "Monthly performance reports",
        "Update documentation",
        "Support ticket resolution",
        "Feature enhancement roadmap",
      ],
      tools: ["Firebase Analytics", "Sentry", "Intercom", "Notion"],
    },
  ]

  const benefits = [
    {
      icon: "Zap",
      title: "Lightning Fast Delivery",
      description: "Our streamlined process delivers results 3x faster than traditional development.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "Eye",
      title: "Complete Transparency",
      description: "Real-time updates and clear communication throughout every step of the process.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Target",
      title: "Goal-Oriented Approach",
      description: "Every decision is made with your business objectives and user needs in mind.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Award",
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure exceptional results every time.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const faqs = [
    {
      question: "How long does the entire process take?",
      answer:
        "Project timelines vary based on complexity, but most projects are completed within 2-6 weeks. Simple websites or apps can be delivered in 1-2 weeks, while complex applications may take 4-6 weeks.",
      icon: "Clock",
    },
    {
      question: "Can I make changes during the development process?",
      answer:
        "We encourage feedback and collaboration throughout the process. Minor changes can be accommodated easily, while major scope changes may affect timeline and budget.",
      icon: "Settings",
    },
    {
      question: "What happens if I'm not satisfied with the initial design?",
      answer:
        "We offer unlimited revisions during the design phase until you're completely satisfied. Our goal is to create something you absolutely love.",
      icon: "Lightbulb",
    },
    {
      question: "Do you provide training on how to use the final product?",
      answer:
        "Yes! We provide comprehensive training sessions and documentation to ensure you and your team can effectively manage and update your digital solution.",
      icon: "Users",
    },
  ]

  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons]
    return IconComponent || icons.MessageCircle
  }

  const renderNextStepIcon = (iconName: string) => {
    const IconComponent = getIconComponent(iconName)
    return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null
  }

  return (
    <div className="min-h-screen bg-white">
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
            <Badge className="bg-[#2CA35B]/10 text-[#2CA35B] border-[#2CA35B]/20 mb-6">Our Process</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              How We{" "}
              <span className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] bg-clip-text text-transparent">
                Transform Ideas
              </span>{" "}
              Into Reality
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our proven 6-step process ensures your project is delivered on time, on budget, and exceeds your
              expectations.
            </p>
            <Button
              size="lg"
              className="bg-[#2CA35B] hover:bg-[#1E6F5C] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                setShowProcessDemo(true)
                setCurrentDemoStep(0)
                setDemoProgress(0)
              }}
            >
              <Play className="mr-2 w-5 h-5" />
              See Process in Action
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Demo Modal */}
      <AnimatePresence>
        {showProcessDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowProcessDemo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Process in Action</h3>
                    <p className="opacity-90">Watch how we transform your idea into reality</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowProcessDemo(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Step {currentDemoStep + 1} of {processSteps.length}
                    </span>
                    <span>{Math.round(demoProgress)}% Complete</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${demoProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemoStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Step Info */}
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${processSteps[currentDemoStep].color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            {(() => {
                          const IconComponent = getIconComponent(processSteps[currentDemoStep].icon)
                          return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null
                        })()}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold">{processSteps[currentDemoStep].title}</h4>
                            <p className="text-[#2CA35B] font-semibold">{processSteps[currentDemoStep].subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {processSteps[currentDemoStep].description}
                        </p>

                        <div className="space-y-3">
                          {processSteps[currentDemoStep].details.slice(0, 3).map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.2 }}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-[#2CA35B] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Visual Mockup */}
                      <div className="bg-gray-50 rounded-2xl p-6 h-80 flex items-center justify-center">
                        {currentDemoStep === 0 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-20 h-20 border-4 border-[#2CA35B] border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <h5 className="font-bold text-lg mb-2">Analyzing Requirements</h5>
                            <p className="text-gray-600">Gathering project insights...</p>
                          </motion.div>
                        )}

                        {currentDemoStep === 1 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-full max-w-sm"
                          >
                            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                              <div className="flex space-x-2 mb-3">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                              <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                <div className="h-8 bg-[#2CA35B]/20 rounded animate-pulse"></div>
                              </div>
                            </div>
                            <p className="text-center text-gray-600">Creating wireframes & prototypes</p>
                          </motion.div>
                        )}

                        {currentDemoStep === 2 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                          >
                            <div className="relative">
                              <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                              >
                                <Code className="w-8 h-8 text-white" />
                              </motion.div>
                              <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <CheckCircle className="w-4 h-4 text-white" />
                              </motion.div>
                            </div>
                            <h5 className="font-bold text-lg mb-2">Building Your Solution</h5>
                            <p className="text-gray-600">Development in progress...</p>
                          </motion.div>
                        )}

                        {currentDemoStep === 3 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                          >
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              {[...Array(9)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className={`w-8 h-8 rounded ${
                                    i % 3 === 0 ? "bg-green-200" : i % 3 === 1 ? "bg-yellow-200" : "bg-red-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <h5 className="font-bold text-lg mb-2">Quality Testing</h5>
                            <p className="text-gray-600">Running comprehensive tests...</p>
                          </motion.div>
                        )}

                        {currentDemoStep === 4 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                          >
                            <motion.div
                              animate={{ y: [0, -20, 0] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                              <Rocket className="w-10 h-10 text-white" />
                            </motion.div>
                            <h5 className="font-bold text-lg mb-2">Launching Your Project</h5>
                            <p className="text-gray-600">Going live...</p>
                          </motion.div>
                        )}

                        {currentDemoStep === 5 && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                              <Shield className="w-10 h-10 text-white" />
                            </motion.div>
                            <h5 className="font-bold text-lg mb-2">Ongoing Support</h5>
                            <p className="text-gray-600">24/7 monitoring & maintenance</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Demo Controls */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (currentDemoStep > 0) {
                        setCurrentDemoStep(currentDemoStep - 1)
                        setDemoProgress(((currentDemoStep - 1) / (processSteps.length - 1)) * 100)
                      }
                    }}
                    disabled={currentDemoStep === 0}
                    className="flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Previous</span>
                  </Button>

                  <div className="flex space-x-2">
                    {processSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentDemoStep(index)
                          setDemoProgress((index / (processSteps.length - 1)) * 100)
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentDemoStep === index ? "bg-[#2CA35B] scale-125" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={() => {
                      if (currentDemoStep < processSteps.length - 1) {
                        setCurrentDemoStep(currentDemoStep + 1)
                        setDemoProgress(((currentDemoStep + 1) / (processSteps.length - 1)) * 100)
                      } else {
                        setShowProcessDemo(false)
                      }
                    }}
                    className="bg-[#2CA35B] hover:bg-[#1E6F5C] text-white flex items-center space-x-2"
                  >
                    <span>{currentDemoStep === processSteps.length - 1 ? "Finish" : "Next"}</span>
                    {currentDemoStep !== processSteps.length - 1 && <ArrowRight className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Steps */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            {/* Process Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeStep === index
                      ? "bg-[#2CA35B] text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#2CA35B] hover:text-[#2CA35B]"
                  }`}
                >
                  {(() => {
                    const IconComponent = icons[step.icon as keyof typeof icons]
                    return IconComponent ? <IconComponent className="w-5 h-5" /> : null
                  })()}
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        {(() => {
                          const IconComponent = getIconComponent(processSteps[activeStep].icon)
                          return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null
                        })()}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 font-space-grotesk">
                          {processSteps[activeStep].title}
                        </h2>
                        <p className="text-[#2CA35B] font-semibold">{processSteps[activeStep].subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{processSteps[activeStep].description}</p>

                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#2CA35B] mr-2" />
                        What We Do
                      </h3>
                      <ul className="space-y-3">
                        {processSteps[activeStep].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#2CA35B] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {processSteps[activeStep].duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4" />
                        <span>
                          Step {activeStep + 1} of {processSteps.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 lg:p-12">
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Deliverables</h3>
                      <div className="space-y-3">
                        {processSteps[activeStep].deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#2CA35B] flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[activeStep].tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm font-medium border border-gray-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                      <h4 className="font-bold mb-3">Next Step</h4>
                      {activeStep < processSteps.length - 1 ? (
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${processSteps[activeStep + 1].color} rounded-xl flex items-center justify-center`}
                          >
                            {(() => {
                              const IconComponent = getIconComponent(processSteps[activeStep + 1].icon)
                              return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null
                            })()}
                          </div>
                          <div>
                            <p className="font-semibold">{processSteps[activeStep + 1].title}</p>
                            <p className="text-sm text-gray-600">{processSteps[activeStep + 1].subtitle}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] rounded-full flex items-center justify-center mx-auto mb-3">
                            {(() => {
                              const IconComponent = getIconComponent("Award")
                              return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null
                            })()}
                          </div>
                          <p className="font-semibold text-[#2CA35B]">Project Complete!</p>
                          <p className="text-sm text-gray-600">Ongoing support and maintenance</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our methodology is designed to deliver exceptional results while keeping you informed every step of the
              way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {(() => {
                    const IconComponent = getIconComponent(benefit.icon)
                    return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null
                  })()}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our process and how we work with clients.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2CA35B]/10 rounded-xl flex items-center justify-center">
                      {(() => {
                        const IconComponent = getIconComponent(faq.icon)
                        return IconComponent ? <IconComponent className="w-5 h-5 text-[#2CA35B]" /> : null
                      })()}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Ready to Get Started?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and walk through our process together. Get a free consultation today.
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
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>

              <p className="text-sm opacity-75 mt-4">
                ⚡ Response within 24 hours • 💬 Free consultation call • 📋 Custom project proposal
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
