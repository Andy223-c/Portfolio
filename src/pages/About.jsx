import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";

function About() {
  return (
    <section
      id="about"
      // Reduced py-16 to py-10 and removed h-screen to let it be more compact
      className="relative min-h-fit bg-transparent text-slate-900 dark:text-white flex items-center transition-colors duration-500 overflow-hidden py-10 lg:py-12"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 w-full">
        {" "}
        {/* Reduced max-w to 4xl */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT CONTAINER */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
            {/* 1. ABOUT ME BADGE - Smaller text and padding */}
            <motion.div
              {...slideLeft(0.2)}
              className="bg-indigo-600 dark:bg-indigo-500/20 px-4 py-1 rounded-full w-fit mx-auto lg:mx-0 shadow-sm border border-indigo-500/20"
            >
              <h2 className="text-[10px] font-black uppercase tracking-widest text-white dark:text-indigo-300">
                About me
              </h2>
            </motion.div>

            {/* 2. MOBILE IMAGE - Smaller (w-36 h-48) */}
            <motion.div
              {...slideRight(0.3)}
              className="lg:hidden flex justify-center"
            >
              <div className="relative bg-white dark:bg-gray-900 p-1.5 rounded-[25px] shadow-xl border border-slate-200 dark:border-gray-800">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="rounded-[20px] w-36 h-48 object-cover"
                />
              </div>
            </motion.div>

            {/* 3. TEXT CONTENT - Reduced font sizes */}
            <div className="space-y-3">
              <motion.p
                {...fadeUp(0.3)}
                className="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100 leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Heng Andy.
                </span>
              </motion.p>

              <motion.p
                {...fadeUp(0.4)}
                className="text-sm md:text-base text-slate-600 dark:text-gray-400 font-medium"
              >
                UI/UX Designer & Frontend Developer based in Phnom Penh.
              </motion.p>

              <motion.p
                {...fadeUp(0.5)}
                className="text-[13px] md:text-sm text-slate-500 dark:text-gray-400 leading-relaxed italic border-l-2 border-indigo-500 pl-4 bg-slate-100/50 dark:bg-white/5 py-3 pr-4 rounded-r-lg max-w-lg mx-auto lg:mx-0"
              >
                My objective: Challenge myself in a new environment, learn,
                develop, and contribute meaningfully to innovative projects.
              </motion.p>
            </div>
          </div>

          {/* 4. DESKTOP IMAGE - Smaller (w-56 h-72) */}
          <motion.div
            {...slideRight(0.3)}
            className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-indigo-500/10 rounded-[30px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-white dark:bg-gray-900 p-2 rounded-[30px] shadow-xl border border-slate-200 dark:border-gray-800">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="rounded-[22px] w-56 h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
