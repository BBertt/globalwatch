"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GuidePage() {
  const [openSection, setOpenSection] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button on the homepage and fill out the required information. Once you've verified your email, your account will be ready to use.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click the 'Forgot Password' link on the login page and follow the instructions sent to your email.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support by navigating to the 'Help' section and filling out the contact form. Our team will get back to you as soon as possible.",
    },
  ];

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
            <li>
              Verify your email address by following the link in your inbox.
            </li>
            <li>Set up your profile and customize your preferences.</li>
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
              Customize your dashboard to focus on the features you use most.
            </li>
            <li>
              Take advantage of keyboard shortcuts to navigate the platform
              faster.
            </li>
            <li>Enable two-factor authentication for enhanced security.</li>
            <li>
              Use our API to integrate the platform with your own applications.
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-center">
            By using these tips, you'll be able to optimize your workflow and
            get even more value from our platform.
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
