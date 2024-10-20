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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Getting Started Section */}
      <section className="mb-12 w-full max-w-3xl">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("getting-started")}
        >
          <h1 className="text-4xl font-bold mb-4 blue_gradient">
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
          <ol className="list-decimal mt-6 pl-5 space-y-4">
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

      {/* Advanced Tips Section */}
      <section className="mb-12 w-full max-w-3xl">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("advanced-tips")}
        >
          <h1 className="text-4xl font-bold mb-4 orange_gradient">
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
          <ul className="list-disc mt-6 pl-5 space-y-4">
            <li>
              Subscribe to real-time alerts to stay updated on the latest global
              crises like forest fires, famine, and natural disasters.
            </li>
            <li>
              Set up custom notifications for specific regions or disaster types
              to stay informed on the topics you care about the most.
            </li>
            <li>
              Easily track your donation history and impact through our
              platform’s personalized dashboard.
            </li>
            <li>
              Use the "Share" feature to help raise awareness by sharing news
              articles or donation links with your friends and family.
            </li>
            <li>
              Leverage our API to integrate real-time disaster updates into your
              own website or application, amplifying the reach of critical
              information.
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-center">
            By using these tips, you can stay informed, help others, and
            maximize your impact through donations and advocacy.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 w-full max-w-3xl">
        <div
          className="cursor-pointer text-center"
          onClick={() => toggleSection("faq")}
        >
          <h1 className="text-4xl font-bold mb-4 blue_gradient">
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
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                {/* Question Section */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-xl font-semibold">{faq.question}</h2>
                  <motion.div
                    animate={{ rotate: openFAQIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500"
                  >
                    ➔
                  </motion.div>
                </div>

                {/* Answer Section */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQIndex === index ? "auto" : 0,
                    opacity: openFAQIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-lg leading-relaxed mt-2">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
