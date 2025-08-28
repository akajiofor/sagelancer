"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { trackFormSubmission } from "@/components/analytics"

interface ContactFormProps {
  variant?: "default" | "modal" | "inline"
  className?: string
}

export default function ContactForm({ variant = "default", className = "" }: ContactFormProps) {
  const [state, action, isPending] = useActionState(submitContactForm, null)
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
  })

  const handleSubmit = async (formData: FormData) => {
    trackFormSubmission("contact_form")
    await action(formData)
  }

  const isModal = variant === "modal"
  const isInline = variant === "inline"

  return (
    <div className={`${className}`}>
      {state?.success ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
          <p className="text-gray-600 mb-6">{state.message}</p>
          <div className="text-sm text-gray-500">⚡ We typically respond within 24 hours</div>
        </motion.div>
      ) : (
        <form action={handleSubmit} className="space-y-6">
          {!isInline && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isModal ? "Get Free Consultation" : "Start Your Project Today"}
              </h3>
              <p className="text-gray-600">
                {isModal ? "Response within 24 hours" : "Tell us about your project and we'll get back to you soon"}
              </p>
            </div>
          )}

          {state?.success === false && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700 text-sm">{state.message}</p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className={`h-12 rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white placeholder:text-white/70" : ""}`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className={`h-12 rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white placeholder:text-white/70" : ""}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className={`h-12 rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white placeholder:text-white/70" : ""}`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Needed
              </label>
              <Select
                name="service"
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className={`h-12 rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white" : ""}`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="app">FlutterFlow App</SelectItem>
                  <SelectItem value="graphic">Graphic Design</SelectItem>
                  <SelectItem value="complete">Complete Solution</SelectItem>
                  <SelectItem value="consultation">Just Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <Select
                name="budget"
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger className={`h-12 rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white" : ""}`}>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5K</SelectItem>
                  <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                  <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                  <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                  <SelectItem value="50k-plus">$50K+</SelectItem>
                  <SelectItem value="discuss">Let's Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              className={`rounded-xl ${isModal ? "bg-white/20 border-white/30 text-white placeholder:text-white/70" : ""}`}
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className={`w-full py-4 text-lg font-semibold rounded-xl transition-all ${
              isModal ? "bg-white text-[#2CA35B] hover:bg-gray-100" : "bg-[#2CA35B] hover:bg-[#1E6F5C] text-white"
            } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          {!isInline && (
            <p className="text-xs text-gray-500 text-center">
              ⚡ Response within 24 hours • 💬 Free consultation call • 📋 Custom project proposal
            </p>
          )}
        </form>
      )}
    </div>
  )
}
