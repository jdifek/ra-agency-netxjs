"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export const CustomCursor = () => {
  const { theme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Облако следует с задержкой
  const cloudX = useSpring(cursorX, { damping: 25, stiffness: 100 });
  const cloudY = useSpring(cursorY, { damping: 25, stiffness: 100 });
  
  // Основной курсор более отзывчивый
  const followerX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const followerY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        setIsHovering(false);
      }
    };

    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  const colors =
    theme === "dark"
      ? {
          // Темная тема - более яркое и насыщенное золотистое свечение
          bigCloud: "rgba(255, 191, 64, 0.8)",
          mediumCloud: "rgba(255, 206, 84, 0.9)", 
          smallCloud: "rgba(255, 220, 120, 1.0)",
          cloudGlow: "rgba(255, 191, 64, 1.0)",
          mainBorder: "rgba(255, 200, 50, 1)",
          innerDot: "rgba(255, 255, 255, 1)",
        }
      : {
          // Светлая тема - более интенсивное темное облако
          bigCloud: "rgba(50, 50, 50, 0.6)",
          mediumCloud: "rgba(30, 30, 30, 0.7)",
          smallCloud: "rgba(20, 20, 20, 0.8)",
          cloudGlow: "rgba(0, 0, 0, 0.8)",
          mainBorder: "rgba(70, 70, 70, 1)",
          innerDot: "rgba(0, 0, 0, 1)",
        };

  return (
    <>
      {/* Большое облако на заднем фоне */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[0]"
        style={{
          translateX: cloudX,
          translateY: cloudY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? "700px" : "600px",
          height: isHovering ? "700px" : "600px",
          background: `radial-gradient(circle at center, ${colors.bigCloud} 0%, ${colors.bigCloud.replace(/[\d\.]+\)$/g, '0.3)')} 50%, transparent 80%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 1.0,
          transition: "width 0.4s ease, height 0.4s ease",
        }}
        animate={{
          scale: [0.7, 1.3, 0.7],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      />

      {/* Среднее облако */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[0]"
        style={{
          translateX: cloudX,
          translateY: cloudY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? "450px" : "400px",
          height: isHovering ? "450px" : "400px",
          background: `radial-gradient(circle at center, ${colors.mediumCloud} 0%, ${colors.mediumCloud.replace(/[\d\.]+\)$/g, '0.4)')} 60%, transparent 85%)`,
          borderRadius: "50%",
          filter: "blur(50px)",
          opacity: 0.9,
          transition: "width 0.3s ease, height 0.3s ease",
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Малое облако */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[0]"
        style={{
          translateX: followerX,
          translateY: followerY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? "250px" : "200px",
          height: isHovering ? "250px" : "200px",
          background: `radial-gradient(circle at center, ${colors.smallCloud} 0%, ${colors.smallCloud.replace(/[\d\.]+\)$/g, '0.5)')} 70%, transparent 90%)`,
          borderRadius: "50%",
          filter: "blur(30px)",
          opacity: 0.9,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
        animate={{
          scale: [0.9, 1.4, 0.9],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
      />

      {/* Светящееся кольцо */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[0]"
        style={{
          translateX: followerX,
          translateY: followerY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          borderRadius: "50%",
          border: `2px solid ${colors.mainBorder}`,
          background: "transparent",
          boxShadow: `0 0 20px ${colors.cloudGlow}, inset 0 0 20px ${colors.cloudGlow}`,
          transition: "all 0.3s ease",
        }}
        animate={{
          scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Основной курсор - маленькая точка */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[0]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
          width: isHovering ? "16px" : "12px",
          height: isHovering ? "16px" : "12px",
          borderRadius: "50%",
          background: colors.innerDot,
          boxShadow: `0 0 20px ${colors.cloudGlow}, 0 0 40px ${colors.cloudGlow}`,
          transition: "all 0.2s ease",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
      />
    </>
  );
};