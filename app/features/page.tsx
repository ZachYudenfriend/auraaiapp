"use client"

import Header from "@/components/header"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "practice",
      description: "practice your conversational skills with ai",
      image: "/sauce-app-mockup-3.png",
      alt: "sauce app interface showing voice practice feature"
    },
    {
      title: "analyze",
      description: "get detailed feedback on your conversation skills",
      image: "/sauce-app-mockup-1.png",
      alt: "sauce app interface showing conversation analysis"
    },
    {
      title: "improve",
      description: "receive personalized improvement suggestions",
      image: "/sauce-app-mockup-2.png",
      alt: "sauce app interface showing improvement protocol"
    }
  ]

  return (
    <div className="h-screen overflow-hidden relative bg-[#FFFDFE]">
      <div className="relative h-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <div className="h-full flex items-center">
            <div className="w-full max-w-[1800px] mx-auto px-8">
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-dm-sans text-center">
                  features
                </h1>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative w-full flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="space-y-2 mb-6"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 text-center font-dm-sans">
                          {feature.title}
                        </h2>
                        <p className="text-gray-600 text-center leading-relaxed font-dm-sans">
                          {feature.description}
                        </p>
                      </motion.div>

                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-center">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={390}
                            height={844}
                            className="w-[280px] h-auto"
                            priority
                          />
                        </div>
                      </motion.div>
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