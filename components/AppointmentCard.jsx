//---------------------------------------------------------------------------
// "use client";

// import { useState } from "react";
// import {
//   FiSend,
//   FiCalendar,
//   FiClock,
//   FiMapPin,
//   FiUser,
//   FiMail,
//   FiPhone,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { supabase } from "@/lib/supabaseClient";

// export default function AppointmentSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     date: "",
//     time: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const loadingToast = toast.loading("Submitting your appointment...");

//     try {
//       // 1️⃣ Store data in Supabase
//       const { error } = await supabase.from("inquiries").insert([formData]);
//       if (error) throw error;

//       // 2️⃣ Send email notification
//       await fetch("/api/send-appointment-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       toast.success("Appointment booked successfully!", { id: loadingToast });

//       // 3️⃣ Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         dob: "",
//         date: "",
//         time: "",
//         address: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to submit appointment.", { id: loadingToast });
//     }
//   };

//   return (
//     <motion.section
//       id="appointment"
//       className="relative py-3 px-4 sm:px- lg:px-8 bg-white dark:bg-gray-900"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="mx-auto mt-1 w-full max-w-3xl px-3 py-5 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-800 dark:to-blue-600 p-5 rounded-t-xl text-center">
//           <h2 className="text-2xl font-bold text-white tracking-wide">
//             Book an Appointment
//           </h2>
//           <p className="text-blue-100 mt-1 text-sm">
//             Fill out your details and we’ll reach out shortly.
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
//         >
//           {[
//             {
//               label: "Full Name",
//               name: "name",
//               type: "text",
//               icon: FiUser,
//               placeholder: "Your full name",
//             },
//             {
//               label: "Email",
//               name: "email",
//               type: "email",
//               icon: FiMail,
//               placeholder: "you@example.com",
//             },
//             {
//               label: "Phone",
//               name: "phone",
//               type: "tel",
//               icon: FiPhone,
//               placeholder: "123-456-7890",
//             },
//             {
//               label: "Date of Birth",
//               name: "dob",
//               type: "date",
//               icon: FiCalendar,
//             },
//             {
//               label: "Appointment Date",
//               name: "date",
//               type: "date",
//               icon: FiCalendar,
//             },
//             {
//               label: "Time",
//               name: "time",
//               type: "time",
//               icon: FiClock,
//             },
//             {
//               label: "Address",
//               name: "address",
//               type: "text",
//               icon: FiMapPin,
//               placeholder: "Your address",
//             },
//           ].map((field, idx) => (
//             <div key={idx}>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 {field.label}
//               </label>
//               <div className="relative">
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder || ""}
//                   required
//                   className="w-full px-4 py-2 pl-10 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 />
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <field.icon className="h-4 w-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Message Field */}
//           <div className="col-span-1 md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Message / Concern
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={3}
//               placeholder="Your message here..."
//               required
//               className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 font-medium rounded-lg shadow-lg transition-transform hover:scale-105"
//             >
//               Send Inquiry <FiSend className="animate-pulse" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </motion.section>
//   );
// }
//-------------------------------------------------
// "use client";

// import { useState } from "react";
// import {
//   FiSend,
//   FiCalendar,
//   FiClock,
//   FiMapPin,
//   FiUser,
//   FiMail,
//   FiPhone,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { supabase } from "@/lib/supabaseClient";

// export default function AppointmentSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     date: "",
//     time: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const loadingToast = toast.loading("Submitting your appointment...");

//     // 1️⃣ Store in Supabase
//     const { error } = await supabase.from("inquiries").insert([formData]);
//     if (error) {
//       toast.error("Failed to save appointment. Try again later.", { id: loadingToast });
//       return;
//     }

//     // 2️⃣ Send Email via API route
//     const emailRes = await fetch("/api/send-appointment-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!emailRes.ok) {
//       toast.error("Appointment saved, but email failed to send.", { id: loadingToast });
//       return;
//     }

//     toast.success("Appointment booked & email sent successfully!", { id: loadingToast });

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       dob: "",
//       date: "",
//       time: "",
//       address: "",
//       message: "",
//     });
//   };

