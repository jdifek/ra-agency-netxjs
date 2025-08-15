"use client";

import React from "react";
import clsx from "clsx";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo3D } from "./Logo3D";

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("header"); // <== добавляем переводы из namespace "header"

  const navItems = [
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("cases"), href: "#cases" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md",
        theme === "dark" ? " border-gold/10" : "bg-white/10 border-gray-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            style={{
              width: 80,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Logo3D url="/2.glb" size={80} />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={clsx(
                  "transition-colors duration-300 hover:text-gold",
                  theme === "dark" ? "text-white/70" : "text-gray-600"
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <LanguageSwitcher />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
