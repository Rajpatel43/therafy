"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const bulletPoints = [
  "Evidence Based Approach",
  "High Quality & Convenience",
  "Personalized Physiotherapy",
  "Affordable Treatment",
];

export default function HeroSection() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-28 pb-16 px-4 sm:px-6 lg:px-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-white to-transparent opacity-40 dark:from-blue-900 dark:via-gray-900 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ------------- LEFT SIDE ------------- */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 dark:text-blue-400">
            Trusted Physiotherapy in Ontario
          </p> */}

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Complete Physiotherapy Solution
            </span>
            <br />
            In One Place
          </h1>

          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-lg">
            We bring the whole therapeutic experience to your home. Our team
            specializes in treating musculoskeletal, cardio-respiratory,
            neurological, pediatric, and geriatric conditions.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center text-gray-800 dark:text-gray-200"
              >
                <FaCheckCircle className="text-green-500 mr-2" />
                {point}
              </motion.li>
            ))}
          </ul>

          {/* ------ CTA Buttons ------ */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
            >
              Explore Services <FiArrowRight />
            </a>

            <button
              onClick={scrollToAppointment}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* ------------- RIGHT IMAGE SIDE ------------- */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pl-4 sm:pl-8 lg:pl-16"
          >
            <Image
              src="/images/hero-physio.png"
              alt="Physiotherapy Session"
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