//   return (
//     <motion.section
//       id="appointment"
//       className="relative py-3 px-4 sm:px- lg:px-8 bg-white dark:bg-gray-900"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="mx-auto mt-1 w-full max-w-3xl px-3 py-5 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
//         <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-800 dark:to-blue-600 p-5 rounded-t-xl text-center">
//           <h2 className="text-2xl font-bold text-white tracking-wide">
//             Book an Appointment
//           </h2>
//           <p className="text-blue-100 mt-1 text-sm">
//             Fill out your details and we’ll reach out shortly.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
//         >
//           {[
//             {
//               label: "Full Name",
//               name: "name",
//               type: "text",
//               icon: FiUser,
//               placeholder: "Your full name",
//             },
//             {
//               label: "Email",
//               name: "email",
//               type: "email",
//               icon: FiMail,
//               placeholder: "you@example.com",
//             },
//             {
//               label: "Phone",
//               name: "phone",
//               type: "tel",
//               icon: FiPhone,
//               placeholder: "123-456-7890",
//             },
//             {
//               label: "Date of Birth",
//               name: "dob",
//               type: "date",
//               icon: FiCalendar,
//             },
//             {
//               label: "Appointment Date",
//               name: "date",
//               type: "date",
//               icon: FiCalendar,
//             },
//             {
//               label: "Time",
//               name: "time",
//               type: "time",
//               icon: FiClock,
//             },
//             {
//               label: "Address",
//               name: "address",
//               type: "text",
//               icon: FiMapPin,
//               placeholder: "Your address",
//             },
//           ].map((field, idx) => (
//             <div key={idx}>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 {field.label}
//               </label>
//               <div className="relative">
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder || ""}
//                   required
//                   className="w-full px-4 py-2 pl-10 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//                 />
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <field.icon className="h-4 w-4 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="col-span-1 md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Message / Concern
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={3}
//               placeholder="Your message here..."
//               required
//               className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
//             />
//           </div>

//           <div className="col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 font-medium rounded-lg shadow-lg transition-transform hover:scale-105"
//             >
//               Send Inquiry <FiSend className="animate-pulse" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </motion.section>
//   );
// }


"use client";

import { useState } from "react";
import {
  FiSend,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    date: "",
    time: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Submitting your appointment...");

    try {
      // 1️⃣ Store in Supabase
      const { error } = await supabase.from("inquiries").insert([formData]);
      if (error) throw new Error("Failed to save appointment.");

      // 2️⃣ Send Email via API route
      const emailRes = await fetch("/api/physio-news/send-appointment-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!emailRes.ok) {
        toast.error("Appointment saved, but email failed to send.", {
          id: loadingToast,
        });
        return;
      }

      toast.success("Appointment booked & email sent successfully!", {
        id: loadingToast,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        date: "",
        time: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to book appointment.", { id: loadingToast });
    }
  };

  return (
    <motion.section
      id="appointment"
      className="relative py-3 px-4 sm:px- lg:px-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto mt-1 w-full max-w-3xl px-3 py-5 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-800 dark:to-blue-600 p-5 rounded-t-xl text-center">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Book an Appointment
          </h2>
          <p className="text-blue-100 mt-1 text-sm">
            Fill out your details and we’ll reach out shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              icon: FiUser,
              placeholder: "Your full name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              icon: FiMail,
              placeholder: "you@example.com",
            },
            {
              label: "Phone",
              name: "phone",
              type: "tel",
              icon: FiPhone,
              placeholder: "123-456-7890",
            },
            {
              label: "Date of Birth",
              name: "dob",
              type: "date",
              icon: FiCalendar,
            },
            {
              label: "Appointment Date",
              name: "date",
              type: "date",
              icon: FiCalendar,
            },
            {
              label: "Time",
              name: "time",
              type: "time",
              icon: FiClock,
            },
            {
              label: "Address",
              name: "address",
              type: "text",
              icon: FiMapPin,
              placeholder: "Your address",
            },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {field.label}
              </label>
              <div className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  required
                  className="w-full px-4 py-2 pl-10 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <field.icon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message / Concern
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Your message here..."
              required
              className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 font-medium rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              Send Inquiry <FiSend className="animate-pulse" />
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
