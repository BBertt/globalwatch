"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faq";

export default function GuidePage() {
  const [openSection, setOpenSection] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <section className="mb-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("getting-started")}
        >
          <h1 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Getting Started
          </h1>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: openSection === "getting-started" ? "auto" : 0,
            opacity: openSection === "getting-started" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-lg leading-relaxed text-center">
            Welcome to our platform! Follow the steps below to get started:
          </p>
          <ol className="list-decimal mt-6 pl-5 space-y-4 text-lg text-gray-700">
            <li>Create an account by clicking the "Sign Up" button.</li>
            <li>Choose your email that will be used to create an account.</li>
            <li>Explore the platform and start engaging with content.</li>
          </ol>
          <p className="mt-6 text-lg leading-relaxed text-center">
            If you encounter any issues, feel free to check out the FAQ or
            contact support.
          </p>
        </motion.div>
      </section>

      <section className="mb-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("advanced-tips")}
        >
          <h1 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            Advanced Tips
          </h1>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: openSection === "advanced-tips" ? "auto" : 0,
            opacity: openSection === "advanced-tips" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-lg leading-relaxed text-center">
            Here are some advanced tips to help you make the most of our
            platform:
          </p>
          <ul className="list-disc mt-6 pl-5 space-y-4 text-lg text-gray-700">
            <li>Subscribe to real-time alerts to stay updated on global crises.</li>
            <li>Set up notifications for specific regions or disaster types.</li>
            <li>Track your donation history through a personalized dashboard.</li>
            <li>Use the "Share" feature to raise awareness with friends and family.</li>
            <li>Leverage our API to integrate real-time disaster updates.</li>
          </ul>
        </motion.div>
      </section>

      <section className="mb-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("faq")}
        >
          <h1 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Frequently Asked Questions (FAQ)
          </h1>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: openSection === "faq" ? "auto" : 0,
            opacity: openSection === "faq" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <div
                  className="flex justify-between items-center cursor-pointer py-3 hover:bg-gray-100 transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-bold text-gray-800">{faq.question}</h2>
                  <motion.div
                    animate={{ rotate: openFAQIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    ➔
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQIndex === index ? "auto" : 0,
                    opacity: openFAQIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-md text-gray-600 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
