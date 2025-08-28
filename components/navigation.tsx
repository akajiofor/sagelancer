"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileForm, setShowMobileForm] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="section-container py-4 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/">
              <Image src="/logo-full.png" alt="Sagelancer" width={180} height={40} className="h-8 w-auto" />
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href) ? "text-[#2CA35B] font-semibold" : "text-gray-600 hover:text-[#2CA35B]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-[#2CA35B] hover:bg-[#1E6F5C] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => setShowMobileForm(true)}
            >
              Get Free Consultation
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowMobileMenu(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Image src="/logo-icon.png" alt="Sagelancer" width={40} height={40} />
                  <Button variant="ghost" size="sm" onClick={() => setShowMobileMenu(false)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <nav className="space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block text-lg font-medium transition-colors ${
                        isActive(item.href) ? "text-[#2CA35B]" : "text-gray-900 hover:text-[#2CA35B]"
                      }`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    className="w-full bg-[#2CA35B] hover:bg-[#1E6F5C] text-white py-3 rounded-full font-semibold"
                    onClick={() => {
                      setShowMobileMenu(false)
                      setShowMobileForm(true)
                    }}
                  >
                    Get Free Consultation
                  </Button>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <input
                  placeholder="Your Name"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2CA35B] focus:border-transparent"
                />
                <input
                  placeholder="Email Address"
                  type="email"
                  className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2CA35B] focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2CA35B] focus:border-transparent resize-none"
                />
                <select className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2CA35B] focus:border-transparent">
                  <option value="">Service Needed</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="website">Website Development</option>
                  <option value="app">FlutterFlow App</option>
                  <option value="graphic">Graphic Design</option>
                  <option value="all">Complete Solution</option>
                </select>

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
    </>
  )
}
