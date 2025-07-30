"use client";

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import ContactSection from "@/components/ContactSection";
import WeatherClock from "@/components/WeatherClock";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
//import ContactCTA from "@/components/ContactCTA";
import AppointmentCard from "@/components/AppointmentCard";
import TrustBanner from "@/components/TrustBanner";
import FAQSection from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-black">
        <HeroSection />
        <TrustBanner />
        <AboutSection id="about" />
        <ServicesSection id="services" />
        {/* <ContactCTA/> */}
        <FAQSection />
        <AreasSection id="areas" />
        <AppointmentCard />

        <ContactSection id="contact" />

        {/* Optional Weather & Clock & news at bottom */}
        <div className="py-10 flex justify-center bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-row gap-8 w-full max-w-6xl px-4 items-center">
            <div className="flex-1 flex justify-center">
              <WeatherClock />
            </div>
            <div className="flex-1 flex justify-center">
              <NewsSection />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

// "use client";

// import Navbar from "@/components/Navbar";
// import AboutSection from "@/components/AboutSection";
// import ServicesSection from "@/components/ServicesSection";
// import AreasSection from "@/components/AreasSection";
// import ContactSection from "@/components/ContactSection";
// import WeatherClock from "@/components/WeatherClock";

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white">

//         {/* ✅ Hero Section */}
//         <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-500 to-teal-500">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
//             Welcome to Therafy
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl text-white">
//             A modern physiotherapy clinic focused on healing, mobility, and care — proudly serving Ontario.
//           </p>
//         </section>

//         {/* ✅ About Us */}
//         <AboutSection />

//         {/* ✅ Services We Provide */}
//         <ServicesSection />

//         {/* ✅ Areas We Serve */}
//         <AreasSection />

//         {/* ✅ Weather and Clock */}
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">Live Weather & Time</h2>
//             <WeatherClock />
//           </div>
//         </section>

//         {/* ✅ Contact Us */}
//         <ContactSection />

//       </main>
//     </>
//   );
// }
