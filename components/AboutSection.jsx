// // "use client";
// // import { motion } from "framer-motion";

// // export default function AboutSection() {
// //   return (
// //     <section className="py-20 bg-gray-100 dark:bg-gray-800">
// //       <div className="max-w-5xl mx-auto px-6 text-center">
// //         <motion.h2
// //           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           About Us
// //         </motion.h2>
// //         <motion.p
// //           className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ delay: 0.2, duration: 0.6 }}
// //         >
// //           At <strong>Therafy</strong>, we are committed to improving the quality of life for our patients
// //           through expert physiotherapy, rehabilitation, and wellness programs. Our licensed
// //           professionals tailor treatments to your individual needs, helping you recover faster
// //           and live better.
// //         </motion.p>
// //       </div>
// //     </section>
// //   );
// // }

// // -------------------------------------------------------------------------------------------
// "use client";

// import { motion } from "framer-motion";

// export default function AboutSection({ id }) {
//   return (
//     <section id={id} className="py-20 bg-gray-100 dark:bg-gray-800 scroll-mt-20">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           About Us
//         </motion.h2>
//         <motion.p
//           className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           At <span className="font-semibold text-blue-600 dark:text-cyan-400">Therafy</span>, we are committed to enhancing your quality of life through modern
//           physiotherapy, expert rehabilitation, and personalized wellness programs. Our licensed
//           professionals tailor every treatment to your unique needs—helping you heal faster and live stronger.
//         </motion.p>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function AboutSection({ id }) {
  return (
    <section
      id={id}
      className="py-15 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-blue-600 dark:text-cyan-400">
              Therafy
            </span>
            , we are committed to enhancing your quality of life through modern
            physiotherapy, expert rehabilitation, and personalized wellness
            programs. Our licensed professionals tailor every treatment to your
            unique needs—helping you heal faster and live stronger.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

