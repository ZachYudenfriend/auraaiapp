"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import emailjs from '@emailjs/browser'

export default function Support() {
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) return
    
    setIsSending(true)
    setSendStatus('idle')

    try {
      await emailjs.send(
        'service_7gkq1mi',
        'template_6sthake',
        {
          message: message,
          reply_to: 'support@auraaiapp.com'
        },
        '5lcRzIABD2ME74Xdy'
      )
      
      setMessage("")
      setSendStatus('success')
      
      // Reset success message after 5 seconds
      setTimeout(() => setSendStatus('idle'), 5000)
    } catch (error) {
      console.error('Failed to send message:', error)
      setSendStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSendStatus('idle'), 5000)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white">
                Support
              </h1>
              
              <form onSubmit={handleSubmit} className="mt-16">
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full h-40 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    disabled={isSending}
                  />
                  <div className="mt-4">
                    <Button 
                      type="submit"
                      disabled={isSending || !message.trim()}
                      className="relative px-8 py-4 text-base font-normal text-white bg-black border border-transparent rounded-full z-10 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-sm group-hover:blur-md transition-all duration-500 animate-gradient-xy"></div>
                      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full"></div>
                      <span className="relative z-10">
                        {isSending ? 'Sending...' : 'Send Message'}
                      </span>
                    </Button>
                  </div>
                  
                  {/* Status Messages */}
                  {sendStatus === 'success' && (
                    <p className="mt-4 text-green-400">Message sent successfully!</p>
                  )}
                  {sendStatus === 'error' && (
                    <p className="mt-4 text-red-400">Failed to send message. Please try again.</p>
                  )}
                </div>
              </form>

              <p className="mt-16 text-lg font-normal text-gray-300 sm:text-xl">
                If you are having trouble reaching us, please write an email to:
                <br className="hidden sm:block" />
                <a 
                  href="mailto:support@auraaiapp.com"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-80 transition-opacity mt-2 block"
                >
                  support@auraaiapp.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 