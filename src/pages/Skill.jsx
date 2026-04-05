import React from "react";
import { motion } from "framer-motion";
import { education, languages, skillSet, softSkills } from "../data/AllData";
import { FaCss3, FaHtml5, FaReact, FaGraduationCap } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeUp } from "../data/Transition";

function Skill() {
  return (
    <section
      id="skill"
      // lg:h-screen keeps it strictly to one screen on desktop
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center bg-transparent text-slate-900 dark:text-white px-4 py-10 lg:py-0 transition-colors duration-500"
    >
      {/* 1. NARROWER WIDTH: Changed max-w-7xl to max-w-5xl */}
      <div className="max-w-5xl mx-auto w-full">
        {/* HEADER: Reduced margins and font size */}
        <motion.div {...fadeUp(0.2)} className="text-center mb-6 lg:mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Expertise
            </span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Academic foundation and technical proficiency.
          </p>
        </motion.div>

        {/* ===== MAIN CARD ===== */}
        <motion.div
          {...fadeUp(0.4)}
          // 2. REDUCED PADDING: From p-14 down to p-6/p-8
          className="bg-white dark:bg-gray-900/40 backdrop-blur-2xl p-3 md:p-8 rounded-[2rem] shadow-xl border border-slate-200 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Main Info Grid: Reduced Gap from 12 to 6 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Education */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                <FaGraduationCap className="text-lg" /> Education
              </h4>
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:scale-105 duration-300 transition-transform">
                <p className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight">
                  {education.school}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">
                  {education.duration}
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Soft Skills
              </h4>
              <ul className="space-y-2">
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-slate-600 dark:text-gray-300  hover:-rotate-y-12 duration-300 transition-transform cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Set */}
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Skill Set
              </h4>
              <ul className="space-y-2">
                {skillSet.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-slate-600 dark:text-gray-300  hover:-rotate-y-12 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. TIGHTENED FOOTER: Reduced margin-top and padding-top */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tech Stack: Smaller icons */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: <FaReact />, color: "hover:text-cyan-400" },
                  { icon: <RiTailwindCssLine />, color: "hover:text-sky-400" },
                  { icon: <FaHtml5 />, color: "hover:text-orange-500" },
                  { icon: <FaCss3 />, color: "hover:text-blue-500" },
                  { icon: <BsJavascript />, color: "hover:text-yellow-400" },
                  {
                    icon: <TbBrandFramerMotion />,
                    color: "hover:text-pink-500",
                  },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className={`p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl  duration-300 text-xl text-slate-600 dark:text-slate-400 hover:rotate-12 hover:-translate-y-1 hover:shadow-lg transition-all ease-in-out ${item.color}`}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages: Smaller badges */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 dark:bg-white/5 px-3 py-1 hover:scale-105 duration-300 transition-transform cursor-pointer rounded-lg border border-slate-200 dark:border-white/10"
                  >
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-100">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
