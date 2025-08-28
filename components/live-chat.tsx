"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, User, Bot, Minimize2 } from "lucide-react"
import { trackEvent } from "@/components/analytics"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you with any questions about our services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "What services do you offer?",
    "How much does a project cost?",
    "How long does development take?",
    "Can I see your portfolio?",
    "Schedule a consultation",
  ]

  const botResponses: { [key: string]: string } = {
    "what services":
      "We offer UI/UX Design, Website Development, FlutterFlow App Development, and Graphic Design. Each service is tailored to help your business grow and succeed.",
    cost: "Our projects typically range from $5K to $50K+ depending on complexity. We'd love to discuss your specific needs and provide a custom quote. Would you like to schedule a free consultation?",
    "how long":
      "Most projects are completed within 2-6 weeks. Simple websites can be done in 1-2 weeks, while complex apps may take 4-6 weeks. We'll provide a detailed timeline during our consultation.",
    portfolio:
      "You can view our portfolio at /portfolio to see our latest work. We've helped 50+ clients with projects ranging from trading platforms to e-commerce sites.",
    consultation:
      "Great! I'd love to schedule a consultation for you. You can book directly through our contact form or I can connect you with our team right now.",
    default:
      "That's a great question! For detailed information, I'd recommend scheduling a free consultation with our team. They can provide personalized answers based on your specific needs.",
  }

  useEffect(() => {
    // Show chat widget after 30 seconds on first visit
    const timer = setTimeout(() => {
      if (!localStorage.getItem("chatShown")) {
        setIsOpen(true)
        localStorage.setItem("chatShown", "true")
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Track chat interaction
    trackEvent("chat_message", "engagement", text.substring(0, 50))

    // Simulate bot response
    setTimeout(
      () => {
        const botResponse = getBotResponse(text.toLowerCase())
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const getBotResponse = (input: string): string => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && input.includes(key)) {
        return response
      }
    }
    return botResponses.default
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      trackEvent("chat_open", "engagement")
    }
  }

  const minimizeChat = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 60 : 500,
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Sagelancer Support</h3>
                  <p className="text-xs opacity-90">Usually replies instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={minimizeChat}
                  className="w-6 h-6 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === "user" ? "bg-[#2CA35B]" : "bg-gray-200"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-3 h-3 text-white" />
                          ) : (
                            <Bot className="w-3 h-3 text-gray-600" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl px-3 py-2 ${
                            message.sender === "user" ? "bg-[#2CA35B] text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-gray-600" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-1">
                      {quickReplies.slice(0, 3).map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                      placeholder="Type your message..."
                      className="flex-1 rounded-full border-gray-200 focus:border-[#2CA35B] focus:ring-[#2CA35B]"
                    />
                    <Button
                      onClick={() => handleSendMessage(inputValue)}
                      size="sm"
                      className="bg-[#2CA35B] hover:bg-[#1E6F5C] rounded-full w-10 h-10 p-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#2CA35B] to-[#1E6F5C] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        </motion.button>
      )}
    </>
  )
}
