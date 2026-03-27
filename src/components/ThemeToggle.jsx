import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "@boxicons/react"; // Ensure you have these icons installed
import { useTheme } from "../data/useTheme";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-slate-100 dark:bg-gray-800 text-indigo-600 dark:text-yellow-400 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm border border-slate-200 dark:border-gray-700"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: 90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? (
            <Moon className="text-2xl" />
          ) : (
            <Sun className="text-2xl" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;