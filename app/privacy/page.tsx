"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center text-gray-900 font-space-grotesk"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          className="text-gray-600 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Effective Date: March 5, 2025
        </motion.p>
      </div>
      
      {/* Scrollable container */}
      <motion.div 
        className="w-full max-w-4xl mx-auto bg-gray-50 rounded-3xl border border-gray-200 p-6 h-[70vh] overflow-y-auto custom-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">1. Introduction</h2>
            <p className="text-gray-600 font-dm-sans">
              Aura AI ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). We are committed to complying with applicable privacy laws and ensuring transparency in our data practices.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">2. Data We Collect</h2>
            <p className="text-gray-600 font-dm-sans mb-4">We collect the following data from users:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-dm-sans">
              <li>Purchases (e.g., purchase history, subscription status)</li>
              <li>Product Interaction (e.g., app launches, taps, scrolling)</li>
              <li>Other Usage Data (e.g., general user activity in the app)</li>
              <li>Crash Data (e.g., logs related to app crashes and errors)</li>
              <li>Performance Data (e.g., load times, responsiveness, energy use)</li>
              <li>Other Diagnostic Data (e.g., technical performance metrics)</li>
            </ul>
            <p className="text-gray-600 font-dm-sans mt-4">We do not collect personal identifiers such as names, email addresses, or precise location data.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">3. How We Use Your Data</h2>
            <p className="text-gray-600 font-dm-sans mb-4">The collected data is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-dm-sans">
              <li>App Functionality – To authenticate users, enable features, ensure security, prevent fraud, and improve overall app performance.</li>
              <li>Analytics – To evaluate user behavior, measure audience size, plan new features, and optimize the user experience.</li>
            </ul>
            <p className="text-gray-600 font-dm-sans mt-4">We do not use your data for third-party advertising, personalized advertising, or tracking across different apps or websites.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">4. Data Sharing & Third-Party Services</h2>
            <p className="text-gray-600 font-dm-sans mb-4">We use third-party services to support our app's functionality, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-dm-sans">
              <li>Superwall – Manages in-app purchases and subscription services. Superwall may process purchase history data but does not use it for tracking.</li>
              <li>Sentry – Monitors app crashes and performance. Sentry collects crash logs, performance data, and other diagnostic data for internal debugging purposes.</li>
              <li>
                <span className="font-medium">MixPanel</span> – Analytics and user behavior tracking.
                <br />
                <a href="https://mixpanel.com/legal/app-store-privacy-details/" target="_blank" rel="noopener noreferrer" className="text-sauce hover:text-sauce/80 underline">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-gray-600 font-dm-sans mt-4 mb-4">These third-party services may process your data on our behalf but do not use it for their own advertising or tracking purposes.</p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 font-space-grotesk">Third-Party AI Providers</h3>
            <p className="text-gray-600 font-dm-sans mb-4">We may share your information with third-party service providers and partners who assist us in delivering our services. Specifically, we utilize third-party AI service providers to process and enhance your experience. These providers include:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 font-dm-sans">
              <li>
                <span className="font-medium">OpenAI</span> – Powers our AI conversation and interaction features.
                <br />
                <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sauce hover:text-sauce/80 underline">Privacy Policy</a>
              </li>
              <li>
                <span className="font-medium">ElevenLabs</span> – Provides voice synthesis capabilities.
                <br />
                <a href="https://elevenlabs.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sauce hover:text-sauce/80 underline">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-gray-600 font-dm-sans mt-4">These providers may handle data differently from how we do. We encourage you to review their respective privacy policies (linked above) to understand how they manage and process data.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">5. Data Security</h2>
            <p className="text-gray-600 font-dm-sans">
              We implement industry-standard security measures to protect your data. However, no system can guarantee absolute security. We advise users to take precautions when using the app.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">6. User Data Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 font-dm-sans">
              <li>If you wish to request deletion of any collected data, contact us at support@auraaiapp.com.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 font-dm-sans">
              We may update this policy periodically. Changes will be reflected with a revised "Effective Date." Continued use of the app after updates constitutes acceptance of the changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-medium mb-4 text-gray-900 font-space-grotesk">8. Contact Us</h2>
            <p className="text-gray-600 font-dm-sans">
              If you have any questions or concerns about this Privacy Policy, you can reach us at:
              <br />
              Aura AI
              <br />
              support@auraaiapp.com
            </p>
          </section>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link 
          href="/"
          className="text-sauce hover:text-sauce/80 font-dm-sans"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  )
} 