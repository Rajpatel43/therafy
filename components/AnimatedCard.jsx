'use client';
// /components/AnimatedCard.jsx

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AnimatedCard({ title, count, animationPath }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4 flex items-center gap-4 w-full max-w-md"
    >
      <Player
        autoplay
        loop
        src={animationPath}
        style={{ height: "80px", width: "80px" }}
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white">{title}</h2>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{count}</p>
      </div>
    </motion.div>
  );
}
