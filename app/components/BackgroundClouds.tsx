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
    if (isMobile) return;
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isMobile]);

  const colors = theme === "dark" 
    ? {
        primary: "#ff6b35",
        secondary: "#f7931e", 
        accent: "#ffcd3c",
        gradient1: "#ff8a65",
        gradient2: "#ffb74d",
        gradient3: "#ffd54f"
      }
    : {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#a8edea", 
        gradient1: "#f093fb",
        gradient2: "#f5576c",
        gradient3: "#4facfe"
      };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* Главное переливающееся облачко */}
      <motion.div
        className="absolute w-[800px] h-[800px]"
        style={{
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
        animate={{
          // Только движение по экрану, без scale
          x: ["5vw", "75vw", "45vw", "85vw", "25vw", "65vw", "5vw"],
          y: ["10vh", "70vh", "25vh", "85vh", "40vh", "15vh", "10vh"],
          // Яркие переливы цветов
          background: [
            `radial-gradient(circle, ${colors.primary}90 0%, ${colors.secondary}70 25%, ${colors.accent}50 50%, ${colors.gradient1}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.secondary}90 0%, ${colors.accent}70 25%, ${colors.gradient1}50 50%, ${colors.gradient2}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.accent}90 0%, ${colors.gradient1}70 25%, ${colors.gradient2}50 50%, ${colors.gradient3}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.gradient1}90 0%, ${colors.gradient2}70 25%, ${colors.gradient3}50 50%, ${colors.primary}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.gradient2}90 0%, ${colors.gradient3}70 25%, ${colors.primary}50 50%, ${colors.secondary}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.gradient3}90 0%, ${colors.primary}70 25%, ${colors.secondary}50 50%, ${colors.accent}30 75%, transparent 100%)`,
            `radial-gradient(circle, ${colors.primary}90 0%, ${colors.secondary}70 25%, ${colors.accent}50 50%, ${colors.gradient1}30 75%, transparent 100%)`
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      {/* Второе облачко для усиления эффекта */}
      <motion.div
        className="absolute w-[600px] h-[600px]"
        style={{
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
        animate={{
          // Движение в другом направлении
          x: ["80vw", "15vw", "60vw", "30vw", "85vw", "40vw", "80vw"],
          y: ["80vh", "30vh", "70vh", "20vh", "60vh", "85vh", "80vh"],
          background: [
            `radial-gradient(circle, ${colors.accent}80 0%, ${colors.gradient1}60 30%, ${colors.gradient2}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.gradient1}80 0%, ${colors.gradient2}60 30%, ${colors.gradient3}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.gradient2}80 0%, ${colors.gradient3}60 30%, ${colors.primary}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.gradient3}80 0%, ${colors.primary}60 30%, ${colors.secondary}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.primary}80 0%, ${colors.secondary}60 30%, ${colors.accent}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.secondary}80 0%, ${colors.accent}60 30%, ${colors.gradient1}40 60%, transparent 90%)`,
            `radial-gradient(circle, ${colors.accent}80 0%, ${colors.gradient1}60 30%, ${colors.gradient2}40 60%, transparent 90%)`
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Третье маленькое облачко */}
      <motion.div
        className="absolute w-[400px] h-[400px]"
        style={{
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
        animate={{
          x: ["50vw", "20vw", "70vw", "90vw", "10vw", "60vw", "50vw"],
          y: ["50vh", "90vh", "20vh", "60vh", "80vh", "30vh", "50vh"],
          background: [
            `radial-gradient(circle, ${colors.gradient1}85 0%, ${colors.gradient2}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.gradient2}85 0%, ${colors.gradient3}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.gradient3}85 0%, ${colors.primary}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.primary}85 0%, ${colors.secondary}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.secondary}85 0%, ${colors.accent}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.accent}85 0%, ${colors.gradient1}65 40%, transparent 80%)`,
            `radial-gradient(circle, ${colors.gradient1}85 0%, ${colors.gradient2}65 40%, transparent 80%)`
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Интерактивное облачко для курсора */}
      {!isMobile && (
        <motion.div
          className="absolute w-[500px] h-[500px]"
          style={{
            left: cloudX,
            top: cloudY,
            x: "-50%",
            y: "-50%",
            borderRadius: "50%",
            filter: "blur(110px)",
          }}
          animate={{
            background: [
              `radial-gradient(circle, ${colors.primary}75 0%, ${colors.secondary}55 40%, ${colors.accent}35 70%, transparent 100%)`,
              `radial-gradient(circle, ${colors.secondary}75 0%, ${colors.accent}55 40%, ${colors.gradient1}35 70%, transparent 100%)`,
              `radial-gradient(circle, ${colors.accent}75 0%, ${colors.gradient1}55 40%, ${colors.gradient2}35 70%, transparent 100%)`,
              `radial-gradient(circle, ${colors.gradient1}75 0%, ${colors.gradient2}55 40%, ${colors.primary}35 70%, transparent 100%)`
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
      )}

    </div>
  );
};