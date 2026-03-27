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
      className="min-h-screen bg-transparent text-slate-900 dark:text-white px-6 pb-32 pt-20 md:px-10 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== TOP SECTION: HEADER ===== */}
        <motion.div {...fadeUp(0.2)} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Expertise
            </span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A combination of academic foundation, technical proficiency, and the
            soft skills required to build modern digital solutions.
          </p>
        </motion.div>

        {/* ===== MAIN CARD: DETAILS ===== */}
        <motion.div
          {...fadeUp(0.4)}
          className="bg-white dark:bg-gray-900/40 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Subtle Decorative Gradient Background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Main Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {/* Education */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
                <FaGraduationCap className="text-2xl" /> Education
              </h4>
              <div className="group p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all hover:border-indigo-500/30">
                <p className="font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {education.school}
                </p>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {education.duration}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Soft Skills
              </h4>
              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-slate-600 dark:text-gray-300 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-4 shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skill Set */}
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Skill Set
              </h4>
              <ul className="space-y-4">
                {skillSet.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-slate-600 dark:text-gray-300 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-4 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider and Footer Grid */}
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tech Stack Icons */}
            <div className="space-y-8">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white uppercase tracking-widest">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-5">
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
                  <motion.span
                    key={idx}
                    whileHover={{ y: -8, scale: 1.1 }}
                    className={`p-5 bg-slate-100 dark:bg-white/5 rounded-[1.5rem] text-3xl text-slate-600 dark:text-slate-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 ${item.color}`}
                  >
                    {item.icon}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Language Badges */}
            <div className="space-y-8">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white uppercase tracking-widest">
                Languages
              </h4>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col bg-slate-100 dark:bg-white/5 px-7 py-4 rounded-[1.5rem] border border-slate-200 dark:border-white/10 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <span className="font-black text-slate-800 dark:text-slate-100 text-lg">
                      {lang.name}
                    </span>
                    <span className="text-xs text-indigo-500 font-black uppercase tracking-[0.2em] mt-1">
                      {lang.level}
                    </span>
                  </motion.div>
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
