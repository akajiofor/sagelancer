"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  Lightbulb,
  Code,
  Palette,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { subscribeNewsletter } from "@/app/actions/contact"
import { useActionState } from "react"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [newsletterState, newsletterAction, isNewsletterPending] = useActionState(subscribeNewsletter, null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const categories = ["All", "Design", "Development", "No-Code", "Business", "Trends"]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of No-Code Development: Why FlutterFlow is Leading the Revolution",
      excerpt:
        "Explore how no-code platforms like FlutterFlow are democratizing app development and enabling businesses to build powerful applications without traditional coding.",
      content: "Full article content would go here...",
      author: "Sebastine Edmund",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "No-Code",
      tags: ["FlutterFlow", "No-Code", "App Development", "Future Tech"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "10 UI/UX Design Principles That Will Transform Your Digital Product",
      excerpt:
        "Learn the essential design principles that separate good digital products from great ones, with real-world examples and actionable insights.",
      content: "Full article content would go here...",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Design",
      tags: ["UI/UX", "Design Principles", "User Experience", "Digital Products"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 3,
      title: "From Startup to Scale: How We Built a Trading Platform in 3 Months",
      excerpt:
        "A behind-the-scenes look at how we developed a comprehensive trading platform using FlutterFlow and Firebase, handling millions of transactions daily.",
      content: "Full article content would go here...",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Development",
      tags: ["Case Study", "FlutterFlow", "Firebase", "FinTech"],
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 4,
      title: "The Psychology of Color in Digital Design: A Complete Guide",
      excerpt:
        "Understand how color choices impact user behavior and conversion rates, with practical tips for choosing the perfect color palette for your brand.",
      content: "Full article content would go here...",
      author: "Emily Watson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Design",
      tags: ["Color Theory", "Psychology", "Branding", "Conversion"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "2024 Web Development Trends: What's Shaping the Future",
      excerpt:
        "Stay ahead of the curve with the latest web development trends, from AI integration to progressive web apps and everything in between.",
      content: "Full article content would go here...",
      author: "Sebastine Edmund",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Trends",
      tags: ["Web Development", "Trends", "AI", "PWA"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "Building a Successful Digital Product: Lessons from 50+ Projects",
      excerpt:
        "Key insights and lessons learned from building digital products for startups and enterprises, including common pitfalls and success strategies.",
      content: "Full article content would go here...",
      author: "Sarah Chen",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Business",
      tags: ["Product Strategy", "Startups", "Digital Transformation", "Success"],
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  const categoryIcons = {
    Design: Palette,
    Development: Code,
    "No-Code": Smartphone,
    Business: TrendingUp,
    Trends: Lightbulb,
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
            <Badge className="bg-[#2CA35B]/10 text-[#2CA35B] border-[#2CA35B]/20 mb-6">Our Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Insights &{" "}
              <span className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] bg-clip-text text-transparent">
                Inspiration
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stay updated with the latest trends in design, development, and digital transformation. Learn from our
              experiences and industry insights.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#2CA35B] focus:ring-[#2CA35B]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-[#2CA35B] text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#2CA35B] hover:text-[#2CA35B]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && (
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
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and impactful articles, handpicked for you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#2CA35B] text-white">{post.category}</Badge>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#2CA35B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#2CA35B] text-[#2CA35B] hover:bg-[#2CA35B] hover:text-white transition-all rounded-full font-semibold"
                      >
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-space-grotesk">
                  {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
                </h2>
                <p className="text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </p>
              </motion.div>

              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full bg-gray-100">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#2CA35B] text-white">{post.category}</Badge>
                        </div>
                      </div>

                      <div className="md:col-span-2 p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 hover:text-[#2CA35B] transition-colors line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#2CA35B] text-[#2CA35B] hover:bg-[#2CA35B] hover:text-white transition-all rounded-full"
                          >
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#2CA35B] to-[#1E6F5C] text-white rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 opacity-90">Get the latest insights and tips delivered directly to your inbox.</p>

                {newsletterState?.success ? (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <p className="font-semibold">Thanks for subscribing!</p>
                  </div>
                ) : (
                  <form action={newsletterAction} className="space-y-4">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
                    />
                    <Button
                      type="submit"
                      disabled={isNewsletterPending}
                      className="w-full bg-white text-[#2CA35B] hover:bg-gray-100 rounded-xl font-semibold"
                    >
                      {isNewsletterPending ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <div key={post.id} className="flex space-x-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2 hover:text-[#2CA35B] transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => {
                    const Icon = categoryIcons[category as keyof typeof categoryIcons]
                    const count = blogPosts.filter((post) => post.category === category).length
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                          activeCategory === category ? "bg-[#2CA35B] text-white" : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {Icon && <Icon className="w-5 h-5" />}
                          <span className="font-medium">{category}</span>
                        </div>
                        <span className="text-sm opacity-75">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
