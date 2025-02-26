"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
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
          <div className="h-full flex flex-col justify-start lg:justify-center lg:items-center pt-8 pb-12 lg:py-0">
            <section className="w-full flex-1 flex flex-col justify-between">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:grid lg:grid-cols-5 items-center max-w-5xl mx-auto lg:gap-y-8 lg:gap-x-16">
                  {/* Title - Always on top for mobile */}
                  <div className="w-full lg:hidden text-center mb-12 relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-normal text-white uppercase">
                      Become.{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient-x">
                        Confident.
                      </span>
                    </h1>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-2 lg:order-first w-full">
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        className="w-[300px] sm:w-[320px] lg:w-full max-w-sm mx-auto"
                        src="/aura-mockup.png"
                        alt="Aura Rating App Interface showing holographic orb and metrics"
                        width={390}
                        height={844}
                        priority
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3 lg:order-last mt-12 lg:mt-0">
                    {/* Title - Only visible on desktop */}
                    <div className="hidden lg:block">
                      <h1 className="text-5xl xl:text-8xl font-normal text-white uppercase">
                        Become.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 animate-gradient-x">
                          Confident.
                        </span>
                      </h1>
                    </div>
                    
                    <p className="hidden lg:block mt-4 sm:mt-6 text-base sm:text-lg font-normal text-white">
                      Our real-time AI coach helps you develop the skills, mindset, and charisma to own every interaction.
                    </p>
                    <div className="lg:mt-8">
                      <motion.div 
                        className="relative inline-flex group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm group-hover:blur-md group-hover:opacity-100 transition-all duration-500"></div>
                        <Button className="relative px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full z-10">
                          Download Now
                        </Button>
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

