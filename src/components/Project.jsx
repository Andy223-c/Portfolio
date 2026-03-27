import React from "react";
import { motion } from "framer-motion";

import { fadeUp } from "../data/Transition";
import { projects } from "../data/AllData";
function Project() {
  return (
    /* Changed bg-linear... to bg-transparent so index.css handles the toggle */
    <section
      id="project"
      className="min-h-screen pb-24 pt-9 bg-transparent text-slate-900 dark:text-white px-4 md:px-10 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <motion.div {...fadeUp(0.2)} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm mt-2">
            A showcase of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeUp(0.1 * index)}
              /* Fixed background for Light/Dark mode */
              className="bg-white dark:bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-gray-800 hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-slate-100 dark:bg-white/10 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
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
