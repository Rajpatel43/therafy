// "use client";
// import { motion } from "framer-motion";
// import { FaHandsHelping, FaWalking, FaHeartbeat, FaStethoscope } from "react-icons/fa";

// const services = [
//   {
//     title: "Physiotherapy",
//     description: "Personalized treatment plans to restore movement and relieve pain.",
//     icon: <FaWalking className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Rehabilitation",
//     description: "Recovery support after surgeries or injuries for faster healing.",
//     icon: <FaHandsHelping className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Chronic Pain Relief",
//     description: "Ongoing care for arthritis, back pain, and other chronic issues.",
//     icon: <FaHeartbeat className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Consultation",
//     description: "Expert guidance from certified physiotherapists for long-term care.",
//     icon: <FaStethoscope className="text-3xl text-teal-500" />,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Services We Provide
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 dark:text-white">
//                 {service.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaHandsHelping,
//   FaWalking,
//   FaHeartbeat,
//   FaStethoscope,
//   FaUserMd,
//   FaBriefcaseMedical,
//   FaSpa,
//   FaCogs,
//   FaBalanceScale,
//   FaSmile,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Physiotherapy",
//     description: "Restore movement and relieve pain with expert care.",
//     icon: <FaWalking className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Rehabilitation",
//     description: "Support for surgery/injury recovery with tailored plans.",
//     icon: <FaHandsHelping className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Chronic Pain Relief",
//     description: "Treatment for arthritis, migraines, and persistent pain.",
//     icon: <FaHeartbeat className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Consultation",
//     description: "1-on-1 expert consultation for personalized care.",
//     icon: <FaStethoscope className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Sports Therapy",
//     description: "Injury prevention and performance boosting for athletes.",
//     icon: <FaUserMd className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Workplace Ergonomics",
//     description: "Posture correction & injury prevention at the workplace.",
//     icon: <FaBriefcaseMedical className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Massage Therapy",
//     description: "Relaxing and therapeutic massages by trained professionals.",
//     icon: <FaSpa className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Postural Correction",
//     description: "Improving posture for long-term spine and joint health.",
//     icon: <FaCogs className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Balance & Mobility Training",
//     description: "Helping seniors and others improve walking & balance.",
//     icon: <FaBalanceScale className="text-3xl text-teal-500" />,
//   },
//   {
//     title: "Wellness Coaching",
//     description: "Mind-body wellness plans for overall physical health.",
//     icon: <FaSmile className="text-3xl text-teal-500" />,
//   },
// ];

// export default function ServicesSection() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % services.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + services.length) % services.length);
//   };

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Services We Provide
//         </motion.h2>

//         {/* Slider */}
//         <div className="relative overflow-hidden mt-10">
//           <div className="flex items-center justify-center">
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 z-10 px-4 py-2 text-xl font-bold text-gray-600 hover:text-teal-600 dark:text-white"
//             >
//               ⬅
//             </button>

//             <motion.div
//               key={current}
//               className="w-full sm:w-[500px] bg-gray-100 dark:bg-gray-800 p-6 mx-8 rounded-lg shadow-lg text-center"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="mb-4 flex justify-center">
//                 {services[current].icon}
//               </div>
//               <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
//                 {services[current].title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300">
//                 {services[current].description}
//               </p>
//             </motion.div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 z-10 px-4 py-2 text-xl font-bold text-gray-600 hover:text-teal-600 dark:text-white"
//             >
//               ➡
//             </button>
//           </div>

//           {/* Dots */}
//           <div className="mt-6 flex justify-center space-x-2">
//             {services.map((_, index) => (
//               <span
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-3 w-3 rounded-full cursor-pointer ${
//                   index === current
//                     ? "bg-teal-500"
//                     : "bg-gray-400 dark:bg-gray-600"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//---------------------------------------------------------------------------
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaWalking,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaBriefcaseMedical,
  FaSpa,
  FaCogs,
  FaBalanceScale,
  FaSmile,
} from "react-icons/fa";

const services = [
  {
    title: "Physiotherapy",
    description: "Restore movement and relieve pain with expert care.",
    icon: <FaWalking className="text-3xl text-teal-500" />,
  },
  {
    title: "Rehabilitation",
    description: "Support for surgery/injury recovery with tailored plans.",
    icon: <FaHandsHelping className="text-3xl text-teal-500" />,
  },
  {
    title: "Chronic Pain Relief",
    description: "Treatment for arthritis, migraines, and persistent pain.",
    icon: <FaHeartbeat className="text-3xl text-teal-500" />,
  },
  {
    title: "Consultation",
    description: "1-on-1 expert consultation for personalized care.",
    icon: <FaStethoscope className="text-3xl text-teal-500" />,
  },
  {
    title: "Sports Therapy",
    description: "Injury prevention and performance boosting for athletes.",
    icon: <FaUserMd className="text-3xl text-teal-500" />,
  },
  {
    title: "Workplace Ergonomics",
    description: "Posture correction & injury prevention at the workplace.",
    icon: <FaBriefcaseMedical className="text-3xl text-teal-500" />,
  },
  {
    title: "Massage Therapy",
    description: "Relaxing and therapeutic massages by trained professionals.",
    icon: <FaSpa className="text-3xl text-teal-500" />,
  },
  {
    title: "Postural Correction",
    description: "Improving posture for long-term spine and joint health.",
    icon: <FaCogs className="text-3xl text-teal-500" />,
  },
  {
    title: "Balance & Mobility Training",
    description: "Helping seniors and others improve walking & balance.",
    icon: <FaBalanceScale className="text-3xl text-teal-500" />,
  },
  {
    title: "Wellness Coaching",
    description: "Mind-body wellness plans for overall physical health.",
    icon: <FaSmile className="text-3xl text-teal-500" />,
  },
];

export default function ServicesSection({ id = "services" }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          className="text-lg text-teal-600 font-semibold uppercase tracking-wide mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Trusted Physiotherapy in Ontario
        </motion.p>

        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services We Provide
        </motion.h2>

        <div className="relative overflow-hidden mt-10">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 px-4 py-2 text-xl font-bold text-gray-600 hover:text-teal-600 dark:text-white"
            >
              ⬅
            </button>

            <motion.div
              key={current}
              className="w-full sm:w-[500px] bg-gray-100 dark:bg-gray-800 p-6 mx-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4 flex justify-center">
                {services[current].icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {services[current].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {services[current].description}
              </p>
            </motion.div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 px-4 py-2 text-xl font-bold text-gray-600 hover:text-teal-600 dark:text-white"
            >
              ➡
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {services.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${
                  index === current
                    ? "bg-teal-500 scale-110"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
