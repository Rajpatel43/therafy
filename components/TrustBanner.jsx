// components/TrustBanner.jsx
import { FaCheckCircle } from "react-icons/fa";

export default function TrustBanner() {
  return (
    <section className="w-full py-7 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl p-10 backdrop-blur-lg bg-white/30 dark:bg-slate-900/40 shadow-xl border border-white/20 dark:border-slate-700/40">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-5">
            <FaCheckCircle className="text-emerald-500 dark:text-emerald-400 text-5xl shrink-0" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white leading-snug">
                Trusted Physiotherapy in Ontario
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl">
                Over 1,000+ patients trust Therafy for expert physiotherapy, personalized care, and results-driven recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
