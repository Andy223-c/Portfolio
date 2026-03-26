import React from "react";
import {
  education,
  languages,
  projects,
  skillSet,
  softSkills,
} from "../data/AllData";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="bg-linear-to-r from-purple-500 to-indigo-500 px-6 py-2 rounded-full w-fit mb-6">
              <h2 className="text-lg font-semibold">About me</h2>
            </div>

            <p className="text-gray-300 mb-4">
              Hi, my name is Heng Andy.
            </p>

            <p className="text-gray-400 mb-4">
              I am a UI/UX Designer / Frontend Developer based in Hanoi, Viet
              Nam with experience through projects and subjects in university.
            </p>

            <p className="text-gray-400">
              My objective: Challenge myself in a new environment, learn,
              develop, improve my skills through different projects and
              contribute more to the company with my abilities.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="bg-linear-to-tr from-cyan-500 to-blue-500 p-2 rounded-[40px] shadow-xl">
              <img
                src="/profile.jpg"
                alt="profile"
                className="rounded-[35px] w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Projecj */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              My <span className="text-orange-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              A showcase of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.desc}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom Card ===== */}
        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-lg">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Education</h4>
              <p className="text-sm text-gray-300">{education.school}</p>
              <p className="text-xs text-gray-400 mt-2">{education.duration}</p>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {softSkills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* Skill Set */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Skill Set</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {skillSet.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Extra Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Technical Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <FaReact />{" "}
                </span>
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <RiTailwindCssLine />{" "}
                </span>
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <FaHtml5 />
                </span>
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <FaCss3 />{" "}
                </span>
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <BsJavascript />{" "}
                </span>
                <span className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition duration-300 hover:scale-90">
                  {" "}
                  <TbBrandFramerMotion />{" "}
                </span>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Language</h4>
              <div className="space-y-2 text-sm text-gray-300">
                {languages.map((lang, index) => (
                  <p key={index}>
                    {lang.name} ({lang.level})
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
