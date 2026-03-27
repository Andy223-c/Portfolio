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
      /* Removed mt-10 and used pt-24 to prevent the 'white gap' under the sticky header */
      className="w-full min-h-screen pt-9 pb-44 bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white flex items-center transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div {...slideLeft(0.2)} className="space-y-6">
          <div>
            <motion.h1
              {...fadeUp(0.3)}
              className="text-3xl md:text-5xl font-light tracking-wide text-slate-700 dark:text-slate-300"
            >
              {name.split(" ")[0]}
            </motion.h1>
            <motion.h2
              {...fadeUp(0.4)}
              className="text-4xl md:text-6xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              {name.split(" ")[1] || ""}
            </motion.h2>
            <p className="text-slate-500 dark:text-gray-400 mt-2 tracking-widest font-medium">
              {role}
            </p>
          </div>

          <motion.p
            {...fadeUp(0.5)}
            className="max-w-md text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#about"
              className="w-full text-center bg-indigo-600 text-white font-black text-lg py-4 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 transition-all uppercase tracking-widest"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="w-full text-center bg-indigo-600 text-white font-black text-lg py-4 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 transition-all uppercase tracking-widest"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            {...fadeUp(0.7)}
            className="flex gap-6 pt-4 text-slate-400 dark:text-gray-500 text-3xl"
          >
            {[
              { icon: <BsFacebook />, link: "#" },
              { icon: <BsTelegram />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaGithub />, link: "#" },
              { icon: <MdEmail />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="hover:text-indigo-600 dark:hover:text-white cursor-pointer hover:-translate-y-1 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          {...slideRight(0.4)}
          className="flex justify-center w-full relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full dark:block hidden"></div>

          <img
            src={image}
            alt="hero"
            className="z-10 h-[280px] w-[280px] md:h-[450px] md:w-[450px] rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl transition-colors duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
