"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import GlassSection from "@/components/ui/GlassSection";

const faqs = [
  {
    question: "What types of physiotherapy services do you offer?",
    answer:
      "We offer a wide range of services including physiotherapy, rehabilitation, pain management, sports therapy, posture correction, and more.",
  },
  {
    question: "Do you provide home visits?",
    answer:
      "Yes, we provide home physiotherapy visits across Ontario for patients who prefer treatment at home.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment directly through our website or by calling our support team.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we work with most insurance providers and also offer affordable self-pay options.",
  },
  {
    question: "How experienced are your physiotherapists?",
    answer:
      "All our physiotherapists are licensed professionals with years of clinical experience.",
  },
];

export default function FAQSection({ id = "faq" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GlassSection id={id} className="max-w-6xl mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-lg shadow-md border border-white/10 p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-500 dark:text-gray-300" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 dark:text-gray-300 mt-2 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </GlassSection>
  );
}
