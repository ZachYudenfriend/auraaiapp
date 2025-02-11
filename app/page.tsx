import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
              <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
                <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
                  Become.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    Confident.
                  </span>
                </h1>
                <p className="mt-6 text-lg font-normal text-white sm:text-xl">
                  Our real-time AI coach helps you develop the skills, mindset, and charisma to own every interaction.
                </p>
                <div className="mt-8 sm:mt-10">
                  <div className="relative inline-flex group">
                    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-sm group-hover:blur-md transition-all duration-500 animate-gradient-xy"></div>
                    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                    <Button className="relative px-8 py-4 text-base font-normal text-white bg-black border border-transparent rounded-full z-10">
                      Download Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-first">
                <Image
                  className="w-full max-w-sm mx-auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%2093-portrait-T8mAfCu8YadkScGNPlT3A6hxFOeFWB.png"
                  alt="Aura Rating App Interface showing holographic orb and metrics"
                  width={390}
                  height={844}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

