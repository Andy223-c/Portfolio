import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../data/Transition";
import { projects } from "../data/AllData";
import { FiGithub } from "react-icons/fi";
import { Link } from "@boxicons/react";
import { getTechIcon } from "../data/AllData"; 
function Project() {
  return (
    <section
      id="project"
      // Changed py-12 to pt-8 and items-center to items-start to move it up
      className="relative min-h-screen w-full flex items-start justify-center bg-transparent text-slate-900 dark:text-white px-4 pt-8 pb-20 md:px-10 transition-colors duration-500"
    >
      {/* Reduced max-w to 4xl to make the 2 columns feel "smaller" and tighter */}
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section: Reduced mb-10 to mb-6 to move grid up */}
        <motion.div {...fadeUp(0.2)} className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-[12px] mt-1">
            Recent digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid: Forced 2 columns on md+ and reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeUp(0.1 * index)}
              className="group bg-white dark:bg-gray-900/40 backdrop-blur-md rounded-[1.2rem] overflow-hidden shadow-sm border border-slate-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
            >
              {project.id !== 1 && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
                  >
                    {/* Pulsing Dot */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      On Processed
                    </span>
                  </motion.div>
                </div>
              )}
              {/* Image Container: Reduced to h-32 for a very compact look */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content Area: Tight p-4 */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 text-[10px] mb-3 leading-tight line-clamp-2">
                  {project.desc}
                </p>

                {/* Footer Section */}
                <div className="flex items-end justify-between gap-2 pt-3 border-t border-slate-100 dark:border-white/5">
                  {/* Left: Tech Tags */}
                  <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        {/* Icon */}
                        <i
                          className={`${getTechIcon(tech)} text-lg text-indigo-400 dark:text-indigo-300`}
                        ></i>

                        {/* Label */}
                        <span className="text-[8px] uppercase font-bold bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-indigo-300/60 px-2 py-0.5 rounded border border-slate-100 dark:border-white/5">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="flex gap-1.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg border border-slate-200 dark:border-gray-700 text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-90"
                      >
                        <FiGithub size={24} />
                      </a>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-90"
                      >
                        <Link size={24} />
                      </a>
                    </div>

                    <div className="flex gap-2 text-[9px] font-black uppercase tracking-tighter text-slate-400 dark:text-gray-500">
                      <span>GitHub Link</span>
                      <span>Link Demo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
