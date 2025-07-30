// // components/ui/GlassSection.jsx
// "use client";
// import { cn } from "@/lib/utils";

// export default function GlassSection({ children, className, id }) {
//   return (
//     <section
//       id={id}
//       className={cn(
//         "relative z-0 py-16 px-6 sm:px-10 rounded-xl shadow-xl border border-white/10 backdrop-blur-md bg-white/70 dark:bg-white/5 dark:border-white/10 transition-colors duration-500",
//         className
//       )}
//     >
//       {children}
//     </section>
//   );
// }
// components/ui/GlassSection.jsx
"use client";
import { cn } from "@/lib/utils";

export default function GlassSection({ children, className, id }) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-0 py-10 px-6 sm:px-10 rounded-2xl shadow-lg border border-white/10 backdrop-blur-xl bg-white/70 dark:bg-white/5 dark:border-white/10 transition-all duration-500",
        className
      )}
    >
      {children}
    </section>
  );
}
