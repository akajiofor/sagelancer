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
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Star,
  Calendar,
  MapPin,
  Mail,
  Globe,
  Coffee,
  Code,
  X,
} from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)
  const [showMobileForm, setShowMobileForm] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every decision we make is guided by what's best for our clients' success and growth.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We push boundaries and explore new possibilities to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "We're obsessed with quality and never settle for anything less than exceptional.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering open communication and trust.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Sebastine Edmund founded Sagelancer as a freelance marketplace, connecting talented designers and developers with businesses worldwide.",
      icon: Rocket,
    },
    {
      year: "2020-2022",
      title: "Growing Community",
      description:
        "Built a thriving community of 500+ freelancers and completed over 1,000 projects across various industries.",
      icon: Users,
    },
    {
      year: "2023-2024",
      title: "Specialization Focus",
      description:
        "Pivoted to focus on no-code solutions, becoming experts in FlutterFlow, Webflow, and modern design tools.",
      icon: Code,
    },
    {
      year: "2025",
      title: "Agency Evolution",
      description:
        "Transformed into a full-service digital agency, offering end-to-end solutions from design to deployment.",
      icon: Award,
    },
  ]

  const team = [
    {
      name: "Sebastine Edmund",
      role: "Founder & CEO",
      bio: "Visionary leader with 6+ years in digital transformation. Passionate about no-code solutions and helping businesses scale rapidly.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Strategy", "Leadership", "No-Code"],
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in UI/UX and brand identity. Creates experiences that users love and businesses need.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["UI/UX", "Branding", "Figma"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      bio: "FlutterFlow expert and full-stack developer. Transforms complex ideas into scalable, high-performance applications.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["FlutterFlow", "Firebase", "React"],
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      bio: "Ensures seamless project delivery and client satisfaction. Masters the art of turning chaos into organized success.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Project Management", "Client Relations", "Agile"],
    },
  ]

  const stats = [
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "100+", label: "Projects Delivered", icon: Rocket },
    { number: "6", label: "Years Experience", icon: Calendar },
    { number: "99%", label: "Client Satisfaction", icon: Star },
  ]

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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge className="bg-[#2CA35B]/10 text-[#2CA35B] border-[#2CA35B]/20 mb-6">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From a freelance marketplace to a full-service digital agency, we've been helping businesses bring their
              visions to life since 2019. Here's our journey.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#2CA35B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#2CA35B]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted digital partner for businesses worldwide.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div
                    className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-[#2CA35B] font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-[#2CA35B]/10 text-[#2CA35B] border-[#2CA35B]/20 mb-6">Meet Our Founder</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">
                  Sebastine Edmund
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  "I founded Sagelancer with a simple belief: every business deserves access to world-class digital
                  solutions, regardless of their size or budget. What started as a freelance marketplace has evolved
                  into something much bigger—a mission to democratize digital transformation."
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#2CA35B]" />
                    <span className="text-gray-600">Abuja, Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#2CA35B]" />
                    <span className="text-gray-600">sebastine@sagelancer.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-[#2CA35B]" />
                    <span className="text-gray-600">6+ years in digital transformation</span>
                  </div>
                </div>
                <Button 
                  className="bg-[#2CA35B] hover:bg-[#1E6F5C] text-white px-8 py-3 rounded-full font-semibold"
                  onClick={() => window.open('https://www.linkedin.com/in/sebastine-edmund-1bbb4a144', '_blank', 'noopener,noreferrer')}
                >
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Sebastine Edmund"
                    width={400}
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] rounded-3xl opacity-20 blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make the magic happen every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2CA35B] rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#2CA35B] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-grotesk">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great work comes from great people in a great environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Coffee,
                title: "Work-Life Balance",
                description:
                  "We believe in sustainable productivity and encourage our team to maintain a healthy balance.",
              },
              {
                icon: Lightbulb,
                title: "Continuous Learning",
                description:
                  "We invest in our team's growth with training, conferences, and skill development opportunities.",
              },
              {
                icon: Heart,
                title: "Inclusive Environment",
                description: "We celebrate diversity and create an environment where everyone feels valued and heard.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#2CA35B]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#2CA35B]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Ready to Work Together?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
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
