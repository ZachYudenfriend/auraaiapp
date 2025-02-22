"use client"

import Header from "@/components/header"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Practice",
      description: "Practice your cold approach with AI",
      image: "/demo-1.png",
      alt: "AURA AI voice analysis interface showing holographic orb"
    },
    {
      title: "Rating",
      description: "Receive your Aura score and ratings",
      image: "/demo-2.png",
      alt: "AURA AI feedback interface showing strong points and improvement protocol"
    },
    {
      title: "Improve",
      description: "Improve with personalized protocol",
      image: "/demo-3.png",
      alt: "AURA AI metrics dashboard showing various communication scores"
    }
  ]

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
          <div className="min-h-full flex items-center py-12">
            <div className="w-full max-w-[1800px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 w-full transition-all duration-500 hover:bg-gray-800/40 hover:border-gray-600/50">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="space-y-2 mb-6"
                      >
                        <h2 className="text-2xl font-semibold text-white text-center">
                          {feature.title}
                        </h2>
                        <p className="text-gray-300 text-center leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>

                      <motion.div 
                        className="relative rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-center">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={390}
                            height={844}
                            className="w-[240px] h-auto relative z-10"
                            priority
                          />
                        </div>
                      </motion.div>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 