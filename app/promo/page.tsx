"use client"

import Header from "@/components/header"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Promo() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/jesse-auraaiapp/30min", "_blank")
  }

  return (
    <div className="h-screen overflow-hidden relative bg-[#FFFDFE]">
      <div className="relative h-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="min-h-full flex items-center py-12">
            <div className="w-full max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-dm-sans mb-4">
                  earn {" "}
                  <span className="text-sauce">
                    $$$
                  </span>{" "}
                  to post
                </h1>
                
                <p className="text-xl text-gray-600 font-dm-sans max-w-[800px] mb-12">
                  get paid to share your sauce experience. help others improve their conversation skills, boost their confidence, and make money while doing it.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 font-dm-sans mb-16">🔥 post. earn. grow.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-dm-sans">🚀 post</h3>
                    <p className="text-gray-600 text-lg font-dm-sans">share your sauce experience on social media and show off your progress.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-dm-sans">💸 earn</h3>
                    <p className="text-gray-600 text-lg font-dm-sans">get paid every time someone signs up through your referral.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-dm-sans">📈 grow</h3>
                    <p className="text-gray-600 text-lg font-dm-sans">build your personal brand while helping others improve their conversation skills.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-dm-sans">🔗 ready to start?</h2>

                <div className="flex justify-center">
                  <motion.div 
                    className="relative inline-flex"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={handleCalendlyClick}
                      className="px-10 py-4 bg-sauce text-white rounded-full text-lg font-medium font-dm-sans"
                    >
                      schedule a call
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 