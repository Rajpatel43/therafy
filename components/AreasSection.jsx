// "use client";
// import { motion } from "framer-motion";
// import { ontarioCities } from "@/lib/citiesOntario";

// export default function AreasSection() {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Areas We Serve
//         </motion.h2>
//         <p className="text-gray-700 dark:text-gray-300 mb-10">
//           We proudly serve clients all across Ontario.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-800 dark:text-gray-200">
//           {ontarioCities.slice(0, 20).map((city, index) => (
//             <motion.div
//               key={city}
//               className="bg-gray-100 dark:bg-gray-700 p-3 rounded"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: index * 0.03 }}
//             >
//               {city}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ontarioCities } from "@/lib/citiesOntario";

export default function AreasSection({ id }) {
  return (
    <section id={id} className="py-10 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Areas We Serve
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We proudly serve clients all across Ontario with trusted care and personalized support.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-800 dark:text-gray-200">
          {ontarioCities.slice(0, 20).map((city, index) => (
            <motion.div
              key={city}
              className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-medium shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

