// 'use client';

// import { useState } from 'react';
// import { Menu, X, User } from 'react-feather';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Image src="/favicon.ico" alt="Therafy" width={30} height={30} className="mr-2" />
//             <span className="text-xl font-bold text-blue-600 dark:text-blue-300">Therafy</span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               Home
//             </Link>
//             <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               About Us
//             </Link>
//             <Link href="/#services" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               Services
//             </Link>
//             <Link href="/#areas" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               Areas We Serve
//             </Link>
//             <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               Contact
//             </Link>
//             <Link href="/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               <User className="inline-block mr-1 w-5 h-5" />
//               Login / Signup
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
//               {isMobileMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2 shadow-md">
//           <Link href="/" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             Home
//           </Link>
//           <Link href="/about" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             About Us
//           </Link>
//           <Link href="/#services" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             Services
//           </Link>
//           <Link href="/#areas" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             Areas We Serve
//           </Link>
//           <Link href="/contact" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             Contact
//           </Link>
//           <Link href="/login" onClick={toggleMobileMenu} className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">
//             <User className="inline-block mr-1 w-5 h-5" />
//             Login / Signup
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
//---------------------------------------------------------------------------------

// components/Navbar.jsx
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Smooth scroll helper
//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     // Close menu on route change
//     const closeMenu = () => setMenuOpen(false);
//     window.addEventListener("resize", closeMenu);
//     return () => window.removeEventListener("resize", closeMenu);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
//           Therafy
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200 font-medium">
//           <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
//           <li><a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a></li>
//           <li><a href="#areas" onClick={(e) => handleScroll(e, "areas")}>Areas We Serve</a></li>
//           <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
//           <li className="relative group">
//             <FaUserCircle className="text-2xl cursor-pointer" />
//             <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow-lg rounded p-2 hidden group-hover:block z-50">
//               <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                 Patient Login
//               </Link>
//               <Link href="/login?role=doctor" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                 Doctor Login
//               </Link>
//               <Link href="/login?role=admin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                 Admin Login
//               </Link>
//             </div>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl text-gray-800 dark:text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-black px-6 pb-6 pt-2 space-y-3 text-center text-gray-700 dark:text-gray-200 font-medium">
//           <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
//           <a href="#services" onClick={(e) => handleScroll(e, "services")}>Services</a>
//           <a href="#areas" onClick={(e) => handleScroll(e, "areas")}>Areas We Serve</a>
//           <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
//           <Link href="/login">Patient Login</Link>
//           <Link href="/login?role=doctor">Doctor Login</Link>
//           <Link href="/login?role=admin">Admin Login</Link>
//         </div>
//       )}
//     </header>
//   );
// }
//-----------------------------------------------------------------
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaUserCircle, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
// import { GiStethoscope } from "react-icons/gi";
// import { MdAdminPanelSettings } from "react-icons/md";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false); // mobile menu
//   const [loginMenuOpen, setLoginMenuOpen] = useState(false); // login dropdown
//   const [isDark, setIsDark] = useState(false);

//   const handleScroll = (e, id) => {
//     e.preventDefault();
//     const section = document.getElementById(id);
//     section?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const toggleTheme = () => {
//     const html = document.documentElement;
//     html.classList.toggle("dark");
//     setIsDark(!isDark);
//     localStorage.setItem(
//       "theme",
//       html.classList.contains("dark") ? "dark" : "light"
//     );
//   };

//   useEffect(() => {
//     const userTheme = localStorage.getItem("theme");
//     const systemDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     const isDarkPreferred = userTheme === "dark" || (!userTheme && systemDark);
//     setIsDark(isDarkPreferred);
//     if (isDarkPreferred) document.documentElement.classList.add("dark");
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md transition-all duration-300">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-3xl font-bold text-blue-600 dark:text-cyan-400"
//         >
//           Therafy
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 items-center text-gray-800 dark:text-gray-100 font-medium">
//           <li>
//             <a
//               href="#about"
//               onClick={(e) => handleScroll(e, "about")}
//               className="hover:text-blue-500"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#services"
//               onClick={(e) => handleScroll(e, "services")}
//               className="hover:text-blue-500"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#areas"
//               onClick={(e) => handleScroll(e, "areas")}
//               className="hover:text-blue-500"
//             >
//               Areas We Serve
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               onClick={(e) => handleScroll(e, "contact")}
//               className="hover:text-blue-500"
//             >
//               Contact
//             </a>
//           </li>

