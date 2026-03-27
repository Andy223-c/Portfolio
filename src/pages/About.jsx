import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-transparent text-slate-900 dark:text-white px-4 pb-44 pt-9 md:px-10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ===== TOP SECTION: BIO & IMAGE ===== */}
        {/* Changed gap and alignment for a cleaner look */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content (Bio) - Takes 7 columns on large screens */}
          <motion.div {...slideLeft(0.2)} className="lg:col-span-7 space-y-6">
            <div className="bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full w-fit shadow-md">
              <h2 className="text-lg font-bold text-white">About me</h2>
            </div>

            <div className="space-y-4">
              <motion.p
                {...fadeUp(0.3)}
                className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100"
              >
                Hi, my name is Heng Andy.
              </motion.p>

              <motion.p
                {...fadeUp(0.4)}
                className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed"
              >
                I am a UI/UX Designer / Frontend Developer based in Hanoi, Viet
                Nam.
              </motion.p>

              <motion.p
                {...fadeUp(0.5)}
                className="text-slate-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-indigo-500 pl-4 bg-slate-100/50 dark:bg-white/5 py-4 pr-4 rounded-r-xl"
              >
                My objective: Challenge myself in a new environment, learn,
                develop, improve my skills, and contribute meaningfully to
                innovative projects.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content (Image) - Takes 5 columns on large screens */}
          <motion.div
            {...slideRight(0.3)}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-tr from-cyan-500 to-blue-500 rounded-[40px] blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
              <div className="relative bg-white dark:bg-gray-800 p-3 rounded-[40px] shadow-2xl border border-slate-200 dark:border-gray-700">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="rounded-[30px] w-64 h-80 md:w-72 md:h-96 object-cover"
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
