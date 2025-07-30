// "use client";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactSection() {
//   return (
//     <section className="py-20 bg-gray-100 dark:bg-gray-950">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Contact Us
//         </motion.h2>
//         <p className="text-gray-700 dark:text-gray-300 mb-12">
//           Reach out to us for appointments, questions, or support.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="flex flex-col items-center"
//           >
//             <FaPhoneAlt className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold">Phone</h4>
//             <p>+1 (123) 456-7890</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaEnvelope className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold">Email</h4>
//             <p>info@therafy.ca</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-col items-center"
//           >
//             <FaMapMarkerAlt className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold">Location</h4>
//             <p>Ontario, Canada</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
//--------------------------------------------
// "use client";

// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactSection({ id }) {
//   return (
//     <section id={id} className="py-20 bg-gray-100 dark:bg-gray-950 scroll-mt-20">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Contact Us
//         </motion.h2>

//         <motion.p
//           className="text-gray-700 dark:text-gray-300 mb-12 text-lg sm:text-xl"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           Reach out to us for appointments, questions, or support.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 dark:text-gray-200">
//           {/* Phone */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-col items-center"
//           >
//             <FaPhoneAlt className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold mb-1">Phone</h4>
//             <p>+1 (123) 456-7890</p>
//           </motion.div>

//           {/* Email */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col items-center"
//           >
//             <FaEnvelope className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold mb-1">Email</h4>
//             <p>info@therafy.ca</p>
//           </motion.div>

//           {/* Location */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-col items-center"
//           >
//             <FaMapMarkerAlt className="text-3xl text-teal-500 mb-2" />
//             <h4 className="text-xl font-semibold mb-1">Location</h4>
//             <p>Ontario, Canada</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//-------------------------------------------------------------------------------

"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import GlassSection from "@/components/ui/GlassSection";

export default function ContactSection({ id = "contact" }) {
  const contactItems = [
    {
      icon: <FaPhoneAlt className="text-3xl text-teal-500 mb-2" />,
      title: "Phone",
      info: "+1 (123) 456-7890",
    },
    {
      icon: <FaEnvelope className="text-3xl text-teal-500 mb-2" />,
      title: "Email",
      info: "info@therafy.ca",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-teal-500 mb-2" />,
      title: "Location",
      info: "Ontario, Canada",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-500 mb-2" />,
      title: "WhatsApp",
      info: "+1 (987) 654-3210",
    },
    {
      icon: <FaClock className="text-3xl text-teal-500 mb-2" />,
      title: "Working Hours",
      info: "Mon - Sat: 9 AM - 6 PM",
    },
    {
      icon: <FaClock className="text-3xl text-teal-500 mb-2" />,
      title: "Working Hours",
      info: "Mon - Sat: 9 AM - 6 PM",
    },
  ];

  return (
    <GlassSection id={id} className="max-w-6xl mx-auto my-16 text-center">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-12 text-lg sm:text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Reach out to us for appointments, questions, or support.
      </motion.p>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex flex-col items-center bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10 hover:scale-105 hover:shadow-xl transition"
          >
            {item.icon}
            <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{item.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="#"
          className="p-3 rounded-full bg-white/60 dark:bg-white/5 border border-white/10 hover:scale-110 transition"
        >
          <FaFacebook className="text-2xl text-blue-600" />
        </a>
        <a
          href="#"
          className="p-3 rounded-full bg-white/60 dark:bg-white/5 border border-white/10 hover:scale-110 transition"
        >
          <FaInstagram className="text-2xl text-pink-500" />
        </a>
        <a
          href="#"
          className="p-3 rounded-full bg-white/60 dark:bg-white/5 border border-white/10 hover:scale-110 transition"
        >
          <FaLinkedin className="text-2xl text-blue-500" />
        </a>
      </div>
    </GlassSection>
  );
}
