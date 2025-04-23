"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="h-screen overflow-hidden relative bg-[#FFFDFE]">
      <div className="relative h-full flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden flex items-center">
          <div className="w-full">
            <section className="w-full h-full flex items-center">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:grid lg:grid-cols-2 items-center max-w-6xl mx-auto gap-8 lg:gap-16">
                  {/* title - always on top for mobile */}
                  <div className="w-full lg:hidden text-center mb-8 relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-dm-sans flex flex-col items-center justify-center">
                      <div className="mb-2">do you have</div>
                      <div className="flex items-center">
                        <span>the</span>
                        <div className="relative mx-1 flex items-end">
                          <Image 
                            src="/sauce-logo.png" 
                            alt="sauce" 
                            width={160} 
                            height={64} 
                            className="h-12 sm:h-16 w-auto translate-y-2"
                          />
                        </div>
                        <span>?</span>
                      </div>
                    </h1>
                  </div>

                  {/* image */}
                  <div className="w-full lg:order-first flex justify-center lg:justify-end">
                    <div className="w-[280px] sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[420px] 2xl:w-[450px] mx-auto lg:mx-0 h-[85vh] flex items-center">
                      <Image
                        src="/sauce-app-mockup.png"
                        alt="sauce app interface showing conversation with a red circle and 'your turn' prompt"
                        width={466}
                        height={977}
                        className="w-full h-auto max-h-full object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* content */}
                  <div className="w-full max-w-md mx-auto text-center">
                    {/* title - only visible on desktop */}
                    <div className="hidden lg:block">
                      <h1 className="text-6xl xl:text-7xl font-extrabold text-gray-900 font-dm-sans flex flex-col">
                        <div className="mb-2">do you have</div>
                        <div className="flex items-center justify-start">
                          <span>the</span>
                          <div className="relative mx-2 flex items-end">
                            <Image 
                              src="/sauce-logo.png" 
                              alt="sauce" 
                              width={280} 
                              height={112} 
                              className="h-20 xl:h-24 w-auto translate-y-3"
                            />
                          </div>
                          <span>?</span>
                        </div>
                      </h1>
                    </div>
                    
                    <p className="mt-6 text-lg lg:text-xl font-dm-sans text-gray-600 text-center">
                      practice, evaluate, and improve your conversational skills with ai.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <motion.div 
                        className="relative inline-flex"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a 
                          href="#download"
                          className="relative px-10 py-4 text-base font-medium text-white bg-sauce border border-transparent rounded-full z-10 inline-flex items-center justify-center font-dm-sans"
                        >
                          download now
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