//           {/* Login Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setLoginMenuOpen(true)}
//             onMouseLeave={() => setLoginMenuOpen(false)}
//           >
//             <FaUserCircle className="text-2xl cursor-pointer" />
//             {loginMenuOpen && (
//               <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded z-50 w-48">
//                 <Link
//                   href="/login"
//                   className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <FaUserCircle className="text-blue-500" /> Patient Login
//                 </Link>
//                 <Link
//                   href="/login?role=doctor"
//                   className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <GiStethoscope className="text-green-500" /> Doctor Login
//                 </Link>
//                 <Link
//                   href="/login?role=admin"
//                   className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <MdAdminPanelSettings className="text-red-500" /> Admin Login
//                 </Link>
//               </div>
//             )}
//           </li>

//           {/* Theme Toggle */}
//           <li>
//             <button
//               onClick={toggleTheme}
//               className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//               aria-label="Toggle Dark Mode"
//             >
//               {isDark ? (
//                 <FaSun className="text-yellow-400" />
//               ) : (
//                 <FaMoon className="text-gray-700" />
//               )}
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-gray-800 dark:text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-black px-6 pb-6 pt-2 space-y-4 text-center text-gray-800 dark:text-gray-100 font-medium">
//           <a href="#about" onClick={(e) => handleScroll(e, "about")}>
//             About
//           </a>
//           <a href="#services" onClick={(e) => handleScroll(e, "services")}>
//             Services
//           </a>
//           <a href="#areas" onClick={(e) => handleScroll(e, "areas")}>
//             Areas We Serve
//           </a>
//           <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
//             Contact
//           </a>
//           <Link
//             href="/login"
//             className="flex justify-center items-center gap-2"
//           >
//             <FaUserCircle className="text-blue-500" /> Patient Login
//           </Link>
//           <Link
//             href="/login?role=doctor"
//             className="flex justify-center items-center gap-2"
//           >
//             <GiStethoscope className="text-green-500" /> Doctor Login
//           </Link>
//           <Link
//             href="/login?role=admin"
//             className="flex justify-center items-center gap-2"
//           >
//             <MdAdminPanelSettings className="text-red-500" /> Admin Login
//           </Link>
//           <button
//             onClick={toggleTheme}
//             className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//           >
//             {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }
//----------------------------
"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaUserCircle, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-600 dark:text-cyan-400"
        >
          Therafy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 dark:text-gray-100 font-medium">
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="hover:text-blue-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#areas"
              onClick={(e) => handleScroll(e, "areas")}
              className="hover:text-blue-500"
            >
              Areas We Serve
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-blue-500"
            >
              Contact
            </a>
          </li>

          {/* Login Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <FaUserCircle className="text-2xl" />
            </div>
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded z-50 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserCircle className="text-blue-500" /> Patient Login
              </Link>
              <Link
                href="/login?role=doctor"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GiStethoscope className="text-green-500" /> Doctor Login
              </Link>
              <Link
                href="/login?role=admin"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdAdminPanelSettings className="text-red-500" /> Admin Login
              </Link>
            </div>
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-6 pt-2 space-y-4 text-center text-gray-800 dark:text-gray-100 font-medium">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="block py-2 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            className="block py-2 hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#areas"
            onClick={(e) => handleScroll(e, "areas")}
            className="block py-2 hover:text-blue-500"
          >
            Areas We Serve
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="block py-2 hover:text-blue-500"
          >
            Contact
          </a>
          <Link
            href="/login"
            className="flex justify-center items-center gap-2 py-2 hover:text-blue-500"
          >
            <FaUserCircle className="text-blue-500" /> Patient Login
          </Link>
          <Link
            href="/login?role=doctor"
            className="flex justify-center items-center gap-2 py-2 hover:text-green-500"
          >
            <GiStethoscope className="text-green-500" /> Doctor Login
          </Link>
          <Link
            href="/login?role=admin"
            className="flex justify-center items-center gap-2 py-2 hover:text-red-500"
          >
            <MdAdminPanelSettings className="text-red-500" /> Admin Login
          </Link>
          <button
            onClick={toggleTheme}
            className="w-full mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center gap-2"
          >
            {resolvedTheme === "dark" ? (
              <>
                <FaSun className="text-yellow-400" /> Light Mode
              </>
            ) : (
              <>
                <FaMoon /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
}

//------------------------------------------
