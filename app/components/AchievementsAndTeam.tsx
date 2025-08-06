"use client";

import React from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Users, Eye, DollarSign, Activity } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

const icons = [Eye, Users, DollarSign, Activity];

const team = [
  { name: "Ruslan", avatar: "/avatars/nft1.png" },
  { name: "Anton", avatar: "/avatars/nft2.png" },
  { name: "Alex", avatar: "/avatars/nft3.png" },
  { name: "Nick", avatar: "/avatars/nft4.png" },
  { name: "Max", avatar: "/avatars/nft5.png" },
  { name: "Dan", avatar: "/avatars/nft6.png" },
  { name: "Eva", avatar: "/avatars/nft7.png" },
  { name: "Mia", avatar: "/avatars/nft8.png" },
  { name: "Anna", avatar: "/avatars/nft9.png" },
  { name: "Sara", avatar: "/avatars/nft10.png" },
  { name: "Lily", avatar: "/avatars/nft11.png" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AchievementItem = ({ icon: Icon, item, index }: any) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={clsx(
        "group p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        theme === "dark"
          ? "bg-white/5 text-white border border-white/10 hover:bg-white/10"
          : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
      )}
    >
      <Icon className="mx-auto w-8 h-8 mb-2 opacity-70 group-hover:text-amber-400 transition-colors" />
      <div className="text-3xl font-bold">
        {inView && <CountUp end={item.value} duration={2} separator="," />}
        {item.postfix}
      </div>
      <div className="text-sm mt-1 opacity-80">{item.label}</div>
      <div
        className={clsx(
          "text-xs mt-2",
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        )}
      >
        {item.description}
      </div>
    </motion.div>
  );
};

export const AchievementsAndTeam: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("achievements");
  const monthKey = new Date(
    new Date().setMonth(new Date().getMonth() - 1)
  )
    .toLocaleString("en-US", { month: "long" })
    .toLowerCase();
  const translatedMonth = t(`month.${monthKey}`);

  const achievements = [
    {
      label: t("items.0.label"),
      description: t("items.0.description"),
      postfix: t("items.0.postfix"),
      value: 6000000,
    },
    {
      label: t("items.1.label"),
      description: t("items.1.description"),
      postfix: t("items.1.postfix"),
      value: 27,
    },
    {
      label: t("items.2.label"),
      description: t("items.2.description"),
      postfix: t("items.2.postfix"),
      value: 540000,
    },
    {
      label: t("items.3.label"),
      description: t("items.3.description"),
      postfix: t("items.3.postfix"),
      value: 810000000,
    },
  ];
  return (
    <section
      id="achievements"
      className={clsx(
        "relative py-24 overflow-hidden",
        theme === "dark" ? "bg-black" : "bg-gray-50"
      )}
    >
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
          {t("title")}{" "}
          <span
            className={clsx(
              theme === "dark" ? "text-amber-400" : "text-amber-600"
            )}
          >
            {translatedMonth}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map((item, i) => (
            <AchievementItem key={i} icon={icons[i]} item={item} index={i} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={clsx(
            "text-3xl md:text-4xl font-light mt-24 mb-8 text-center",
            theme === "dark" ? "text-white" : "text-gray-900"
          )}
        >
          {t("team")}{" "}
        </motion.h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 }, // телефоны
            768: { slidesPerView: 3 }, // планшеты
            1280: { slidesPerView: 6 }, // десктопы
          }}
          className="!pb-8"
        >
          {team.map((member, i) => (
            <SwiperSlide key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-amber-500"
                />
                <div
                  className={clsx(
                    "text-sm font-medium",
                    theme === "dark" ? "text-white" : "text-gray-800"
                  )}
                >
                  {member.name}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
