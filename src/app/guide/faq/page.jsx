"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQs data
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
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>

              {/* Arrow Icon */}
              <motion.div
                animate={{ rotate: openIndex === index ? 90 : 0 }}
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
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-lg leading-relaxed mt-2">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
