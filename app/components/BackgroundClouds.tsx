"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export const BackgroundClouds = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cloudX = useSpring(cursorX, { damping: 25, stiffness: 100 });
  const cloudY = useSpring(cursorY, { damping: 25, stiffness: 100 });

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // не двигаем курсор на мобилках
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isMobile]);

  const colors =
    theme === "dark"
      ? {
          bigCloud: "rgba(255, 191, 64, 0.8)",
          mediumCloud: "rgba(255, 206, 84, 0.9)",
          smallCloud: "rgba(255, 220, 120, 1.0)",
        }
      : {
          bigCloud: "rgba(50, 50, 50, 0.6)",
          mediumCloud: "rgba(30, 30, 30, 0.7)",
          smallCloud: "rgba(20, 20, 20, 0.8)",
        };

  return (
    <>
      {/* Большое облако */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          translateX: isMobile ? "50%" : cloudX,
          translateY: isMobile ? "50%" : cloudY,
          x: "-50%",
          y: "-50%",
          borderRadius: "50%",
          filter: "blur(120px)",
          background: `radial-gradient(circle at center, ${colors.bigCloud} 0%, transparent 80%)`,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
    </>
  );
};
