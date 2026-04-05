import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/AllData";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";

function Hero() {
  const { name, role, description, image } = heroData;

  return (
    <section
      id="home"
      // Reduced padding (py-12 instead of py-20) and kept min-h-screen for flexibility
      className="relative w-full min-h-screen lg:h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white flex items-center justify-center transition-colors duration-500 py-12 lg:py-0"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* RIGHT IMAGE (Top on mobile) */}
        <motion.div
          {...slideRight(0.2)}
          className="flex justify-center w-full relative order-first md:order-last mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full dark:block hidden"></div>

          {/* Slashed image size: w-48 on mobile, w-[300px] on desktop */}
          <div className="relative w-48 h-48 md:w-[400px] md:h-[400px] shrink-0">
            <img
              src={image}
              alt="hero"
              className="z-10 w-full h-full rounded-[2rem] object-cover border-2 border-white dark:border-gray-900 shadow-xl transition-all duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
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
              // Tightened font size from 7xl to 5xl/6xl
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

          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-2.5"
          >
            <a
              href="#about"
              className="px-6 py-2.5 bg-indigo-600 text-white font-bold text-[11px] rounded-lg hover:bg-indigo-700 shadow-md transition-all uppercase tracking-widest"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white font-bold text-[11px] rounded-lg hover:bg-white/5 transition-all uppercase tracking-widest"
            >
              Contact
            </a>
          </motion.div>

          {/* SOCIAL ICONS - Smaller icons and gap */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex justify-center md:justify-start gap-5 pt-1 text-slate-400 dark:text-gray-500 text-xl z-40"
          >
            {[
              { icon: <BsFacebook />, link: "#" },
              { icon: <BsTelegram />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaGithub />, link: "#" },
              { icon: <MdEmail />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="hover:text-indigo-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 block"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
