"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white py-12 mt-20 mb-12 mx-4 md:mx-24 rounded-2xl shadow-2xl">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted Physiotherapy in Ontario
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to start your recovery journey? Let our expert therapists guide
          you to better health.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="#contact">
            <button className="px-8 py-3 bg-white text-emerald-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
