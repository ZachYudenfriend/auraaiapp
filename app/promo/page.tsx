"use client"

import Header from "@/components/header"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Promo() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/jesse-auraaiapp/30min", "_blank")
  }

  return (
    <div className="h-screen overflow-hidden relative bg-[#0B1120]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 animate-gradient-x pointer-events-none"
          style={{ backgroundSize: '400% 400%' }}
        />
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-0 w-[80vw] h-[80vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div 
            className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '3s' }}
          />
        </div>
        
        <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] translate-x-1/2 translate-y-1/2 pointer-events-none">
          <div 
            className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1.5s' }}
          />
        </div>

        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/[0.08] via-transparent to-purple-500/[0.08] pointer-events-none"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

      <div className="relative h-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="min-h-full flex items-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),rgba(168,85,247,0.15))]" />
            
            <div className="w-full max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white max-w-[900px] leading-tight mb-8">
                  Earn{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500">
                    $$$
                  </span>{" "}
                  to Post
                </h1>
                
                <p className="text-xl text-gray-300 max-w-[800px] mb-12">
                  Get paid to share your Aura AI experience. Help others improve their cold approach, boost their confidence, and make money while doing it.
                </p>

                <h2 className="text-3xl font-bold text-white mb-16">🔥 Post. Earn. Grow.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                  <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">🚀 Post</h3>
                    <p className="text-gray-300 text-lg">Share your Aura experience on social media and show off your progress.</p>
                  </div>
                  <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">💸 Earn</h3>
                    <p className="text-gray-300 text-lg">Get paid every time someone signs up through your referral.</p>
                  </div>
                  <div className="bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">📈 Grow</h3>
                    <p className="text-gray-300 text-lg">Build your personal brand while helping others improve their game.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-white mb-8">🔗 Ready to start?</h2>

                <motion.div 
                  className="relative inline-flex group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full opacity-75 blur group-hover:opacity-100 transition-opacity duration-500" />
                  <button
                    onClick={handleCalendlyClick}
                    className="relative px-8 py-3 bg-gray-900 text-white rounded-full text-lg font-medium z-10"
                  >
                    Schedule a Call
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 