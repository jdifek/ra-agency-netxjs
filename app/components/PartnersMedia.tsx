// PartnersMedia.tsx
"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const logosPartners = [
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",

];

const logosMedia = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/768px-Forbes_logo.svg.png?20240111043940",
];


export const PartnersMedia: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "max-w-7xl mx-auto px-6 py-20",
        theme === "dark" ? " text-white" : " text-gray-900"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-semibold mb-12 text-center",
          theme === "dark" ? "text-white" : "text-gray-900"
        )}
      >
        Наші партнери
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
        {logosPartners.map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center"
          >
            <Image
           width={66}
           height={66}
              src={logo}
              alt={`Партнер ${i + 1}`}
              className="max-h-16 object-contain filter grayscale hover:filter-none transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      <h2
        className={clsx(
          "text-3xl font-semibold mt-20 mb-12 text-center",
          theme === "dark" ? "text-white" : "text-gray-900"
        )}
      >
        ЗМІ про нас
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
        {logosMedia.map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
                  width={96}
                  height={96}
              src={logo}
              alt={`ЗМІ ${i + 1}`}
              className="max-h-12 object-contain filter grayscale hover:filter-none transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
