"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";
import { fetchNews } from "@/lib/fetchNews"; // Import your function

export default function NewsSection({ id = "news" }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    setLoading(true);
    const data = await fetchNews();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
    const interval = setInterval(getNews, 20000); // Refresh every 20 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <FaNewspaper className="text-4xl text-teal-500" />
          </motion.div>
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest Physiotherapy News
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Stay updated with the latest health and physiotherapy updates.
          </p>
        </div>

        {/* News Grid */}
        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Loading news...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(0, 6).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg hover:scale-[1.02] transition"
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={item.image_url || "/images/news-placeholder.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                  {item.description || "No description available."}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block mt-4 text-teal-500 hover:underline font-medium"
                  rel="noopener noreferrer"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
