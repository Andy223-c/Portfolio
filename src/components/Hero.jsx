import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "../data/AllData";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";

function Hero() {
  const { name, role, description, image } = heroData;
  const [showIcons, setShowIcons] = useState(false);

  // Animation variants for the stagger effect
  const containerVars = {
    initial: { opacity: 0, y: -15, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 10,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 150,
        staggerChildren: 0.05, // This makes icons appear one by one
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const iconVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white flex items-center justify-center transition-colors duration-500 py-12 lg:py-0"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          {...slideRight(0.2)}
          className="flex justify-center w-full relative order-first md:order-last mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full dark:block hidden"></div>

          <motion.div
            className="relative w-48 h-48 md:w-[400px] md:h-[400px] shrink-0 overflow-hidden rounded-full"
            >
            <img
              src="/src/image/Pic.png"
              alt="hero"
              className="z-10 w-full h-full object-cover border-2 border-white dark:border-gray-900 shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          {...slideLeft(0.1)}
          className="space-y-4 z-30 relative text-center md:text-left"
        >
          <div className="space-y-1">
            <motion.h1
              {...fadeUp(0.2)}
              className="text-lg md:text-xl font-light tracking-widest text-slate-500 dark:text-slate-400 uppercase"
            >
              {name.split(" ")[0]}
            </motion.h1>
            <motion.h2
              {...fadeUp(0.3)}
              className="text-4xl md:text-6xl font-black text-indigo-600 dark:text-indigo-400 leading-none"
            >
              {name.split(" ")[1] || ""}
            </motion.h2>
            <p className="text-slate-400 dark:text-gray-500 pt-1 tracking-[0.2em] font-bold text-[9px] md:text-[10px] uppercase">
              {role}
            </p>
          </div>

          <motion.p
            {...fadeUp(0.4)}
            className="max-w-xs mx-auto md:mx-0 text-slate-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed"
          >
            {description}
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2.5 items-start">
            <a
              href="#about"
              className="px-6 py-2.5 bg-indigo-600 text-white font-bold text-[11px] rounded-lg hover:bg-indigo-700 shadow-md transition-all uppercase tracking-widest"
            >
              About Me
            </a>

            {/* CONTACT TOOLTIP WRAPPER */}
            <div className="relative flex flex-col items-center">
              <button
                onClick={() => setShowIcons(!showIcons)}
                className={`px-6 py-2.5 border font-bold text-[11px] rounded-lg transition-all uppercase tracking-widest z-50 ${
                  showIcons
                    ? "border-indigo-600 text-indigo-600"
                    : "border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white hover:bg-white/5"
                }`}
              >
                Contact
              </button>

              <AnimatePresence>
                {showIcons && (
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute top-full z-40 flex flex-col items-center"
                  >
                    {/* The Triangle Pointer */}
                    <div className="w-3 h-3 bg-indigo-600 rotate-45 mb-[-6px] "></div>

                    {/* The Pill Content */}
                    <div className="flex items-center gap-5 px-6 py-3 bg-indigo-600 rounded-2xl shadow-2xl shadow-indigo-500/50">
                      {[
                        { icon: <BsFacebook />, link: "#" },
                        { icon: <BsTelegram />, link: "#" },
                        { icon: <FaLinkedin />, link: "#" },
                        { icon: <FaGithub />, link: "#" },
                        { icon: <MdEmail />, link: "heng.andy.1223@gamil.com" },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          variants={iconVars}
                          href={social.link}
                          className="text-white text-xl hover:scale-125 transition-transform"
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
