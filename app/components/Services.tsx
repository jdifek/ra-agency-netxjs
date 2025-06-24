"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Megaphone, FileText, BarChart, Brain } from "lucide-react";

const services = [
  {
    title: "Telegram Ads",
    description:
      "Створення та управління рекламними кампаніями в Telegram для максимального охоплення.",
    icon: Megaphone,
    label: "Реклама",
  },
  {
    title: "Контент-маркетинг",
    description:
      "Розробка якісного контенту для залучення та утримання аудиторії.",
    icon: FileText,
    label: "Контент",
  },
  {
    title: "Аналітика",
    description:
      "Глибокий аналіз даних для оптимізації маркетингових стратегій.",
    icon: BarChart,
    label: "Дані",
  },
  {
    title: "Стратегічний консалтинг",
    description: "Індивідуальні стратегії для просування вашого бренду.",
    icon: Brain,
    label: "Стратегія",
  },
];

export const Services: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={clsx(
        "relative py-24 overflow-hidden",
        theme === "dark" ? "bg-black" : "bg-gray-100"
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={clsx(
            "text-4xl md:text-5xl font-light mb-12 text-center leading-tight",
            theme === "dark" ? "text-white" : "text-gray-900"
          )}
        >
          Наші Послуги
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={clsx(
                  "group p-6 rounded-2xl border shadow-sm transition-all duration-300 cursor-default",
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-md"
                    : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-md"
                )}
              >
                <div className="flex flex-col items-start space-y-4">
                  <div
                    className={clsx(
                      "w-12 h-12 flex items-center justify-center rounded-full transition-colors",
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-gray-100 text-gray-800",
                      "group-hover:scale-105"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span
                      className={clsx(
                        "text-xs font-semibold uppercase tracking-wide",
                        theme === "dark" ? "text-amber-400" : "text-amber-600"
                      )}
                    >
                      {service.label}
                    </span>
                    <h3
                      className={clsx(
                        "text-lg font-bold mt-1",
                        theme === "dark" ? "text-white" : "text-gray-900"
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={clsx(
                      "text-sm leading-relaxed",
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
