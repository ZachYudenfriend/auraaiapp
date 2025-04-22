"use client"

import Header from "@/components/header"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Textarea } from "@/components/ui/textarea"

export default function Support() {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async () => {
    if (!message.trim()) return
    
    setIsSending(true)
    try {
      await emailjs.send(
        "service_auraai",
        "template_support",
        {
          message: message,
          reply_to: "support@auraaiapp.com"
        },
        "YOUR_PUBLIC_KEY" // Replace with your actual EmailJS public key
      )
      setMessage("")
      alert("message sent successfully!")
    } catch (error) {
      console.error("error sending message:", error)
      alert("failed to send message. please try emailing us directly.")
    }
    setIsSending(false)
  }

  return (
    <div className="h-screen overflow-hidden relative bg-[#FFFDFE]">
      <div className="relative h-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <div className="h-full flex items-center">
            <div className="w-full max-w-[800px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-dm-sans mb-8">
                  support
                </h1>
                
                <div className="w-full space-y-6">
                  <Textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="write your message here..."
                    className="w-full min-h-[200px] text-lg p-6 rounded-2xl border-gray-200 bg-white/5 backdrop-blur-sm resize-none"
                  />
                  
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSending || !message.trim()}
                    className="px-8 py-3 bg-sauce text-white rounded-full text-lg font-medium font-dm-sans disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSending ? "sending..." : "send message"}
                  </motion.button>

                  <p className="text-gray-600 font-dm-sans mt-8">
                    if you are having trouble reaching us, please write an email to:{" "}
                    <a 
                      href="mailto:support@auraaiapp.com" 
                      className="text-sauce hover:text-sauce/80"
                    >
                      support@auraaiapp.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 